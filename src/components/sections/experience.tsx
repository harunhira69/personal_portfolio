import { BriefcaseBusiness, CalendarDays } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Current Company",
    period: "Dec 2025 — Present",
    description:
      "Working on modern web applications with a focus on responsive interfaces, reusable components, API integration, and maintainable frontend architecture.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
];

export function Experience() {
  return (
    <section className="border-t py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Experience
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Experience that shaped how I build.
          </h2>

          <p className="mt-4 text-base leading-7 text-muted-foreground">
            A look at my professional experience and the technologies I have
            worked with along the way.
          </p>
        </div>

        <div className="mt-12">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="relative rounded-2xl border p-6 sm:p-8"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="flex gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border bg-muted/40">
                    <BriefcaseBusiness className="size-5" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      {experience.role}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                      {experience.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="size-4" />
                  {experience.period}
                </div>
              </div>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                {experience.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border bg-muted/40 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
