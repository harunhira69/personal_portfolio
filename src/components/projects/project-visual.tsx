import { Code2, Database, Globe, Layers3, Server } from "lucide-react";

import type { Project } from "@/types/project";

type ProjectVisualProps = {
  project: Project;
};

type ProjectIconProps = {
  category: string;
};

function ProjectIcon({ category }: ProjectIconProps) {
  if (category === "Full Stack") {
    return <Server className="size-5" />;
  }

  if (category === "Learning Platform") {
    return <Layers3 className="size-5" />;
  }

  if (category === "Frontend") {
    return <Code2 className="size-5" />;
  }

  return <Globe className="size-5" />;
}

export function ProjectVisual({ project }: ProjectVisualProps) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border bg-muted/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,119,198,0.16),transparent_45%)]" />

      <div className="absolute inset-x-0 top-0 flex h-10 items-center gap-1.5 border-b bg-background/70 px-4 backdrop-blur">
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="size-2.5 rounded-full bg-muted-foreground/20" />
        <span className="size-2.5 rounded-full bg-muted-foreground/10" />

        <div className="ml-3 h-5 flex-1 rounded-md border bg-muted/40" />
      </div>

      <div className="relative flex h-full items-center justify-center px-6 pt-10">
        <div className="w-full max-w-sm rounded-xl border bg-background/90 p-5 shadow-sm backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg border bg-muted/50">
              <ProjectIcon category={project.category} />
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">
                {project.title}
              </p>

              <p className="text-xs text-muted-foreground">
                {project.category}
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-2">
            <div className="h-2 w-full rounded-full bg-muted" />
            <div className="h-2 w-4/5 rounded-full bg-muted" />
            <div className="h-2 w-3/5 rounded-full bg-muted" />
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2">
            {project.technologies.slice(0, 3).map((technology) => (
              <div
                key={technology}
                className="flex items-center justify-center rounded-md border bg-muted/30 px-2 py-2 text-[10px] text-muted-foreground"
              >
                {technology}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 flex size-9 items-center justify-center rounded-full border bg-background/80 backdrop-blur">
        <Database className="size-4 text-muted-foreground" />
      </div>
    </div>
  );
}
