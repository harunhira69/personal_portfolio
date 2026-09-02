import type { Metadata } from "next";

import { Navbar } from "@/components/layout/navbar";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore projects built by Harun Or Rashid using React, Next.js, TypeScript, Node.js, PostgreSQL, Prisma, and modern web technologies.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="border-b py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Projects
            </p>

            <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              Selected work and projects.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              A collection of web applications and development projects
              covering frontend interfaces, full-stack applications, APIs,
              authentication, databases, and payment integrations.
            </p>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}