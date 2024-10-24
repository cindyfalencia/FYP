import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";

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
        <ClientLayout modal={modal}>{children}</ClientLayout> 
        {process.env.GA_ID && <GoogleAnalytics gaId={process.env.GA_ID} />}
      </body>
    </html>
  );
}
