import React from "react";

export default function NicheTicker() {
  const items = [
    { name: "Odontologia", emoji: "🦷" },
    { name: "Veterinário", emoji: "🐾" },
    { name: "Estética", emoji: "✂️" },
    { name: "Academia", emoji: "💪" },
    { name: "Advocacia", emoji: "⚖️" },
    { name: "Nutrição", emoji: "🥗" },
    { name: "Restaurante", emoji: "🍽️" },
    { name: "Clínica Geral", emoji: "🏥" },
    { name: "Psicologia", emoji: "💆" },
    { name: "Construção Civil", emoji: "🏗️" }
  ];

  // Repeat items for infinite seamless scroll
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <section className="bg-[#0a0a0a] border-t border-b border-[#2a2a2a] py-6 relative overflow-hidden select-none">
      {/* Self-contained responsive CSS animation for infinite marquee movement */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .animate-marquee-scroller {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-scroller:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6">
        {/* Label on the left side */}
        <div className="flex items-center gap-2 text-[#606060] font-black uppercase tracking-[0.2em] text-sm shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#e91e8c]/80 animate-ping" />
          <span>Atendemos:</span>
        </div>

        {/* Marquee viewport container */}
        <div className="flex-1 overflow-hidden relative w-full pt-1">
          {/* Subtle horizontal fade-out borders on sides */}
          <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-[#0a0a0a] to-transparent z-15 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-[#0a0a0a] to-transparent z-15 pointer-events-none" />

          {/* Marquee Track */}
          <div className="animate-marquee-scroller py-1">
            {marqueeItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3 mx-6 whitespace-nowrap">
                <span className="text-xl shrink-0">{item.emoji}</span>
                <span className="text-[15px] font-medium text-white tracking-wide uppercase hover:text-[#e91e8c] transition-colors">{item.name}</span>
                <span className="text-xs text-[#e91e8c] ml-3 select-none">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
