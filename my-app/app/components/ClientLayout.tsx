"use client";

import { usePathname } from "next/navigation"; // Client-side hook
import { Header } from "./Header";
import {Sidebar} from "./Sidebar";
import { ChatInput } from './ChatInput';

type ClientLayoutProps = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function ClientLayout({ modal, children }: Readonly<ClientLayoutProps>) {
  const pathname = usePathname(); // Get current path

  // Determine if the current page is the welcome or sign-in page
  const isAuthPage = pathname === "/welcome" || pathname === "/signin";

  return (
    <div className="flex flex-col min-h-screen">
      {!isAuthPage && <Header />} {/* Show Header only if not on auth pages */}
      <div className="flex-1 flex text-gray-100">
        {!isAuthPage && <Sidebar className="w-1/5 h-[calc(100vh-60px)]"/>} {/* Sidebar height adjustment */}
        <main className="w-4/5 pt-6 text-gray-200 flex-1 h-[calc(100vh-64px)] overflow-y-auto flex flex-col">
          {children}
          {!isAuthPage && <ChatInput className="mt-auto"/>}
        </main>
      </div>
      {modal}
    </div>
  );
}
