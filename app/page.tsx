import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhyAnthropic from "@/components/WhyAnthropic";
import CaseStudies from "@/components/CaseStudies";
import SkillsPortfolio from "@/components/SkillsPortfolio";
import Ideas from "@/components/Ideas";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhyAnthropic />
        <CaseStudies />
        <SkillsPortfolio />
        <Ideas />
      </main>
      <Footer />
    </>
  );
}
