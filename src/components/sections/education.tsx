import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "Pundra University of Science & Technology",
    period: "B.Sc. in CSE",
    description:
      "Academic background in computer science, software development, programming, databases, and modern web technologies.",
  },
];

export function Education() {
  return (
    <section className="border-t py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Education
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Academic foundation.
          </h2>
        </div>

        <div className="mt-12 max-w-3xl">
          {education.map((item) => (
            <article
              key={item.institution}
              className="flex gap-5 rounded-2xl border p-6 sm:p-8"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border bg-muted/40">
                <GraduationCap className="size-5" />
              </div>

              <div>
                <h3 className="text-lg font-semibold sm:text-xl">
                  {item.degree}
                </h3>

                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  {item.institution}
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  {item.period}
                </p>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
