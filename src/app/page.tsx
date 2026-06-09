import HomeHero from "@/components/home/HomeHero";
import TrustTopBar from "@/components/home/TrustTopBar";
import PestProblems from "@/components/home/PestProblems";
import ServicesList from "@/components/home/ServicesList";
import PeriodicPlan from "@/components/home/PeriodicPlan";
import ProcessSteps from "@/components/home/ProcessSteps";
import WhyUs from "@/components/home/WhyUs";
import ServiceAreas from "@/components/home/ServiceAreas";
import StatsBlock from "@/components/home/StatsBlock";
import Reviews from "@/components/home/Reviews";
import TargetAudience from "@/components/home/TargetAudience";
import HomeQuoteForm from "@/components/home/HomeQuoteForm";
import FAQ from "@/components/home/FAQ";
import AboutBlock from "@/components/home/AboutBlock";
import FinalCta from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustTopBar />
      <PestProblems />
      <ServicesList />
      <PeriodicPlan />
      <ProcessSteps />
      <WhyUs />
      <ServiceAreas />
      <StatsBlock />
      <Reviews />
      <TargetAudience />
      <HomeQuoteForm />
      <FAQ />
      <AboutBlock />
      <FinalCta />
    </>
  );
}
