import { Link } from "react-router-dom"
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  Compass,
  Layers3,
  Rocket,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { services } from "@/components/Services"
import { useReveal } from "@/hooks/use-reveal"

const deliverySteps = [
  {
    icon: Compass,
    title: "Map the system",
    copy: "We clarify goals, risks, users, constraints, and the technical shape of the work before a build plan is locked.",
  },
  {
    icon: Code2,
    title: "Build in focused cycles",
    copy: "Small delivery loops keep scope visible, decisions reversible, and progress tied to working software.",
  },
  {
    icon: ClipboardCheck,
    title: "Harden for launch",
    copy: "Performance, security, observability, and deployment quality are treated as part of the product, not polish.",
  },
]

export function ServicesPage() {
  const ref = useReveal()

  return (
    <div className="min-h-screen bg-background" ref={ref}>
      <section className="relative overflow-hidden bg-[#0d1610] pt-36 pb-20">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#acc8a2]/30 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="reveal mb-3 text-xs font-semibold uppercase tracking-widest text-[#acc8a2]">
                Services
              </p>
              <h1 className="reveal text-5xl font-black leading-[0.98] tracking-tight text-white md:text-7xl">
                Engineering services for serious software work
              </h1>
              <p className="reveal mt-5 max-w-2xl text-lg leading-relaxed text-[#8aab82]">
                Vextor Labs helps teams design, build, scale, and modernize
                production systems across web, cloud, data, security, and
                platform engineering.
              </p>
            </div>

            <div className="reveal rounded-2xl border border-[#acc8a2]/20 bg-[#1a2517]/70 p-6 shadow-2xl shadow-black/20">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#acc8a2]/15">
                  <Layers3 className="h-5 w-5 text-[#acc8a2]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">What you get</p>
                  <p className="text-xs text-[#8aab82]">
                    Practical senior engineering, not slideware.
                  </p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {["Architecture", "Implementation", "DevOps", "Optimization"].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-xl bg-[#0d1610]/70 px-3 py-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#acc8a2]" />
                    <span className="text-sm font-medium text-[#c8dcc4]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#acc8a2]">
                Capabilities
              </p>
              <h2 className="text-4xl font-black tracking-tight text-foreground md:text-5xl">
                Choose the right depth of help
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground md:text-right">
              Each service can stand alone or combine into a complete product,
              platform, or modernization engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="reveal group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#acc8a2]/50 hover:shadow-xl hover:shadow-[#acc8a2]/5"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#acc8a2]/10 transition-transform duration-300 group-hover:scale-110">
                  <service.icon className="h-5 w-5 text-[#acc8a2]" />
                </div>
                <h3 className="text-xl font-bold leading-tight text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="border-transparent bg-[#acc8a2]/10 text-xs text-[#acc8a2]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-[#1a2517]/25 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#acc8a2]">
              Delivery Model
            </p>
            <h2 className="text-4xl font-black tracking-tight text-foreground">
              Clear enough to move fast, rigorous enough to last
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {deliverySteps.map((step, index) => (
              <article key={step.title} className="reveal rounded-2xl border border-border bg-card p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#acc8a2]/10">
                    <step.icon className="h-5 w-5 text-[#acc8a2]" />
                  </div>
                  <span className="text-sm font-black text-[#acc8a2]/40">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal flex flex-col gap-6 rounded-2xl border border-[#acc8a2]/20 bg-[#111a0f] p-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#acc8a2]/15">
                <Rocket className="h-5 w-5 text-[#acc8a2]" />
              </div>
              <h2 className="text-3xl font-black tracking-tight text-white">
                Have a product, platform, or system that needs momentum?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#8aab82]">
                Bring the messy context. We will help turn it into a focused
                engineering plan and a path to production.
              </p>
            </div>
            <Button asChild className="bg-[#acc8a2] text-[#1a2517] hover:bg-white font-bold">
              <Link to="/#contact">
                Start a Conversation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
