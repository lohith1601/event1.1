import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { ClerkProvider } from '@clerk/nextjs'; // Ensure this is correctly imported , SignInButton, SignedIn, SignedOut, UserButton

const inter = Inter({ subsets: ["latin"] });


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <div className="flex items-center w-full justify-center min-h-screen bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
    {children}
   </div>
  );
}
