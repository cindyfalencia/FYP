import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react"
import "./globals.css";
import ClientLayout from "./components/ClientLayout";
import { Providers } from "./components/utility/providers";
import { Toaster } from "./components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });
const APP_NAME = "Chatbot UI"
const APP_DEFAULT_TITLE = "Chatbot UI"
const APP_TITLE_TEMPLATE = "%s - Chatbot UI"
const APP_DESCRIPTION = "Chabot UI PWA!"

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: APP_DEFAULT_TITLE
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE
    },
    description: APP_DESCRIPTION
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE
    },
    description: APP_DESCRIPTION
  }
}

interface LayoutProps {
  children: ReactNode
  params: {
    locale: string
  }
}

export const viewport: Viewport = {
  themeColor: "#000000"
}


export default function Layout({children, params: {locale} }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body
        className={[
          inter.className,
          "bg-gray-800",
          "has-[dialog[open]]:overflow-hidden",
        ].join(" ")}
      >
        <Providers attribute="class" defaultTheme="dark">
          <Toaster richColors position="top-center" duration={3000} />
          <div className="bg-background text-foreground h-dvh overflow-x-auto">
            <ClientLayout>{children}</ClientLayout> 
          </div>
          {process.env.GA_ID && <GoogleAnalytics gaId={process.env.GA_ID} />}
        </Providers>
      </body>
    </html>
  );
}
