import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.chikwadoval.com"),
  title: "Chikwado Valentine Ani | Full-Stack Software Engineer",
  description:
    "Full-stack software engineer and health & safety expert. Portfolio of Chikwado Valentine Ani — building practical web apps with React, Next.js, and Node.js.",
  keywords: [
    "Chikwado Valentine Ani",
    "Full-Stack Software Engineer",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Chikwado Valentine Ani | Full-Stack Software Engineer",
    description:
      "Full-stack software engineer and health & safety expert. Portfolio of Chikwado Valentine Ani — building practical web apps with React, Next.js, and Node.js.",
    url: "/",
    siteName: "Chikwado Valentine Ani",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Chikwado Valentine Ani | Full-Stack Software Engineer",
    description:
      "Full-stack software engineer and health & safety expert. Portfolio of Chikwado Valentine Ani — building practical web apps with React, Next.js, and Node.js.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
