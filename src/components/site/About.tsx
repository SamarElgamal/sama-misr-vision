import facility from "@/assets/about-facility.jpg";

const pillars = [
  { t: "Reliability", d: "Consistent supply chains backed by long-standing partnerships with global producers." },
  { t: "Technical Expertise", d: "Engineering knowledge across formulations, processes, and end-use industries." },
  { t: "Quality Assurance", d: "Rigorous QC at every stage — from sourcing to delivery, aligned with global standards." },
  { t: "Local Understanding", d: "Deep knowledge of MENA manufacturing, paired with international sourcing reach." },
];

export function About() {
  return (
    <section id="about" className="relative py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[color:var(--brand-bright)]/15 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-[color:var(--navy)]/10">
              <img src={facility} alt="Industrial facility" loading="lazy" width={1024} height={1024} className="w-full h-[520px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy-deep)]/40 to-transparent" />
            </div>
            {/* floating spec card */}
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-white rounded-2xl shadow-[0_30px_80px_-30px_rgba(24,39,72,0.35)] p-6 w-64 ring-1 ring-[color:var(--navy)]/8">
              <div className="text-xs uppercase tracking-widest text-[color:var(--brand-bright)] font-semibold">Established Trust</div>
              <div className="mt-2 text-3xl font-semibold text-[color:var(--navy-deep)]">Decades</div>
              <div className="mt-1 text-sm text-muted-foreground">of supplying critical industrial inputs across MENA.</div>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--brand)] font-semibold mb-5">About Sama Misr</div>
            <h2 className="text-3xl lg:text-5xl font-semibold text-[color:var(--navy-deep)] leading-tight">
              Engineered partnerships for the<br />
              <span className="text-[color:var(--brand-bright)]">industries that build the world.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Sama Misr is an industrial chemicals partner connecting global manufacturers of raw materials with the factories that depend on them. We operate where engineering precision meets dependable logistics — supporting our clients with consistent quality, transparent sourcing, and long-term relationships.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {pillars.map((p) => (
                <div key={p.t} className="group">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-6 bg-[color:var(--brand-bright)] transition-all group-hover:w-10" />
                    <h3 className="text-base font-semibold text-[color:var(--navy-deep)]">{p.t}</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
