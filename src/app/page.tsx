import dynamic from 'next/dynamic';

// Dynamically import client components
const Hero = dynamic(() => import('@/components/sections/Hero'), {
  ssr: true
});
const Experience = dynamic(() => import('@/components/sections/Experience'), {
  ssr: true
});
const Education = dynamic(() => import('@/components/sections/Education'), {
  ssr: true
});
const Skills = dynamic(() => import('@/components/sections/Skills'), {
  ssr: true
});
const Contact = dynamic(() => import('@/components/sections/Contact'), {
  ssr: true
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-16">
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </div>
    </main>
  );
} 