import React from 'react';
import { Brain, Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-white">AI Bolaget</span>
            </div>
            <p className="mt-4 text-gray-400">
              Vi hjälper företag att växa med hjälp av AI-teknologi.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Tjänster</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">AI Automation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Dataanalys</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Konsulting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Integration</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Företag</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Om oss</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Karriär</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Kontakt</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Följ oss</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} AI Bolaget. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
}