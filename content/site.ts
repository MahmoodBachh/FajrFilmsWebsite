// ─────────────────────────────────────────────────────────────
// Site-wide settings and all homepage content live here.
// Courses: content/courses.ts · Blog posts: content/blog/*.md ·
// Collective benefits and form options: content/collective.ts
// Edit text, numbers, projects,
// team and links in this one file — no need to touch components.
// Anything in [brackets] is a placeholder waiting for real info.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Fajr Films",
  tagline: "Illuminating your story.",
  description:
    "Faith-rooted documentary, photo and event media for masajid, schools, charities and businesses across Alberta and Western Canada.",
  url: "https://www.fajrfilms.ca",
  email: "salaam@fajrfilms.ca",
  phone: "(587) 778-7393",
  phoneHref: "tel:+15877787393",
  location: "Edmonton, AB, Canada",
  bookingUrl: "/book",
  collectiveUrl: "/collective",
  coursesUrl: "/courses",
  // The Acuity scheduler shown on /book. Paste your free-consult link here
  // (e.g. "https://fajrfilms.as.me/free-consult"). The bare link shows every
  // appointment type you've made public.
  acuityUrl: "https://fajrfilms.as.me/",
  // Paste a YouTube or Vimeo link here once the showreel is ready.
  showreelUrl: "",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/fajrfilms.ca/" },
    { label: "YouTube", href: "https://www.youtube.com/@FajrFilmsCanada" },
    // Check this matches the URL you chose when creating the LinkedIn page.
    { label: "LinkedIn", href: "https://www.linkedin.com/company/fajrfilms" },
    { label: "Facebook", href: "https://www.facebook.com/fajrfilms.ca" },
    { label: "Vimeo", href: "https://vimeo.com/user250523141" },
  ],
};

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Courses", href: "/courses" },
  { label: "Collective", href: "/collective" },
  { label: "Blog", href: "/blog" },
];

export const stats = [
  { value: "[00]+", label: "Projects delivered" },
  { value: "[00]+", label: "Organizations served" },
  { value: "4+", label: "Cities filmed in" },
  { value: "[00]", label: "Years behind the lens" },
];

export type Category = "Events" | "Documentary" | "Non-profit" | "Community";
export const categories: ("All" | Category)[] = ["All", "Events", "Documentary", "Non-profit", "Community"];

export type Project = {
  title: string;
  client: string;
  format: string;
  meta: string; // runtime or city
  image: string;
  alt: string;
  href?: string;
  categories: Category[];
  featured?: boolean; // shown full-width at the top
};

export const projects: Project[] = [
  {
    title: "Sh. Yasir Qadhi Western Canada Tour",
    client: "Islamic Relief Canada",
    format: "Event recap",
    meta: "1:36",
    image: "/images/work/yasir-qadhi-tour.jpg",
    alt: "Sheikh Yasir Qadhi speaking to a banquet hall under Islamic Relief banners",
    categories: ["Events", "Non-profit"],
    featured: true,
  },
  {
    title: "Sakinah Circle Performance",
    client: "IFSSA × Bent Arrow",
    format: "Short film",
    meta: "4:09",
    image: "/images/work/sakinah-circle.jpg",
    alt: "Students singing in a school music room beside a First Nations drummer",
    href: "https://youtu.be/-ofTo9pwPWU",
    categories: ["Documentary", "Community", "Non-profit"],
  },
  {
    title: "Charity Week 2026",
    client: "MSA × Islamic Relief Canada",
    format: "Event coverage",
    meta: "Calgary",
    image: "/images/work/charity-week.jpg",
    alt: "Hundreds of guests seated at round tables under chandeliers",
    categories: ["Events", "Non-profit", "Community"],
  },
];

export const partners = [
  { name: "Islamic Relief", logo: "/images/partners/islamic-relief.png" },
  { name: "IFSSA" },
  { name: "Bent Arrow" },
  { name: "MSA" },
  { name: "Edmonton Islamic Academy" },
  { name: "Omar Ibn Al-Khattab Academy" },
];

export const services = [
  {
    step: "01 · Plan",
    title: "Discovery & Planning",
    intro: "Every story starts with a conversation, and a clear plan to bring it to life.",
    image: "/images/services-plan.jpg",
    position: "50% 50%",
    items: [
      { name: "Concept & Story", hook: "We listen first.", body: "We learn your mission, your audience and the moment you want people to remember." },
      { name: "Run-of-Show Planning", hook: "Know every moment before it happens.", body: "Shot lists, timings and crew roles mapped to your event schedule." },
      { name: "Scope & Budget", hook: "Clear quotes, no surprises.", body: "Packages built around what your organization actually needs." },
    ],
  },
  {
    step: "02 · Capture",
    title: "Event Day & Production",
    intro: "A calm, respectful crew that blends into the room and catches the moments that matter.",
    image: "/images/services-capture.jpg",
    position: "50% 30%",
    items: [
      { name: "Event Photography", hook: "Every face, every moment.", body: "Speakers, guests, volunteers and the details in between." },
      { name: "Cinematic Videography", hook: "Film, not footage.", body: "Multi-camera coverage, interviews and b-roll shot with intention." },
      { name: "Live Media & IMAG", hook: "Your stage, on the big screen.", body: "Live camera feeds, presentations and video playback run on the night." },
    ],
  },
  {
    step: "03 · Deliver",
    title: "Edit, Colour & Delivery",
    intro: "Where raw footage becomes a story your community will share and remember.",
    image: "/images/services-deliver.jpg",
    position: "50% 50%",
    items: [
      { name: "Editing & Storytelling", hook: "Only the best moments.", body: "Recaps, short documentaries and campaign films cut with care." },
      { name: "Colour & Sound", hook: "Warm, honest, cinematic.", body: "Graded colour, clean audio and vocal-only or nasheed scoring." },
      { name: "Social Cutdowns", hook: "Ready to post.", body: "Reels, carousels and highlight clips sized for every platform." },
    ],
  },
];

export const testimonial = {
  quote: "[Client testimonial: a short quote from a partner about working with Fajr Films.]",
  name: "[Name]",
  role: "[Role], [Organization]",
};

export const team = [
  {
    name: "Mahmood Bachh",
    role: "Founder & Creative Director",
    image: "/images/team/mahmood.jpg",
    position: "50% 50%",
    bio: "Driven by capturing lived experiences and bringing them to light. Every story is a chance to learn, improve and give his best to the people who trust him with their message.",
  },
  {
    name: "Omar Mohamed",
    role: "Filmmaker · Photographer",
    image: "/images/team/omar.jpg",
    position: "50% 50%",
    bio: "A Canadian-born filmmaker, photographer and videographer telling stories that inspire, educate and connect communities, behind the camera since 16.",
  },
  {
    name: "Afnan Bahubeshi",
    role: "Filmmaker · Visual Storyteller",
    image: "/images/team/afnan.jpg",
    position: "50% 50%",
    bio: "Working across documentary, commercial and narrative projects, focused on people, culture and the moments that often go unnoticed.",
  },
];
