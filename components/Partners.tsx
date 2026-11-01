import Image from "next/image";
import { partners } from "@/content/site";
import Reveal from "./Reveal";

export default function Partners() {
  return (
    <section className="border-t border-cream/10 bg-gradient-to-b from-night to-[#12122A] py-24">
      <div className="container-site">
        <Reveal>
          <h2 className="display-lg text-amber">
            Trusted by
            <br />
            our community
          </h2>
          <p className="mt-7 max-w-2xl text-xl font-light leading-relaxed text-cream/90">
            From national charities to neighbourhood schools, organizations across Western Canada trust us to tell the stories
            behind their work.
          </p>
        </Reveal>
        <ul className="mt-16 grid grid-cols-2 items-center gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((p) => (
            <li key={p.name} className="flex min-h-24 items-center justify-center text-center">
              {p.logo ? (
                <Image src={p.logo} alt={p.name} width={58} height={96} className="h-24 w-auto opacity-90" />
              ) : (
                // Text stand-in until we have permission to use each partner's logo.
                <span className="max-w-[10ch] text-lg font-bold uppercase leading-tight tracking-[0.08em] text-cream/75">{p.name}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
