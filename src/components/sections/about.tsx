import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, Code2 } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function About() {
  return (
    <section id="about" className="border-t py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:px-8">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Turning ideas into useful digital experiences.
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            I&apos;m a Frontend Developer who enjoys turning ideas and designs
            into clean, responsive, and practical web applications. My main
            focus is building interfaces that feel simple to use while keeping
            the underlying code organized and maintainable.
          </p>

          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            I work primarily with React, Next.js, TypeScript, and Tailwind CSS.
            I also have experience working across the backend with Node.js,
            Express, databases, authentication, APIs, and payment
            integrations.
          </p>

          <div className="grid gap-4 pt-4 sm:grid-cols-2">
            <div className="rounded-2xl border p-5">
              <Code2 className="size-5" />

              <h3 className="mt-4 font-semibold">
                Frontend Development
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Responsive interfaces, reusable components, and modern
                React/Next.js applications.
              </p>
            </div>

            <div className="rounded-2xl border p-5">
              <BriefcaseBusiness className="size-5" />

              <h3 className="mt-4 font-semibold">
                Real-world Development
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Experience working with APIs, databases, authentication, and
                production-focused applications.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/about"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-full",
              )}
            >
              More About Me
              <ArrowUpRight data-icon="inline-end" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
