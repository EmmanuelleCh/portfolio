export const metadata = {
  title: "Emma — Développeuse web",
  description:
    "Portfolio de développeuse web: React, Next.js, Tailwind. Projets, compétences, contact.",
  metadataBase: new URL("https://example.com"),
  openGraph: { title: "Emma — Développeuse web", images: ["/preview.jpg"] },
};

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="font-display">
        <Navbar />
        {children}
        <Footer />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          // Dark mode persistant
          (function(){
            try { const t = localStorage.getItem('theme');
              if(t==='dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches))
                document.documentElement.classList.add('dark');
            } catch(e){}
          })();
        `,
          }}
        />
      </body>
    </html>
  );
}
