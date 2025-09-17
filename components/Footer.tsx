export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="container-balanced py-8 text-sm opacity-70 flex flex-col sm:flex-row gap-2 items-center justify-between">
        <p>© {new Date().getFullYear()} Emma — Développeuse web</p>
        <p>Construit avec Next.js & Tailwind · Made with ☕️ dans un train</p>
      </div>
    </footer>
  );
}
