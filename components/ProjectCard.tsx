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
    <article className="card group overflow-hidden hover:shadow-xl transition">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm opacity-80 mb-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full bg-brand-500/10 text-brand-700 dark:text-brand-200 border border-brand-500/20"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3 text-sm">
          {link && (
            <a
              className="btn btn-primary"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          )}
          {repo && (
            <a
              className="btn btn-ghost"
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
