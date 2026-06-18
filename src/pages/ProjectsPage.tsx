import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"
import { useReveal } from "@/hooks/use-reveal"

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))]

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const ref = useReveal()

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative bg-[#0d1610] pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#acc8a2]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#acc8a2]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#acc8a2] uppercase mb-3">
                Our Work
              </p>
              <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight">
                Projects &amp;
                <br />
                <span className="text-[#acc8a2]">Case Studies</span>
              </h1>
              <p className="mt-4 text-[#8aab82] max-w-lg leading-relaxed">
                Real projects, real results. A selection of work across
                industries and engineering disciplines.
              </p>
            </div>
            <div className="flex items-center gap-3 bg-[#1a2517]/60 border border-[#acc8a2]/20 rounded-2xl px-6 py-4 shrink-0">
              <span className="text-3xl font-black text-white">{projects.length}</span>
              <span className="text-sm text-[#8aab82] leading-tight">
                Case studies<br />published
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="py-16" ref={ref}>
        <div className="mx-auto max-w-7xl px-6">
          {/* Category filter */}
          <div className="reveal flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#1a2517] text-[#acc8a2] border border-[#acc8a2]/50"
                    : "bg-muted text-muted-foreground border border-border hover:border-[#acc8a2]/30 hover:text-[#acc8a2]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => {
              const previewMedia = project.media?.find((item) => item.type === "image") ?? project.media?.[0]
              const previewImage = previewMedia?.thumbnailUrl ?? previewMedia?.url

              return (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="reveal group block"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <article className="h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-[#acc8a2]/50 hover:shadow-xl hover:shadow-[#acc8a2]/5 hover:-translate-y-1 transition-all duration-300">
                  {/* Card top accent bar */}
                  <div
                    className="h-1 w-full"
                    style={{ backgroundColor: project.color }}
                  />

                  <div className="relative h-44 bg-[#1a2517] flex items-center justify-center overflow-hidden">
                    {previewImage ? (
                      <>
                        <img
                          src={previewImage}
                          alt={`${project.title} preview`}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1610]/90 via-[#0d1610]/30 to-transparent" />
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 grid-bg opacity-30" />
                        <div className="relative z-10 text-center px-6">
                          <p className="text-5xl font-black text-[#acc8a2]/20 tracking-tighter">
                            {project.title.charAt(0)}{project.title.split(" ")[1]?.charAt(0) ?? ""}
                          </p>
                        </div>
                      </>
                    )}
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-[#acc8a2]">
                          {project.category}
                        </p>
                        <p className="mt-1 line-clamp-1 text-sm font-bold text-white">
                          {project.title}
                        </p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#acc8a2] shrink-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    {/* Status badge */}
                    <div className="absolute top-3 right-3">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur ${
                          project.status === "Live"
                            ? "bg-[#acc8a2]/20 text-[#acc8a2]"
                            : project.status === "In Progress"
                            ? "bg-amber-500/20 text-amber-300"
                            : "bg-black/35 text-[#acc8a2]"
                        }`}
                      >
                        {project.status === "Live" && (
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#acc8a2] mr-1.5 align-middle" />
                        )}
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h2 className="text-lg font-bold text-card-foreground leading-tight group-hover:text-[#acc8a2] transition-colors">
                        {project.title}
                      </h2>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-[#acc8a2] shrink-0 mt-0.5 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <p className="text-xs text-[#acc8a2] font-medium">{project.category}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Metrics preview */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      {project.metrics.slice(0, 2).map((m) => (
                        <div key={m.label} className="bg-muted rounded-lg px-3 py-2">
                          <p className="text-sm font-black text-foreground">{m.value}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{m.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs bg-[#acc8a2]/10 text-[#acc8a2] border-transparent"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
              )
            })}
          </div>

          {/* CTA */}
          <div className="reveal mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Working on something challenging? Let's talk.
            </p>
            <Button
              asChild
              className="bg-[#1a2517] text-[#acc8a2] hover:bg-[#acc8a2] hover:text-[#1a2517] font-bold px-8"
              size="lg"
            >
              <Link to="/#contact">
                Start a Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
