import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Cpu,
  Globe,
  Heart,
  Lightbulb,
  Shield,
  Target,
  Users,
  Zap,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useReveal } from "@/hooks/use-reveal";

const team = [
  {
    name: "Alex Vex",
    role: "Founder & Principal Engineer",
    bio: "10+ years building distributed systems at scale. Former Staff Engineer at a major cloud provider. Obsessed with correctness and elegance.",
    specialties: ["Architecture", "Distributed Systems", "Go"],
    initial: "AV",
  },
  {
    name: "Jordan Reyes",
    role: "Head of Frontend",
    bio: "Crafts UIs that delight users. Expert in React performance and design systems. Previously led frontend at a Series B fintech.",
    specialties: ["React", "TypeScript", "Design Systems"],
    initial: "JR",
  },
  {
    name: "Morgan Chen",
    role: "Backend Lead",
    bio: "Data and backend specialist who has wrangled billions of events in production. Fluent in Python, Go, and SQL.",
    specialties: ["Python", "Data Pipelines", "PostgreSQL"],
    initial: "MC",
  },
  {
    name: "Sam Okafor",
    role: "DevOps & Security Lead",
    bio: "Infrastructure as code evangelist and security-first thinker. Certified AWS Solutions Architect and CISSP.",
    specialties: ["Kubernetes", "Terraform", "Security"],
    initial: "SO",
  },
];

const values = [
  {
    Icon: Code2,
    title: "Engineering Craft",
    description:
      "We write code that future teams can read, extend, and trust. Readability and correctness are never negotiable.",
  },
  {
    Icon: Target,
    title: "Outcome Focus",
    description:
      "We measure success by business impact, not lines of code shipped. Every technical decision is tied to a real outcome.",
  },
  {
    Icon: Shield,
    title: "Security First",
    description:
      "Security is not a phase — it's embedded in every architecture decision, every code review, every deployment.",
  },
  {
    Icon: Lightbulb,
    title: "Honest Expertise",
    description:
      "We tell you what you need to hear, not what you want to hear. Straightforward technical judgment builds trust.",
  },
  {
    Icon: Heart,
    title: "Deep Partnership",
    description:
      "We operate as an extension of your team, not a vendor. Your roadmap is our roadmap.",
  },
  {
    Icon: Zap,
    title: "Bias for Action",
    description:
      "Decisive, fast, and focused. We minimize ceremony and maximize shipping velocity without sacrificing quality.",
  },
];

const timeline = [
  {
    year: "2018",
    event: "Founded",
    detail:
      "Vextor Labs founded with one mission: build software that actually ships and scales.",
  },
  {
    year: "2019",
    event: "First Enterprise Client",
    detail:
      "Onboarded first Fortune 500 client, delivering a microservices migration on time and under budget.",
  },
  {
    year: "2020",
    event: "Remote-First",
    detail:
      "Transitioned to fully distributed team. Built async-first culture that increased productivity.",
  },
  {
    year: "2021",
    event: "Data Practice Launch",
    detail:
      "Expanded into data engineering and ML infrastructure with dedicated specialists.",
  },
  {
    year: "2022",
    event: "Security Practice Launch",
    detail:
      "Added DevSecOps practice. Helped 12 clients achieve SOC 2 compliance.",
  },
  {
    year: "2023",
    event: "50 Projects Milestone",
    detail:
      "Delivered 50th project with a 100% on-time delivery rate across all engagements.",
  },
  {
    year: "2024",
    event: "AI Engineering Practice",
    detail:
      "Launched dedicated AI/ML engineering practice, building RAG systems and LLM integrations.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100%", label: "On-Time Delivery" },
  { value: "4.9/5", label: "Average Client Rating" },
  { value: "$40M+", label: "Client Value Generated" },
];

