import { Layers, Shirt, GlassWater, SprayCan, Bath } from "lucide-react";

const industries = [
  { icon: Layers, name: "Ceramics", desc: "Raw materials and additives for tiles, tableware, and technical ceramics." },
  { icon: Shirt, name: "Textiles", desc: "Specialty chemicals for dyeing, finishing, and fiber processing." },
  { icon: GlassWater, name: "Glass", desc: "High-purity inputs for flat, container, and specialty glass production." },
  { icon: SprayCan, name: "Detergents", desc: "Active ingredients and builders for household and industrial cleaners." },
  { icon: Bath, name: "Sanitary Ware", desc: "Glaze components and process chemicals for sanitary ware manufacturing." },
];

export function Industries() {
  return (
    <section id="industries" className="relative py-32 bg-[color:var(--mist)]/40 overflow-hidden">
      <div className="absolute inset-0 bg-grid-light opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--brand)] font-semibold mb-5">Industries Served</div>
          <h2 className="text-3xl lg:text-5xl font-semibold text-[color:var(--navy-deep)] leading-tight">
            Built for the manufacturers shaping modern industry.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            From foundational raw materials to high-performance specialty chemistry — tailored for five core verticals.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((it, i) => (
            <article
              key={it.name}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 ring-1 ring-[color:var(--navy)]/8 hover:ring-[color:var(--brand-bright)]/40 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[color:var(--brand-bright)]/5 to-transparent" />
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[color:var(--navy-deep)] text-white group-hover:bg-[color:var(--brand-bright)] transition-colors duration-500">
                  <it.icon strokeWidth={1.25} className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[color:var(--navy-deep)]">{it.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[color:var(--brand)] opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:translate-x-0">
                  Learn more <span>→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
