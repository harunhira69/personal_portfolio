import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Mail,
} from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Harun Or Rashid for frontend development projects, collaboration, and professional opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="border-b py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Back Home
            </Link>

            <div className="mt-12 max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Contact
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
                Let&apos;s build something useful.
              </h1>

              <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                Whether you have a project idea, a development opportunity, or
                simply want to connect, feel free to reach out.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
            <a
              href="mailto:your-email@example.com"
              className="group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
            >
              <div className="flex size-11 items-center justify-center rounded-xl border bg-muted/40">
                <Mail className="size-5" />
              </div>

              <h2 className="mt-6 text-xl font-semibold">
                Email
              </h2>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Send me an email and I&apos;ll get back to you as soon as I can.
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                Send Email
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>

            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
            >
              <div className="flex size-11 items-center justify-center rounded-xl border bg-muted/40">
                <span className="text-sm font-bold">GH</span>
              </div>

              <h2 className="mt-6 text-xl font-semibold">
                GitHub
              </h2>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Explore my repositories, projects, and development work.
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                View GitHub
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>

            {siteConfig.links.linkedin && (
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
              >
                <div className="flex size-11 items-center justify-center rounded-xl border bg-muted/40">
                  <span className="text-sm font-bold">in</span>
                </div>

                <h2 className="mt-6 text-xl font-semibold">
                  LinkedIn
                </h2>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Connect with me professionally and learn more about my work.
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                  View LinkedIn
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            )}
          </div>

          <div className="mx-auto mt-10 max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border bg-muted/30 p-6 sm:p-8">
              <p className="text-sm font-semibold">
                Looking for a developer?
              </p>

              <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
                I&apos;m interested in frontend development, full-stack web
                applications, and opportunities where I can contribute to
                building reliable digital products.
              </p>

              <a
                href="mailto:your-email@example.com"
                className={cn(
                  buttonVariants(),
                  "mt-6 rounded-full",
                )}
              >
                Start a Conversation
                <ArrowUpRight data-icon="inline-end" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
