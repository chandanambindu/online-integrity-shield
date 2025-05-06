
import React from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import DeepfakeDetector from '@/components/DeepfakeDetector';
import ResourcesSection from '@/components/ResourcesSection';
import HowItWorks from '@/components/HowItWorks';
import TrustIndicators from '@/components/TrustIndicators';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <HeroSection />
      <DeepfakeDetector />
      <ResourcesSection />
      <HowItWorks />
      <TrustIndicators />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
