import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { courses } from "@/content/courses";

export const metadata: Metadata = {
  title: "Courses",
  description: "Learn videography, photography and creative direction with Fajr Films.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHeader
        label="FAJR FILMS COURSES"
        image="/images/services-capture.jpg"
        imagePosition="50% 40%"
        title={
          <>
            Learn the craft
            <br />
            <span className="glow text-amber">from the field.</span>
          </>
        }
        intro="Practical courses built from real shoots: the same skills we use on set, taught step by step."
      />

      <section className="py-20 lg:py-28">
        <ul className="container-site grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <li key={c.slug}>
              <Reveal delay={i * 0.08} className="h-full">
                <Link href={`/courses/${c.slug}`} className="group flex h-full flex-col bg-ink">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={c.image} alt="" fill sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col border-t-[3px] border-amber p-7">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cream/65">{c.length}</p>
                    <h2 className="mt-2 text-3xl font-bold group-hover:text-amber">{c.title}</h2>
                    <p className="mt-2 text-lg text-cream/85">{c.tagline}</p>
                    <p className="mt-auto pt-8 font-semibold text-amber">
                      {c.stripeLink ? "View course & enrol ▶" : "View course ▶"}
                    </p>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
