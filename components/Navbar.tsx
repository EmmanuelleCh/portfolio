"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/60 dark:bg-neutral-950/60 border-b border-white/10">
      <nav className="container-balanced h-14 flex items-center justify-between">
        <Link href="#" className="font-semibold tracking-tight">
          Emma<span className="text-brand-500">.</span>
        </Link>
        <div className="hidden sm:flex gap-6 text-sm opacity-90">
          <a href="#projets">Projets</a>
          <a href="#apropos">À propos</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          <a href="#contact" className="btn btn-ghost text-sm">
            Discuter
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
