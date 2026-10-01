"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header>
      <h2>My Portfolio</h2>
      <nav>
        <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
        <Link href="/portfolio" className={pathname === "/portfolio" ? "active" : ""}>Portfolio</Link>
        <Link href="/about" className={pathname === "/about" ? "active" : ""}>About</Link>
        <Link href="/gallery" className={pathname === "/gallery" ? "active" : ""}>Gallery</Link>
      </nav>
    </header>
  );
}