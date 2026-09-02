import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <section className="border-t py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border bg-muted/30 px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(120,119,198,0.15),transparent_45%)]" />

          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex size-12 items-center justify-center rounded-full border bg-background">
              <Mail className="size-5" />
            </div>

            <p className="mt-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Get In Touch
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              I&apos;m always open to discussing new projects, ideas, and
              opportunities. If you have something in mind, feel free to reach
              out.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="mailto:your-email@example.com"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full px-6",
                )}
              >
                Send Me an Email
                <ArrowUpRight data-icon="inline-end" />
              </a>

              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full px-6",
                )}
              >
                Contact Page
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                GitHub
              </a>

              {siteConfig.links.linkedin && (
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
