import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {project.category}
          </p>

          <h3 className="mt-2 text-xl font-semibold tracking-tight">
            {project.title}
          </h3>
        </div>

        <div className="flex size-9 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight className="size-4" />
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-muted-foreground">
        {project.shortDescription}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.slice(0, 5).map((technology) => (
          <span
            key={technology}
            className="rounded-full border bg-muted/40 px-3 py-1.5 text-xs font-medium text-muted-foreground"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-7">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-muted-foreground"
        >
          View project
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}