### Portfolio 

Un site vitrine moderne et responsive, développé avec Next.js (App Router), React, TypeScript et Tailwind CSS.
L’objectif : présenter mes projets web, mes compétences et offrir un point de contact clair et esthétique.ocumentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🚀 Stack utilisée
	•	⚛️ Next.js 15 (App Router) → performance, SEO intégré, images optimisées
	•	🎨 Tailwind CSS → design rapide, responsive et moderne
	•	💻 TypeScript → typage sûr, composants robustes
	•	🌗 Dark mode persistant → localStorage + prefers-color-scheme
	•	🔗 Navigation fluide → sections ancrées (/#projets, /#apropos, /#contact)
	•	📩 Formulaire de contact → gestion des envois basique (modulable avec API/email service)

  ## 📂 Structure du projet
 ```
 mon-portfolio/
├─ app/                # App Router Next.js
│  ├─ page.tsx         # Page d’accueil
│  ├─ layout.tsx       # Layout global
│  └─ globals.css      # Styles globaux + Tailwind
│
├─ components/
│  ├─ Navbar.tsx       # Navigation sticky avec dark mode
│  ├─ Footer.tsx       # Pied de page
│  ├─ Section.tsx      # Wrapper de section
│  ├─ ProjectCard.tsx  # Carte de projet
│  ├─ Projet.tsx       # Grille des projets
│  ├─ Apropos.tsx      # Section "À propos"
│  ├─ ContactForm.tsx  # Formulaire de contact
│  └─ ThemeToggle.tsx  # Bouton clair/sombre
│
├─ lib/
│  └─ projects.ts      # Liste des projets
│
├─ public/
│  ├─ avatar.jpg
│
├─ tailwind.config.ts
├─ postcss.config.js
└─ README.md
```
## 🚀 Installation & Lancement

Prérequis
	•	Node.js 18+
	•	npm ou pnpm

Étapes
```
# 1. Cloner le repo
git clone https://github.com/ton-utilisateur/mon-portfolio.git
cd mon-portfolio

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de dev
npm run dev

# 4. Accéder à l’app
http://localhost:3000
```
📜 Licence

© 2025 — Tous droits réservés.

Ce projet est la propriété exclusive d’Emmanuelle Cahoreau.
Aucune partie du code, du design ou des assets ne peut être copiée, modifiée, distribuée ou utilisée sans une autorisation écrite explicite de l’auteure.
