import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { CheckCircle2, ShieldCheck, Zap, TrendingUp, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] lg:h-[100dvh] flex flex-col items-center justify-center px-6 pt-28 pb-16 lg:py-0 overflow-hidden bg-black animate-fadeIn">
      {/* Background Gradients and Effects */}
      <div className="absolute inset-0 -z-10 bg-black overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[100%] opacity-[0.08] grayscale pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=60&w=1600&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Hero Background"
            loading="lazy"
          />
        </div>
        
        {/* Layered Overlays for Premium Contrast */}
        <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />
        
        {/* Colorful glows and tech-grid overlay */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#FF0054]/15 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute top-[20%] right-[-100px] w-[500px] h-[500px] bg-[#A328D6]/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] left-[20%] w-[450px] h-[450px] bg-[#FF0054]/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      </div>

      <div className="relative z-30 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
        
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-left w-full"
        >
          {/* Trust Badge / Pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 sm:mb-8"
          >
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1200",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1200"
              ].map((src, i) => (
                <img key={i} src={src} className="w-7 h-7 rounded-full border-2 border-black ring-2 ring-[#FF0054]/40 object-cover hover:scale-110 active:scale-95 duration-200 transition-all cursor-pointer" alt="User Verified" />
              ))}
            </div>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/70">
              Mais de <span className="gradient-text">200 projetos</span> premium
            </span>
          </motion.div>

          <h1 className="text-[34px] xs:text-[40px] sm:text-[54px] md:text-[64px] lg:text-[72px] font-black leading-[1.05] sm:leading-[1] tracking-[-0.04em] uppercase mb-6">
            Site de <span className="gradient-text">Elite</span> <br />
            por Apenas <br />
            <span className="gradient-text">R$ 197/mês</span>
          </h1>
          
          <p className="text-sm md:text-base text-white/70 mb-8 md:mb-10 max-w-lg leading-relaxed font-medium">
            Escolha um dos nossos designs premium e nós personalizamos tudo com suas fotos e cores em tempo recorde. Performance de elite por um preço que cabe no seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button 
              onClick={() => scrollTo('preço')}
              className="premium-btn w-full sm:w-auto px-8 sm:px-10 py-4.5 sm:py-5 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-[0.15em] group flex items-center justify-center gap-2"
            >
              <span>Garantir meu site</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>
            <button 
              onClick={() => scrollTo('portfólio')}
              className="w-full sm:w-auto px-8 sm:px-10 py-4.5 sm:py-5 rounded-2xl text-xs sm:text-sm font-black border border-white/25 hover:bg-white/10 transition-all text-white/70 hover:text-white uppercase tracking-[0.15em]"
            >
              Ver Portfolio
            </button>
          </div>
        </motion.div>

        {/* Right Side: Single 100% Premium Showcase Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex-1 w-full relative block mt-8 lg:mt-0"
        >
          <div className="relative w-full max-w-[480px] lg:max-w-[540px] mx-auto lg:ml-auto group px-2 sm:px-0">
            {/* Ambient Background Glow behind the mockup */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF0054] to-[#A328D6] rounded-[24px] opacity-20 blur-xl group-hover:opacity-35 group-hover:scale-102 transition-all duration-500 pointer-events-none" />
            
            {/* The Main Device Window (Browser mockup) */}
            <div className="relative border border-white/10 rounded-[22px] bg-black/80 backdrop-blur-md overflow-hidden shadow-[0_20px_50px_-15px_rgba(255,0,84,0.25)]">
              {/* Browser bar */}
              <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 bg-[#0F0108]/90 border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="px-3 sm:px-4 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-[8px] sm:text-[9px] text-white/40 tracking-wider font-mono flex items-center gap-1.5 min-w-[140px] sm:min-w-[180px] justify-center">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-500/85 animate-pulse" />
                  duno.com.br/elite-dashboard
                </div>
                <div className="w-10 sm:w-12" />
              </div>

              {/* Main Content Image - Occupies 100% of the container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0004]">
                <img 
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 pointer-events-auto" 
                  alt="Modelo de Site de Elite"
                />
                {/* Clean dark slope overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Embedded Active Status */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:py-1 rounded-full bg-black/85 border border-[#FF0054]/30 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF0054] animate-ping" />
                  <span className="text-[8px] sm:text-[9px] font-black tracking-widest text-[#FF0054] uppercase">Site Ativo</span>
                </div>
              </div>
            </div>

            {/* Overlapping Premium Stats / Badge 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-4 sm:-bottom-6 -left-1 sm:-left-6 bg-[#0F0108]/95 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl flex items-center gap-3 sm:gap-4 shadow-xl shadow-black/50 hover:scale-105 transition-all duration-300 z-25"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#FF0054]/10 border border-[#FF0054]/20 flex items-center justify-center text-[#FF0054] shrink-0">
                <TrendingUp size={16} className="sm:w-5 sm:h-5" />
              </div>
              <div className="text-left">
                <p className="text-[8px] lg:text-[9px] font-black text-white/50 uppercase tracking-widest leading-none mb-1">Conversão</p>
                <p className="text-xs sm:text-base font-black text-white leading-none">+324% Leads</p>
              </div>
            </motion.div>

            {/* Overlapping Speed Badge 2 */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -top-4 sm:-top-6 -right-1 sm:-right-6 bg-[#0F0108]/95 backdrop-blur-md border border-[#FF0054]/30 px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl flex items-center gap-2.5 sm:gap-3 shadow-xl shadow-black/50 hover:scale-105 transition-all duration-300 z-25"
            >
              <div className="flex flex-col items-end text-right">
                <span className="text-[7px] sm:text-[8px] font-black text-[#FF0054] uppercase tracking-[0.15em] leading-none mb-0.5 sm:mb-1">PAGESPEED</span>
                <span className="text-[10px] sm:text-xs font-black text-white leading-none">Alta Performance</span>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#FF0054]/50 flex items-center justify-center text-[10px] sm:text-xs font-black text-[#FF0054] shadow-[0_0_10px_rgba(255,0,84,0.2)]">
                100
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

