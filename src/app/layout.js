import "./global.css";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import CookieConsent from "@/components/CookieBanner/CookieBanner";
import Script from "next/script";

/* ─────────────  GLOBAL SEO  ───────────── */
export const metadata = {
  title: {
    default: "Persona Beauty Academy",
    template: "%s | Persona Beauty Academy",
  },
  description:
    "Premium beauty-industry education in the United States. Hands-on courses, business coaching, and modern aesthetic technology.",
  keywords: [
    "beauty academy",
    "aesthetic courses USA",
    "Persona Beauty",
    "cosmetology school",
    "laser training",
  ],
  openGraph: {
    type: "website",
    url: "https://persona-beauty.us/",
    title: "Persona Beauty Academy",
    description:
      "Unlock your career in aesthetics with industry-leading courses and real-world practice.",
    siteName: "Persona Beauty Academy",
    locale: "en_US",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Persona Beauty Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Persona Beauty Academy",
    description:
      "Hands-on beauty courses, business mentorship, and cutting-edge equipment in the USA.",
    images: ["/api/og"],
  },
  alternates: {
    canonical: "https://persona-beauty.us/",
  },
  icons: {
    icon: "/logo.ico",
  },
};

/* ─────────────  Root Layout  ───────────── */
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon for older browsers */}
        <link rel="icon" href="/logo.ico" />
        {/* GA script (будет активирован только после согласия) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
          strategy="afterInteractive"
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
