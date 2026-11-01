import type { Metadata } from "next";
import Script from "next/script";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Book a free consult",
  description: "Book a free consultation with Fajr Films for your event, documentary or campaign film.",
};

const steps = [
  { n: "01", title: "Book a call", body: "Pick a time that suits you. The consult is free and there's no commitment." },
  { n: "02", title: "We plan together", body: "We learn your goals and your event, then send a clear proposal and quote." },
  { n: "03", title: "We capture your story", body: "On the day, we handle the filming so you can focus on your guests." },
];

const expect = [
  "Around 30 minutes, by phone or video call",
  "Bring your date, venue and a rough idea of your budget",
  "A written proposal follows within a few days",
];

export default function BookPage() {
  return (
    <>
      <PageHeader
        label="BOOK A FREE CONSULT"
        image="/images/services-plan.jpg"
        imagePosition="50% 45%"
        title={
          <>
            Let’s plan
            <br />
            <span className="glow text-amber">your story.</span>
          </>
        }
        intro="Tell us about your event, film or campaign. We’ll listen, ask the right questions, and show you how we can help."
      />

      <section className="py-20 lg:py-28">
        <ol className="container-site grid gap-10 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.n}>
              <Reveal delay={i * 0.1} className="border-t-[3px] border-amber pt-6">
                <p className="text-5xl font-black text-amber">{s.n}</p>
                <h2 className="mt-3 text-3xl font-semibold">{s.title}</h2>
                <p className="mt-2 text-lg leading-relaxed text-cream/85">{s.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-cream py-20 text-night lg:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_2fr]">
          <aside>
            <p className="label !text-crimson">WHAT TO EXPECT</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">Choose a time that works for you.</h2>
            <ul className="mt-8 space-y-4 text-lg">
              {expect.map((e) => (
                <li key={e} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-crimson" />
                  {e}
                </li>
              ))}
            </ul>
            <div className="mt-10 border-t border-night/15 pt-6 text-lg">
              <p className="font-semibold">Prefer to reach out directly?</p>
              <a href={`mailto:${site.email}`} className="mt-1 block text-crimson hover:underline">
                {site.email}
              </a>
              <a href={site.phoneHref} className="block text-crimson hover:underline">
                {site.phone}
              </a>
            </div>
          </aside>

          <div className="min-h-[900px] overflow-hidden rounded-xl bg-white shadow-[0_20px_60px_rgba(10,19,34,0.15)]">
            <iframe
              src={site.acuityUrl}
              title="Book a free consult with Fajr Films"
              className="h-[1100px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      {/* Lets Acuity resize the calendar to fit its content */}
      <Script src="https://embed.acuityscheduling.com/js/embed.js" strategy="lazyOnload" />
    </>
  );
}
