import { Linkedin, Twitter, Facebook } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative bg-[color:var(--navy-deep)] text-white pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <img src={logo} alt="Sama Misr" className="h-12 w-auto rounded-md ring-1 ring-white/10" />
            <p className="mt-6 text-white/60 max-w-sm leading-relaxed">
              Industrial chemicals and raw material solutions for ceramics, textiles, glass, detergents, and sanitary ware manufacturers.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter, Facebook].map((Ic, i) => (
                <a key={i} href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-white/15 hover:bg-[color:var(--brand-bright)] hover:ring-transparent transition-all">
                  <Ic strokeWidth={1.5} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-widest text-white/50 mb-5">Company</div>
            <ul className="space-y-3 text-sm text-white/80">
              <li><a href="#about" className="hover:text-[color:var(--brand-bright)]">About</a></li>
              <li><a href="#why" className="hover:text-[color:var(--brand-bright)]">Why Us</a></li>
              <li><a href="#contact" className="hover:text-[color:var(--brand-bright)]">Contact</a></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-widest text-white/50 mb-5">Industries</div>
            <ul className="space-y-3 text-sm text-white/80">
              <li>Ceramics</li>
              <li>Textiles</li>
              <li>Glass</li>
              <li>Detergents</li>
              <li>Sanitary Ware</li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-widest text-white/50 mb-5">Contact</div>
            <ul className="space-y-3 text-sm text-white/80">
              <li>Cairo, Egypt</li>
              <li>info@samamisr.com</li>
              <li>+20 100 000 0000</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/45">
          <div>© {new Date().getFullYear()} Sama Misr. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Quality Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
