
import React from 'react';
import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 py-3 px-4 md:px-8 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Shield className="text-trustblue-600 h-7 w-7" />
          <span className="text-xl font-bold text-trustblue-700">IntegrityShield</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-700 hover:text-trustblue-600 transition">About</a>
          <a href="#tools" className="text-gray-700 hover:text-trustblue-600 transition">Tools</a>
          <a href="#resources" className="text-gray-700 hover:text-trustblue-600 transition">Resources</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-trustblue-600 transition">How It Works</a>
        </div>
        <Button className="bg-trustblue-600 hover:bg-trustblue-700 text-white">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
