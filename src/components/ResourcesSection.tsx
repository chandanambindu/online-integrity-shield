
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const resources = [
  {
    title: "Spotting Deepfakes: A Guide",
    description: "Learn the telltale signs of AI-generated images and videos.",
    category: "Guide",
    timeToRead: "8 min read",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
  },
  {
    title: "Digital Media Literacy 101",
    description: "Essential skills for evaluating online information critically.",
    category: "Course",
    timeToRead: "5 modules",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    title: "The Technology Behind Deepfakes",
    description: "Understanding how deepfake technology works and how it's evolving.",
    category: "Article",
    timeToRead: "12 min read",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    title: "Fact-Checking Tools & Resources",
    description: "A collection of reliable tools to verify online information.",
    category: "Resource List",
    timeToRead: "6 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  }
];

const ResourcesSection = () => {
  return (
    <section className="py-16 px-4" id="resources">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Educational Resources</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our library of resources to learn how to identify misinformation and understand the technologies used to create and detect deepfakes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img 
                  src={resource.image} 
                  alt={resource.title} 
                  className="w-full h-full object-cover" 
                />
                <Badge className="absolute top-3 right-3 bg-trustblue-600">
                  {resource.category}
                </Badge>
              </div>
              <CardHeader className="pb-2">
                <CardTitle>{resource.title}</CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  {resource.timeToRead}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{resource.description}</p>
              </CardContent>
              <CardFooter>
                <a href="#" className="text-trustblue-600 hover:text-trustblue-700 font-medium flex items-center text-sm">
                  Read more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="text-trustblue-600 hover:text-trustblue-700 hover:underline font-semibold">
            View all resources
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
