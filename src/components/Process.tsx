import { useReveal } from "@/hooks/use-reveal"

const steps = [
  {
    number: "01",
    title: "Discovery & Scoping",
    description:
      "We start with your goals. Deep-dive sessions to map requirements, constraints, and success criteria before a single line of code is written.",
  },
  {
    number: "02",
    title: "Architecture Design",
    description:
      "System diagrams, data models, and API contracts are defined upfront. We choose the right tools for your scale — not the trendy ones.",
  },
  {
    number: "03",
    title: "Iterative Build",
    description:
      "Two-week sprints with visible progress. You're involved throughout — demo reviews, testing, and direct feedback loops.",
  },
  {
    number: "04",
    title: "QA & Hardening",
    description:
      "Automated test suites, performance profiling, security audits, and code review before anything ships.",
  },
  {
    number: "05",
    title: "Launch & Support",
    description:
      "Zero-downtime deployments, monitoring dashboards, and ongoing support so your product stays healthy post-launch.",
  },
]

export function Process() {
  const ref = useReveal()

  return (
    <section id="process" className="py-28 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#acc8a2]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-16">
          <p className="text-xs font-semibold tracking-widest text-[#acc8a2] uppercase mb-3">
            How We Work
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight max-w-xl">
            Our engineering process
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg leading-relaxed">
            A repeatable, battle-tested process that keeps projects on-time,
            on-budget, and on-point.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-4 bottom-4 w-px bg-gradient-to-b from-[#acc8a2]/60 via-[#acc8a2]/30 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="reveal relative flex gap-6 md:gap-12 items-start"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Step number circle */}
                <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-[#acc8a2] bg-background flex items-center justify-center z-10">
                  <span className="text-xs md:text-sm font-black text-[#acc8a2] tracking-tight">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2 pt-2 md:pt-3">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
