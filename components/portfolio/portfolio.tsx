'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Navbar } from './navbar';
import { HeroSection } from './hero-section';
import { AboutSection } from './about-section';
import { ExperienceSection } from './experience-section';
import { EducationSection } from './education-section';
import { SkillsSection } from './skills-section';
import { TalksSection } from './talks-section';
import { CTASection } from './cta-section';
import { Footer } from './footer';

export default function Portfolio() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 200]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden portfolio-noise">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      
      <motion.div 
        className="fixed inset-0 portfolio-mesh-gradient opacity-30"
        style={{ y: backgroundY }}
      />
      
      <div className="fixed inset-0 portfolio-dot-pattern opacity-10" />
      
      <div className="relative z-10">
        <motion.div 
          className="fixed top-0 left-0 right-0 h-[2px] portfolio-accent-gradient z-50 origin-left"
          style={{ scaleX: scrollProgress }}
          initial={{ scaleX: 0 }}
        />

        <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-900 to-transparent z-40 pointer-events-none" />
        <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent z-40 pointer-events-none" />

        <Navbar />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <TalksSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}
