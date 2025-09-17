export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="container-balanced py-16 sm:py-24">
      <header className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          {title}
        </h2>
        {subtitle && <p className="text-sm opacity-70 mt-1">{subtitle}</p>}
      </header>
      {children}
    </section>
  );
}
