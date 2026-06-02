import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = "", size = 'md' }: LogoProps) {
  const sizes = {
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-6xl"
  };

  const circleSizes = {
    sm: "w-3.5 h-3.5 border-2 ml-0.5 mr-0.5 translate-y-[2px]",
    md: "w-5 h-5 border-[3px] ml-1 mr-1 translate-y-[3px]",
    lg: "w-10 h-10 border-[5px] ml-2 mr-2 translate-y-[6px]"
  };

  return (
    <div className={`flex items-center group px-1 h-full min-h-[40px] ${className}`} id="site-logo">
      <div className="relative leading-none flex items-center justify-center">
        {/* Subtle background glow on hover */}
        <div className="absolute inset-x-[-20%] -inset-y-4 bg-[#e91e8c] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
        
        <div className="flex items-center select-none font-sans font-black tracking-[-0.04em]">
          <span className={`${sizes[size]} text-white`}>DUN</span>
          <span className={`${circleSizes[size]} rounded-full bg-gradient-to-tr from-[#e91e8c] to-[#7c3aed] border-white inline-block shrink-0`} />
        </div>
      </div>
    </div>
  );
}

