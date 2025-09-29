// components/Pricing.tsx
export default function Pricing() {
  return (
    <div>
      <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {/* Site vitrine */}
        <article className="card p-6 sm:p-8 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold">Site vitrine</h3>
          <p className="mt-2 opacity-80">
            Présentez votre activité avec un site simple et impactant.
          </p>
          <ul className="mt-5 space-y-2 text-sm sm:text-base">
            <li>✔️ 3 à 5 pages (Accueil, À propos…)</li>
            <li>✔️ Design responsive</li>
            <li>✔️ SEO basique</li>
          </ul>
          <div className="mt-6 flex items-end justify-between">
            <p className="text-2xl font-bold text-brand-600 dark:text-brand-400">
              À partir de 500€
            </p>
            <a href="/contact" className="btn btn-primary">
              Demander un devis
            </a>
          </div>
        </article>

        {/* Portfolio / Blog */}
        <article className="card p-6 sm:p-8 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold">Portfolio / Blog</h3>
          <p className="mt-2 opacity-80">
            Un espace créatif pour partager vos projets ou articles.
          </p>
          <ul className="mt-5 space-y-2 text-sm sm:text-base">
            <li>✔️ Galerie ou blog intégré</li>
            <li>✔️ Mise en valeur visuelle</li>
            <li>✔️ Gestion facile du contenu</li>
          </ul>
          <div className="mt-6 flex items-end justify-between">
            <p className="text-2xl font-bold text-brand-600 dark:text-brand-400">
              À partir de 700€
            </p>
            <a href="/contact" className="btn btn-primary">
              Demander un devis
            </a>
          </div>
        </article>

        {/* E-commerce */}
        <article className="card p-6 sm:p-8 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold">E-commerce</h3>
          <p className="mt-2 opacity-80">
            Vendez vos produits ou services en ligne.
          </p>
          <ul className="mt-5 space-y-2 text-sm sm:text-base">
            <li>✔️ Catalogue produits</li>
            <li>✔️ Panier + paiement (Stripe/PayPal)</li>
            <li>✔️ Dashboard administrateur</li>
          </ul>
          <div className="mt-6 flex items-end justify-between">
            <p className="text-2xl font-bold text-brand-600 dark:text-brand-400">
              À partir de 1000€
            </p>
            <a href="/contact" className="btn btn-primary">
              Demander un devis
            </a>
          </div>
        </article>
      </div>

      {/* Site sur mesure */}
      <div className="mt-6 text-center">
        {" "}
        {/* <- réduit */}
        <h3 className="text-lg font-semibold">Site sur mesure</h3>
        <p className="opacity-80">
          Projet spécifique (CRM, SaaS, plateforme) ? Parlons-en pour un devis
          personnalisé.
        </p>
        <a href="/contact" className="btn btn-ghost mt-2">
          On en discute ?
        </a>
      </div>
    </div>
  );
}
