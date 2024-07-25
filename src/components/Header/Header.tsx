import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-10 bg-base-200 text-base-content border-b">
      <nav className="py-3">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href={"/"}
              className="badge badge-outline badge-primary text-xl rounded-lg py-6 px-4"
            >
              DEMO
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
