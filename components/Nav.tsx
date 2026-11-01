"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "@/content/site";
import { Button } from "./ui";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-night/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav aria-label="Main" className="container-site flex h-20 items-center justify-between gap-6 lg:h-24">
        <ul className="hidden gap-8 lg:flex">
          {nav.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="text-[17px] font-semibold text-cream transition-colors hover:text-amber">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/" aria-label={`${site.name} home`} className="flex items-center gap-3 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <Image src="/images/fajr-mark.svg" alt="" width={48} height={48} priority />
          <span className="text-xl font-bold leading-[0.95] lg:text-2xl">
            FAJR
            <br />
            FILMS
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Button href={site.bookingUrl} className="hidden sm:inline-flex">
            Book a free consult
          </Button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/40 lg:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="container-site flex h-[calc(100dvh-5rem)] flex-col gap-6 pb-10 pt-6 lg:hidden"
          >
            {nav.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="text-4xl font-bold">
                {item.label}
              </Link>
            ))}
            <Button href={site.bookingUrl} size="lg" className="mt-auto self-start">
              Book a free consult
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
