import type { Metadata } from "next";
import CollectiveForm from "@/components/CollectiveForm";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { benefits, disciplines } from "@/content/collective";

export const metadata: Metadata = {
  title: "The Fajr Collective",
  description: "A home for Muslim filmmakers, photographers, editors, students and storytellers across Canada. Join the Fajr Collective.",
};

export default function CollectivePage() {
  return (
    <>
      <PageHeader
        label="THE FAJR COLLECTIVE"
        image="/images/collective.jpg"
        imagePosition="50% 30%"
        title={
          <>
            Create
            <br />
            <span className="glow text-amber">with us.</span>
          </>
        }
        intro="Filmmakers. Photographers. Editors. Students. Storytellers. Whether you’re an industry veteran or picking up a camera for the first time, there’s a place for you here."
      />

      <section className="py-20 lg:py-28">
        <div className="container-site">
          <Reveal>
            <h2 className="display-lg max-w-3xl">
              What you <span className="text-amber">get.</span>
            </h2>
          </Reveal>
          <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <li key={b.title}>
                <Reveal delay={i * 0.08} className="h-full border-t-[3px] border-amber bg-ink/60 p-7">
                  <h3 className="text-2xl font-semibold text-amber">{b.title}</h3>
                  <p className="mt-3 text-[17px] leading-relaxed text-cream/90">{b.body}</p>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal className="mt-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cream/70">Open to</p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {disciplines
                .filter((d) => d !== "Other")
                .map((d) => (
                  <li key={d} className="border border-cream/30 px-4 py-2 text-[15px]">
                    {d}
                  </li>
                ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="join" className="scroll-mt-24 bg-cream py-20 text-night lg:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="label !text-crimson">JOIN</p>
            <h2 className="mt-4 text-5xl font-bold leading-[0.95] lg:text-6xl">
              Two minutes.
              <br />
              <span className="text-crimson">One community.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed">
              Tell us a little about you and your work. There’s no cost to join, and you can step back any time.
            </p>
          </div>
          <CollectiveForm />
        </div>
      </section>
    </>
  );
}
