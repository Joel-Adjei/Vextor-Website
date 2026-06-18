import {
  Globe,
  Layers,
  Cpu,
  ShieldCheck,
  Zap,
  BarChart3,
} from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useReveal } from "@/hooks/use-reveal"

const services = [
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "Full-stack web applications built with modern frameworks. Fast, accessible, and production-ready from day one.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: Cpu,
    title: "Backend & API Engineering",
    description:
      "Robust, scalable server-side systems and RESTful / GraphQL APIs designed for performance and reliability.",
    tags: ["Node.js", "Python", "PostgreSQL"],
  },
  {
    icon: Layers,
    title: "System Architecture",
    description:
      "We design distributed systems, microservices architectures, and cloud-native solutions that grow with your business.",
    tags: ["AWS", "Microservices", "K8s"],
  },
  {
    icon: Zap,
    title: "Performance Engineering",
    description:
      "Profiling, optimization, and re-architecture of slow systems. We make your software blazingly fast.",
    tags: ["Profiling", "CDN", "Caching"],
  },
  {
    icon: ShieldCheck,
    title: "Security & DevSecOps",
    description:
      "Security-first development, CI/CD pipeline hardening, and automated vulnerability scanning.",
    tags: ["OWASP", "CI/CD", "Pentesting"],
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description:
      "Data pipelines, dashboards, and analytics platforms that turn raw data into actionable business insight.",
    tags: ["ETL", "BI", "ML Pipelines"],
  },
]

export function Services() {
  const ref = useReveal()

  return (
    <section id="services" className="py-28 bg-background relative overflow-hidden" ref={ref}>
      {/* Subtle radial accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#acc8a2]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="text-xs font-semibold tracking-widest text-[#acc8a2] uppercase mb-3">
            What We Build
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight max-w-xl">
            Services that ship real value
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg leading-relaxed">
            From greenfield builds to legacy rescues — we cover the full
            engineering spectrum with precision and craft.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Card className="h-full group border-border hover:border-[#acc8a2]/50 bg-card transition-all duration-300 hover:shadow-xl hover:shadow-[#acc8a2]/5 hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-xl bg-[#1a2517] dark:bg-[#acc8a2]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-5 h-5 text-[#acc8a2]" />
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground leading-tight">
                    {service.title}
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-[#acc8a2]/10 text-[#acc8a2] dark:bg-[#acc8a2]/10 border-transparent"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
