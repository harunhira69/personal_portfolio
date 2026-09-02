const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    title: "Tools & Services",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Vercel",
      "Firebase",
      "Stripe",
    ],
  },
];

export function Skills() {
  return (
    <section className="border-t py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Tools I use to build and ship products.
          </h2>

          <p className="mt-4 text-base leading-7 text-muted-foreground">
            A practical toolkit covering modern frontend development, backend
            services, databases, APIs, and deployment.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border p-6"
            >
              <h3 className="font-semibold">{group.title}</h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border bg-muted/40 px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
