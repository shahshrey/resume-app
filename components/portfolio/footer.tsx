'use client';

import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { RESUME_DATA } from './portfolio-data';

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-gray-800 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Shrey Shah</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {RESUME_DATA.title} specializing in multi-agent systems and production AI applications.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-amber-400 transition-colors text-sm">About</a>
              <a href="#experience" className="block text-gray-400 hover:text-amber-400 transition-colors text-sm">Work Experience</a>
              <a href="#skills" className="block text-gray-400 hover:text-amber-400 transition-colors text-sm">Skills</a>
              <a href="#talks" className="block text-gray-400 hover:text-amber-400 transition-colors text-sm">Talks</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-4">Contact</h4>
            <div className="space-y-2">
              <a href={`mailto:${RESUME_DATA.email}`} className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors text-sm">
                <Mail className="w-4 h-4" />
                {RESUME_DATA.email}
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                {RESUME_DATA.location}
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2025 Shrey Shah. All rights reserved.</p>
          <div className="flex gap-4">
            <a 
              href="https://github.com" 
              className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-amber-400 hover:bg-gray-800 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/shreyshahh" 
              className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-amber-400 hover:bg-gray-800 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href={`mailto:${RESUME_DATA.email}`} 
              className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-amber-400 hover:bg-gray-800 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
