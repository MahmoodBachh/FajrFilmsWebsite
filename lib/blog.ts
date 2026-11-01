import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const DIR = path.join(process.cwd(), "content/blog");

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover?: string;
  author: string;
  readingMinutes: number;
};

function files() {
  if (!fs.existsSync(DIR)) return [];
  // Files starting with "_" (like _template.md) are ignored.
  return fs.readdirSync(DIR).filter((f) => f.endsWith(".md") && !f.startsWith("_"));
}

function parse(file: string) {
  const raw = fs.readFileSync(path.join(DIR, file), "utf8");
  const { data, content } = matter(raw);
  const words = content.split(/\s+/).filter(Boolean).length;
  const post: Post = {
    slug: file.replace(/\.md$/, ""),
    title: String(data.title ?? "Untitled"),
    date: data.date ? new Date(data.date).toISOString() : new Date(0).toISOString(),
    excerpt: String(data.excerpt ?? ""),
    cover: data.cover ? String(data.cover) : undefined,
    author: String(data.author ?? "Fajr Films"),
    readingMinutes: Math.max(1, Math.round(words / 220)),
  };
  return { post, content };
}

export function getAllPosts(): Post[] {
  return files()
    .map((f) => parse(f).post)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string) {
  const file = `${slug}.md`;
  if (!files().includes(file)) return null;
  const { post, content } = parse(file);
  return { post, html: marked.parse(content, { async: false }) as string };
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}
