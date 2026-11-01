import Reveal from "./Reveal";
import { Button } from "./ui";

export default function Intro() {
  return (
    <section className="bg-cream py-24 text-night lg:py-32">
      <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="label !text-crimson">WHAT IS FAJR FILMS</p>
          <h2 className="mt-4 font-bold leading-[0.95] tracking-[-0.015em]" style={{ fontSize: "clamp(2.5rem, 4.6vw, 4.5rem)" }}>
            Community-first.
            <br />
            Rooted in faith.
            <br />
            <span className="text-crimson">Cinematic.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:pt-10">
          <p className="text-xl leading-relaxed">
            Founded by filmmakers driven by faith, Fajr Films emerged as a response to the misrepresentation of Muslims in
            media. We craft authentic narratives that echo our lived experiences, and help the organizations that serve our
            communities show the impact of their work.
          </p>
          <p className="mt-5 text-xl italic leading-relaxed text-[#4A3B45]">We believe in film as an act of remembrance.</p>
          <Button href="#team" variant="dark" className="mt-8">
            Our story
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
