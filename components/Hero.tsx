"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { site, stats } from "@/content/site";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);

  const showreel = site.showreelUrl || "https://www.youtube.com/@FajrFilmsCanada";

  return (
    <section ref={ref} className="relative flex min-h-[100svh] flex-col overflow-hidden lg:min-h-[860px]">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/hero-speaker.jpg"
          alt="A speaker addressing a full banquet hall at a community fundraiser"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_22%]"
        />
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,19,34,.82) 0%, rgba(10,19,34,.15) 26%, rgba(10,19,34,.3) 55%, rgba(10,19,34,.97) 100%), radial-gradient(900px 420px at 30% 105%, rgba(128,0,32,.55), rgba(128,0,32,0) 70%)",
        }}
      />

      {/* Extra shade on phones, where the headline sits over the photo's subject */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-transparent via-night/45 to-night/70 md:hidden" />

      <div className="container-site relative mt-auto pb-14 pt-32">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="label">EDMONTON · ALBERTA · WESTERN CANADA</p>
          <h1 className="mt-4 font-bold leading-[0.88] tracking-[-0.02em]" style={{ fontSize: "clamp(4rem, 10vw, 9.75rem)" }}>
            Illuminating
            <br />
            <span className="glow text-amber">your story.</span>
          </h1>
        </motion.div>

        <div className="mt-8 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <p className="max-w-xl text-lg font-light leading-relaxed text-cream/90 sm:text-2xl">
            Faith-rooted documentary, photo and event media for masajid, schools, charities and businesses who want their
            story told with care.
          </p>
          <a
            href={showreel}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-[60px] items-center gap-4 rounded-full border-[1.5px] border-cream/55 px-7 text-lg font-bold transition-colors hover:border-amber hover:text-amber"
          >
            <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full bg-amber text-xs text-night transition-transform group-hover:scale-110">
              ▶
            </span>
            Play showreel
          </a>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-cream/20 pt-7 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-4xl font-black leading-none text-amber sm:text-5xl">{s.value}</dd>
              <dd className="mt-2 text-sm uppercase tracking-[0.14em] text-cream/80">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
