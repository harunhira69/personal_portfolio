import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, GitBranch } from "lucide-react";
import { notFound } from "next/navigation";

import { Navbar } from "@/components/layout/navbar";
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
        <section className="border-b py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Back to Projects
            </Link>

            <div className="mt-10">
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                {project.category}
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
                {project.title}
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
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
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-5xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Project Highlights
              </h2>

              <ul className="mt-6 space-y-4">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-xl border p-4 text-sm leading-7 text-muted-foreground"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <aside>
              <h2 className="text-2xl font-bold tracking-tight">
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
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}