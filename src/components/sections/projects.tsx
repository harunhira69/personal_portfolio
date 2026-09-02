import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ProjectCard } from "@/components/projects/project-card";
import { buttonVariants } from "@/components/ui/button";
import { featuredProjects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section className="border-t py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Selected Projects
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Things I&apos;ve built.
            </h2>

            <p className="mt-4 text-base leading-7 text-muted-foreground">
              A selection of projects that showcase my approach to frontend
              development, full-stack applications, APIs, and modern web
              technologies.
            </p>
          </div>

          <Link
            href="/projects"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-fit rounded-full",
            )}
          >
            View All Projects
            <ArrowRight data-icon="inline-end" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
