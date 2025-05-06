
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UploadCloud, AlertTriangle, CheckCircle } from 'lucide-react';

const DeepfakeDetector = () => {
  const [activeTab, setActiveTab] = useState('image');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<null | 'authentic' | 'manipulated'>(null);
  const [fileSelected, setFileSelected] = useState(false);

  const handleFileChange = () => {
    setFileSelected(true);
    setResult(null);
  };

  const simulateAnalysis = () => {
    setIsAnalyzing(true);
    setProgress(0);
    setResult(null);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          // Randomly determine result for demo purposes
          setResult(Math.random() > 0.5 ? 'authentic' : 'manipulated');
          return 100;
        }
        return prev + 5;
      });
    }, 150);
  };

  return (
    <section className="py-16 px-4 bg-gray-50" id="tools">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Deepfake Detection Tool</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Upload content to analyze it for signs of AI manipulation. Our detector uses advanced algorithms to identify potential deepfakes.
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Content Analysis</CardTitle>
            <CardDescription>
              Upload an image, video, or audio file to check its authenticity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="image" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="image">Image</TabsTrigger>
                <TabsTrigger value="video">Video</TabsTrigger>
                <TabsTrigger value="audio">Audio</TabsTrigger>
              </TabsList>
              
              <TabsContent value="image" className="space-y-4">
                <div className={`border-2 border-dashed rounded-lg p-8 text-center ${fileSelected ? 'border-trustblue-400 bg-trustblue-50' : 'border-gray-300'}`}>
                  <UploadCloud className={`mx-auto h-12 w-12 ${fileSelected ? 'text-trustblue-500' : 'text-gray-400'}`} />
                  <div className="mt-4">
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <span className="font-medium text-trustblue-600 hover:text-trustblue-500">
                        Click to upload
                      </span>
                      <span className="text-gray-500"> or drag and drop</span>
                      <input
                        id="image-upload"
                        name="image-upload"
                        type="file"
                        className="sr-only"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                    </label>
                    <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
                  </div>
                  {fileSelected && (
                    <div className="mt-4 text-sm text-trustblue-700">
                      sample_image.jpg selected
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="video">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-4">
                    <label htmlFor="video-upload" className="cursor-pointer">
                      <span className="font-medium text-trustblue-600 hover:text-trustblue-500">
                        Click to upload
                      </span>
                      <span className="text-gray-500"> or drag and drop</span>
                      <input
                        id="video-upload"
                        name="video-upload"
                        type="file"
                        className="sr-only"
                        accept="video/*"
                      />
                    </label>
                    <p className="text-xs text-gray-500 mt-1">MP4, MOV, AVI up to 50MB</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="audio">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-4">
                    <label htmlFor="audio-upload" className="cursor-pointer">
                      <span className="font-medium text-trustblue-600 hover:text-trustblue-500">
                        Click to upload
                      </span>
                      <span className="text-gray-500"> or drag and drop</span>
                      <input
                        id="audio-upload"
                        name="audio-upload"
                        type="file"
                        className="sr-only"
                        accept="audio/*"
                      />
                    </label>
                    <p className="text-xs text-gray-500 mt-1">MP3, WAV, AAC up to 20MB</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            {isAnalyzing && (
              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Analyzing content...</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            )}
            
            {result && (
              <div className={`mt-6 p-4 rounded-lg ${result === 'authentic' ? 'bg-techgreen-50' : 'bg-alertorange-50'}`}>
                <div className="flex items-start">
                  {result === 'authentic' ? (
                    <CheckCircle className="h-6 w-6 text-techgreen-600 mr-3 mt-0.5" />
                  ) : (
                    <AlertTriangle className="h-6 w-6 text-alertorange-600 mr-3 mt-0.5" />
                  )}
                  <div>
                    <h3 className={`text-lg font-semibold ${result === 'authentic' ? 'text-techgreen-700' : 'text-alertorange-700'}`}>
                      {result === 'authentic' ? 'Content appears authentic' : 'Potential manipulation detected'}
                    </h3>
                    <p className={`text-sm mt-1 ${result === 'authentic' ? 'text-techgreen-600' : 'text-alertorange-600'}`}>
                      {result === 'authentic' 
                        ? 'Our analysis indicates this content is likely authentic with a high confidence score.' 
                        : 'Our detection algorithms have identified patterns consistent with AI manipulation.'}
                    </p>
                    <div className="mt-3">
                      <Button variant="outline" size="sm" className={`${result === 'authentic' ? 'border-techgreen-200 text-techgreen-700' : 'border-alertorange-200 text-alertorange-700'}`}>
                        View detailed report
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button 
              className="bg-trustblue-600 hover:bg-trustblue-700 text-white w-full" 
              disabled={!fileSelected || isAnalyzing}
              onClick={simulateAnalysis}
            >
              {isAnalyzing ? 'Analyzing...' : 'Analyze Content'}
            </Button>
          </CardFooter>
        </Card>
        
        <div className="text-center mt-8 text-gray-500 text-sm">
          This is a demo version for educational purposes. For complete analysis, sign up for our full service.
        </div>
      </div>
    </section>
  );
};

export default DeepfakeDetector;
