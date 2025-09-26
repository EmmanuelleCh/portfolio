import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function Projet() {
  return (
    
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((p) => (
        <ProjectCard key={p.title} {...p} />
      ))}
    </div>
  );
}
