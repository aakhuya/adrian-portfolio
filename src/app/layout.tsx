import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import MouseGlow from "@/components/ui/MouseGlow";
import PageClient from "@/components/PageClient";
import BackToTop from "@/components/ui/BackToTop";

export const metadata: Metadata = {
  title: "adrian.dev | Full Stack Developer",
  description: "I craft beautiful, functional digital experiences that bring ideas to life.",
  icons: {
    icon: "/favicon.svg",
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
