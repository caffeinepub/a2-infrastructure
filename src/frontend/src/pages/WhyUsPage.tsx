import PageHeader from "@/components/PageHeader";
import { WHY_US } from "@/data/content";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Lightbulb,
  Target,
  Zap,
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Target: <Target className="w-8 h-8" />,
  CheckCircle2: <CheckCircle2 className="w-8 h-8" />,
  Award: <Award className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  Lightbulb: <Lightbulb className="w-8 h-8" />,
};

export default function WhyUsPage() {
  return (
    <main>
      <PageHeader
        title="Why Choose A2 Infrastructure"
        subtitle="Engineering partners who bring precision, speed, and reliability to every project deliverable."
      />

      {/* ─── Feature Blocks ──────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {WHY_US.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${i < WHY_US.length - 1 ? "border-b border-border" : ""}`}
                >
                  {/* Icon block */}
                  <div
                    className={`${isEven ? "lg:order-1 bg-secondary/50" : "lg:order-2 section-navy"} flex items-center justify-center p-16`}
                  >
                    <div className="text-center max-w-xs">
                      <div
                        className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${isEven ? "bg-navy text-gold" : "bg-gold text-navy-deep"}`}
                      >
                        {ICON_MAP[item.iconName]}
                      </div>
                      <div
                        className={`font-display font-800 text-5xl tracking-tight ${isEven ? "text-navy/15" : "text-white/15"}`}
                      >
                        {String(item.id).padStart(2, "0")}
                      </div>
                    </div>
                  </div>

                  {/* Text block */}
                  <div
                    className={`${isEven ? "lg:order-2" : "lg:order-1"} p-12 lg:p-16 flex flex-col justify-center`}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-px bg-gold" />
                      <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium">
                        Reason {String(item.id).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-800 text-navy-deep tracking-tight mb-4">
                      {item.title}
                    </h3>
                    <p className="text-steel text-base leading-relaxed max-w-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Differentiators Quick List ──────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium">
                At a Glance
              </span>
              <div className="w-8 h-px bg-gold" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-800 text-navy-deep tracking-tight">
              The A2 Advantage
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              "IS code compliant drawings",
              "AutoCAD & latest drafting tools",
              "Structured QC process",
              "Dedicated project manager",
              "Scalable for large packages",
              "Confidential project handling",
              "Revision support included",
              "Multi-discipline coordination",
              "Competitive turnaround times",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-4 bg-white border border-border rounded-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-navy text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ──────────────────────────────────────────── */}
      <section className="blueprint-grid py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-deep/75" />
        <div className="relative container mx-auto px-4 text-center max-w-2xl">
          <div className="w-12 h-1 bg-gold mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-800 text-white tracking-tight">
            Partner with Precision
          </h2>
          <p className="mt-4 text-white/65 text-lg leading-relaxed">
            Experience engineering documentation that's accurate, timely, and
            built for the field. Let's discuss how A2 Infrastructure can support
            your next project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link to="/contact">
              <button
                type="button"
                className="px-8 py-3.5 bg-gold hover:bg-gold-light text-navy-deep font-semibold rounded-sm transition-colors flex items-center gap-2"
              >
                Contact Us Today <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link to="/projects">
              <button
                type="button"
                className="px-8 py-3.5 border border-white/30 text-white hover:bg-white/10 rounded-sm transition-colors"
              >
                View Our Projects
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
