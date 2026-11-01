import Image from "next/image";
import { site } from "@/content/site";
import Reveal from "./Reveal";
import { Button } from "./ui";

export default function CollectiveCourses() {
  return (
    <section id="collective" className="scroll-mt-24 py-24 lg:py-32">
      <div className="container-site grid gap-8 lg:grid-cols-2">
        <Reveal className="relative flex min-h-[440px] flex-col justify-end overflow-hidden bg-ink p-8 sm:p-12">
          <Image src="/images/collective.jpg" alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-[50%_30%]" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-night/20 to-night/95" />
          <div className="relative">
            <p className="label">THE FAJR COLLECTIVE</p>
            <h3 className="mt-3 text-5xl font-bold leading-none">Create with us.</h3>
            <p className="mt-4 max-w-md text-lg leading-relaxed">
              Filmmakers. Photographers. Editors. Students. Storytellers. A home for Muslim creatives across Canada.
            </p>
            <Button href={site.collectiveUrl} className="mt-6">
              Join the Collective
            </Button>
          </div>
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative flex min-h-[440px] flex-col justify-end overflow-hidden p-8 sm:p-12"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(600px 360px at 80% 110%, rgba(251,198,135,.35), rgba(251,198,135,0) 70%), linear-gradient(160deg, #1A1030 0%, #5E0020 100%)",
            }}
          />
          <span aria-hidden="true" lang="ar" className="absolute right-10 top-6 font-arabic text-[120px] font-bold leading-none text-amber/15">
            فجر
          </span>
          <div className="relative">
            <p className="label">COURSES</p>
            <h3 className="mt-3 text-5xl font-bold leading-none">Learn the craft.</h3>
            <p className="mt-4 max-w-md text-lg leading-relaxed">
              Photography and videography courses for the next generation of storytellers, taught by working filmmakers.
            </p>
            <Button href={site.coursesUrl} variant="ghost" className="mt-6">
              Explore courses
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
