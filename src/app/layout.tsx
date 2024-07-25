import "@/app/globals.css";

import type { Metadata } from "next";
import React from "react";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Providers } from "@/redux/providers";

export const metadata: Metadata = {
  title: "DEMO | TASK",
  description: "DEMO project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en" data-theme="light">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className="bg-base-100" cz-shortcut-listen="true">
          <div className="master-wrapper flex flex-col w-full min-h-screen">
            <Header />
            <div className="main-content-wrapper flex-1 flex flex-col py-4 sm:py-6 lg:py-8 items-center">
              <div className="max-w-3xl w-full px-4 sm:px-6 lg:px-8 overflow-x-auto">
                {children}
              </div>
            </div>
            <Footer />
          </div>
        </body>
      </html>
    </Providers>
  );
}
