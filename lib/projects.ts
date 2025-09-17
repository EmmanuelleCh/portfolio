// Définition du type Project
export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string; // lien vers le site live
  repo?: string; // lien vers le repo GitHub
};

// Tableau des projets
export const projects: Project[] = [
  {
    title: "Bankflow",
    description:
      "SaaS de gestion financière avec authentification, dashboard et graphiques.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    image: "/preview.jpg", // capture du projet dans /public
    link: "https://ton-lien-live-bankflow.com", // à remplacer par ton vrai lien
    repo: "https://github.com/ton-github/bankflow",
  },
  {
    title: "Readnest",
    description:
      "Application de suivi de lecture et club en ligne — filtres, statuts, favoris.",
    tags: ["React", "Next.js", "TypeScript"],
    image: "/preview.jpg", // autre capture
    link: "https://ton-lien-live-readnest.com",
    repo: "https://github.com/ton-github/readnest",
  },
  {
    title: "Portfolio",
    description:
      "Mon site vitrine personnel — design épuré, animations CSS, dark mode.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    image: "/preview.jpg",
  },
];
