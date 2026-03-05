import PageHeader from "@/components/PageHeader";
import { PROJECTS } from "@/data/content";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building,
  ClipboardList,
  Droplets,
  FileText,
  PenTool,
  Pipette,
  Train,
  Wrench,
} from "lucide-react";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Railway: <Train className="w-5 h-5" />,
  Pipeline: <Pipette className="w-5 h-5" />,
  Structural: <Building className="w-5 h-5" />,
  "Water Infra": <Droplets className="w-5 h-5" />,
  ESR: <Droplets className="w-5 h-5" />,
  "Steel Fab": <Wrench className="w-5 h-5" />,
  AutoCAD: <PenTool className="w-5 h-5" />,
  BOQ: <ClipboardList className="w-5 h-5" />,
  Documentation: <FileText className="w-5 h-5" />,
};

const CATEGORY_COLORS: Record<string, string> = {
  Railway: "bg-blue-600",
  Pipeline: "bg-orange-600",
  Structural: "bg-slate-600",
  "Water Infra": "bg-cyan-700",
  ESR: "bg-teal-700",
  "Steel Fab": "bg-zinc-700",
  AutoCAD: "bg-violet-700",
  BOQ: "bg-green-700",
  Documentation: "bg-emerald-700",
};

// Map project IDs to generated images
const PROJECT_IMAGES: Record<number, string> = {
  1: "/assets/generated/project-railway.dim_600x400.jpg",
  2: "/assets/generated/project-pipeline.dim_600x400.jpg",
  3: "/assets/uploads/ChatGPT-Image-Mar-4-2026-10_00_35-PM-1-1.png",
  4: "/assets/generated/project-esr-water.dim_600x400.jpg",
  5: "/assets/generated/project-steel-fab.dim_600x400.jpg",
  6: "/assets/generated/project-autocad-infra.dim_600x400.jpg",
  7: "/assets/generated/project-boq-estimation.dim_600x400.jpg",
};

export default function ProjectsPage() {
  return (
    <main>
      <PageHeader
        title="Our Projects"
        subtitle="A selection of engineering documentation works delivered across diverse infrastructure domains."
      />

      {/* ─── Projects Grid ───────────────────────────────────────── */}
      <section className="py-24 section-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-ocid="projects.list"
          >
            {PROJECTS.map((project) => {
              const imageUrl = PROJECT_IMAGES[project.id];
              return (
                <article
                  key={project.id}
                  data-ocid={`projects.item.${project.id}`}
                  className="service-card group bg-white border-2 border-border rounded-sm overflow-hidden hover:shadow-card-hover"
                >
                  {/* Card Image or Blueprint Placeholder */}
                  {imageUrl ? (
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Gradient overlay at bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
                      {/* Category badge over image */}
                      <div className="absolute bottom-3 left-3">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-white text-xs font-medium ${CATEGORY_COLORS[project.badge] || "bg-navy-light"}`}
                        >
                          {CATEGORY_ICONS[project.badge]}
                          {project.badge}
                        </span>
                      </div>
                      {/* Number badge top-right */}
                      <div className="absolute top-3 right-3">
                        <span className="font-display font-800 text-white/70 text-2xl drop-shadow-sm">
                          {String(project.id).padStart(2, "0")}
                        </span>
                      </div>
                      {/* Bottom accent line on hover */}
                      <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gold transition-all duration-500" />
                    </div>
                  ) : (
                    /* Blueprint grid placeholder for cards without images */
                    <div className="bg-navy-deep h-48 relative overflow-hidden">
                      <div
                        className="absolute inset-0 opacity-15"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                          backgroundSize: "24px 24px",
                        }}
                      />
                      {/* Category badge */}
                      <div className="absolute bottom-3 left-3 relative z-10">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-white text-xs font-medium ${CATEGORY_COLORS[project.badge] || "bg-navy-light"}`}
                        >
                          {CATEGORY_ICONS[project.badge]}
                          {project.badge}
                        </span>
                      </div>
                      {/* Number */}
                      <div className="absolute top-3 right-4 relative z-10">
                        <span className="text-white/20 font-display font-800 text-4xl">
                          {String(project.id).padStart(2, "0")}
                        </span>
                      </div>
                      {/* Bottom accent line on hover */}
                      <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gold transition-all duration-500 z-10" />
                    </div>
                  )}

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="font-display font-700 text-navy-deep text-lg leading-tight mb-3 group-hover:text-navy transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-steel text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Category label */}
                    <div className="flex items-center gap-2 pt-4 border-t border-border">
                      <span className="text-navy/40 text-xs uppercase tracking-widest">
                        Domain
                      </span>
                      <span className="text-xs font-medium text-navy">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Stats ───────────────────────────────────────────────── */}
      <section className="section-navy-deep py-16 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "200+", label: "Projects Completed" },
              { value: "15+", label: "Project Categories" },
              { value: "100%", label: "On-Time Delivery" },
              { value: "2+", label: "Years of Experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl md:text-4xl font-800 text-gold">
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-800 text-navy-deep tracking-tight">
            Have a Similar Project?
          </h2>
          <p className="mt-4 text-steel text-lg max-w-lg mx-auto">
            We'd be glad to discuss your requirements and deliver the
            documentation you need.
          </p>
          <div className="mt-8">
            <Link to="/contact">
              <button
                type="button"
                data-ocid="projects.cta_button"
                className="px-10 py-3.5 bg-navy hover:bg-navy-deep text-white font-semibold rounded-sm transition-colors inline-flex items-center gap-2"
              >
                Start a Conversation <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
