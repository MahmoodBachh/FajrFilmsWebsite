import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/content/site";
import Reveal from "./Reveal";
import { Button } from "./ui";

const heading = "text-[13px] font-semibold uppercase tracking-[0.28em] text-amber";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative border-t border-cream/10 pb-12 pt-28 lg:pt-36"
      style={{
        background:
          "radial-gradient(1200px 520px at 50% 115%, rgba(128,0,32,.85), rgba(128,0,32,0) 72%), radial-gradient(700px 300px at 50% 110%, rgba(251,198,135,.25), rgba(251,198,135,0) 70%), #0A1322",
      }}
    >
      <div className="container-site">
        <Reveal>
          <h2 className="font-bold leading-[0.82] tracking-[-0.03em]" style={{ fontSize: "clamp(5rem, 14vw, 13.75rem)" }}>
            Let’s <span className="glow text-amber">talk.</span>
          </h2>
          <div className="mt-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <p className="max-w-xl text-xl font-light leading-relaxed sm:text-2xl">
              Your event deserves to be remembered. Tell us about it, and we’ll show you how we can help.
            </p>
            <Button href={site.bookingUrl} size="lg">
              Book a free consult
            </Button>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-10 border-t border-cream/20 pt-10 text-[17px] leading-loose sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          <div>
            <h3 className={heading}>Contact</h3>
            <a href={`mailto:${site.email}`} className="mt-2 block hover:text-amber">
              {site.email}
            </a>
            <a href={site.phoneHref} className="block hover:text-amber">
              {site.phone}
            </a>
            <p>{site.location}</p>
          </div>
          <nav aria-label="Footer">
            <h3 className={heading}>Explore</h3>
            <ul className="mt-2">
              {nav.map((n) => (
                <li key={n.label}>
                  <Link href={n.href} className="hover:text-amber">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className={heading}>Follow</h3>
            <ul className="mt-2">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-amber">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-[15px] leading-relaxed text-cream/85">
            <h3 className={heading}>Land acknowledgement</h3>
            <p className="mt-3">
              Fajr Films is based in amiskwacîwâskahikan (Edmonton), on Treaty 6 territory, the traditional lands of First
              Nations and Métis peoples.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 text-sm tracking-[0.08em] text-cream/75 sm:flex-row sm:items-center">
          <p className="flex items-center gap-3">
            <Image src="/images/fajr-mark.svg" alt="" width={32} height={32} />© {new Date().getFullYear()} Fajr Films · Illuminating Your Story
          </p>
          <a href="#main" className="hover:text-amber">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
