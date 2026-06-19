import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

import logoText from "@/assets/text_logo.png";

const navLinks = [
  { label: "Services", href: "/services", isAnchor: false },
  { label: "Projects", href: "/projects", isAnchor: false },
  { label: "About", href: "/about", isAnchor: false },
  { label: "Contact", href: "/contact", isAnchor: false },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const bgClass =
    scrolled || !isHome
      ? "bg-background/10 backdrop-blur-md shadow-lg shadow-black/20"
      : "bg-transparent";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}
      >
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <img
              src={logoText}
              alt="Vextor Labs"
              className="h-5 md:h-7 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive =
                !link.isAnchor && location.pathname === link.href;

              const baseClass =
                "text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#acc8a2] hover:after:w-full after:transition-all after:duration-300";
              const colorClass = isActive
                ? "text-white after:w-full"
                : "text-[#acc8a2] hover:text-white";

              if (link.isAnchor) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`${baseClass} ${colorClass}`}
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={`${baseClass} ${colorClass}`}
                >
                  {link.label}
                </NavLink>
              );
            })}
            <Button
              asChild
              className="bg-[#acc8a2] text-[#1a2517] hover:bg-white font-semibold text-sm px-5 transition-all duration-200"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#acc8a2] hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {open && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`md:hidden fixed inset-y-0 right-0 z-50 w-[85vw] max-w-xs transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="h-full bg-[#1a2517]/98 backdrop-blur-md px-6 py-6 flex flex-col gap-4 border-l border-[#acc8a2]/20 shadow-2xl shadow-black/30">
          {navLinks.map((link) => {
            if (link.isAnchor) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-[#acc8a2] hover:text-white py-2 transition-colors"
                >
                  {link.label}
                </a>
              );
            }
            return (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `text-sm font-medium py-2 transition-colors ${
                    isActive ? "text-white" : "text-[#acc8a2] hover:text-white"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            );
          })}
          <div className="mt-auto">
            <Button
              asChild
              className="bg-[#acc8a2] text-[#1a2517] hover:bg-white font-semibold text-sm w-full"
            >
              <Link to="/contact" onClick={() => setOpen(false)}>
                Get in Touch
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
