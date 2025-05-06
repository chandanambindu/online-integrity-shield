
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our technology uses multiple layers of analysis to detect manipulated content with high accuracy.
          </p>
        </div>
        
        <Tabs defaultValue="visual" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="visual">Visual Analysis</TabsTrigger>
              <TabsTrigger value="audio">Audio Analysis</TabsTrigger>
              <TabsTrigger value="metadata">Metadata</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="visual" className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-trustblue-700 mb-4">
                  Visual Inconsistency Detection
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800">Facial Analysis</h4>
                    <p className="text-gray-600 mt-2">
                      Our algorithms examine facial features for unnatural movements, inconsistent lighting, and unusual blending that often appear in deepfakes.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800">Pixel Pattern Recognition</h4>
                    <p className="text-gray-600 mt-2">
                      We analyze pixel-level patterns that can reveal compression artifacts typically created during the deepfake generation process.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800">Inconsistency Mapping</h4>
                    <p className="text-gray-600 mt-2">
                      Our tool creates heat maps highlighting areas of an image or video that show signs of manipulation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden border-4 border-white shadow-xl bg-white">
                  <img 
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                    alt="Visual analysis technology" 
                    className="w-full h-auto" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-trustblue-900/80 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <span className="text-xs font-medium bg-trustblue-600 px-2 py-1 rounded">AI Analysis</span>
                      <p className="text-sm mt-2">Visual inconsistencies detected in facial features</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-trustblue-100 rounded-lg -z-10"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-techgreen-100 rounded-lg -z-10"></div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="audio" className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-trustblue-700 mb-4">
                  Audio Anomaly Detection
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800">Voice Pattern Analysis</h4>
                    <p className="text-gray-600 mt-2">
                      We analyze unique vocal patterns and compare them with known samples to detect artificial voice synthesis.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800">Background Noise Consistency</h4>
                    <p className="text-gray-600 mt-2">
                      Our algorithms check for inconsistent background noise patterns that often indicate spliced or generated audio.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800">Spectral Analysis</h4>
                    <p className="text-gray-600 mt-2">
                      We examine audio spectrograms to identify frequency patterns that are characteristic of AI-generated audio.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden border-4 border-white shadow-xl bg-white">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                    alt="Audio analysis technology" 
                    className="w-full h-auto" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-trustblue-900/80 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <span className="text-xs font-medium bg-trustblue-600 px-2 py-1 rounded">Audio Analysis</span>
                      <p className="text-sm mt-2">Waveform patterns indicate potential voice synthesis</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-techgreen-100 rounded-lg -z-10"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-trustblue-100 rounded-lg -z-10"></div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="metadata" className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-trustblue-700 mb-4">
                  Digital Fingerprinting
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800">EXIF Data Analysis</h4>
                    <p className="text-gray-600 mt-2">
                      We examine embedded metadata to verify the origin, creation time, and editing history of digital content.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800">Digital Signature Verification</h4>
                    <p className="text-gray-600 mt-2">
                      Our system checks for content authentication signatures that can verify if media comes from a trusted source.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800">Edit History Reconstruction</h4>
                    <p className="text-gray-600 mt-2">
                      We can reconstruct the editing history of a file to identify suspicious modifications or generation patterns.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden border-4 border-white shadow-xl bg-white">
                  <img 
                    src="https://images.unsplash.com/photo-1518005020951-eccb494ad742" 
                    alt="Metadata analysis" 
                    className="w-full h-auto" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-trustblue-900/80 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <span className="text-xs font-medium bg-trustblue-600 px-2 py-1 rounded">Metadata Analysis</span>
                      <p className="text-sm mt-2">File signature inconsistencies detected in sample</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-trustblue-100 rounded-lg -z-10"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-alertorange-100 rounded-lg -z-10"></div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default HowItWorks;
