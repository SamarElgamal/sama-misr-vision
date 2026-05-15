import { useEffect, useState } from "react";
import logo from "@/assets/logo.jpg";

const links = [
  { href: "#about", label: "About" },
  { href: "#industries", label: "Industries" },
  { href: "#solutions", label: "Solutions" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[color:var(--navy-deep)]/85 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <img src={logo} alt="Sama Misr" className="h-10 w-auto rounded-md ring-1 ring-white/10" />
        </a>
        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/75 hover:text-white transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:h-px after:w-0 after:bg-[color:var(--brand-bright)] hover:after:w-full after:transition-all after:duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-bright)] hover:bg-[color:var(--brand)] text-white text-sm font-medium px-5 py-2.5 transition-all duration-300 shadow-[0_8px_30px_-8px_color-mix(in_oklab,var(--brand-bright)_60%,transparent)]"
          >
            Request a Quote
            <span aria-hidden>→</span>
          </a>
        </div>
        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-px w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-[color:var(--navy-deep)]/95 backdrop-blur-xl border-t border-white/10">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white/80 text-base">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center rounded-full bg-[color:var(--brand-bright)] text-white px-5 py-3 text-sm font-medium">
              Request a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
