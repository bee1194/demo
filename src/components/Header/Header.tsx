import Link from "next/link";

import SectionContainer from "@/components/SectionContainer/SectionContainer";

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-10 bg-base-200 text-base-content border-b">
      <nav className="py-3">
        <SectionContainer>
          <div className="flex items-center justify-between">
            <Link
              href={"/"}
              className="badge badge-outline badge-primary text-xl rounded-lg py-6 px-4"
            >
              DEMO
            </Link>
            <ul className="menu menu-horizontal px-1 gap-1">
              <li>
                <Link href={"/"}>Dashboard</Link>
              </li>
              <li>
                <Link href={"/analytics"}>Analytics</Link>
              </li>
            </ul>
          </div>
        </SectionContainer>
      </nav>
    </header>
  );
}
