import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Pricing />
      <FAQ />
      {/* Add the rest of the page content here */}
    </main>
  );
}
