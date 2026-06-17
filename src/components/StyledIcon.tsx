import React, { ComponentType } from "react";
import * as Icons from "lucide-react";

interface StyledIconProps {
  iconName?: string; // name in string format e.g. "Zap", "Monitor", "PhoneCall"
  icon?: ComponentType<any>; // raw component for maximum reliability and backwards compatibility
  size?: number; // Size of the inner icon, defaults to 22
  className?: string;
  containerSize?: number; // Size of the outer circular ring, defaults to 56
  flat?: boolean; // If true, renders a clean flat icon without complex orbiting SVG rings
}

export function StyledIcon({
  iconName,
  icon: IconComponent,
  size = 22,
  className = "",
  containerSize = 56,
  flat = false,
}: StyledIconProps) {
  // Resolve icon component from name of lucide-react (case-insensitive safe match)
  let SelectedIcon: ComponentType<any> | undefined = IconComponent;
  
  if (iconName) {
    // Direct match
    if (iconName in Icons) {
      SelectedIcon = Icons[iconName as keyof typeof Icons] as ComponentType<any>;
    } else {
      // Case-insensitive match check to protect against naming deviations
      const normalizedQuery = iconName.toLowerCase();
      const matchedKey = Object.keys(Icons).find(
        (key) => key.toLowerCase() === normalizedQuery
      );
      if (matchedKey) {
        SelectedIcon = Icons[matchedKey as keyof typeof Icons] as ComponentType<any>;
      }
    }
  }

  // Fallback to HelpCircle if unresolved
  if (!SelectedIcon) {
    SelectedIcon = Icons.HelpCircle as ComponentType<any>;
  }

  if (flat) {
    return (
      <div
        className={`flex items-center justify-center shrink-0 select-none rounded-xl ${className}`}
        style={{
          width: containerSize,
          height: containerSize,
          background: "linear-gradient(135deg, #f0134d 0%, #e91e8c 55%, #9b1fbd 100%)",
          boxShadow: "0 0 18px rgba(240,19,77,0.45)",
        }}
      >
        <SelectedIcon
          size={size}
          stroke="#ffffff"
          strokeWidth={2.4}
          className="drop-shadow-[0_0_4px_rgba(255,255,255,0.4)]"
        />
      </div>
    );
  }

  const radius = (containerSize - 6) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div 
      className={`relative flex items-center justify-center shrink-0 select-none mx-auto lg:mx-0 my-2 ${className}`}
      style={{ width: containerSize, height: containerSize }}
    >
      {/* SVG Background Circle Frame with highly calibrated #f0134d rings */}
      <svg 
        className="absolute inset-0 w-full h-full -rotate-45 select-none pointer-events-none overflow-visible" 
        viewBox={`0 0 ${containerSize} ${containerSize}`}
      >
        {/* Soft back ambient circle */}
        <circle
          cx={containerSize / 2}
          cy={containerSize / 2}
          r={radius}
          fill="none"
          stroke="#f0134d"
          strokeWidth={1}
          className="opacity-10"
        />

        {/* Dynamic bright orbital track arc */}
        <circle
          cx={containerSize / 2}
          cy={containerSize / 2}
          r={radius}
          fill="none"
          stroke="#f0134d"
          strokeWidth={1.5}
          strokeDasharray={`${circumference * 0.65} ${circumference * 0.35}`}
          strokeLinecap="round"
          className="opacity-80"
        />

        {/* Stylized auxiliary orbit dashes */}
        <circle
          cx={containerSize / 2}
          cy={containerSize / 2}
          r={radius}
          fill="none"
          stroke="#f0134d"
          strokeWidth={1.2}
          strokeDasharray="2, 4"
          strokeDashoffset={circumference * 0.65}
          className="opacity-40"
        />

        {/* Orbit beads replicating elite tech interfaces */}
        <circle
          cx={containerSize / 2 + radius * Math.cos(Math.PI * 0.25)}
          cy={containerSize / 2 + radius * Math.sin(Math.PI * 0.25)}
          r={2}
          fill="#f0134d"
          className="shadow-[#f0134d]/50 animate-pulse"
        />
        <circle
          cx={containerSize / 2 + radius * Math.cos(Math.PI * 1.25)}
          cy={containerSize / 2 + radius * Math.sin(Math.PI * 1.25)}
          r={2}
          fill="#f0134d"
          className="shadow-[#f0134d]/50 animate-pulse"
        />
      </svg>
      
      {/* Centered container with soft translucent background and standard size/margins */}
      <div className="absolute inset-[3px] rounded-full bg-[#f0134d]/10 border border-[#f0134d]/20 flex items-center justify-center shadow-[inset_0_2px_10px_rgba(240,19,77,0.1)] group-hover:bg-[#f0134d]/20 transition-colors duration-300">
        <SelectedIcon 
          size={size} 
          stroke="#f0134d" 
          fill="#f0134d" 
          fillOpacity={0.15}
          strokeWidth={2.2}
          className="hover:scale-110 active:scale-95 transition-transform duration-300 drop-shadow-[0_0_6px_rgba(240,19,77,0.4)]"
        />
      </div>
    </div>
  );
}
