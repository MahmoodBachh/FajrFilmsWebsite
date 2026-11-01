import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getAllPosts, getPost } from "@/lib/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const data = getPost(params.slug);
  if (!data) return {};
  const { post } = data;
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { type: "article", title: post.title, description: post.excerpt, publishedTime: post.date, images: post.cover ? [post.cover] : undefined },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const data = getPost(params.slug);
  if (!data) notFound();
  const { post, html } = data;

  return (
    <article>
      <header className="relative overflow-hidden pb-12 pt-36 lg:pt-44">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: "radial-gradient(900px 420px at 20% 120%, rgba(128,0,32,.5), transparent 70%)" }}
        />
        <div className="container-site relative max-w-4xl">
          <Link href="/blog" className="text-sm font-semibold uppercase tracking-[0.2em] text-amber hover:underline">
            ◀ All posts
          </Link>
          <h1 className="mt-6 text-[clamp(2.5rem,5.5vw,4.75rem)] font-bold leading-[1.02] tracking-tight">{post.title}</h1>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-cream/70">
            {post.author} · <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min read
          </p>
        </div>
      </header>

      {post.cover ? (
        <div className="container-site max-w-5xl">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image src={post.cover} alt="" fill priority sizes="(min-width:1024px) 1024px, 100vw" className="object-cover" />
          </div>
        </div>
      ) : null}

      <div
        className="container-site prose prose-lg prose-invert max-w-3xl py-16 prose-headings:font-bold prose-a:text-amber prose-blockquote:border-l-crimson prose-blockquote:text-cream prose-strong:text-cream prose-img:w-full lg:py-20"
        dangerouslySetInnerHTML={{ __html: html }}
      />

    </article>
  );
}
