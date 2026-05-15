type Props = { className?: string; textClassName?: string; iconSize?: number };

export function Logo({ className = "", textClassName = "", iconSize = 40 }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* bonds */}
        <line x1="50" y1="52" x2="50" y2="22" />
        <line x1="50" y1="52" x2="78" y2="68" />
        <line x1="50" y1="52" x2="28" y2="82" />
        {/* central atom */}
        <circle cx="50" cy="52" r="18" />
        {/* top atom */}
        <circle cx="50" cy="18" r="9" />
        {/* right atom */}
        <circle cx="82" cy="70" r="9" />
        {/* bottom-left atom */}
        <circle cx="24" cy="82" r="9" />
      </svg>
      <span className={`font-display font-semibold tracking-tight leading-none ${textClassName}`}>
        Sama Misr
      </span>
    </div>
  );
}
