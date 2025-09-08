'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProfileImageProps {
  className?: string;
}

export function ProfileImage({ className = "" }: ProfileImageProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  
  if (imageError) {
    return (
      <div className={`${className} bg-orange-500/80 backdrop-blur-sm flex items-center justify-center border border-orange-400/30`}>
        <span className="text-4xl font-bold text-white drop-shadow-lg">SS</span>
      </div>
    );
  }
  
  return (
    <>
      {imageLoading && (
        <div className={`${className} bg-white/5 backdrop-blur-md flex items-center justify-center animate-pulse border border-white/10`}>
          <span className="text-2xl font-bold text-orange-300 drop-shadow-sm">SS</span>
        </div>
      )}
      <Image 
        src="/images/profile.jpeg" 
        alt="Shrey Shah - Generative AI Engineer"
        width={192}
        height={192}
        className={`${className} ${imageLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        priority
        onLoad={() => setImageLoading(false)}
        onError={() => {
          setImageError(true);
          setImageLoading(false);
        }}
      />
    </>
  );
}
