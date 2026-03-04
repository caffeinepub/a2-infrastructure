// ─── Static content for A2 Infrastructure ────────────────────────

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string;
  badge: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "AutoCAD Drafting",
    description:
      "Preparation and modification of engineering drawings using AutoCAD including corrections, redrawing, and detailed updates across all infrastructure disciplines.",
    iconName: "PenTool",
  },
  {
    id: 2,
    title: "Civil & Structural Drawings",
    description:
      "Comprehensive civil and structural drawing packages compliant with IS codes — foundation drawings, boundary wall drawings, building layout drawings, staff quarter layouts, drainage drawings, and platform drawings.",
    iconName: "Building2",
  },
  {
    id: 3,
    title: "Pipeline Engineering Drawings",
    description:
      "Water pipeline crossing drawings across railway lines and highways, open trench pipeline laying, HDD drawings, trench cross sections, centralizer details, pipe material specifications, and grouting details.",
    iconName: "GitBranch",
  },
  {
    id: 4,
    title: "Railway Infrastructure Drawings",
    description:
      "Specialized railway structural drawings including bridge component drawings, assembly drawings, general arrangement drawings, sectional drawings, and shop fabrication drawings.",
    iconName: "Route",
  },
  {
    id: 5,
    title: "Steel Fabrication Design",
    description:
      "Fabrication drawings for plates, channels, angles, stiffeners, brackets and base plates; channel sleeper fabrication drawings; H-beam sleeper fabrication drawings; steel structural fabrication layouts; and workshop cutting lists.",
    iconName: "Wrench",
  },
  {
    id: 6,
    title: "Structural Detailing",
    description:
      "PEB structure detailing, truss member detailing, purlins and side runner drawings, and bracing system drawings for industrial and infrastructure projects.",
    iconName: "Layers",
  },
  {
    id: 7,
    title: "Engineering Documentation",
    description:
      "BOQ preparation, quantity takeoff, bill of materials, steel weight calculation, rate analysis, and cost estimation for civil and structural works.",
    iconName: "ClipboardList",
  },
  {
    id: 8,
    title: "Construction Documentation",
    description:
      "Bar Bending Schedule (BBS), measurement sheets, abstract sheets, billing sheets, and daily progress reports for site-ready construction packages.",
    iconName: "FileText",
  },
  {
    id: 9,
    title: "Quality Documentation",
    description:
      "Quality assurance plan (QAP), welding procedure specification (WPS), and inspection documentation ensuring compliance with industry and railway standards.",
    iconName: "Shield",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "Railway Infrastructure Fabrication Drawings",
    category: "Railway Infrastructure",
    badge: "Railway",
    description:
      "Detailed fabrication and structural drawings for railway infrastructure components including bridge elements, sleepers, and assembly packages compliant with Indian Railway standards.",
  },
  {
    id: 2,
    title: "Pipeline Crossing Drawings — Railway & Highway",
    category: "Pipeline Engineering",
    badge: "Pipeline",
    description:
      "HDD bore path drawings and open trench pipeline crossing documentation for railway and highway crossings — complete with casing pipe details, centralizer placements, and regulatory compliance packages.",
  },
  {
    id: 3,
    title: "Water Supply Infrastructure Projects",
    category: "Water Infrastructure",
    badge: "Water Infra",
    description:
      "End-to-end drawing packages for water supply schemes including distribution network drawings, pipeline route maps, and structural details for pump houses and allied structures.",
  },
  {
    id: 4,
    title: "ESR Structural Drawings",
    category: "Water Infrastructure",
    badge: "ESR",
    description:
      "Structural drawings for Elevated Service Reservoirs (ESR) including staging design, RCC container detailing, roof slab reinforcement, and foundation layout with waterproofing specifications.",
  },
  {
    id: 5,
    title: "Steel Fabrication Detailing",
    category: "Steel Fabrication",
    badge: "Steel Fab",
    description:
      "Complete fabrication drawing packages for structural steel components — channels, plates, angles, stiffeners, base plates, and connection details with workshop cutting lists and weld callouts.",
  },
  {
    id: 6,
    title: "Infrastructure AutoCAD Drawings",
    category: "AutoCAD Drafting",
    badge: "AutoCAD",
    description:
      "High-precision 2D AutoCAD drawings for infrastructure projects including general arrangement drawings, site layout plans, cross-sections, and as-built documentation across multiple domains.",
  },
  {
    id: 7,
    title: "BOQ & Quantity Estimation Documents",
    category: "Engineering Documentation",
    badge: "BOQ",
    description:
      "Comprehensive Bill of Quantities and quantity estimation packages for civil, structural, and pipeline works — including steel weight calculations, rate analysis, and cost estimation aligned with current market rates.",
  },
];

export const STATS = [
  { value: "2+", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "10+", label: "Happy Clients" },
  { value: "15+", label: "Services Offered" },
];

export const WHY_US = [
  {
    id: 1,
    title: "Accurate Engineering Drawings",
    description:
      "Every drawing meets industry standards with precise dimensions, annotations, and specifications ready for on-site execution. We use IS codes, Indian Railway standards, and international drafting standards as the baseline for all deliverables.",
    iconName: "Target",
  },
  {
    id: 2,
    title: "Execution-Ready Documentation",
    description:
      "Our deliverables are prepared for immediate use on-site, reducing revision cycles and project delays. From BOQ to method statements, every document is structured for practical use by execution teams.",
    iconName: "CheckCircle2",
  },
  {
    id: 3,
    title: "Compliance with Industry Standards",
    description:
      "We follow IS codes, Indian Railway standards, and client-specific specifications ensuring full compliance across all engineering documentation. Consistency in notation and drawing style across all project deliverables.",
    iconName: "Award",
  },
  {
    id: 4,
    title: "Fast Delivery",
    description:
      "Committed turnaround times with structured workflows to meet your project deadlines consistently. We understand that delays in documentation can cascade into costly construction delays.",
    iconName: "Zap",
  },
  {
    id: 5,
    title: "Technical Expertise",
    description:
      "Specialized knowledge across railway infrastructure, pipeline engineering, water supply, and steel fabrication domains — bringing deep technical proficiency to every documentation package.",
    iconName: "Lightbulb",
  },
];

export const EXPERTISE_AREAS = [
  "AutoCAD Drafting",
  "Railway Infrastructure",
  "Pipeline Engineering",
  "Civil & Structural Drawings",
  "Steel Fabrication Detailing",
  "BOQ & Estimation",
  "Water Supply Schemes",
  "ESR / Sump / WTP",
  "Structural Detailing",
  "Bar Bending Schedule",
  "Quality Documentation",
  "IS Code Compliance",
];

export const COMPANY_VALUES = [
  {
    title: "Precision",
    description:
      "Engineering-grade accuracy in every drawing, schedule, and document we produce. No approximations.",
    iconName: "Crosshair",
  },
  {
    title: "Reliability",
    description:
      "Consistent quality and on-time delivery that you can count on, project after project.",
    iconName: "ShieldCheck",
  },
  {
    title: "Innovation",
    description:
      "Adopting modern drafting tools and best practices to deliver smarter, faster engineering solutions.",
    iconName: "Lightbulb",
  },
];
