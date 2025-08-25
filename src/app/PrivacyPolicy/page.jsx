// ❌ НЕ писать "use client" здесь!
import ClientPage from "./ClientPage";

export const metadata = {
  title:       "Privacy Policy – Persona Beauty Academy",
  description: "Learn how Persona Beauty Academy LLC collects, uses, and protects your personal information in compliance with U.S. privacy laws.",
  alternates:  { canonical: "/PrivacyPolicy" },
  openGraph: {
    type: "website",
    url:  "https://persona-beauty.us/PrivacyPolicy",
    title: "Privacy Policy – Persona Beauty Academy",
    description: "Our commitment to safeguarding your name, phone number, email, and course interests.",
    images: [{
      url: "/img/og-policy.jpg",   // 1200×630, положите в /public/img
      width: 1200,
      height: 630,
      alt: "Persona Beauty Academy – Privacy Policy",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy – Persona Beauty Academy",
    description: "Read how we handle personal data for students across the U.S.",
    images: ["/img/og-policy.jpg"],
  },
};

export default function Page() {
  /* Серверный компонент просто возвращает клиентский */
  return <ClientPage />;
}


