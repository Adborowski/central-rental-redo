interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="relative overflow-hidden bg-primary-900 text-white">
      {/* Subtle radial accents */}
      <div className="absolute -top-24 right-[-10%] w-[28rem] h-[28rem] rounded-full bg-primary-700/40 blur-3xl" />
      <div className="absolute -bottom-32 left-[-5%] w-80 h-80 rounded-full bg-accent-600/15 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-14 md:pt-20 md:pb-16">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-300 mb-3 animate-fade-up">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight animate-fade-up delay-75">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg text-sand-200/70 mt-4 max-w-xl animate-fade-up delay-150">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
