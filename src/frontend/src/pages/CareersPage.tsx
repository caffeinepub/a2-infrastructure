import PageHeader from "@/components/PageHeader";
import { Briefcase, ChevronRight, Clock, MapPin } from "lucide-react";

const openings = [
  {
    title: "AutoCAD Drafter",
    type: "Full-time",
    location: "Remote / On-site",
    description:
      "Prepare and modify civil & structural engineering drawings using AutoCAD. Experience in infrastructure, pipeline, or railway drawings preferred.",
  },
  {
    title: "Civil Engineering Estimator",
    type: "Full-time",
    location: "Remote",
    description:
      "Prepare BOQ, quantity takeoff, rate analysis, and cost estimation for civil infrastructure projects. Knowledge of IS codes required.",
  },
  {
    title: "Structural Detailing Engineer",
    type: "Contract / Full-time",
    location: "Remote",
    description:
      "Produce detailed structural drawings including PEB detailing, truss members, purlins, and bracing systems. Experience with fabrication drawings is a plus.",
  },
  {
    title: "Documentation Specialist",
    type: "Part-time / Contract",
    location: "Remote",
    description:
      "Prepare construction documents including BBS, measurement sheets, DPR, QAP, and WPS for infrastructure projects.",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Careers"
        subtitle="Join our team of engineering professionals and help build India's infrastructure future."
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h2 className="text-3xl font-display font-bold text-navy-deep mb-4">
            Build Your Career with A2 Infrastructure
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We are a growing civil engineering drafting and documentation
            company based in India. We work on railway, pipeline, water supply,
            and structural projects — and we're always looking for dedicated
            professionals who take pride in accurate, execution-ready technical
            work.
          </p>
        </div>
      </section>

      {/* Openings */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-navy-deep mb-10 text-center">
            Current Openings
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {openings.map((job, i) => (
              <div
                key={job.title}
                data-ocid={`careers.job.${i + 1}`}
                className="bg-white border border-slate-200 rounded-sm p-6 hover:border-gold/50 hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-navy-deep/5 rounded-sm group-hover:bg-gold/10 transition-colors">
                    <Briefcase className="w-5 h-5 text-navy-deep group-hover:text-gold transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-navy-deep text-lg mb-1">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-16 bg-navy-deep text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-display font-bold mb-4">
            Interested in Joining Us?
          </h2>
          <p className="text-white/70 mb-8">
            Send your resume and a brief introduction to our email. We review
            all applications and get back to shortlisted candidates within a
            week.
          </p>
          <a
            href="mailto:ainfra2structure@gmail.com?subject=Career%20Application%20-%20A2%20Infrastructure"
            data-ocid="careers.apply_button"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy-deep font-semibold px-8 py-3 rounded-sm transition-colors"
          >
            Apply via Email
            <ChevronRight className="w-4 h-4" />
          </a>
          <p className="mt-4 text-white/40 text-sm">
            ainfra2structure@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
}
