import { FlaskConical, Atom, Beaker, Truck } from "lucide-react";

const solutions = [
  {
    icon: Atom,
    title: "Raw Materials",
    desc: "Core feedstocks for ceramics, glass, sanitary ware, and industrial manufacturing.",
    items: ["Zirconium silicate", "Zirconium sand", "Hydroboracite", "Zinc oxide (various grades)"],
  },
  {
    icon: FlaskConical,
    title: "Pigments & Opacifiers",
    desc: "High-purity whites and opacifiers for coatings, plastics, and ceramic glazes.",
    items: ["Titanium dioxide", "Whitener", "Zinc oxide 99.9%"],
  },
  {
    icon: Beaker,
    title: "Specialty Chemicals",
    desc: "Functional additives for detergents, water treatment, and industrial formulations.",
    items: ["Sodium tripolyphosphate (STPP)", "Barium carbonate"],
  },
  {
    icon: Truck,
    title: "Industrial Supply",
    desc: "End-to-end logistics, storage, and just-in-time delivery across the region.",
    items: ["Bonded warehousing", "Custom packaging", "Regulatory support"],
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="relative py-32 bg-[color:var(--navy-deep)] text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[color:var(--brand)]/20 blur-[180px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--brand-bright)] font-semibold mb-5">Solutions & Products</div>
            <h2 className="text-3xl lg:text-5xl font-semibold leading-tight">
              A complete portfolio for industrial-scale manufacturing.
            </h2>
          </div>
          <p className="text-white/65 max-w-md">
            We combine deep technical knowledge with global sourcing to deliver the right chemistry, on time, at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/8 rounded-2xl overflow-hidden ring-1 ring-white/10">
          {solutions.map((s) => (
            <div key={s.title} className="group relative bg-[color:var(--navy-deep)] p-10 transition-colors duration-500 hover:bg-[color:var(--navy)]">
              <div className="flex items-start gap-6">
                <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-[color:var(--brand-bright)] group-hover:bg-[color:var(--brand-bright)] group-hover:text-white transition-all duration-500">
                  <s.icon strokeWidth={1.25} className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-white/60 leading-relaxed">{s.desc}</p>
                  <ul className="mt-6 space-y-2">
                    {s.items.map((i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-white/75">
                        <span className="h-px w-4 bg-[color:var(--brand-bright)]" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
