import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", to: "/", ocid: "nav.home_link" },
  { label: "About", to: "/about", ocid: "nav.about_link" },
  { label: "Services", to: "/services", ocid: "nav.services_link" },
  { label: "Projects", to: "/projects", ocid: "nav.projects_link" },
  { label: "Why Us", to: "/why-us", ocid: "nav.whyus_link" },
  { label: "Contact", to: "/contact", ocid: "nav.contact_link" },
  { label: "Careers", to: "/careers", ocid: "nav.careers_link" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: close menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-navy-deep/95 backdrop-blur-md shadow-navy border-b border-white/10"
            : "bg-transparent",
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group"
              data-ocid="nav.home_link"
            >
              <img
                src="/assets/uploads/ChatGPT_Image_Nov_16__2025__01_49_34_PM-removebg-preview-1-1.png"
                alt="A2 Infrastructure — Sketch to Strength"
                className="h-12 w-auto object-contain"
              />
              <span className="text-white font-display font-800 text-sm tracking-[0.12em] uppercase leading-tight">
                A2 INFRASTRUCTURE
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid={link.ocid}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors rounded-sm",
                    "text-white/70 hover:text-white",
                    isActive(link.to) && "text-gold nav-link-active",
                  )}
                >
                  {link.label}
                  {isActive(link.to) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold" />
                  )}
                </Link>
              ))}
              <Link to="/contact">
                <Button
                  size="sm"
                  className="ml-4 bg-gold hover:bg-gold-light text-navy-deep font-semibold px-5 rounded-sm"
                >
                  Get a Quote
                </Button>
              </Link>
            </nav>

            {/* Mobile Toggle */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              data-ocid="nav.mobile_toggle"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-navy-deep/98 backdrop-blur-md flex flex-col pt-20 pb-8 px-6">
          <nav className="flex flex-col gap-2 mt-4">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={link.ocid}
                className={cn(
                  "px-4 py-3 text-lg font-medium border-b border-white/10",
                  "text-white/70 hover:text-white transition-colors",
                  isActive(link.to) && "text-gold",
                  `animate-fade-up-delay-${Math.min(i + 1, 4)}`,
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8">
            <Link to="/contact">
              <Button className="w-full bg-gold hover:bg-gold-light text-navy-deep font-semibold rounded-sm py-3 text-base">
                Get a Quote
              </Button>
            </Link>
          </div>
          <div className="mt-auto pt-8 border-t border-white/10">
            <p className="text-white/30 text-sm">ainfra2structure@gmail.com</p>
            <p className="mt-1 text-white/30 text-sm">+91-8544127517</p>
            <div className="flex items-center gap-3 mt-4">
              {[
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/a2-infrastructure/",
                  icon: (
                    <svg
                      role="img"
                      aria-label="LinkedIn"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <title>LinkedIn</title>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/a2infrastructure/",
                  icon: (
                    <svg
                      role="img"
                      aria-label="Instagram"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <title>Instagram</title>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  ),
                },
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/a2infrastructure/",
                  icon: (
                    <svg
                      role="img"
                      aria-label="Facebook"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <title>Facebook</title>
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  label: "WhatsApp",
                  href: "https://wa.me/918544127517",
                  icon: (
                    <svg
                      role="img"
                      aria-label="WhatsApp"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <title>WhatsApp</title>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-sm border border-white/15 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/50 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
