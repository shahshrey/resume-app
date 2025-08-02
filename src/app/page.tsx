import dynamic from 'next/dynamic';

// Dynamically import client components
const Hero = dynamic(() => import('@/components/sections/Hero'), {
  ssr: true,
});
const Experience = dynamic(() => import('@/components/sections/Experience'), {
  ssr: true,
});
const Education = dynamic(() => import('@/components/sections/Education'), {
  ssr: true,
});
const Skills = dynamic(() => import('@/components/sections/Skills'), {
  ssr: true,
});
const Certifications = dynamic(() => import('@/components/sections/Certifications'), {
  ssr: true,
});
const Contact = dynamic(() => import('@/components/sections/Contact'), {
  ssr: true,
});

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Enhanced Background with Mesh Gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 bg-gradient-to-br from-background-main/90 via-background-paper/50 to-background-elevated/30" />
      </div>
      
      <div className="relative mx-auto max-w-4xl space-y-16 px-4 py-8">
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Certifications />
        <Contact />
      </div>
    </main>
  );
}
