import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  GitBranch,
} from "lucide-react";
import { notFound } from "next/navigation";

import { Navbar } from "@/components/layout/navbar";
import { ProjectVisual } from "@/components/projects/project-visual";
import { buttonVariants } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Harun Or Rashid`,
      description: project.shortDescription,
    },
  };
}

export default async function ProjectDetailsPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main>
        <section className="border-b py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Back to Projects
            </Link>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                  {project.category}
                </p>

                <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  {project.title}
                </h1>

                <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "outline" }),
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
                      className={cn(
                        buttonVariants({ variant: "default" }),
                        "rounded-full",
                      )}
                    >
                      <ExternalLink data-icon="inline-start" />
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>

              <ProjectVisual project={project} />
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Overview
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Project Highlights
              </h2>

              <div className="mt-8 space-y-4">
                {project.highlights.map((highlight, index) => (
                  <div
                    key={highlight}
                    className="group flex gap-4 rounded-xl border p-5 transition-colors hover:bg-muted/30"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full border text-xs font-medium text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-sm leading-7 text-muted-foreground">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="lg:pl-6">
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Stack
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight">
                Technologies
              </h2>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border bg-muted/40 px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border p-6">
                <p className="text-sm font-semibold">
                  Interested in the project?
                </p>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Explore the project details or check the source code to see
                  how it was built.
                </p>

                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants(),
                    "mt-5 w-full rounded-full",
                  )}
                >
                  Let&apos;s Work Together
                  <ArrowUpRight data-icon="inline-end" />
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
