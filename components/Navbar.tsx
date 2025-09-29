"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Ombre subtile au scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Empêche le body de scroller quand le menu est ouvert (plus fiable que html)
  useEffect(() => {
    const el = document.body;
    if (open) el.classList.add("overflow-hidden");
    else el.classList.remove("overflow-hidden");
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={[
        "sticky top-0 z-50",
        "backdrop-blur-md",
        "bg-white/70 dark:bg-neutral-950/60",
        "border-b border-white/10 dark:border-white/5",
        scrolled
          ? "shadow-[0_1px_10px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_12px_rgba(0,0,0,0.35)]"
          : "shadow-none",
      ].join(" ")}
    >
      <nav className="container mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl sm:text-2xl font-semibold tracking-tight focus:outline-none focus-visible:ring ring-brand-500/50 rounded-md px-1 -mx-1"
          onClick={closeMenu}
        >
          Emma
          <span
            className="text-brand-500 inline-block motion-reduce:animate-none animate-bounce"
            aria-hidden
          >
            .
          </span>
          <span className="sr-only">Aller à l’accueil</span>
        </Link>

        {/* Liens desktop */}
        <div className="hidden sm:flex gap-6 text-sm opacity-90">
          <Link
            className="hover:opacity-100 focus:outline-none focus-visible:ring ring-brand-500/40 rounded px-1 -mx-1"
            href="/#projets"
          >
            Projets
          </Link>
          <Link
            className="hover:opacity-100 focus:outline-none focus-visible:ring ring-brand-500/40 rounded px-1 -mx-1"
            href="/#tarifs"
          >
            Tarifs
          </Link>
          <Link
            className="hover:opacity-100 focus:outline-none focus-visible:ring ring-brand-500/40 rounded px-1 -mx-1"
            href="/#contact"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-2">
          {/* Actions <Link
            href="/#contact"
            className="btn btn-ghost text-sm hidden xs:inline-flex"
            onClick={closeMenu}
          >
            Discuter
          </Link>*/}

          {/* Bouton burger (mobile) */}
          <button
            type="button"
            className="sm:hidden inline-flex items-center justify-center size-9 rounded-md border border-white/15 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md focus:outline-none focus-visible:ring ring-brand-500/50"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={[
                "relative block size-4",
                "before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-current",
                "after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-current",
                "motion-reduce:transition-none transition-all",
                open
                  ? "before:translate-y-[7px] before:rotate-45 after:-translate-y-[7px] after:-rotate-45"
                  : "before:translate-y-0 after:translate-y-0",
              ].join(" ")}
            />
          </button>

          <ThemeToggle />
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={[
          "sm:hidden",
          "motion-reduce:transition-none transition-[max-height,opacity]",
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
          "overflow-hidden",
          "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-t border-white/10 dark:border-white/5",
        ].join(" ")}
      >
        <div className="container mx-auto px-4 py-3 grid gap-2">
          <Link
            href="/#projets"
            onClick={closeMenu}
            className="block rounded-md px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5 focus:outline-none focus-visible:ring ring-brand-500/40"
          >
            Projets
          </Link>
          {/*<Link
            href="/#apropos"
            onClick={closeMenu}
            className="block rounded-md px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5 focus:outline-none focus-visible:ring ring-brand-500/40"
          >
            À propos
          </Link>*/}
          <Link
            href="/#contact"
            onClick={closeMenu}
            className="block rounded-md px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5 focus:outline-none focus-visible:ring ring-brand-500/40"
          >
            Contact
          </Link>
          <Link
            href="/#contact"
            onClick={closeMenu}
            className="btn btn-primary mt-1 justify-center"
          >
            Discuter
          </Link>
        </div>
      </div>
    </header>
  );
}
