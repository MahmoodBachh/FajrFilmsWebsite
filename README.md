# Fajr Films — website

The new fajrfilms.ca homepage, built with **Next.js 14**, **TypeScript**, **Tailwind CSS** and **Framer Motion**.

## Run it on your computer

You need [Node.js](https://nodejs.org) 18.17 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Where things live

| What you want to change | Where |
| --- | --- |
| Any text, stats, projects, services, team bios, links, email, phone | `content/site.ts` |
| Brand colours and fonts | `tailwind.config.ts` |
| Photos | `public/images/` (keep the same file names, or update the path in `content/site.ts`) |
| A homepage section's layout | `components/` (one file per section) |
| Page title, description, social preview | `app/layout.tsx`, `app/opengraph-image.jpg` |
| Favicon | `app/icon.png`, `app/apple-icon.png` |

Anything in `[brackets]` in `content/site.ts` is a placeholder: stats, the testimonial, and so on.

### Adding a project

Copy one of the objects in the `projects` list in `content/site.ts`, drop its thumbnail in `public/images/work/`, and fill in the fields. `categories` controls which filter tabs it appears under; `href` (optional) links the card to the video.

### Adding the showreel

Paste the YouTube or Vimeo link into `showreelUrl` in `content/site.ts`. Until then, "Play showreel" opens the YouTube channel.

## Put it online (Vercel)

1. Create a new GitHub repository and push this folder to it.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, click **Add New → Project**, and import the repository. Leave every setting as it is and click **Deploy**.
3. You'll get a preview link like `fajr-films-web.vercel.app`. Check it on desktop and phone.
4. When you're ready to switch over from Squarespace: in Vercel open **Settings → Domains**, add `fajrfilms.ca` and `www.fajrfilms.ca`, and update the DNS records wherever the domain is registered, following the values Vercel shows you.

Every time you push a change to GitHub, Vercel redeploys automatically.

> Before switching the domain, make sure the pages the homepage links to still exist somewhere: the booking page, courses, and the Collective sign-up currently live on Squarespace and Acuity.
