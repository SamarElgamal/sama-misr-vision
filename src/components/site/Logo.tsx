import moleculeIcon from "@/assets/molecule-icon.png";

type Props = { className?: string; textClassName?: string; iconSize?: number };

export function Logo({ className = "", textClassName = "", iconSize = 40 }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={moleculeIcon}
        alt=""
        aria-hidden="true"
        style={{ width: iconSize, height: iconSize }}
        className="object-contain shrink-0"
      />
      <span className={`font-display font-semibold tracking-tight leading-none ${textClassName}`}>
        Sama Misr
      </span>
    </div>
  );
}
