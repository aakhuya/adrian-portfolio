import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import MouseGlow from "@/components/ui/MouseGlow";
import PageClient from "@/components/PageClient";
import BackToTop from "@/components/ui/BackToTop";

export const metadata: Metadata = {
  title: "Adrian Akhuya — Full Stack Developer | Modern Web, Backend & Mobile",
  description: "I'm Adrian Akhuya, a full-stack developer who builds software that turns ideas into things people can actually use. Specializing in Next.js, TypeScript, Python, FastAPI, PostgreSQL, and Flutter for modern web, backend, and mobile experiences.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Adrian Akhuya — Full Stack Developer | Modern Web, Backend & Mobile",
    description: "I'm Adrian Akhuya, a full-stack developer who builds software that turns ideas into things people can actually use. Specializing in Next.js, TypeScript, Python, FastAPI, PostgreSQL, and Flutter.",
    url: "https://www.adrianakhuya.dev",
    siteName: "adrianakhuya.dev",
    images: [
      {
        url: "https://www.adrianakhuya.dev/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adrian Akhuya — Full Stack Developer Portfolio",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrian Akhuya — Full Stack Developer | Modern Web, Backend & Mobile",
    description: "I'm Adrian Akhuya, a full-stack developer who builds software that turns ideas into things people can actually use.",
    images: ["https://www.adrianakhuya.dev/images/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body bg-onyx text-text-primary antialiased">
        <ScrollProgress />
        <MouseGlow />
        <Navbar />
        <main className="relative z-10">
          <PageClient>{children}</PageClient>
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
