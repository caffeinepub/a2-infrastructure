import PageHeader from "@/components/PageHeader";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  ClipboardList,
  FileText,
  Layers,
  PenTool,
  Route,
  Shield,
  Train,
  Wrench,
} from "lucide-react";

interface ServiceCategory {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  subItems?: string[];
}

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 1,
    title: "AutoCAD Drafting",
    description:
      "Preparation and modification of engineering drawings using AutoCAD including corrections, redrawing, and detailed updates across all civil and infrastructure disciplines.",
    icon: <PenTool className="w-7 h-7" />,
  },
  {
    id: 2,
    title: "Civil & Structural Drawings",
    description:
      "Comprehensive civil and structural drawing packages compliant with IS codes for all infrastructure components.",
    icon: <Building2 className="w-7 h-7" />,
    subItems: [
      "Foundation drawings",
      "Boundary wall drawings",
      "Building layout drawings",
      "Staff quarter layouts",
      "Drainage drawings",
      "Platform drawings",
    ],
  },
  {
    id: 3,
    title: "Pipeline Engineering Drawings",
    description:
      "Detailed pipeline engineering drawings for water supply, oil & gas, and utility crossing projects across railways and highways.",
    icon: <Route className="w-7 h-7" />,
    subItems: [
      "Water pipeline crossing drawings across railway lines and highways",
      "Open trench pipeline laying drawings",
      "Horizontal Directional Drilling (HDD) drawings",
      "Trench cross sections",
      "Centralizer details",
      "Pipe material specifications",
      "Grouting details",
    ],
  },
  {
    id: 4,
    title: "Railway Infrastructure Drawings",
    description:
      "Specialized railway structural and fabrication drawings from component design to complete shop fabrication packages.",
    icon: <Train className="w-7 h-7" />,
    subItems: [
      "Railway structural drawings",
      "Bridge component drawings",
      "Assembly drawings",
      "General arrangement drawings",
      "Sectional drawings",
      "Shop fabrication drawings",
    ],
  },
  {
    id: 5,
    title: "Steel Fabrication Design",
    description:
      "Detailed steel fabrication drawings for structural steel components with complete cutting lists and workshop packages.",
    icon: <Wrench className="w-7 h-7" />,
    subItems: [
      "Fabrication drawings for plates, channels, angles, stiffeners, brackets and base plates",
      "Channel sleeper fabrication drawings",
      "H-beam sleeper fabrication drawings",
      "Steel structural fabrication layouts",
      "Workshop cutting lists",
    ],
  },
  {
    id: 6,
    title: "Structural Detailing",
    description:
      "Complete structural detailing for PEB structures, trusses, and industrial building components.",
    icon: <Layers className="w-7 h-7" />,
    subItems: [
      "PEB structure detailing",
      "Truss member detailing",
      "Purlins and side runner drawings",
      "Bracing system drawings",
    ],
  },
  {
    id: 7,
    title: "Engineering Documentation",
    description:
      "Accurate BOQ, quantity takeoff, and cost estimation services for civil, structural, and pipeline works.",
    icon: <ClipboardList className="w-7 h-7" />,
    subItems: [
      "BOQ preparation",
      "Quantity takeoff",
      "Bill of materials",
      "Steel weight calculation",
      "Rate analysis",
      "Cost estimation",
    ],
  },
  {
    id: 8,
    title: "Construction Documentation",
    description:
      "Site-ready construction documentation packages for billing, progress tracking, and measurement.",
    icon: <FileText className="w-7 h-7" />,
    subItems: [
      "Bar Bending Schedule (BBS)",
      "Measurement sheets",
      "Abstract sheets",
      "Billing sheets",
      "Daily progress reports (DPR)",
    ],
  },
  {
    id: 9,
    title: "Quality Documentation",
    description:
      "Quality assurance documentation ensuring compliance with industry standards, IS codes, and Indian Railway inspection requirements.",
    icon: <Shield className="w-7 h-7" />,
    subItems: [
      "Quality assurance plan (QAP)",
      "Welding procedure specification (WPS)",
      "Inspection documentation",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive civil engineering documentation and drafting services for infrastructure projects of all scales."
      />

      {/* ─── Services Detailed List ───────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro eyebrow */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium">
              Full Service Offering
            </span>
          </div>

          <div className="space-y-6" data-ocid="services.list">
            {SERVICE_CATEGORIES.map((service) => (
              <article
                key={service.id}
                data-ocid={`services.item.${service.id}`}
                className="service-card group bg-white border-2 border-border rounded-sm overflow-hidden hover:shadow-card-hover hover:border-gold/50"
              >
                {/* Card inner: icon-left layout on md+, stacked on mobile */}
                <div className="flex flex-col md:flex-row">
                  {/* Left accent column */}
                  <div className="flex-shrink-0 bg-navy-deep md:w-20 flex md:flex-col items-center justify-start p-5 md:py-8 gap-4 md:gap-0 relative overflow-hidden">
                    {/* Blueprint dots */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
                        backgroundSize: "12px 12px",
                      }}
                    />
                    {/* Number */}
                    <span className="relative font-display font-800 text-gold/30 text-4xl leading-none md:mb-4 md:mt-0 order-2 md:order-1">
                      {String(service.id).padStart(2, "0")}
                    </span>
                    {/* Icon */}
                    <div className="relative text-gold order-1 md:order-2">
                      {service.icon}
                    </div>
                    {/* Bottom accent line on hover */}
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </div>

                  {/* Right content */}
                  <div className="flex-1 p-6 md:p-8">
                    <h3 className="font-display font-700 text-navy-deep text-xl md:text-2xl mb-3 group-hover:text-navy transition-colors tracking-tight leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-steel text-sm md:text-base leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {service.subItems && service.subItems.length > 0 && (
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                        {service.subItems.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-steel"
                          >
                            <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process Section ─────────────────────────────────────── */}
      <section className="py-24 section-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium">
                How We Work
              </span>
              <div className="w-8 h-px bg-gold" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-800 text-navy-deep tracking-tight">
              Our Delivery Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-1/8 right-1/8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            {[
              {
                step: "01",
                title: "Brief & Scope",
                desc: "Define project requirements, standards, and deliverable formats.",
              },
              {
                step: "02",
                title: "Review & Plan",
                desc: "Assess drawings, data, and existing documentation to build a work plan.",
              },
              {
                step: "03",
                title: "Draft & Develop",
                desc: "Precise drafting and documentation following agreed specifications.",
              },
              {
                step: "04",
                title: "QC & Deliver",
                desc: "Quality check against standards, then deliver execution-ready packages.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center relative">
                <div className="w-20 h-20 rounded-full border-2 border-navy bg-white flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="font-display font-800 text-2xl text-gold">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-display font-700 text-navy-deep text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-steel text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="section-navy-deep py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-px bg-gold/50" />
            <BookOpen className="w-4 h-4 text-gold" />
            <div className="w-8 h-px bg-gold/50" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-800 text-white tracking-tight">
            Need a Specific Service?
          </h2>
          <p className="mt-4 text-white/60 text-lg max-w-lg mx-auto">
            Tell us about your project and we'll put together the right
            documentation package for you.
          </p>
          <div className="mt-8">
            <Link to="/contact">
              <button
                type="button"
                data-ocid="services.cta_button"
                className="px-10 py-3.5 bg-gold hover:bg-gold-light text-navy-deep font-semibold rounded-sm transition-colors inline-flex items-center gap-2"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
