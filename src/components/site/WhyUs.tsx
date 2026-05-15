import { ShieldCheck, Gauge, Headphones, Zap, Factory, Handshake } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, t: "Reliable Sourcing", d: "Vetted global partners and transparent supply chains." },
  { icon: Gauge, t: "Consistent Quality", d: "Specification-grade products, batch after batch." },
  { icon: Headphones, t: "Technical Support", d: "Engineers on-call for formulation and process advice." },
  { icon: Zap, t: "Fast Delivery", d: "Regional warehousing for quick fulfillment." },
  { icon: Factory, t: "Manufacturing Expertise", d: "Insight into the industries we serve, not just the chemistry." },
  { icon: Handshake, t: "Long-Term Partnerships", d: "We invest in client relationships, not transactions." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--brand)] font-semibold mb-5">Why Sama Misr</div>
          <h2 className="text-3xl lg:text-5xl font-semibold text-[color:var(--navy-deep)] leading-tight">
            Six reasons leading manufacturers choose us.
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
          {reasons.map((r) => (
            <div key={r.t} className="group">
              <r.icon strokeWidth={1.25} className="h-8 w-8 text-[color:var(--brand-bright)] transition-transform duration-500 group-hover:scale-110" />
              <div className="mt-5 h-px w-12 bg-[color:var(--navy)]/15 group-hover:w-20 group-hover:bg-[color:var(--brand-bright)] transition-all duration-500" />
              <h3 className="mt-5 text-xl font-semibold text-[color:var(--navy-deep)]">{r.t}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{r.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
