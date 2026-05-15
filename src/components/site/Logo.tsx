type Props = { className?: string; textClassName?: string; iconSize?: number };

export function Logo({ className = "", textClassName = "", iconSize = 40 }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="samaGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--brand-bright)" />
            <stop offset="100%" stopColor="var(--navy)" />
          </linearGradient>
        </defs>
        {/* hexagon ring */}
        <polygon
          points="32,4 56,18 56,46 32,60 8,46 8,18"
          stroke="url(#samaGrad)"
          strokeWidth="2.5"
          fill="none"
        />
        {/* molecule bonds */}
        <line x1="32" y1="20" x2="20" y2="28" stroke="currentColor" strokeWidth="1.5" />
        <line x1="32" y1="20" x2="44" y2="28" stroke="currentColor" strokeWidth="1.5" />
        <line x1="20" y1="28" x2="20" y2="42" stroke="currentColor" strokeWidth="1.5" />
        <line x1="44" y1="28" x2="44" y2="42" stroke="currentColor" strokeWidth="1.5" />
        <line x1="20" y1="42" x2="32" y2="50" stroke="currentColor" strokeWidth="1.5" />
        <line x1="44" y1="42" x2="32" y2="50" stroke="currentColor" strokeWidth="1.5" />
        {/* atoms */}
        <circle cx="32" cy="20" r="3.5" fill="var(--brand-bright)" />
        <circle cx="20" cy="28" r="3" fill="currentColor" />
        <circle cx="44" cy="28" r="3" fill="currentColor" />
        <circle cx="20" cy="42" r="3" fill="currentColor" />
        <circle cx="44" cy="42" r="3" fill="currentColor" />
        <circle cx="32" cy="50" r="3.5" fill="var(--brand-bright)" />
      </svg>
      <span className={`font-display font-semibold tracking-tight leading-none ${textClassName}`}>
        Sama Misr
      </span>
    </div>
  );
}
