import Image from "next/image";

type Props = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  repo?: string;
};

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  link,
  repo,
}: Props) {
  return (
    <article className="card group overflow-hidden flex flex-col motion-reduce:transition-none transition hover:shadow-xl">
      {/* Image */}
      <div className="relative w-full aspect-video">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 300px, 100vw"
          className="object-contain object-center bg-neutral-100 dark:bg-neutral-900 rounded-t-2xl"
        />
      </div>

      {/* Contenu */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h3 className="text-base sm:text-lg font-semibold mb-1 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm opacity-80 mb-3 line-clamp-3">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
          {tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full bg-brand-500/10 text-brand-700 dark:text-brand-200 border border-brand-500/20"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 text-sm">
          {link && (
            <a
              className="btn btn-primary flex-1 sm:flex-initial justify-center"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              Voir
            </a>
          )}
          {repo && (
            <a
              className="btn btn-ghost flex-1 sm:flex-initial justify-center"
              href={repo}
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
