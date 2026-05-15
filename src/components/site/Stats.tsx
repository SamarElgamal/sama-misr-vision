import { useEffect, useRef, useState } from "react";

function useCount(target: number, start: boolean, duration = 1800) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return n;
}

const stats = [
  { value: 20, suffix: "+", label: "Years of Industrial Experience" },
  { value: 5, suffix: "", label: "Core Industries Served" },
  { value: 30, suffix: "+", label: "Global Supply Partners" },
  { value: 250, suffix: "+", label: "Trusted Clients" },
];

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setStart(true),
      { threshold: 0.3 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-28 gradient-brand text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] rounded-full bg-[color:var(--brand-bright)]/30 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {stats.map((s) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const v = useCount(s.value, start);
            return (
              <div key={s.label} className="text-center lg:text-left">
                <div className="text-5xl lg:text-7xl font-semibold tracking-tight gradient-text tabular-nums">
                  {v}
                  {s.suffix}
                </div>
                <div className="mt-3 text-xs lg:text-sm uppercase tracking-[0.2em] text-white/65">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
