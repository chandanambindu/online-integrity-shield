
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden" id="about">
      <div className="absolute inset-0 bg-gradient-to-br from-trustblue-50 to-white z-0"></div>
      <div className="absolute w-full h-full">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-techgreen-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-trustblue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-trustblue-100 text-trustblue-700 rounded-full text-sm font-semibold">
              Fighting Misinformation Together
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
              Rebuilding Trust in <span className="text-trustblue-600">Digital Content</span>
            </h1>
            <p className="text-lg text-gray-600">
              Our mission is to combat deepfakes and misinformation online through advanced detection tools and educational resources. Together, we can rebuild a trustworthy digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-trustblue-600 hover:bg-trustblue-700 text-white px-6 py-6 text-lg">
                Try Our Detector
              </Button>
              <Button variant="outline" className="border-trustblue-600 text-trustblue-600 hover:bg-trustblue-50 px-6 py-6 text-lg">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-full h-1 bg-techgreen-400 opacity-50 rounded animate-scan"></div>
            </div>
            <div className="rounded-lg overflow-hidden border-4 border-white shadow-xl bg-white">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="Digital content analysis" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-medium text-trustblue-600 border border-trustblue-200 shadow-sm">
                AI Analysis Active
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
