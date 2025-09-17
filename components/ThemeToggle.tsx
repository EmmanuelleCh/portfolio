"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);
  const toggle = () => {
    const d = !dark;
    setDark(d);
    document.documentElement.classList.toggle("dark", d);
    localStorage.setItem("theme", d ? "dark" : "light");
  };
  return (
    <button
      onClick={toggle}
      aria-label="Basculer le thème"
      className="btn btn-ghost text-sm"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
