import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Layers3,
  Play,
  Sparkles,
  Tag,
  Target,
  TrendingUp,
  Wrench,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/data/projects";
import { useReveal } from "@/hooks/use-reveal";

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const ref = useReveal();

  const [activeMediaIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!project) return <Navigate to="/projects" replace />;

  const currentIndex = projects.findIndex((p) => p.id === id);
  const next = projects[(currentIndex + 1) % projects.length];
  const prev = projects[(currentIndex - 1 + projects.length) % projects.length];

  const media = project.media || [];
  const activeMedia = media[activeMediaIndex];
  const heroMedia = media.find((item) => item.type === "image") ?? media[0];

  return (
    <div className="min-h-screen bg-background" ref={ref}>
      <section className="relative bg-[#0d1610] pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#acc8a2]/30 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="reveal mb-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-[#8aab82] hover:text-[#acc8a2] text-sm transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-10 items-center">
            <div>
              <div className="reveal flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#acc8a2]/10 text-[#acc8a2] border border-[#acc8a2]/20">
                  {project.category}
                </span>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 ${
                    project.status === "Live"
                      ? "bg-[#acc8a2]/15 text-[#acc8a2]"
                      : "bg-muted/50 text-muted-foreground"
                  }`}
                >
                  {project.status === "Live" && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#acc8a2] inline-block animate-pulse" />
                  )}
                  {project.status}
                </span>
              </div>

              <h1 className="reveal text-5xl md:text-7xl font-black text-white tracking-tight leading-[0.95]">
                {project.title}
              </h1>
              <p
                className="reveal mt-4 text-xl font-medium leading-relaxed"
                style={{ color: project.color }}
              >
                {project.tagline}
              </p>
              <p className="reveal mt-4 text-[#8aab82] leading-relaxed max-w-2xl">
                {project.longDescription}
              </p>

              <div className="reveal flex flex-wrap items-center gap-3 mt-8 text-sm text-[#8aab82]">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {project.year}
                </span>
                <span className="h-4 w-px bg-[#acc8a2]/20" />
                <span className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  {project.tags[0]}
                </span>
              </div>
            </div>

            <div className="reveal">
              <div className="relative overflow-hidden rounded-2xl border border-[#acc8a2]/20 bg-[#111a0f] shadow-2xl shadow-black/30">
                <div className="aspect-[4/3] bg-[#1a2517]">
                  {heroMedia ? (
                    heroMedia.type === "video" ? (
                      <video
                        src={heroMedia.url}
                        className="h-full w-full object-cover opacity-85"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <img
                        src={heroMedia.url}
                        alt={heroMedia.caption}
                        className="h-full w-full object-cover opacity-90"
                      />
                    )
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <Layers3 className="h-16 w-16 text-[#acc8a2]/30" />
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1610] via-[#0d1610]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="grid grid-cols-2 gap-3">
                    {project.metrics.slice(0, 4).map((m, i) => (
                      <div
                        key={m.label}
                        className="rounded-xl border border-white/10 bg-[#0d1610]/80 p-4 backdrop-blur"
                        style={{ transitionDelay: `${i * 60}ms` }}
                      >
                        <div className="flex items-center gap-2 text-[#acc8a2]">
                          <TrendingUp className="h-3.5 w-3.5" />
                          <p className="text-xl font-black leading-none text-white">
                            {m.value}
                          </p>
                        </div>
                        <p className="mt-1 text-[11px] font-medium text-[#8aab82]">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-5">
              <article className="reveal border border-border bg-card/80 rounded-2xl p-6 md:p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                    <Target className="h-5 w-5 text-red-300" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Context
                    </p>
                    <h2 className="text-xl font-bold text-foreground">
                      The Challenge
                    </h2>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </article>

              <article className="reveal border border-[#acc8a2]/20 bg-[#1a2517]/70 rounded-2xl p-6 md:p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#acc8a2]/15 flex items-center justify-center">
                    <Wrench className="h-5 w-5 text-[#acc8a2]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#8aab82]">
                      Execution
                    </p>
                    <h2 className="text-xl font-bold text-foreground">
                      Our Solution
                    </h2>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </article>

              <article className="reveal border border-[#acc8a2]/30 bg-[#acc8a2]/10 rounded-2xl p-6 md:p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#acc8a2]/15 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-[#acc8a2]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#8aab82]">
                      Result
                    </p>
                    <h2 className="text-xl font-bold text-foreground">
                      The Outcome
                    </h2>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed font-medium">
                  {project.outcome}
                </p>
              </article>
            </div>

            <aside className="space-y-5 lg:sticky lg:top-24 self-start">
              <div className="reveal bg-card border border-border rounded-2xl p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Layers3 className="h-4 w-4 text-[#acc8a2]" />
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-widest">
                    Tech Stack
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium border border-[#acc8a2]/20 text-[#acc8a2] bg-[#acc8a2]/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="reveal bg-card border border-border rounded-2xl p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Tag className="h-4 w-4 text-[#acc8a2]" />
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-widest">
                    Categories
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="reveal bg-[#111a0f] border border-[#acc8a2]/20 rounded-2xl p-6">
                <Sparkles className="mb-4 h-5 w-5 text-[#acc8a2]" />
                <p className="text-sm font-semibold text-white mb-2">
                  Similar project in mind?
                </p>
                <p className="text-xs text-[#8aab82] mb-5">
                  We'd love to hear about what you're building.
                </p>
                <Button
                  asChild
                  className="w-full bg-[#acc8a2] text-[#1a2517] hover:bg-white font-bold"
                >
                  <Link to="/#contact">
                    Get in Touch <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {media.length > 0 && (
        <section className="py-16 border-t border-border bg-[#1a2517]/10 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="reveal mb-10 ">
              <div>
                <p className="text-xs font-semibold tracking-widest text-[#acc8a2] uppercase mb-3">
                  Showcase
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
                  Visual Showcase &amp; Demos
                </h2>
              </div>
              <p className="text-muted-foreground max-w-md leading-relaxed ">
                Screens and demos from the interface, telemetry, and delivery
                workflow.
              </p>
            </div>

            <div className="grid gap-8 items-start">
              <div className="lg:col-span-8 flex flex-col gap-4">
                <div
                  className="reveal relative aspect-video bg-black rounded-2xl overflow-hidden border border-border group cursor-zoom-in shadow-xl shadow-black/20"
                  onClick={() => setLightboxOpen(true)}
                >
                  <div className="relative w-full h-full">
                    <video
                      src={activeMedia.url}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls={false}
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-[#acc8a2]/85 text-[#1a2517] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-300">
                        <Play className="w-8 h-8 fill-current ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="reveal rounded-xl border border-border bg-card p-4">
                  <p className="text-sm text-foreground leading-relaxed">
                    <span className="font-bold text-[#acc8a2] mr-2">
                      {activeMedia.type === "video"
                        ? "DEMO VIDEO"
                        : "SCREENSHOT"}
                    </span>
                    {activeMedia.caption}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {lightboxOpen && (
            <div
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-6 transition-all duration-300"
              onClick={() => setLightboxOpen(false)}
            >
              <button
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/15 hover:border-white/20 transition-all cursor-pointer"
                onClick={() => setLightboxOpen(false)}
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              <div
                className="relative max-w-5xl w-full aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <video
                  src={activeMedia.url}
                  className="w-full h-full object-contain"
                  autoPlay
                  controls
                  playsInline
                />
              </div>

              <div
                className="mt-6 text-center max-w-2xl px-4"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="text-sm text-white/90 leading-relaxed font-medium">
                  <span className="text-[#acc8a2] font-black mr-2 uppercase">
                    Demo Video
                  </span>
                  {activeMedia.caption}
                </p>
              </div>
            </div>
          )}
        </section>
      )}

      <section className="py-12 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest text-center mb-8">
            More Projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <Link
              to={`/projects/${prev.id}`}
              className="group flex-1 bg-card border border-border rounded-2xl p-5 hover:border-[#acc8a2]/40 hover:shadow-lg transition-all duration-200"
            >
              <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                Previous
              </p>
              <p className="font-bold text-foreground group-hover:text-[#acc8a2] transition-colors">
                {prev.title}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {prev.category}
              </p>
            </Link>
            <Separator
              orientation="vertical"
              className="hidden sm:block h-auto"
            />
            <Link
              to={`/projects/${next.id}`}
              className="group flex-1 bg-card border border-border rounded-2xl p-5 hover:border-[#acc8a2]/40 hover:shadow-lg transition-all duration-200 text-right"
            >
              <p className="text-xs text-muted-foreground mb-2 flex items-center justify-end gap-1">
                Next
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </p>
              <p className="font-bold text-foreground group-hover:text-[#acc8a2] transition-colors">
                {next.title}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {next.category}
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