export function AboutPage() {
  const ref = useReveal();

  return (
    <div className="min-h-screen bg-background" ref={ref}>
      {/* <section className="pt-36">
        <div className="w-full mx-auto">
          <img src={"/logo"} alt="Vextor Labs" className="w-120 mx-auto" />
          <img src={logoText} alt="Vextor Labs" className="w-120 mx-auto" />
        </div>
      </section> */}

      {/* Hero */}
      <section className="relative bg-[#0d1610] pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#acc8a2]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#acc8a2]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Floating accent shapes */}
        <div className="absolute top-24 right-20 w-24 h-24 border border-[#acc8a2]/15 rounded-3xl rotate-12 animate-float pointer-events-none" />
        <div
          className="absolute bottom-16 right-40 w-12 h-12 bg-[#acc8a2]/10 rounded-full animate-float pointer-events-none"
          style={{ animationDelay: "1s" }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <p className="reveal text-xs font-semibold tracking-widest text-[#acc8a2] uppercase mb-4">
            About Vextor Labs
          </p>
          <h1 className="reveal text-5xl md:text-7xl font-black text-white tracking-tight leading-[0.95] max-w-3xl">
            We exist to ship
            <br />
            <span className="text-[#acc8a2]">great software.</span>
          </h1>
          <p className="reveal mt-6 text-lg text-[#8aab82] leading-relaxed max-w-xl">
            Vextor Labs is a software engineering firm built on the belief that
            great software is a craft — and that craft deserves deep expertise,
            honest partnership, and obsessive attention to quality.
          </p>

          {/* Stats strip */}
          <div className="reveal mt-12 flex flex-wrap gap-8">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl font-black text-white">{value}</p>
                <p className="text-sm text-[#8aab82] mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="reveal text-xs font-semibold tracking-widest text-[#acc8a2] uppercase mb-3">
                Our Mission
              </p>
              <h2 className="reveal text-4xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
                Software engineering,
                <br />
                done right.
              </h2>
              <p className="reveal mt-5 text-muted-foreground leading-relaxed">
                We founded Vextor Labs after watching too many engineering
                projects fail — not because of talent, but because of shortcuts,
                miscommunication, and rushed architecture decisions that created
                years of technical debt.
              </p>
              <p className="reveal mt-4 text-muted-foreground leading-relaxed">
                Our model is simple: senior engineers only, deep ownership on
                every engagement, and a relentless focus on the outcome that
                matters to your business.
              </p>
              <div className="reveal mt-8 space-y-3">
                {[
                  "Senior engineers on every project — no bait-and-switch",
                  "Architecture-first approach prevents costly rewrites",
                  "Embedded in your team, not a black-box vendor",
                  "Full transparency on progress, blockers, and tradeoffs",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#acc8a2] mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  Icon: Globe,
                  label: "Remote-First",
                  sub: "Team across 6 countries",
                },
                {
                  Icon: Cpu,
                  label: "Full-Stack",
                  sub: "Frontend to infrastructure",
                },
                {
                  Icon: TrendingUp,
                  label: "Scalable",
                  sub: "Systems that grow with you",
                },
                {
                  Icon: Users,
                  label: "Collaborative",
                  sub: "Extensions of your team",
                },
              ].map(({ Icon, label, sub }, i) => (
                <div
                  key={label}
                  className="reveal bg-card border border-border rounded-2xl p-5 hover:border-[#acc8a2]/40 transition-colors"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1a2517] flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-[#acc8a2]" />
                  </div>
                  <p className="font-bold text-foreground text-sm">{label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal mb-12">
            <p className="text-xs font-semibold tracking-widest text-[#acc8a2] uppercase mb-3">
              How We Think
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
              Our values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(({ Icon, title, description }, i) => (
              <div
                key={title}
                className="reveal bg-card border border-border rounded-2xl p-6 hover:border-[#acc8a2]/40 hover:shadow-lg hover:shadow-[#acc8a2]/5 hover:-translate-y-0.5 transition-all duration-200"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="w-11 h-11 rounded-xl bg-[#1a2517] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#acc8a2]" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#1a2517]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal mb-12">
            <p className="text-xs font-semibold tracking-widest text-[#acc8a2] uppercase mb-3">
              The Team
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Senior engineers,
              <br />
              <span className="text-[#acc8a2]">every engagement.</span>
            </h2>
            <p className="mt-4 text-[#8aab82] max-w-xl">
              No juniors hidden behind senior titles. Every client works
              directly with the engineers who designed the solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="reveal bg-white/5 border border-[#acc8a2]/15 rounded-2xl p-6 hover:border-[#acc8a2]/40 hover:bg-white/8 transition-all duration-200"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Avatar */}
                <div className="w-14 h-14 rounded-2xl bg-[#acc8a2]/20 flex items-center justify-center mb-4">
                  <span className="text-lg font-black text-[#acc8a2]">
                    {member.initial}
                  </span>
                </div>
                <h3 className="font-bold text-white">{member.name}</h3>
                <p className="text-xs text-[#acc8a2] mt-0.5 mb-3">
                  {member.role}
                </p>
                <p className="text-xs text-[#8aab82] leading-relaxed mb-4">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {member.specialties.map((s) => (
                    <Badge
                      key={s}
                      variant="secondary"
                      className="text-xs bg-[#acc8a2]/10 text-[#acc8a2] border-transparent"
                    >
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-6">
          <div className="reveal mb-12">
            <p className="text-xs font-semibold tracking-widest text-[#acc8a2] uppercase mb-3">
              Our Story
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
              Built over time,
              <br />
              milestone by milestone.
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-16 top-2 bottom-2 w-px bg-gradient-to-b from-[#acc8a2]/50 via-[#acc8a2]/20 to-transparent" />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className="reveal flex items-start gap-6"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-32 shrink-0 text-right">
                    <span className="text-sm font-black text-[#acc8a2]">
                      {item.year}
                    </span>
                  </div>
                  <div className="relative shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full border-2 border-[#acc8a2] bg-background" />
                  </div>
                  <div className="flex-1 pb-2">
                    <p className="font-bold text-foreground">{item.event}</p>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0d1610] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#acc8a2]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <div className="reveal">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-5">
              Ready to work together?
            </h2>
            <p className="text-[#8aab82] text-lg leading-relaxed mb-10">
              Tell us about your project. We'll respond within 24 hours with our
              honest assessment and how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#acc8a2] text-[#1a2517] hover:bg-white font-bold px-8"
              >
                <Link to="/#contact">
                  Start a Conversation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#acc8a2]/40 text-[#acc8a2] hover:bg-[#acc8a2]/10 font-semibold px-8"
              >
                <Link to="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
