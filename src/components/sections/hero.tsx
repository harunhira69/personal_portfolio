import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.12),transparent_45%)]" />

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-4xl">
          {/* Availability */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1.5 text-sm text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Frontend Developer
          </div>

          {/* Main Heading */}
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Building modern web experiences with{" "}
            <span className="text-muted-foreground">
              clean code & thoughtful design.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            I&apos;m {siteConfig.name}, a Frontend Developer focused on
            building fast, responsive, and user-friendly web applications
            with React, Next.js, and TypeScript.
          </p>

          {/* Technologies */}
          <div className="mt-7 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border bg-background/70 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur sm:text-sm"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full px-6",
              )}
            >
              View My Projects
              <ArrowRight data-icon="inline-end" />
            </Link>

            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full px-6",
              )}
            >
              Get In Touch
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-5">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </Link>

            {siteConfig.links.linkedin && (
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                LinkedIn
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
