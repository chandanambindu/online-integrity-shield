
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, AlertCircle, BarChart4, Link } from 'lucide-react';

const TrustIndicators = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-trustblue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Trust Indicators</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Learn how to verify information online with these key trust indicators.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="border-t-4 border-t-trustblue-500">
            <CardContent className="pt-6">
              <div className="bg-trustblue-100 p-3 rounded-full inline-block mb-4">
                <Shield className="h-6 w-6 text-trustblue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Source Verification</h3>
              <p className="text-gray-600">
                Always check the credentials and reputation of the source providing the information.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="font-medium text-sm text-gray-700 mb-2">How to check:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Research the publication or website</li>
                  <li>• Check author credentials and expertise</li>
                  <li>• Look for transparency in funding</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-alertorange-500">
            <CardContent className="pt-6">
              <div className="bg-alertorange-100 p-3 rounded-full inline-block mb-4">
                <AlertCircle className="h-6 w-6 text-alertorange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fact Checking</h3>
              <p className="text-gray-600">
                Cross-reference information with multiple reliable sources before accepting it as fact.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="font-medium text-sm text-gray-700 mb-2">Reliable fact checkers:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Snopes.com</li>
                  <li>• FactCheck.org</li>
                  <li>• AP Fact Check</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-techgreen-500">
            <CardContent className="pt-6">
              <div className="bg-techgreen-100 p-3 rounded-full inline-block mb-4">
                <BarChart4 className="h-6 w-6 text-techgreen-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Data Transparency</h3>
              <p className="text-gray-600">
                Look for clear sources of data, methodologies, and the context in which statistics are presented.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="font-medium text-sm text-gray-700 mb-2">Questions to ask:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Is the data source cited?</li>
                  <li>• Is the methodology explained?</li>
                  <li>• Are limitations of the data disclosed?</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-trustblue-500">
            <CardContent className="pt-6">
              <div className="bg-trustblue-100 p-3 rounded-full inline-block mb-4">
                <Link className="h-6 w-6 text-trustblue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Digital Provenance</h3>
              <p className="text-gray-600">
                Check the digital history and authenticity markers of content to verify its origin.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="font-medium text-sm text-gray-700 mb-2">Tools to verify:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Reverse image search</li>
                  <li>• Content authenticity initiative</li>
                  <li>• Image metadata viewers</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
