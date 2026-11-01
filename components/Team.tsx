import Image from "next/image";
import { team } from "@/content/site";
import Reveal from "./Reveal";

export default function Team() {
  return (
    <section id="team" className="scroll-mt-24 bg-cream py-24 text-night lg:py-32">
      <div className="container-site">
        <Reveal>
          <p className="label !text-crimson">MEET THE MINDS</p>
          <h2 className="display-xl mt-4">
            The people
            <br />
            <span className="text-crimson">behind the lens.</span>
          </h2>
        </Reveal>
        <ul className="mt-16 grid gap-14 md:grid-cols-3 lg:mt-20 lg:gap-12">
          {team.map((m, i) => (
            <li key={m.name}>
              <Reveal delay={i * 0.1} className="text-center">
                <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-full border-4 border-amber lg:h-64 lg:w-64">
                  <Image src={m.image} alt={m.name} fill sizes="256px" className="object-cover" style={{ objectPosition: m.position }} />
                </div>
                <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.28em]">{m.role}</p>
                <h3 className="mt-1.5 text-4xl font-bold text-crimson">{m.name}</h3>
                <p className="mx-auto mt-3 max-w-sm text-[17px] leading-relaxed">{m.bio}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
