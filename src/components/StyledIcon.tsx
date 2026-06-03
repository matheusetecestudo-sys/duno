import React, { ComponentType } from "react";

interface StyledIconProps {
  icon: ComponentType<any>;
  size?: number; // Size of the inner icon, e.g. 24, 32, 40
  className?: string;
  containerSize?: number; // Size of the outer circular ring, e.g. 64, 80, 96
}

export function StyledIcon({
  icon: IconComponent,
  size = 24,
  className = "",
  containerSize = 64,
}: StyledIconProps) {
  const radius = (containerSize - 8) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div 
      className={`relative flex items-center justify-center shrink-0 select-none ${className}`}
      style={{ width: containerSize, height: containerSize }}
    >
      {/* SVG Background Circle Frame to replicate the reference image exactly */}
      <svg 
        className="absolute inset-0 w-full h-full -rotate-45 select-none pointer-events-none overflow-visible" 
        viewBox={`0 0 ${containerSize} ${containerSize}`}
      >
        <defs>
          <linearGradient id="styled-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e91e8c" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <linearGradient id="pink-purple-icon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e91e8c" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        
        {/* Subtle backing background glow */}
        <circle
          cx={containerSize / 2}
          cy={containerSize / 2}
          r={radius}
          fill="none"
          stroke="url(#styled-icon-gradient)"
          strokeWidth={1}
          className="opacity-10"
        />

        {/* Solid arc of the outer circle */}
        <circle
          cx={containerSize / 2}
          cy={containerSize / 2}
          r={radius}
          fill="none"
          stroke="url(#styled-icon-gradient)"
          strokeWidth={1.5}
          strokeDasharray={`${circumference * 0.6} ${circumference * 0.4}`}
          strokeLinecap="round"
          className="opacity-90"
        />

        {/* Dashed/dotted arc of the outer circle (corresponds to the reference image) */}
        <circle
          cx={containerSize / 2}
          cy={containerSize / 2}
          r={radius}
          fill="none"
          stroke="url(#styled-icon-gradient)"
          strokeWidth={1.5}
          strokeDasharray="2, 4"
          strokeDashoffset={circumference * 0.6}
          className="opacity-50"
        />

        {/* Decorative solid beads exactly on the ring borders */}
        <circle
          cx={containerSize / 2 + radius * Math.cos(Math.PI * 0.2)}
          cy={containerSize / 2 + radius * Math.sin(Math.PI * 0.2)}
          r={2.5}
          fill="#e91e8c"
          className="shadow-sm shadow-[#e91e8c]/50"
        />
        <circle
          cx={containerSize / 2 + radius * Math.cos(Math.PI * 1.2)}
          cy={containerSize / 2 + radius * Math.sin(Math.PI * 1.2)}
          r={2.5}
          fill="#7c3aed"
          className="shadow-sm shadow-[#7c3aed]/50"
        />
      </svg>
      
      {/* Icon placement with dual-filled layered effect */}
      <div className="relative z-10 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          {/* Layered offset secondary shape background (the purple offset shadow) */}
          <div className="absolute top-[1.5px] left-[1.5px] opacity-35">
            <IconComponent 
              size={size} 
              stroke="#7c3aed" 
              fill="#7c3aed" 
              strokeWidth={1.5}
              className="scale-[0.98]" 
            />
          </div>
          
          {/* Primary foreground icon filled with gradient at 25% opacity */}
          <IconComponent 
            size={size} 
            stroke="url(#pink-purple-icon-grad)" 
            fill="url(#pink-purple-icon-grad)" 
            fillOpacity={0.25}
            strokeWidth={2}
            className="relative z-10 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}
