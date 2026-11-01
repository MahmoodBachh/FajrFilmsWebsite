// Courses shown on /courses and /courses/[slug].
// To open enrolment: create a Stripe Payment Link (Stripe → Payment Links → New),
// paste it into `stripeLink`, and set the real `price`. Leave stripeLink "" to show
// "Enrolment opening soon" with a waitlist button instead.
// Text in [brackets] is a placeholder waiting for your real course details.

export type Course = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  image: string;
  level: string;
  format: string;
  length: string;
  price: string;
  stripeLink: string;
  forWho: string[];
  modules: { title: string; lessons: string[] }[];
  includes: string[];
};

export const courses: Course[] = [
  {
    slug: "videography",
    title: "Videography",
    tagline: "From first frame to final cut.",
    summary:
      "[Course summary: what students will be able to film and edit by the end, and the kind of projects they will make.]",
    image: "/images/services-capture.jpg",
    level: "Beginner to intermediate",
    format: "Online, self-paced",
    length: "5 modules · 20 lessons",
    price: "[Price]",
    stripeLink: "",
    forWho: ["[Who this course is for]", "[Second audience]", "[Third audience]"],
    modules: [
      { title: "[Module 1 title]", lessons: ["[Lesson]", "[Lesson]", "[Lesson]", "[Lesson]"] },
      { title: "[Module 2 title]", lessons: ["[Lesson]", "[Lesson]", "[Lesson]", "[Lesson]"] },
      { title: "[Module 3 title]", lessons: ["[Lesson]", "[Lesson]", "[Lesson]", "[Lesson]"] },
      { title: "[Module 4 title]", lessons: ["[Lesson]", "[Lesson]", "[Lesson]", "[Lesson]"] },
      { title: "[Module 5 title]", lessons: ["[Lesson]", "[Lesson]", "[Lesson]", "[Lesson]"] },
    ],
    includes: ["[What's included, e.g. lifetime access]", "[Downloadable resources]", "[Certificate or feedback]"],
  },
  {
    slug: "photography",
    title: "Photography",
    tagline: "See the light. Tell the story.",
    summary: "[Course summary: what students will learn and be able to shoot by the end.]",
    image: "/images/hero-speaker.jpg",
    level: "[Level]",
    format: "[Format]",
    length: "[Modules · lessons]",
    price: "[Price]",
    stripeLink: "",
    forWho: ["[Who this course is for]", "[Second audience]"],
    modules: [
      { title: "[Module 1 title]", lessons: ["[Lesson]", "[Lesson]", "[Lesson]"] },
      { title: "[Module 2 title]", lessons: ["[Lesson]", "[Lesson]", "[Lesson]"] },
      { title: "[Module 3 title]", lessons: ["[Lesson]", "[Lesson]", "[Lesson]"] },
    ],
    includes: ["[What's included]", "[What's included]"],
  },
  {
    slug: "leadership-creative-direction",
    title: "Leadership & Creative Direction",
    tagline: "Lead the room. Shape the vision.",
    summary: "[Course summary: what students will learn about leading shoots, teams and creative vision.]",
    image: "/images/services-plan.jpg",
    level: "[Level]",
    format: "[Format]",
    length: "[Modules · lessons]",
    price: "[Price]",
    stripeLink: "",
    forWho: ["[Who this course is for]", "[Second audience]"],
    modules: [
      { title: "[Module 1 title]", lessons: ["[Lesson]", "[Lesson]", "[Lesson]"] },
      { title: "[Module 2 title]", lessons: ["[Lesson]", "[Lesson]", "[Lesson]"] },
      { title: "[Module 3 title]", lessons: ["[Lesson]", "[Lesson]", "[Lesson]"] },
    ],
    includes: ["[What's included]", "[What's included]"],
  },
];
