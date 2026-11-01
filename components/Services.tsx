import Image from "next/image";
import { services, site } from "@/content/site";
import Reveal from "./Reveal";
import { Button } from "./ui";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24">
      <div className="container-site pb-16 pt-24 lg:pt-32">
        <Reveal>
          <p className="label">SERVICES</p>
          <h2 className="display-xl mt-4">
            From first idea
            <br />
            to <span className="text-amber">final frame.</span>
          </h2>
        </Reveal>
      </div>

      {services.map((s) => (
        <article key={s.title} className="relative flex min-h-[620px] items-center">
          <Image src={s.image} alt="" fill sizes="100vw" className="object-cover" style={{ objectPosition: s.position }} />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: "linear-gradient(90deg, rgba(10,19,34,.92) 0%, rgba(10,19,34,.6) 55%, rgba(10,19,34,.35) 100%)" }}
          />
          <div className="container-site relative flex flex-col justify-between gap-10 py-16 lg:flex-row lg:items-center lg:py-20">
            <Reveal className="min-w-0 flex-1">
              <p className="inline-block bg-crimson px-3.5 py-1.5 text-sm font-semibold uppercase tracking-[0.3em]">{s.step}</p>
              <h3 className="display-lg mt-5">{s.title}</h3>
              <p className="mt-6 max-w-lg text-xl font-light leading-relaxed sm:text-2xl">{s.intro}</p>
            </Reveal>
            <Reveal delay={0.15} className="w-full border-t-[3px] border-amber bg-night/90 p-8 lg:w-[440px] lg:p-9">
              <dl className="space-y-6">
                {s.items.map((it) => (
                  <div key={it.name}>
                    <dt className="text-2xl font-semibold text-amber lg:text-[1.75rem]">{it.name}</dt>
                    <dd className="mt-2 text-[17px] leading-relaxed">
                      <strong>{it.hook}</strong> {it.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </article>
      ))}

      <div className="container-site flex justify-end pb-6 pt-12">
        <Button href={site.bookingUrl} variant="ghost">
          Plan your project
        </Button>
      </div>
    </section>
  );
}
