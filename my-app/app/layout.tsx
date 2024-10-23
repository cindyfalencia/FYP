// layout.tsx (still a Server Component)
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";
import "./globals.css";
import ClientLayout from "./components/ClientLayout"; // New Client Component

const inter = Inter({ subsets: ["latin"] });

const siteName = "Next.js App Router Training";
const description =
  "Introducing various basic patterns using Next.js' app router with simplified code.";

export const metadata: Metadata = {
  title: siteName,
  description,
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  openGraph: {
    title: siteName,
    description,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    site: "@about_hiroppy",
    creator: "@about_hiroppy",
  },
};

type Props = PropsWithChildren<{
  modal: React.ReactNode;
}>;

export default function Layout({ modal, children }: Props) {
  return (
    <html lang="en">
      <body
        className={[
          inter.className,
          "bg-gray-800",
          "has-[dialog[open]]:overflow-hidden",
        ].join(" ")}
      >
        <ClientLayout modal={modal}>{children}</ClientLayout> {/* Use Client Component */}
        {process.env.GA_ID && <GoogleAnalytics gaId={process.env.GA_ID} />}
      </body>
    </html>
  );
}
