import Apropos from "@/components/Apropos";
import ContactForm from "@/components/ContactForm";
import Projet from "@/components/Projet";
import Section from "@/components/Section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <div className="relative overflow-hidden">
        {/* Blobs décoratifs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-40 size-[24rem] sm:size-[30rem] md:size-[36rem] rounded-full bg-vertfonce dark:bg-vertfonce-dark blur-3xl animate-blob motion-reduce:animate-none -z-10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-40 size-[20rem] sm:size-[26rem] md:size-[32rem] rounded-full bg-vertfonce dark:bg-vertfonce-dark blur-3xl animate-blob motion-reduce:animate-none -z-10"
        />

        <section className="container-balanced px-4 sm:px-6 lg:px-8 min-h-[100svh] flex items-center">
          <div className="grid items-center gap-10 lg:gap-14 md:grid-cols-2">
            {/* Colonne texte */}
            <div>
              <h1 className="text-balance text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight">
                Développeuse web{" "}
                <span className="text-brand-500">full-stack</span>
                <br /> qui aime le design.
              </h1>

              <p className="mt-4 text-pretty text-base md:text-lg opacity-80 max-w-prose">
                React, Next.js, & Tailwind. J’assemble des interfaces propres,
                performantes et esthétiques. Ici, mes projets, ma méthode et
                comment je peux t’aider.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="/#contact" className="btn btn-primary">
                  Me contacter
                </a>
                <a
                  href="https://www.linkedin.com/in/emmanuelle-cahoreau/"
                  className="btn btn-ghost"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mon LinkedIn
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-6 opacity-75 text-sm sm:text-base">
                <span>⚡️ Next.js</span>
                <span>🎨 Tailwind</span>
                <span>🧠 UX</span>
              </div>
            </div>

            {/* Colonne image */}
            <div className="relative h-64 xs:h-72 sm:h-80 md:h-96 lg:h-[28rem] animate-float motion-reduce:animate-none">
              <div className="card absolute inset-0 flex items-center justify-center">
                <Image
                  src="/presentation.jpeg"
                  alt="Description de l'image"
                  fill
                  className="object-cover rounded-2xl shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* PROJETS */}
      <Section
        id="projets"
        title="Projets"
        subtitle="Mes réalisations récentes."
      >
        <div className="container-balanced px-4 sm:px-6 lg:px-8 min-h-[100svh] flex items-center">
          <Projet />
        </div>
      </Section>

      {/* À PROPOS
      <Section
        id="apropos"
        title="À propos"
        subtitle="Compétences, outils, valeurs de travail."
      >
        <div className="container-balanced px-4 sm:px-6 lg:px-8  flex items-center">
          <Apropos />
        </div>
      </Section> */}

      {/* CONTACT */}
      <Section
        id="contact"
        title="Contact"
        subtitle="Échangeons autour de ton projet."
      >
        <div className="container-balanced px-4 sm:px-6 lg:px-8  flex items-center">
          <ContactForm />
        </div>
      </Section>
    </main>
  );
}
