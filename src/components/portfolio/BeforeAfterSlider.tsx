import { useRef, useState } from 'react';
import { PartVisual } from '../ui/PartVisual';
import { MoveHorizontal } from 'lucide-react';

export function BeforeAfterSlider({
  seedAntes,
  seedDepois,
  className,
}: {
  seedAntes: string;
  seedDepois: string;
  className?: string;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  function updateFromClientX(clientX: number) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: 'relative', overflow: 'hidden', touchAction: 'none' }}
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as Element).setPointerCapture(e.pointerId);
        updateFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) updateFromClientX(e.clientX);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
    >
      <PartVisual seed={seedAntes} tone="muted" className="absolute inset-0 h-full w-full" />
      <div
        className="absolute inset-0 h-full w-full"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <PartVisual seed={seedDepois} className="h-full w-full" />
      </div>

      <div
        className="absolute top-0 h-full w-0.5 bg-verde"
        style={{ left: `${position}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-verde text-white shadow-glow">
          <MoveHorizontal className="h-4 w-4" />
        </div>
      </div>

      <span className="absolute left-3 top-3 rounded bg-black/60 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide2 text-silver-300">
        Antes
      </span>
      <span className="absolute right-3 top-3 rounded bg-verde/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide2 text-white">
        Depois
      </span>
    </div>
  );
}
