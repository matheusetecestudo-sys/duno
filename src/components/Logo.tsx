import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = "", size = 'md' }: LogoProps) {
  const sizes = {
    sm: "text-xl",
    md: "text-3xl",
    lg: "text-6xl"
  };

  return (
    <div className={`flex items-center group px-1 h-full min-h-[40px] ${className}`} id="site-logo">
      <div className="relative leading-none flex items-center justify-center">
        {/* Subtle background glow on hover */}
        <div className="absolute inset-x-[-20%] -inset-y-4 bg-[#FF0054] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
        
        <span className={`${sizes[size]} font-black tracking-[-0.05em] uppercase block select-none gradient-text !leading-none transition-all duration-300`}>
          DUNO
        </span>
      </div>
    </div>
  );
}
