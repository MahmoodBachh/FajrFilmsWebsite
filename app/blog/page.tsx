import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { formatDate, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Stories, lessons and behind-the-scenes notes from Fajr Films.",
};

export default function BlogIndex() {
  const posts = getAllPosts();
  const [lead, ...rest] = posts;

  return (
    <>
      <PageHeader
        label="THE FAJR BLOG"
        title={
          <>
            Notes from
            <br />
            <span className="glow text-amber">behind the lens.</span>
          </>
        }
        intro="Stories from our shoots, lessons for creators, and the thinking behind the films we make."
      />

      <section className="py-20 lg:py-28">
        <div className="container-site">
          {posts.length === 0 ? (
            <p className="max-w-xl text-xl text-cream/80">New posts are on the way. Check back soon.</p>
          ) : (
            <>
              <Reveal>
                <Link href={`/blog/${lead.slug}`} className="group grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
                  <div className="relative aspect-[16/9] overflow-hidden bg-ink">
                    {lead.cover ? (
                      <Image src={lead.cover} alt="" fill sizes="(min-width:1024px) 60vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                    ) : (
                      <CoverFallback />
                    )}
                  </div>
                  <div>
                    <Meta date={lead.date} minutes={lead.readingMinutes} />
                    <h2 className="mt-3 text-4xl font-bold leading-tight group-hover:text-amber lg:text-5xl">{lead.title}</h2>
                    <p className="mt-4 text-lg leading-relaxed text-cream/85">{lead.excerpt}</p>
                    <p className="mt-6 font-semibold text-amber">Read the post ▶</p>
                  </div>
                </Link>
              </Reveal>

              {rest.length ? (
                <ul className="mt-20 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((p, i) => (
                    <li key={p.slug}>
                      <Reveal delay={(i % 3) * 0.08}>
                        <Link href={`/blog/${p.slug}`} className="group block">
                          <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                            {p.cover ? (
                              <Image src={p.cover} alt="" fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                            ) : (
                              <CoverFallback />
                            )}
                          </div>
                          <div className="mt-5">
                            <Meta date={p.date} minutes={p.readingMinutes} />
                          </div>
                          <h3 className="mt-2 text-2xl font-semibold leading-snug group-hover:text-amber">{p.title}</h3>
                          <p className="mt-2 text-[17px] leading-relaxed text-cream/80">{p.excerpt}</p>
                        </Link>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              ) : null}
            </>
          )}
        </div>
      </section>
    </>
  );
}

function Meta({ date, minutes }: { date: string; minutes: number }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cream/65">
      <time dateTime={date}>{formatDate(date)}</time> · {minutes} min read
    </p>
  );
}

function CoverFallback() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 grid place-items-center"
      style={{ background: "radial-gradient(600px 300px at 30% 110%, rgba(128,0,32,.6), transparent 70%), #13213A" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/fajr-mark.svg" alt="" className="h-16 w-16 opacity-40" />
    </div>
  );
}
