
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-16 px-4 bg-trustblue-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
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
