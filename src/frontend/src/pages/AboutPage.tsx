import PageHeader from "@/components/PageHeader";
import { COMPANY_VALUES, EXPERTISE_AREAS } from "@/data/content";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Crosshair,
  Eye,
  Lightbulb,
  ShieldCheck,
  Target,
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Crosshair: <Crosshair className="w-7 h-7" />,
  ShieldCheck: <ShieldCheck className="w-7 h-7" />,
  Lightbulb: <Lightbulb className="w-7 h-7" />,
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="About Us"
        subtitle="Precision-driven civil engineering documentation, built on deep technical expertise."
      />

      {/* ─── Company Introduction ────────────────────────────────── */}
      <section className="py-24 section-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium">
                  Our Story
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-800 text-navy-deep tracking-tight leading-tight">
                Engineering Excellence,{" "}
                <span className="text-gold">Document to Document</span>
              </h2>
              <p className="mt-6 text-steel text-base leading-relaxed">
                A2 Infrastructure provides professional civil engineering
                drafting, design, estimation, and infrastructure documentation
                services. We are committed to delivering precise,
                execution-ready engineering documentation — from concept to
                completion.
              </p>
              <p className="mt-4 text-steel text-base leading-relaxed">
                The company specializes in engineering drawings, fabrication
                detailing, and technical documentation for railway
                infrastructure, pipeline projects, and water supply schemes. We
                focus on delivering accurate, execution-ready drawings and
                documentation compliant with IS codes, Indian Railway standards,
                and infrastructure project requirements.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "Railway infrastructure — structural, fabrication & shop drawings",
                  "Water pipeline crossing drawings across railways & highways",
                  "Steel fabrication detailing with workshop cutting lists",
                  "ESR, sump & WTP structural drawings",
                  "BOQ preparation, quantity takeoff & cost estimation",
                  "Bar Bending Schedule & construction documentation",
                  "Quality Assurance Plan & Welding Procedure Specifications",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-steel text-sm"
                  >
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-gold/40" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-gold/40" />
              <img
                src="/assets/uploads/ChatGPT-Image-Mar-4-2026-10_00_35-PM-1.png"
                alt="Engineering workspace with AutoCAD drawings"
                className="w-full h-80 object-cover rounded-sm shadow-navy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Mission & Vision ────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium">
                Our Direction
              </span>
              <div className="w-8 h-px bg-gold" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-800 text-navy-deep tracking-tight">
              Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mission */}
            <div className="relative p-8 border-2 border-navy/20 rounded-sm bg-secondary/40 hover:border-gold/50 transition-colors group">
              <div className="absolute top-0 left-8 -translate-y-1/2 bg-gold px-3 py-1 rounded-sm">
                <span className="font-display font-700 text-navy-deep text-xs tracking-widest uppercase">
                  Mission
                </span>
              </div>
              <div className="w-12 h-12 rounded-sm bg-navy flex items-center justify-center mb-6 mt-2 group-hover:bg-navy-light transition-colors">
                <Target className="w-6 h-6 text-gold" />
              </div>
              <p className="text-steel text-base leading-relaxed">
                "To deliver accurate, execution-ready engineering documentation
                that empowers projects to move from blueprint to reality — on
                time and within budget."
              </p>
            </div>

            {/* Vision */}
            <div className="relative p-8 border-2 border-navy/20 rounded-sm bg-secondary/40 hover:border-gold/50 transition-colors group">
              <div className="absolute top-0 left-8 -translate-y-1/2 bg-navy px-3 py-1 rounded-sm">
                <span className="font-display font-700 text-white text-xs tracking-widest uppercase">
                  Vision
                </span>
              </div>
              <div className="w-12 h-12 rounded-sm bg-gold flex items-center justify-center mb-6 mt-2 group-hover:opacity-90 transition-opacity">
                <Eye className="w-6 h-6 text-navy-deep" />
              </div>
              <p className="text-steel text-base leading-relaxed">
                "To be India's most trusted civil engineering drafting partner,
                known for precision, reliability, and technical excellence."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Expertise Areas ─────────────────────────────────────── */}
      <section className="py-24 section-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium">
                What We Know
              </span>
              <div className="w-8 h-px bg-gold" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-800 text-navy-deep tracking-tight">
              Areas of Expertise
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {EXPERTISE_AREAS.map((area) => (
              <span
                key={area}
                className="px-4 py-2 border-2 border-navy/20 text-navy font-medium text-sm rounded-sm bg-white hover:border-gold hover:text-gold transition-colors cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Values ──────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium">
                Core Principles
              </span>
              <div className="w-8 h-px bg-gold" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-800 text-navy-deep tracking-tight">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {COMPANY_VALUES.map((value) => (
              <div
                key={value.title}
                className="service-card border border-border rounded-sm text-center hover:shadow-card-hover overflow-hidden"
              >
                <div className="p-8">
                  <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center mx-auto mb-5 text-gold">
                    {ICON_MAP[value.iconName]}
                  </div>
                  <h3 className="font-display font-700 text-navy-deep text-lg mb-3">
                    {value.title}
                  </h3>
                  <p className="text-steel text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="blueprint-grid py-20 relative">
        <div className="absolute inset-0 bg-navy-deep/60" />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-800 text-white tracking-tight">
            Let's Build Something Together
          </h2>
          <p className="mt-4 text-white/60 text-lg max-w-lg mx-auto">
            Ready to discuss your project requirements? Our team is here to
            help.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/services">
              <button
                type="button"
                className="px-8 py-3 bg-gold hover:bg-gold-light text-navy-deep font-semibold rounded-sm transition-colors flex items-center gap-2"
              >
                Our Services <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link to="/contact">
              <button
                type="button"
                className="px-8 py-3 border border-white/30 text-white hover:bg-white/10 rounded-sm transition-colors"
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
