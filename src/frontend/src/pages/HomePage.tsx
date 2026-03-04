import { Button } from "@/components/ui/button";
import { SERVICES, STATS } from "@/data/content";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  ClipboardList,
  FileText,
  GitBranch,
  Layers,
  PenTool,
  Route,
  Shield,
  Wrench,
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-6 h-6" />,
  PenTool: <PenTool className="w-6 h-6" />,
  GitBranch: <GitBranch className="w-6 h-6" />,
  Route: <Route className="w-6 h-6" />,
  Wrench: <Wrench className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  ClipboardList: <ClipboardList className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
};

export default function HomePage() {
  const previewServices = SERVICES.slice(0, 6);

  return (
    <main>
      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section
        data-ocid="hero.section"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-infrastructure.dim_1920x900.jpg"
            alt="Infrastructure"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        {/* Blueprint grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-800 text-white leading-[0.95] tracking-tight animate-fade-up-delay-2">
            Sketch to{" "}
            <span className="text-gold relative inline-block">
              Strength
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gold/30 rounded-full" />
            </span>
          </h1>

          <p className="mt-8 text-white/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-3">
            Professional civil engineering drawings, AutoCAD drafting, and
            infrastructure documentation services — precision-engineered from
            concept to execution.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-up-delay-4">
            <Link to="/services">
              <Button
                size="lg"
                data-ocid="hero.primary_button"
                className="bg-gold hover:bg-gold-light text-navy-deep font-semibold px-8 rounded-sm h-12 text-base"
              >
                View Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button
                size="lg"
                variant="outline"
                data-ocid="hero.secondary_button"
                className="border-white/40 text-white hover:bg-white/10 hover:border-white px-8 rounded-sm h-12 text-base bg-transparent"
              >
                Our Projects
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                data-ocid="hero.contact_button"
                className="border-white/40 text-white hover:bg-white/10 hover:border-white px-8 rounded-sm h-12 text-base bg-transparent"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white">
          <span className="text-xs tracking-widest uppercase text-white">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>

        {/* Corner accent marks */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </section>

      {/* ─── Stats Bar ────────────────────────────────────────────── */}
      <section className="section-navy-deep border-y border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-800 text-gold tracking-tight">
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm mt-1 tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Introduction ─────────────────────────────────────────── */}
      <section className="section-light py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium">
                  Who We Are
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-800 text-navy-deep tracking-tight leading-tight">
                About A2 Infrastructure
              </h2>
              <p className="mt-6 text-steel text-base leading-relaxed">
                A2 Infrastructure is a civil engineering drafting and
                infrastructure documentation company providing high-quality
                engineering drawings, fabrication detailing, and technical
                documentation services for railway, water supply, and structural
                infrastructure projects.
              </p>
              <p className="mt-4 text-steel text-base leading-relaxed">
                We focus on delivering accurate, execution-ready drawings and
                documentation compliant with IS codes, Indian Railway standards,
                and infrastructure project requirements.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 text-navy font-semibold hover:text-gold transition-colors group"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-gold/40" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-gold/40" />
              <img
                src="/assets/generated/services-autocad.dim_600x400.jpg"
                alt="Engineering blueprints and AutoCAD drafting"
                className="w-full h-72 object-cover rounded-sm shadow-navy"
              />
              <div className="absolute inset-0 bg-navy-deep/10 rounded-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services Preview ─────────────────────────────────────── */}
      <section className="py-24 bg-white" data-ocid="home.services_section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium">
                What We Do
              </span>
              <div className="w-8 h-px bg-gold" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-800 text-navy-deep tracking-tight">
              Our Core Services
            </h2>
            <p className="mt-3 text-steel max-w-xl mx-auto">
              Comprehensive civil engineering documentation services, from
              detailed drawings to complete project packages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewServices.map((service) => (
              <div
                key={service.id}
                className="service-card bg-white border border-border rounded-sm p-6 hover:shadow-card-hover"
              >
                <div className="w-12 h-12 rounded-sm bg-secondary flex items-center justify-center text-navy mb-4">
                  {ICON_MAP[service.iconName] ?? (
                    <Building2 className="w-6 h-6" />
                  )}
                </div>
                <h3 className="font-display font-700 text-navy-deep text-base mb-2">
                  {service.title}
                </h3>
                <p className="text-steel text-sm leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button
                size="lg"
                data-ocid="home.view_all_services_button"
                className="bg-navy hover:bg-navy-deep text-white font-semibold px-8 rounded-sm h-12"
              >
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ───────────────────────────────────────────── */}
      <section className="blueprint-grid py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-deep/50" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-12 h-1 bg-gold mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-800 text-white tracking-tight">
              Ready to Start Your Project?
            </h2>
            <p className="mt-4 text-white/60 text-lg">
              Get in touch with our engineering team today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link to="/contact">
                <Button
                  size="lg"
                  data-ocid="home.cta_button"
                  className="bg-gold hover:bg-gold-light text-navy-deep font-semibold px-8 rounded-sm h-12 text-base"
                >
                  Get a Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 rounded-sm h-12 text-base bg-transparent"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
