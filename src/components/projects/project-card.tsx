import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  GitBranch,
} from "lucide-react";

import { ProjectVisual } from "@/components/projects/project-visual";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.title} project`}
      >
        <div className="p-3 pb-0">
          <ProjectVisual project={project} />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {project.category}
            </p>

            <h3 className="mt-2 text-xl font-semibold tracking-tight">
              {project.title}
            </h3>
          </div>

          <Link
            href={`/projects/${project.slug}`}
            aria-label={`Open ${project.title}`}
            className="flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover:rotate-45"
          >
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          {project.shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((technology) => (
            <span
              key={technology}
              className="rounded-full border bg-muted/40 px-3 py-1.5 text-xs font-medium text-muted-foreground"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-7">
          <Link
            href={`/projects/${project.slug}`}
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "rounded-full",
            )}
          >
            View Project
            <ArrowUpRight data-icon="inline-end" />
          </Link>

          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "rounded-full",
              )}
            >
              <GitBranch data-icon="inline-start" />
              GitHub
            </Link>
          )}

          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "rounded-full",
              )}
            >
              <ExternalLink data-icon="inline-start" />
              Live
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
