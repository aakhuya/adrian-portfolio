import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import MouseGlow from "@/components/ui/MouseGlow";
import PageClient from "@/components/PageClient";
import BackToTop from "@/components/ui/BackToTop";

const description = "I build software that turns ideas into things people can actually use. As a full-stack developer, I work across the stack to create clean, reliable, and practical applications. I enjoy simplifying complex problems, learning new things, and building products that make a difference.";

export const metadata: Metadata = {
  title: "Adrian Akhuya — Full Stack Developer | Modern Web, Backend & Mobile",
  description,
  icons: {
    icon: "/favicon.svg",
  },
  authors: [{ name: "Adrian Akhuya", url: "https://www.adrianakhuya.dev" }],
  creator: "Adrian Akhuya",
  publisher: "Adrian Akhuya",
  openGraph: {
    title: "Adrian Akhuya — Full Stack Developer | Modern Web, Backend & Mobile",
    description,
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
    type: "profile",
    locale: "en_US",
    firstName: "Adrian",
    lastName: "Akhuya",
    username: "aakhuya",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrian Akhuya — Full Stack Developer | Modern Web, Backend & Mobile",
    description,
    images: ["https://www.adrianakhuya.dev/images/og-image.png"],
    creator: "@aakhuya",
  },
  other: {
    "article:author": "https://www.linkedin.com/in/adrian-akhuya-b0326126b",
    "article:published_time": new Date().toISOString(),
    "og:updated_time": new Date().toISOString(),
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
