/** A|G mark from the AG Communications logo (transparent PNG). */
export function Monogram({
  size = 40,
  light = false,
  className = '',
}: {
  size?: number;
  light?: boolean;
  className?: string;
}) {
  return (
    <img
      src={light ? '/images/ag-mark-light.png' : '/images/ag-mark.png'}
      width={size}
      height={Math.round(size * 0.44)}
      className={`monogram ${className}`}
      alt=""
      aria-hidden
      draggable={false}
    />
  );
}

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo ${light ? 'logo--light' : ''}`}>
      <span className="logo__marks">
        <Monogram size={58} className="logo__mark logo__mark--dark" />
        <Monogram size={58} light className="logo__mark logo__mark--light" />
      </span>
      <span className="logo__divider" />
      <span className="logo__text">
        <strong>Communications</strong>
        <small>Estrategia · Medios · Publicidad</small>
      </span>
    </span>
  );
}
