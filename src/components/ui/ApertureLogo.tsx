interface ApertureLogoProps {
  className?: string;
}

const bladeRotations = [0, 60, 120, 180, 240, 300];

export function ApertureLogo({ className = "" }: ApertureLogoProps) {
  return (
    <div className={`aperture-mark ${className}`.trim()} aria-hidden="true">
      <svg viewBox="0 0 72 72" className="h-full w-full">
        <circle
          cx="36"
          cy="36"
          r="25"
          className="fill-transparent stroke-[var(--line-strong)]"
          strokeWidth="1.4"
        />
        <g className="aperture-blades">
          {bladeRotations.map((rotation) => (
            <path
              key={rotation}
              d="M36 13 L49 20.5 L41.2 36.4 L31.8 32.2 Z"
              transform={`rotate(${rotation} 36 36)`}
            />
          ))}
        </g>
        <circle
          cx="36"
          cy="36"
          r="8.5"
          className="fill-[rgba(13,13,13,0.9)] stroke-[var(--accent)]"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}
