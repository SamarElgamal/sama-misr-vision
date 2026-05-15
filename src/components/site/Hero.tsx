import hero from "@/assets/hero-molecules.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden gradient-brand">
      {/* background image */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt=""
          className="w-full h-full object-cover opacity-55 mix-blend-screen"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--navy-deep)]/70 via-[color:var(--navy-deep)]/40 to-[color:var(--navy-deep)]" />
        <div className="absolute inset-0 bg-grid opacity-50" />
      </div>

      {/* glowing orbs */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[color:var(--brand-bright)]/30 blur-[140px] animate-pulse-glow" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[color:var(--brand)]/40 blur-[160px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-24 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/80 mb-8 animate-fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-bright)] animate-pulse" />
            Industrial Chemical Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.05] gradient-text animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Powering Modern Manufacturing Through Trusted Chemical Solutions
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.25s" }}>
            Sama Misr supplies high-quality industrial raw materials and specialty chemicals tailored for ceramics, textiles, glass, detergents, and sanitary ware industries.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a href="#solutions" className="group inline-flex items-center gap-3 rounded-full bg-white text-[color:var(--navy-deep)] px-7 py-4 text-sm font-semibold hover:bg-[color:var(--brand-bright)] hover:text-white transition-all duration-300">
              Explore Solutions
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#contact" className="group inline-flex items-center gap-3 rounded-full glass text-white px-7 py-4 text-sm font-semibold hover:bg-white/15 transition-all duration-300">
              Contact Us
            </a>
          </div>

          {/* meta strip */}
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl animate-fade-up" style={{ animationDelay: "0.55s" }}>
            {[
              { k: "ISO", v: "Quality Standards" },
              { k: "5+", v: "Industries Served" },
              { k: "MENA", v: "Supply Network" },
              { k: "24/7", v: "Technical Support" },
            ].map((m) => (
              <div key={m.k} className="border-l border-white/15 pl-4">
                <div className="text-2xl font-semibold text-white">{m.k}</div>
                <div className="text-xs uppercase tracking-wider text-white/55 mt-1">{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-xs uppercase tracking-[0.3em] flex flex-col items-center gap-2">
        Scroll
        <span className="h-10 w-px bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
