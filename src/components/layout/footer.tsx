import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight"
            >
              Harun<span className="text-muted-foreground">.</span>
            </Link>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Frontend Developer focused on building fast, responsive, and
              user-friendly web applications with modern technologies.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-4 sm:grid-cols-3">
            <div>
              <p className="text-sm font-semibold">Navigation</p>

              <nav className="mt-4 flex flex-col gap-3">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-sm font-semibold">Connect</p>

              <div className="mt-4 flex flex-col gap-3">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  GitHub
                  <ArrowUpRight className="size-3.5" />
                </a>

                {siteConfig.links.linkedin && (
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    LinkedIn
                    <ArrowUpRight className="size-3.5" />
                  </a>
                )}

                <a
                  href="mailto:your-email@example.com"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Email
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          <p>Built with Next.js & TypeScript.</p>
        </div>
      </div>
    </footer>
  );
}
