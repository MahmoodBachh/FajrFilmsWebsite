"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { categories, projects, site, type Project } from "@/content/site";
import Reveal from "./Reveal";
import { Button, Slate } from "./ui";

function ProjectCard({ project, wide }: { project: Project; wide?: boolean }) {
  const inner = (
    <>
      <div className={`relative overflow-hidden bg-ink ${wide ? "aspect-[16/9] lg:aspect-[16/7.5]" : "aspect-[4/3]"}`}>
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes={wide ? "(min-width: 1280px) 1152px, 100vw" : "(min-width: 1024px) 560px, 100vw"}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {project.href && (
          <span aria-hidden="true" className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber text-sm text-night opacity-0 transition-opacity group-hover:opacity-100">
            ▶
          </span>
        )}
      </div>
      <div className="mt-5">
        <Slate client={project.client} format={project.format} meta={project.meta} />
        <h3 className={`mt-1.5 font-semibold leading-tight ${wide ? "text-3xl sm:text-5xl lg:text-[3.6rem]" : "text-3xl lg:text-[2.75rem]"}`}>
          {project.title}
        </h3>
      </div>
    </>
  );
  return project.href ? (
    <a href={project.href} target="_blank" rel="noopener noreferrer" className="group block">
      {inner}
    </a>
  ) : (
    <div className="group">{inner}</div>
  );
}

export default function Work() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const shown = projects.filter((p) => active === "All" || p.categories.includes(active));
  const featured = active === "All" ? shown.find((p) => p.featured) : undefined;
  const rest = shown.filter((p) => p !== featured);

  return (
    <section id="work" className="scroll-mt-24 py-24 lg:py-32">
      <div className="container-site">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="display-xl">
            Stories that
            <br />
            <span className="text-amber">matter.</span>
          </h2>
          <Button href={site.socials[1].href} variant="ghost">
            View all work
          </Button>
        </Reveal>

        <div role="group" aria-label="Filter projects" className="mt-12 flex flex-wrap gap-2.5">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={active === c}
              onClick={() => setActive(c)}
              className={`min-h-11 border-[1.5px] px-5 text-sm font-semibold uppercase tracking-[0.16em] transition-colors ${
                active === c ? "border-amber bg-amber text-night" : "border-cream/40 text-cream hover:border-amber hover:text-amber"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          {featured && (
            <motion.div key={featured.title} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-10">
              <ProjectCard project={featured} wide />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div layout className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {rest.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className={i % 2 === 1 ? "md:mt-28" : ""}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
