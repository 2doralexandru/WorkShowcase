import type React from "react";
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar";
import MouseMoveEffect from "@/components/mouse-move-effect";
import JumpToTop from "@/components/jump-to-top";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smooth-scroll";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });
// const nunito = Nunito({ subsets: ["latin"] });q

export const metadata: Metadata = {
  title: {
    default: "Tudor Alexandru – Videographer & Video Editor",
    template: "%s | Tudor Alexandru",
  },
  description:
    "Tudor Alexandru - Videographer & Video Editor - Crafting cinematic visuals with precision and soul. Weddings, events, commercials and branded stories.",
  keywords: [
    "Tudor Alexandru",
    "Video Editor",
    "Cinematographer",
    "DaVinci Resolve",
    "Premiere Pro",
    "After Effects",
    "Color Grading",
    "YouTube Video Editing",
    "Course Video Editing",
    "Logo Animation",
    "Visual Storytelling",
    "Freelance Video Editor",
    "Bangladesh Video Editor",
    "Cinematic Editing",
    "Motion Graphics",
    "Lower Thirds",
    "Audio Sync",
  ],
  authors: [{ name: "Tudor Alexandru", url: "https://work-showcase.vercel.app/" }],
  creator: "Tudor Alexandru",
  publisher: "Tudor Alexandru",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://work-showcase.vercel.app/",
    title: "Tudor Alexandru – Videographer & Video Editor",
    description:
      "Tudor Alexandru - Videographer & Video Editor - Crafting cinematic visuals with precision and soul. Weddings, events, commercials and branded stories.",
    siteName: "Tudor Alexandru Portfolio",
    images: [
      {
        url: "/SitePreview.jpg",
        width: 1360,
        height: 768,
        alt: "Tudor Alexandru - Videographer & Video Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tudor Alexandru – Video Editor & Motion Graphics Designer",
    description:
      "Crafting cinematic edits, motion graphics, and powerful stories. Let's make your content stand out.",
    creator: "", // update if you have a real Twitter handle
    images: ["/tudoralexandru.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://work-showcase.vercel.app/",
  },
  category: "Video Editing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#020817" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tudor Alexandru",
              url: "https://work-showcase.vercel.app/",
              image: "/SitePreview.jpg",
              sameAs: [
                "https://www.instagram.com/2dor.alexandru/",
                "https://linkedin.com/in/tudor-alexandru-a3730a273/", // update if available
                "https://youtube.com/@tudoralexandru2743", // update if available
                "https://vimeo.com/user209097445", // update if available
              ],
              jobTitle: "Videographer & Video Editor",
              knowsAbout: [
                "Video Editing",
                "Motion Graphics",
                "DaVinci Resolve",
                "Cinematography",
                "Adobe Premiere Pro",
                "Adobe After Effects",
                "Adobe Photoshop",
                "Adobe Lightroom",
                "Color Grading",
                "Audio Syncing",
                "Marketing Videos",
                "YouTube Video Editing",
                "Course Video Editing",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              alumniOf: {
                "@type": "Organization",
                name: "West University of Timișoara", // update if you want to include education
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} min-h-screen text-white`}
        style={{
          background: "#020817",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="grid-background-large min-h-screen">
          <SmoothScroll>
            <MouseMoveEffect />
            <Navbar />
            <main className="">{children}</main>
            <Footer />
            <JumpToTop />
            <Toaster position="top-center" />
          </SmoothScroll>
        </div>
      </body>
    </html>
  );
}
