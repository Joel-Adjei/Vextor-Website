import { useReveal } from "@/hooks/use-reveal"

const categories = [
  {
    label: "Frontend",
    techs: ["React", "TypeScript", "Next.js", "Vite", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend",
    techs: ["Node.js", "Python", "Go", "FastAPI", "Express", "GraphQL"],
  },
  {
    label: "Data & Storage",
    techs: ["PostgreSQL", "Redis", "MongoDB", "Supabase", "Elasticsearch", "S3"],
  },
  {
    label: "Infrastructure",
    techs: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Terraform", "Vercel"],
  },
]

export function TechStack() {
  const ref = useReveal()

  return (
    <section id="tech" className="py-28 bg-[#0d1610] relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#acc8a2]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="reveal mb-16">
          <p className="text-xs font-semibold tracking-widest text-[#acc8a2] uppercase mb-3">
            Technology
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight max-w-xl">
            The stack we trust
          </h2>
          <p className="mt-4 text-[#8aab82] max-w-lg leading-relaxed">
            We use proven, battle-hardened tools — and stay up to date so you
            don't have to worry about technical debt on day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <div
              key={cat.label}
              className="reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <p className="text-xs font-bold tracking-widest text-[#acc8a2]/70 uppercase mb-4">
                {cat.label}
              </p>
              <div className="flex flex-wrap gap-3">
                {cat.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-xl text-sm font-medium border border-[#acc8a2]/20 text-[#acc8a2] bg-[#acc8a2]/5 hover:bg-[#acc8a2]/15 hover:border-[#acc8a2]/40 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
