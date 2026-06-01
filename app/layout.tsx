import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
});

const siteUrl = "https://portfolioprg.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Pablo Ríos González — Desarrollador Web Junior | Sevilla",
  description:
    "Portfolio de Pablo Ríos González, desarrollador web junior de Sevilla especializado en Next.js, TypeScript, PHP y automatización con IA. Disponible para trabajo.",
  keywords: [
    "desarrollador web junior sevilla",
    "next.js",
    "typescript",
    "php",
    "react",
    "inteligencia artificial",
    "portfolio"
  ],
  alternates: {
    canonical: siteUrl
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  },
  openGraph: {
    title: "Pablo Ríos González — Desarrollador Web Junior | Sevilla",
    description:
      "Portfolio de Pablo Ríos González, desarrollador web junior de Sevilla especializado en Next.js, TypeScript, PHP y automatización con IA.",
    url: siteUrl,
    siteName: "Pablo Ríos González Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pablo Ríos González portfolio"
      }
    ],
    locale: "es_ES",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pablo Ríos González — Desarrollador Web Junior | Sevilla",
    description:
      "Portfolio de Pablo Ríos González, desarrollador web junior especializado en IA aplicada.",
    images: ["/og-image.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
