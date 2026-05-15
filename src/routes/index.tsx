import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Industries } from "@/components/site/Industries";
import { Solutions } from "@/components/site/Solutions";
import { WhyUs } from "@/components/site/WhyUs";
import { Stats } from "@/components/site/Stats";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sama Misr — Industrial Chemicals & Specialty Solutions" },
      {
        name: "description",
        content:
          "Sama Misr supplies high-quality industrial raw materials and specialty chemicals for ceramics, textiles, glass, detergents, and sanitary ware manufacturing.",
      },
      { property: "og:title", content: "Sama Misr — Industrial Chemicals" },
      {
        property: "og:description",
        content:
          "Trusted chemical solutions for modern manufacturing. Raw materials, specialty chemicals, and industrial supply across MENA.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Industries />
      <Solutions />
      <WhyUs />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
