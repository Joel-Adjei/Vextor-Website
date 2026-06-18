import { Link } from "react-router-dom"
import { ExternalLink, MessageSquare, Code2 } from "lucide-react"

const footerLinks = [
  { label: "Services", href: "/#services", isAnchor: true },
  { label: "Projects", href: "/projects", isAnchor: false },
  { label: "About", href: "/about", isAnchor: false },
  { label: "Process", href: "/#process", isAnchor: true },
  { label: "Contact", href: "/#contact", isAnchor: true },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#1a2517] border-t border-[#acc8a2]/10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 flex-wrap">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Link to="/">
              <img
                src="/Vextor_Labs_Logo_2.png"
                alt="Vextor Labs"
                className="h-8 w-auto hover:opacity-80 transition-opacity"
              />
            </Link>
            <span className="text-sm text-[#8aab82]">
              &copy; {year} Vextor Labs. All rights reserved.
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {footerLinks.map((item) =>
              item.isAnchor ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs text-[#8aab82] hover:text-[#acc8a2] transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-xs text-[#8aab82] hover:text-[#acc8a2] transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[
              { Icon: Code2, href: "#", label: "GitHub" },
              { Icon: MessageSquare, href: "#", label: "LinkedIn" },
              { Icon: ExternalLink, href: "#", label: "Twitter" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-lg bg-[#acc8a2]/10 flex items-center justify-center text-[#acc8a2] hover:bg-[#acc8a2]/20 hover:text-white transition-all duration-200"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
