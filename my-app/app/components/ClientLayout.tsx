"use client";
import { usePathname } from "next/navigation"; // Client-side hook
import { Header } from "./Header";
import {Sidebar} from "./Sidebar";
import { ChatInput } from './ChatInput';
import { ReactNode } from "react"

type ClientLayoutProps = {
  children: ReactNode;
};

export default function ClientLayout({children}: Readonly<ClientLayoutProps>) {
  const pathname = usePathname(); // Get current path

  // Determine if the current page is the welcome or login page
  const isAuthPage = pathname === "/welcome" || pathname === "/login" || pathname === "/setup";

  return (
    <div className="flex flex-col min-h-screen">
      {!isAuthPage && <Header />} {/* Show Header only if not on auth pages */}
      <div className="flex-1 flex text-gray-100">
        {!isAuthPage && <Sidebar className="w-1/5 h-[calc(100vh-60px)]"/>} {/* Sidebar height adjustment */}
        <main
          className={`${
            isAuthPage ? "flex justify-center items-center w-full" : "w-4/5 pt-6"
          } text-gray-200 flex-1 h-[calc(100vh-64px)] overflow-y-auto flex flex-col`}
        >
          {children}
          {!isAuthPage && <ChatInput className="mt-auto"/>}
        </main>
      </div>
    </div>
  );
}
