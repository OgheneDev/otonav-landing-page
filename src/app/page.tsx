import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "../components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServicesSection from "@/components/ServicesSection";
import TrialSection from "@/components/TrialSection";
import OperationMode from "@/components/OperationMode";
import FormSection from "@/components/FormSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <ServicesSection />
      <TrialSection />
      <FormSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default page;
