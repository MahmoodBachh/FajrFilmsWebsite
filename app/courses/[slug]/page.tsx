import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui";
import { courses } from "@/content/courses";
import { site } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = courses.find((x) => x.slug === params.slug);
  return c ? { title: `${c.title} course`, description: c.tagline } : {};
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const c = courses.find((x) => x.slug === params.slug);
  if (!c) notFound();

  const waitlist = `mailto:${site.email}?subject=${encodeURIComponent(`Waitlist: ${c.title} course`)}`;
  const facts = [
    { k: "Level", v: c.level },
    { k: "Format", v: c.format },
    { k: "Length", v: c.length },
    { k: "Price", v: c.price },
  ];

  const enrol = c.stripeLink ? (
    <Button href={c.stripeLink} size="lg">Enrol now</Button>
  ) : (
    <div>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-amber">Enrolment opening soon</p>
      <Button href={waitlist} size="lg">Join the waitlist</Button>
    </div>
  );

  return (
    <>
      <PageHeader label="COURSE" image={c.image} title={c.title} intro={c.tagline}>
        <div className="mt-8">{enrol}</div>
      </PageHeader>

      <section className="py-16 lg:py-24">
        <div className="container-site grid gap-14 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <p className="text-xl leading-relaxed text-cream/90 lg:text-2xl">{c.summary}</p>

            <h2 className="mt-16 text-3xl font-bold lg:text-4xl">What you’ll learn</h2>
            <ol className="mt-8 divide-y divide-cream/10 border-y border-cream/10">
              {c.modules.map((m, i) => (
                <li key={i}>
                  <details className="group py-5">
                    <summary className="flex min-h-11 cursor-pointer list-none items-center gap-5 text-xl font-semibold [&::-webkit-details-marker]:hidden">
                      <span className="w-10 shrink-0 text-amber">{String(i + 1).padStart(2, "0")}</span>
                      <span className="flex-1">{m.title}</span>
                      <span aria-hidden="true" className="text-amber transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <ul className="mt-3 space-y-1.5 pl-[3.75rem] text-[17px] text-cream/80">
                      {m.lessons.map((l, j) => (
                        <li key={j}>{l}</li>
                      ))}
                    </ul>
                  </details>
                </li>
              ))}
            </ol>

            <h2 className="mt-16 text-3xl font-bold lg:text-4xl">Who it’s for</h2>
            <ul className="mt-6 space-y-3 text-lg">
              {c.forWho.map((w, i) => (
                <li key={i} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-crimson-light" />
                  {w}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border-t-[3px] border-amber bg-ink p-8">
              <dl className="grid grid-cols-2 gap-6">
                {facts.map((f) => (
                  <div key={f.k}>
                    <dt className="text-sm font-semibold uppercase tracking-[0.18em] text-cream/60">{f.k}</dt>
                    <dd className="mt-1 text-lg font-semibold">{f.v}</dd>
                  </div>
                ))}
              </dl>
              <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-cream/60">Included</h3>
              <ul className="mt-3 space-y-2 text-[17px]">
                {c.includes.map((x, i) => (
                  <li key={i} className="flex gap-2">
                    <span aria-hidden="true" className="text-amber">✓</span>
                    {x}
                  </li>
                ))}
              </ul>
              <div className="mt-8">{enrol}</div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
