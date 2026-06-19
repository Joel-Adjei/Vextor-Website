import {
  Atom,
  Database,
  Cloud,
  Layers,
  Server,
  Terminal,
  Code2,
  GitBranch,
  Box,
  Cpu,
  Zap,
  Globe,
  Network,
  Lock,
  BarChart3,
  Workflow,
} from "lucide-react";

import {
  SiTypescript,
  SiRust,
  SiGo,
  SiPostgresql,
  SiKubernetes,
  SiReact,
  SiPython,
  SiCloudflare,
  SiTerraform,
  SiGraphql,
  SiDocker,
  SiNextdotjs,
} from "react-icons/si";

const techs = [
  { name: "React", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Kubernetes", Icon: SiKubernetes },
  { name: "Node.js", Icon: Server },
  { name: "Python", Icon: SiPython },
  { name: "AWS", Icon: Cloud },
  { name: "Cloudflare", Icon: SiCloudflare },
  { name: "Terraform", Icon: SiTerraform },
  { name: "GraphQL", Icon: SiGraphql },
  { name: "Docker", Icon: SiDocker },
  { name: "Redis", Icon: Zap },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Go", Icon: SiGo },
  { name: "Rust", Icon: SiRust },
  { name: "MongoDB", Icon: Database },
  { name: "Kafka", Icon: Network },
  { name: "Security", Icon: Lock },
  { name: "Analytics", Icon: BarChart3 },
];

export function TechTicker() {
  // Duplicate the list to create seamless loop
  const doubled = [...techs, ...techs];

  return (
    <div className="relative bg-[#0d1610] border-y border-[#acc8a2]/15 py-5 overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0d1610] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0d1610] to-transparent z-10 pointer-events-none" />

      <div className="ticker-track flex gap-12 items-center w-max">
        {doubled.map((tech, i) => (
          <div key={i} className="flex items-center gap-3 shrink-0 group">
            <div className="w-15 h-15 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
              <tech.Icon className="w-30 h-30 lg:w-66 lg:h-66 text-[#acc8a2]" />
            </div>
            {/* <span className="text-lg font-bold tracking-[0.15em] uppercase text-[#acc8a2]/70 group-hover:text-[#acc8a2] transition-colors whitespace-nowrap">
              {tech.name}
            </span> */}
            <span className="text-[#acc8a2]/25 text-xs ml-6">•</span>
          </div>
        ))}
      </div>

      <style>{`
        .ticker-track {
          animation: ticker-scroll 40s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
