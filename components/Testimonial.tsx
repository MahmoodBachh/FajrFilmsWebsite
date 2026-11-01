import { testimonial } from "@/content/site";
import Reveal from "./Reveal";

export default function Testimonial() {
  return (
    <section className="py-24 lg:py-32">
      <Reveal className="container-site max-w-[1080px] text-center">
        <p className="label">WHAT OUR PARTNERS SAY</p>
        <figure className="mt-8">
          <blockquote className="text-3xl font-semibold italic leading-snug sm:text-[2.9rem]">“{testimonial.quote}”</blockquote>
          <figcaption className="mt-7 text-base uppercase tracking-[0.16em] text-cream/80">
            <span className="text-amber">{testimonial.name}</span> — {testimonial.role}
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
