import React from "react";

import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";

interface HomeLayoutProps {
  readonly children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />

      <main className="container mx-auto max-w-7xl pt-10 px-6 flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
}
