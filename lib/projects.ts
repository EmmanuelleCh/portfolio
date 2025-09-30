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
    repo: "https://github.com/EmmanuelleCh/portfolio",
  },
  {
    title: "Pomodoro App",
    description: "Application de gestion du temps avec technique Pomodoro",
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
    link: "",
    repo: "",
  },
  {
    title: "Emma aime dormir - en cours de dev",
    description: "Refonte humoristique du site Emma matelas",
    tags: ["React", "Next.js", "TypeScript"],
    image: "/emmaimedormir.jpeg",
    link: "",
    repo: "",
  },
  /*
  {
    title: "Readnest - en cours de dev",
    description: "",
    tags: ["React", "Next.js", "TypeScript"],
    image: "/Read.jpeg",
    link: "",
    repo: "",
  },
  {
    title: "La Griffe Chic - en cours de dev",
    description:
      "Site vitrine d'une prothesiste ongulaire — galerie, tarifs, contact.",
    tags: ["React", "Next.js", "TypeScript"],
    image: "/laGriffeChic1.jpeg",
    link: "",
    repo: "",
  },*/
];
