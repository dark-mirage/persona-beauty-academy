// ⬅️ НЕ писать "use client" — тогда файл серверный

import HomeClient from "@/app/Home/page";

export const metadata = {
   /* ─────────────────────────────────────────────────────
     BASIC TAGS
  ──────────────────────────────────────────────────────*/
  title: {
    default: "Persona Beauty Academy | Premier Beauty Courses in the USA",
    template: " | Persona Beauty Academy",
  },
  description:
    "Hands‑on esthetic and beauty‑business programs in the United States. Master Carbon Peel, Emsculpt, laser technologies and marketing — start earning while you learn.",
  keywords: [
    "beauty academy",
    "esthetician school USA",
    "cosmetology courses",
    "Carbon Peel training",
    "Emsculpt certification",
    "laser hair‑removal course",
    "Philadelphia beauty classes",
    "Persona Beauty Academy",
  ],
  authors: [{ name: "Persona Beauty Academy", url: "https://persona-beauty.us/" }],

  /* ─────────────────────────────────────────────────────
     SEARCH / CRAWLER DIRECTIVES
  ──────────────────────────────────────────────────────*/
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  alternates: {
    canonical: "https://persona-beauty.us/",
  },

  /* ─────────────────────────────────────────────────────
     OPEN GRAPH (FACEBOOK, LINKEDIN etc.)
  ──────────────────────────────────────────────────────*/
  openGraph: {
    title: "Persona Beauty Academy • Beauty & Aesthetics Courses in the USA",
    description:
      "Become a sought‑after beauty professional: Carbon Peel, Emsculpt, laser aesthetics and beauty‑marketing all in one program.",
    url: "https://persona-beauty.us/",
    siteName: "Persona Beauty Academy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/img/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Practical training session at Persona Beauty Academy",
      },
    ],
  },

  /* ─────────────────────────────────────────────────────
     TWITTER / X
  ──────────────────────────────────────────────────────*/
  twitter: {
    card: "summary_large_image",
    title: "Persona Beauty Academy — U.S. Beauty Courses",
    description:
      "Learn Carbon Peel, Emsculpt, laser techniques and marketing — earn while you learn at Persona Beauty Academy.",
    site: "@PersonaBeautyUS",
    creator: "@PersonaBeautyUS",
    images: ["/img/og-home.jpg"],
  },
};

export default function Page() {
  /* Серверный компонент просто возвращает клиентский */
  return <HomeClient />;

}