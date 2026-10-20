export function Monogram({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} aria-hidden>
      <path
        d="M10 8h12v32h18M22 24h11"
        fill="none"
        stroke="currentColor"
        strokeWidth="4.2"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo ${light ? 'logo--light' : ''}`}>
      <Monogram size={34} className="logo__mark" />
      <span className="logo__divider" />
      <span className="logo__text">
        <strong>Diana Pérez Rubiera</strong>
        <small>Fórmula Legal</small>
      </span>
    </span>
  );
}
