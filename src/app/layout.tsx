import "@/app/globals.css";

import type { Metadata } from "next";
import React from "react";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import { Providers } from "@/redux/providers";

export const metadata: Metadata = {
  title: "HVL | Let's be funny",
  description: "Let's be funny",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en" data-theme="light">
        <body className="bg-base-100">
          <div className="master-wrapper flex flex-col w-full min-h-screen">
            <Header />
            <div className="main-content-wrapper flex-1 flex flex-col py-4 sm:py-6 lg:py-8">
              <SectionContainer>{children}</SectionContainer>
            </div>
            <Footer />
          </div>
        </body>
      </html>
    </Providers>
  );
}
