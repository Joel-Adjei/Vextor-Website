import { ArrowRight, Code2, Cpu, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0d1610]">
      <img
        src="/logo_01.png"
        alt="Vextor Labs"
        className="absolute left-1/2 -translate-x-1/2 opacity-45"
      />

      <div className="absolute inset-0 bg-linear-to-t from-[#1a2517] from-80% to-transparent opacity-50 pointer-events-none" />

      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Radial glow top-left */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#acc8a2]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      {/* Radial glow bottom-right */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#acc8a2]/8 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      {/* Floating abstract shapes */}
      <div className="absolute top-1/4 right-8 md:right-1/4 opacity-15 animate-float pointer-events-none">
        <div className="w-32 h-32 border border-[#acc8a2]/60 rounded-2xl rotate-12" />
      </div>
      <div
        className="absolute bottom-1/3 right-12 md:right-1/3 opacity-10 animate-float pointer-events-none"
        style={{ animationDelay: "1s" }}
      >
        <div className="w-20 h-20 border border-[#acc8a2]/60 rounded-full" />
      </div>
      <div
        className="absolute top-2/3 left-8 md:left-1/4 opacity-10 animate-float pointer-events-none"
        style={{ animationDelay: "2s" }}
      >
        <div className="w-16 h-16 bg-[#acc8a2]/20 rounded-lg rotate-45" />
      </div>

      {/* Spinning ring */}
      <div className="absolute top-16 right-16 md:right-32 opacity-10 animate-spin-slow pointer-events-none">
        <div className="w-40 h-40 rounded-full border-2 border-dashed border-[#acc8a2]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20">
        <div className="w-full">
          {/* Headline */}
          <h1
            className="animate-slide-up opacity-0 text-5xl text-center md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.95] delay-100"
            style={{ animationFillMode: "forwards" }}
          >
            We Engineer
            <br />
            <span className="text-[#acc8a2]">Software</span>
            <br />
            That{" "}
            <span className="relative inline-block">
              Scales.
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#acc8a2] rounded-full" />
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="animate-slide-up opacity-0 text-center mt-10 text-lg md:text-xl text-[#8aab82] leading-relaxed max-w-xl delay-200"
            style={{ animationFillMode: "forwards" }}
          >
            Vextor Labs delivers high-performance digital products, scalable
            architectures, and elegant code — from concept to production.
          </p>

          {/* CTAs */}
          <div
            className="animate-slide-up  opacity-0 mt-10 sm:justify-center flex flex-col sm:flex-row gap-4 delay-300"
            style={{ animationFillMode: "forwards" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-[#acc8a2] text-[#1a2517] hover:bg-white font-bold text-base px-8 transition-all duration-200 animate-pulse-glow"
            >
              <a href="#contact">
                Start a Project <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#acc8a2]/40 text-[#acc8a2] hover:bg-[#acc8a2]/10 hover:border-[#acc8a2] font-semibold text-base px-8 transition-all duration-200"
            >
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      {/* Floating tech icons */}
      <div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col gap-6">
        {[Code2, Cpu, Layers].map((Icon, i) => (
          <div
            key={i}
            className="animate-float w-14 h-14 rounded-2xl bg-[#1a2517] border border-[#acc8a2]/20 flex items-center justify-center shadow-lg shadow-black/40"
            style={{ animationDelay: `${i * 0.7}s` }}
          >
            <Icon className="w-6 h-6 text-[#acc8a2]" />
          </div>
        ))}
      </div>
    </section>
  );
}
