import { Hero } from "@/components/Hero";
import { ProblemCallout } from "@/components/ProblemCallout";
import { RelatabilitySection } from "@/components/RelatabilitySection";
import { SolutionSection } from "@/components/SolutionSection";
import { GuideSection } from "@/components/GuideSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemCallout />
      <RelatabilitySection />
      <SolutionSection />
      <GuideSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
    </div>
  );
};

export default Index;
