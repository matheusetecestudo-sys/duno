import React from "react";

export function PortfolioSkeleton() {
  return (
    <section className="py-24 px-6 bg-[#000000] border-t border-[#2a2a2a] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#e91e8c]/3 blur-[140px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Skeleton */}
        <div className="text-center mb-16 animate-pulse">
          <div className="h-4 bg-[#e91e8c]/15 border border-[#e91e8c]/30 w-44 mx-auto rounded-full mb-6 py-2" />
          <div className="h-10 bg-neutral-800 w-full max-w-lg mx-auto rounded-xl mb-4" />
          <div className="h-6 bg-neutral-900 w-full max-w-md mx-auto rounded-xl" />
        </div>

        {/* Niche Tabs Skeleton */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 animate-pulse">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-10 bg-neutral-900 border border-white/5 w-24 rounded-full" />
          ))}
        </div>

        {/* Dynamic Display Layout Grid Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center animate-pulse">
          {/* Left info column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="h-10 bg-neutral-800 w-32 rounded-lg" />
            <div className="h-6 bg-neutral-900 w-44 rounded-lg" />
            <div className="space-y-2">
              <div className="h-4 bg-neutral-900 w-full rounded" />
              <div className="h-4 bg-neutral-900 w-11/12 rounded" />
              <div className="h-4 bg-neutral-900 w-10/12 rounded" />
            </div>
            <div className="h-12 bg-neutral-900 w-64 rounded-full" />
          </div>

          {/* Right visual asset column */}
          <div className="lg:col-span-6">
            <div className="aspect-[4/3] bg-neutral-900 rounded-3xl border border-white/5" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function SocialProofSkeleton() {
  return (
    <section className="py-24 px-6 bg-[#000000] relative overflow-hidden border-t border-[#2a2a2a]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#e91e8c]/3 blur-[140px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1100px] w-full mx-auto relative z-10 text-center">
        {/* Header Skeleton */}
        <div className="text-center mb-16 animate-pulse">
          <div className="h-12 bg-neutral-800 w-full max-w-md mx-auto rounded-xl mb-4" />
          <div className="h-5 bg-neutral-900 w-full max-w-sm mx-auto rounded-xl" />
        </div>

        {/* 3 Columns WhatsApp Chat Mockup Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left animate-pulse">
          {[1, 2, 3].map((column) => (
            <div key={column} className="flex flex-col rounded-2xl overflow-hidden border border-neutral-800 bg-[#111b21] h-[320px]">
              {/* Fake WhatsApp Header */}
              <div className="bg-[#202c33] px-4 py-3.5 flex items-center gap-3 border-b border-white/5">
                <div className="w-9 h-9 rounded-full bg-neutral-700 shrink-0" />
                <div className="flex-1 space-y-1.5">
                  <div className="h-3 bg-neutral-700 w-24 rounded" />
                  <div className="h-2 bg-neutral-700 w-16 rounded" />
                </div>
              </div>

              {/* Chat Messages Loading State */}
              <div className="p-4 flex-1 flex flex-col gap-4 bg-[#0b141a]">
                <div className="max-w-[80%] rounded-xl px-3 py-2 bg-[#202c33] self-start space-y-1.5 w-44">
                  <div className="h-2.5 bg-neutral-600 rounded" />
                  <div className="h-2 bg-neutral-600 rounded w-11/12" />
                </div>
                
                <div className="max-w-[80%] rounded-xl px-3 py-2 bg-[#005c4b]/50 self-end space-y-1.5 w-36 mt-4">
                  <div className="h-2.5 bg-neutral-600 rounded" />
                  <div className="h-2 bg-neutral-600 rounded w-10/12" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
