import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-32 bg-[color:var(--mist)]/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--brand)] font-semibold mb-5">Get in Touch</div>
            <h2 className="text-3xl lg:text-5xl font-semibold text-[color:var(--navy-deep)] leading-tight">
              Let's engineer your next supply solution.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-md">
              Tell us about your manufacturing needs — our technical team responds within one business day.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { icon: Phone, label: "Phone", value: "+20 100 000 0000" },
                { icon: Mail, label: "Email", value: "info@samamisr.com" },
                { icon: MapPin, label: "Location", value: "Cairo, Egypt" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 group">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white ring-1 ring-[color:var(--navy)]/10 text-[color:var(--brand-bright)] group-hover:bg-[color:var(--brand-bright)] group-hover:text-white transition-all duration-300">
                    <c.icon strokeWidth={1.5} className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="mt-1 text-base font-medium text-[color:var(--navy-deep)]">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/201000000000"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[color:var(--navy-deep)] hover:bg-[color:var(--brand)] text-white px-6 py-3.5 text-sm font-semibold transition-all"
            >
              <MessageCircle strokeWidth={1.5} className="h-5 w-5" />
              Chat on WhatsApp
            </a>

            <div className="mt-10 overflow-hidden rounded-2xl ring-1 ring-[color:var(--navy)]/10 h-56">
              <iframe
                title="Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=31.20%2C30.02%2C31.30%2C30.08&layer=mapnik"
                className="w-full h-full grayscale-[40%] contrast-95"
                loading="lazy"
              />
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="bg-white rounded-3xl p-8 lg:p-10 ring-1 ring-[color:var(--navy)]/8 shadow-[0_30px_80px_-40px_rgba(24,39,72,0.25)] space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full name" name="name" />
              <Field label="Company" name="company" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Industry</label>
              <select className="mt-2 w-full bg-transparent border-b border-[color:var(--navy)]/15 focus:border-[color:var(--brand-bright)] outline-none py-3 text-[color:var(--navy-deep)]">
                <option>Ceramics</option>
                <option>Textiles</option>
                <option>Glass</option>
                <option>Detergents</option>
                <option>Sanitary Ware</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea rows={4} className="mt-2 w-full bg-transparent border-b border-[color:var(--navy)]/15 focus:border-[color:var(--brand-bright)] outline-none py-3 resize-none text-[color:var(--navy-deep)]" placeholder="Tell us about your requirements…" />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--navy-deep)] hover:bg-[color:var(--brand-bright)] text-white py-4 text-sm font-semibold transition-all"
            >
              {sent ? "Thank you — we'll be in touch" : "Send Inquiry"}
              {!sent && <span>→</span>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        className="mt-2 w-full bg-transparent border-b border-[color:var(--navy)]/15 focus:border-[color:var(--brand-bright)] outline-none py-3 text-[color:var(--navy-deep)]"
      />
    </div>
  );
}
