import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

// app/layout.tsx
export const metadata = {
  title: "Sooraj Lal | Full Stack Developer Portfolio",
  description:
    "I'm Sooraj Lal, a Full Stack Developer based in UAE specializing in building scalable web applications using Node.js, Express, React, and Next.js.",
  keywords: [
    "Sooraj",
    "Sooraj Lal",
    "Sooraj Lal M",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "MERN Developer",
    "Web Developer UAE",
    "Portfolio",
    "Node.js Developer",
    "React Developer",
  ],
  authors: [{ name: "Sooraj Lal", url: "https://yourdomain.com" }],
  openGraph: {
    title: "Sooraj Lal | Full Stack Developer",
    description:
      "Portfolio of Sooraj Lal, a Full Stack Developer based in UAE — crafting web apps with Node.js, React, and Next.js.",
    url: "https://yourdomain.com",
    siteName: "Sooraj Lal Portfolio",
    locale: "en_UAE",
    type: "website",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sooraj Lal - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sooraj Lal | Full Stack Developer Portfolio",
    description:
      "Full Stack Developer based in UAE — building modern web apps with React, Node.js, and Next.js.",
    creator: "@your_twitter_handle",
    images: ["https://yourdomain.com/og-image.jpg"],
  },
};


const inter = Inter({ subsets: ["latin"] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
