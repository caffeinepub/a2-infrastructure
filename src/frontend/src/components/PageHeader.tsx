import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function PageHeader({
  title,
  subtitle,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative pt-32 pb-20 blueprint-grid overflow-hidden",
        className,
      )}
    >
      {/* Decorative corner marks */}
      <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-gold/60" />
      <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-gold/60" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-gold/60" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-gold/60" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-8 h-px bg-gold/70" />
          <span className="text-gold/80 text-xs tracking-[0.2em] uppercase font-medium">
            A2 Infrastructure
          </span>
          <div className="w-8 h-px bg-gold/70" />
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-800 text-white tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
