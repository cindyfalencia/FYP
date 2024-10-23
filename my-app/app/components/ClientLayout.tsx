"use client";

import { usePathname } from "next/navigation"; // Client-side hook
import { Header } from "./Header";
import {Sidebar} from "./Sidebar"; // Import Sidebar component

type ClientLayoutProps = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function ClientLayout({ modal, children }: ClientLayoutProps) {
  const pathname = usePathname(); // Get current path

  // Determine if the current page is the welcome or sign-in page
  const isAuthPage = pathname === "/welcome" || pathname === "/signin";

  return (
    <div className="flex min-h-screen">
      {!isAuthPage && <Sidebar />} {/* Show Sidebar only if not on auth pages */}
      <div className="flex-1 flex flex-col text-gray-100">
        {!isAuthPage && <Header />} {/* Show Header only if not on auth pages */}
        <main className="p-6 text-gray-200 flex-1 h-full">{children}</main>
      </div>
      {modal}
    </div>
  );
}
