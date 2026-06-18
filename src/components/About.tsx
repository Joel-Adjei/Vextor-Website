import { CheckCircle2 } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"

const pillars = [
  "Engineering excellence over shortcuts",
  "Transparent collaboration at every step",
  "Scalable design from day one",
  "Obsessive attention to code quality",
  "Security built in, not bolted on",
  "Delivery that matches the spec",
]

export function About() {
  const ref = useReveal()

  return (
    <section id="about" className="py-28 bg-[#1a2517] relative overflow-hidden" ref={ref}>
      {/* Background texture */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#acc8a2]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <div className="reveal">
              <p className="text-xs font-semibold tracking-widest text-[#acc8a2] uppercase mb-3">
                About Vextor Labs
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.05]">
                Built by engineers,
                <br />
                <span className="text-[#acc8a2]">for builders.</span>
              </h2>
            </div>
            <div className="reveal mt-6">
              <p className="text-[#8aab82] leading-relaxed text-lg">
                Vextor Labs is a software engineering firm founded on the belief
                that great software is a craft. We combine deep technical
                expertise with a product mindset to deliver systems that your
                users love and your team can maintain.
              </p>
              <p className="text-[#8aab82] leading-relaxed mt-4">
                We operate lean, move fast, and hold ourselves to the highest
                standards of code quality, architecture, and delivery. Every
                engagement is a partnership — your success is our measure.
              </p>
            </div>
          </div>

          {/* Right — pillars */}
          <div className="grid grid-cols-1 gap-3">
            {pillars.map((pillar, i) => (
              <div
                key={pillar}
                className="reveal flex items-center gap-4 bg-white/5 border border-[#acc8a2]/15 rounded-xl px-5 py-4 hover:bg-[#acc8a2]/10 hover:border-[#acc8a2]/40 transition-all duration-200"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <CheckCircle2 className="w-5 h-5 text-[#acc8a2] shrink-0" />
                <span className="text-sm font-medium text-white/90">{pillar}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
