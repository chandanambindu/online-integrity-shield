
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-16 px-4 bg-trustblue-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Join the Fight Against Misinformation
        </h2>
        <p className="text-lg text-trustblue-100 mb-8 max-w-3xl mx-auto">
          Together, we can create a more trustworthy digital environment. Sign up to access our full suite of tools and resources.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white hover:bg-gray-100 text-trustblue-600 px-8 py-6 text-lg">
            Get Started
          </Button>
          <Button variant="outline" className="text-white border-white hover:bg-trustblue-700 px-8 py-6 text-lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
