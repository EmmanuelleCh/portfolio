// Définition du type Project
export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  repo?: string;
};

// Tableau des projets
export const projects: Project[] = [
  {
    title: "Portfolio",
    description:
      "Mon site vitrine personnel — design épuré, animations CSS, dark mode.",
    tags: ["Next.js", "Tailwind", "React"],
    image: "/portfolio.png",
  },
  {
    title: "Pomodoro App",
    description:
      "Application de gestion du temps avec technique Pomodoro, tâches et stats.",
    tags: ["React", "Next", "Tailwind"],
    image: "/pomodoro.png",
    link: "/pomodoro",
    repo: "",
  },
  {
    title: "Sybat - en cours de dev",
    description:
      "Entreprise dans le batiment — gestion des chantiers, devis, factures.",
    tags: ["Next.js", "React", "PostgreSQL", "Tailwind"],
    image: "/SybatSite.png",
    link: "https://lienSybat.com",
    repo: "https://github.com/ton-github/bankflow",
  },
  {
    title: "Readnest - en cours de dev",
    description:
      "Application de suivi de lecture et club en ligne — filtres, statuts, favoris.",
    tags: ["React", "Next.js", "TypeScript"],
    image: "/Read.jpeg",
    link: "https://lien.com",
    repo: "https://github.com/ton-github/readnest",
  },
  {
    title: "La Griffe Chic",
    description:
      "Site vitrine d'une prothesiste ongulaire — galerie, tarifs, contact.",
    tags: ["React", "Next.js", "TypeScript"],
    image: "/laGriffeChic1.jpeg",
    link: "https://lien.com",
    repo: "https://github.com/ton-github/readnest",
  },
  {
    title: "Emma aime dormir",
    description:
      "Application de suivi de lecture et club en ligne — filtres, statuts, favoris.",
    tags: ["React", "Next.js", "TypeScript"],
    image: "/emmaimedormir.jpeg",
    link: "https://lien.com",
    repo: "https://github.com/ton-github/readnest",
  },
];
