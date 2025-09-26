export default function Apropos() {
  return (
    <div className="card p-4 sm:p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div>
        <h3 className="font-semibold mb-2">Stack</h3>
        <ul className="text-sm md:text-base opacity-80 space-y-1">
          <li>React, Next.js (App Router)</li>
          <li>TypeScript, Node.js</li>
          <li>Tailwind, UI system</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Super-pouvoirs</h3>
        <ul className="text-sm md:text-base opacity-80 space-y-1">
          <li>Pixel-perfect & accessibilité</li>
          <li>Composants réutilisables</li>
          <li>Esprit produit, priorisation</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Outils</h3>
        <ul className="text-sm md:text-base opacity-80 space-y-1">
          <li>Git, GitHub, CI simple</li>
          <li>Prisma, PostgreSQL (bases)</li>
          <li>Figma (maquettes rapides)</li>
        </ul>
      </div>
    </div>
  );
}
