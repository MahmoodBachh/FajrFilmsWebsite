"use client";

import { useState, type FormEvent } from "react";
import { contributions, disciplines } from "@/content/collective";
import { site } from "@/content/site";

// Set NEXT_PUBLIC_FORMSPREE_COLLECTIVE in Vercel → Settings → Environment Variables
// to your Formspree form URL, e.g. https://formspree.io/f/abcdwxyz
const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_COLLECTIVE;

const input =
  "mt-2 block w-full min-h-12 rounded-md border border-night/20 bg-white px-4 text-base text-night placeholder:text-night/40 focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/20";
const labelCls = "block text-[15px] font-semibold text-night";

type Status = "idle" | "sending" | "sent" | "error";

export default function CollectiveForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.getAll("discipline").length === 0) {
      setError("Please choose at least one discipline.");
      return;
    }
    if (!ENDPOINT) {
      setStatus("error");
      setError(`The form isn't connected yet. Please email us at ${site.email} in the meantime.`);
      return;
    }

    setStatus("sending");
    setError("");
    try {
      const res = await fetch(ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setError(`Something went wrong sending your form. Please try again, or email us at ${site.email}.`);
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-xl bg-white p-10 text-center text-night shadow-[0_20px_60px_rgba(10,19,34,0.12)]">
        <p className="text-4xl font-bold text-crimson">Welcome to the Collective.</p>
        <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed">
          JazakAllahu khayran for signing up. We’ll be in touch by email with next steps and upcoming opportunities.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl bg-white p-6 text-night shadow-[0_20px_60px_rgba(10,19,34,0.12)] sm:p-10" noValidate={false}>
      <input type="hidden" name="_subject" value="New Fajr Collective sign-up" />
      {/* Spam trap: real people never see or fill this */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="first" className={labelCls}>First name *</label>
          <input id="first" name="first_name" required autoComplete="given-name" className={input} />
        </div>
        <div>
          <label htmlFor="last" className={labelCls}>Last name *</label>
          <input id="last" name="last_name" required autoComplete="family-name" className={input} />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>Email *</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={input} />
        </div>
        <div>
          <label htmlFor="city" className={labelCls}>City *</label>
          <input id="city" name="city" required autoComplete="address-level2" placeholder="e.g. Edmonton" className={input} />
        </div>
      </div>

      <fieldset className="mt-8">
        <legend className={labelCls}>Your craft * <span className="font-normal text-night/60">(choose all that apply)</span></legend>
        <div className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
          {disciplines.map((d) => (
            <label key={d} className="flex min-h-11 cursor-pointer items-center gap-3 text-[16px]">
              <input type="checkbox" name="discipline" value={d} className="h-5 w-5 shrink-0 accent-crimson" />
              {d}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-8">
        <label htmlFor="portfolio" className={labelCls}>Portfolio link *</label>
        <p className="text-sm text-night/60">Vimeo, YouTube, Instagram or your website</p>
        <input id="portfolio" name="portfolio" type="url" required placeholder="https://" className={input} />
      </div>

      <fieldset className="mt-8">
        <legend className={labelCls}>How would you like to be involved?</legend>
        <div className="mt-3 space-y-2">
          {contributions.map((c) => (
            <label key={c} className="flex min-h-11 cursor-pointer items-center gap-3 text-[16px]">
              <input type="checkbox" name="involvement" value={c} className="h-5 w-5 shrink-0 accent-crimson" />
              {c}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-8">
        <label htmlFor="gap" className={labelCls}>
          What gap in Muslim media representation are you most passionate about closing?{" "}
          <span className="font-normal text-night/60">(optional)</span>
        </label>
        <textarea id="gap" name="representation_gap" rows={4} className={`${input} py-3`} />
      </div>

      {error ? (
        <p role="alert" className="mt-6 rounded-md bg-crimson/10 px-4 py-3 text-[15px] font-semibold text-crimson">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-8 inline-flex min-h-14 items-center gap-3 rounded-full bg-crimson px-8 text-lg font-bold text-cream transition-colors hover:bg-[#9a0a2c] disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Join the Collective"}
        <span aria-hidden="true" className="text-sm text-amber">▶</span>
      </button>
    </form>
  );
}
