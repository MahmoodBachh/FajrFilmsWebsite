import Image from "next/image";
import type { ReactNode } from "react";

/** Big cinematic header used at the top of every inner page. */
export default function PageHeader({
  label,
  title,
  intro,
  image,
  imagePosition = "50% 40%",
  children,
}: {
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: string;
  imagePosition?: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative flex min-h-[560px] flex-col overflow-hidden lg:min-h-[640px]">
      {image ? (
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" style={{ objectPosition: imagePosition }} />
      ) : null}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: image
            ? "linear-gradient(180deg, rgba(10,19,34,.85) 0%, rgba(10,19,34,.45) 35%, rgba(10,19,34,.97) 100%), radial-gradient(900px 420px at 25% 110%, rgba(128,0,32,.55), rgba(128,0,32,0) 70%)"
            : "radial-gradient(1100px 520px at 70% 120%, rgba(128,0,32,.7), rgba(128,0,32,0) 70%), radial-gradient(600px 300px at 75% 115%, rgba(251,198,135,.22), rgba(251,198,135,0) 70%), #0A1322",
        }}
      />
      <div className="container-site relative mt-auto pb-14 pt-36 lg:pb-20">
        <p className="label">{label}</p>
        <h1 className="display-xl mt-4">{title}</h1>
        {intro ? <div className="mt-7 max-w-2xl text-lg font-light leading-relaxed text-cream/90 sm:text-2xl">{intro}</div> : null}
        {children}
      </div>
    </header>
  );
}
