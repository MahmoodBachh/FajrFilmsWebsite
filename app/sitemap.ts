import type { MetadataRoute } from "next";
import { courses } from "@/content/courses";
import { site } from "@/content/site";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/book", "/collective", "/courses", "/blog"].map((p) => ({ url: `${site.url}${p}` }));
  const courseUrls = courses.map((c) => ({ url: `${site.url}/courses/${c.slug}` }));
  const posts = getAllPosts().map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: p.date }));
  return [...pages, ...courseUrls, ...posts];
}
