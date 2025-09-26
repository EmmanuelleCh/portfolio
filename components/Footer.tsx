export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="container mx-auto px-4 py-8 text-sm opacity-70 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Copyright */}
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Emma — Développeuse web
        </p>

        {/* Infos techniques */}
        <p className="text-center sm:text-right">
          Construit avec <span className="font-medium">Next.js</span> &{" "}
          <span className="font-medium">Tailwind</span> · Made with 🍵 matcha
        </p>
      </div>
    </footer>
  );
}
