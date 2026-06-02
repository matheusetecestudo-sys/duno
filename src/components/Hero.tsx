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
            className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 sm:mb-8 animate-pulse"
          >
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1200",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1200"
              ].map((src, i) => (
                <img key={i} src={src} className="w-7 h-7 rounded-full border-2 border-black ring-2 ring-[#FF0054]/40 object-cover hover:scale-110 duration-200 transition-all cursor-pointer" alt="User Verified" />
              ))}
            </div>
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] text-white/90">
              Mais de <span className="text-[#FF0054]">100 negócios locais</span> já contrataram
            </span>
          </motion.div>

          <h1 className="text-[34px] xs:text-[40px] sm:text-[54px] md:text-[60px] lg:text-[68px] font-black leading-[1.05] sm:leading-[1] tracking-[-0.04em] uppercase mb-6 text-white text-left">
            Seu concorrente <br />
            já aparece no Google. <br />
            <span className="gradient-text">Você ainda não.</span>
          </h1>
          
          <p className="text-sm md:text-base text-white/80 mb-8 md:mb-10 max-w-lg leading-relaxed font-bold">
            Receba um Site de Elite totalmente pronto e personalizado de graça em até 24h. Design de alta conversão adaptado com seu logo, cores e fotos reais, por apenas <strong className="text-[#FF0054]">R$ 197/mês</strong>. Sem taxas de criação. Sem fidelidade, cancele quando quiser.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a 
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="premium-btn w-full sm:w-auto px-8 sm:px-10 py-4.5 sm:py-5 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-[0.15em] group flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,0,84,0.3)] hover:shadow-[0_0_35px_rgba(255,0,84,0.55)] transition-all"
            >
              <span>Falar no WhatsApp e garantir minha vaga</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform" />
            </a>
            <button 
              onClick={() => scrollTo('portfólio')}
              className="w-full sm:w-auto text-xs sm:text-sm font-black text-white hover:text-[#FF0054] underline underline-offset-8 decoration-[#FF0054]/40 hover:decoration-[#FF0054] transition-all py-3 px-2 text-center uppercase tracking-[0.15em]"
            >
              Conhecer Modelos Prontos →
            </button>
          </div>

          <p className="text-white/80 text-[11px] font-black uppercase tracking-wider mt-4 text-center sm:text-left flex items-center justify-center sm:justify-start gap-1.5">
            <span>⭐ Mais de 100 negócios locais já contrataram e decolaram</span>
          </p>

          <p className="text-white/60 text-xs font-bold mt-3 flex items-center gap-2 justify-center sm:justify-start">
            <span className="w-2 h-2 rounded-full bg-[#00FF80] animate-pulse shrink-0" />
            Vagas limitadas por cidade: Apenas 1 site de elite por nicho profissional em cada região.
          </p>
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
              <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 bg-[#0b0106]/95 border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="px-3 sm:px-4 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-[8px] sm:text-[9px] text-white/40 tracking-wider font-mono flex items-center gap-1.5 min-w-[140px] sm:min-w-[180px] justify-center">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-500/85 animate-pulse" />
                  dra-carolina-odonto.com.br
                </div>
                <div className="w-10 sm:w-12" />
              </div>

              {/* Main Content Webpage Mockup - Code layout simulating our premium client sites */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#0A0004] text-white p-4 flex flex-col justify-between font-sans">
                {/* Simulated Dentist Landing Page navbar */}
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <span className="font-black text-xs text-white uppercase tracking-tighter">Dra. Carolina</span>
                    <span className="text-[7px] text-white/40 uppercase font-mono tracking-widest">ODONTOLOGIA</span>
                  </div>
                  <div className="flex gap-2 text-[7px] text-white/50 font-bold">
                    <span>Tratamentos</span>
                    <span>Galeria</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-[7px] font-black uppercase">Agendar</span>
                </div>

                {/* Simulated Dentist Landing Page hero */}
                <div className="grid grid-cols-12 gap-3 my-auto items-center">
                  <div className="col-span-7 pr-1 text-left">
                    <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-[#FF0054]/10 border border-[#FF0054]/30 text-[6px] sm:text-[7px] text-[#FF0054] font-black uppercase tracking-wider mb-2">
                      Aparece no Google Maps Inclusivo
                    </div>
                    <h4 className="text-lg sm:text-2xl font-black text-white leading-tight uppercase tracking-tight mb-2">
                      Seu Sorriso <br />
                      <span className="text-[#FF0054]">Sua Assinatura</span>
                    </h4>
                    <p className="text-[7px] sm:text-[9px] text-white/70 leading-relaxed mb-3 font-semibold">
                      Lentes de porcelana, facetas e implantes com consultório premium na Avenida Paulista. Atendimento particular de elite.
                    </p>
                    <div className="flex gap-1.5">
                      <span className="px-2 py-1 rounded-md bg-[#25D366] text-white font-black text-[7px] uppercase tracking-wider flex items-center gap-1 shadow-lg shadow-[#25D366]/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        Agendar via WhatsApp
                      </span>
                    </div>
                  </div>
                  
                  {/* Portrait in dental uniform on the right */}
                  <div className="col-span-5 relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0004] via-transparent to-transparent z-10" />
                    <img 
                      src="https://images.unsplash.com/photo-1594824813573-246434de83fb?q=80&w=400&auto=format&fit=crop"
                      alt="Dra Carolina"
                      className="w-full h-24 sm:h-28 object-cover object-top rounded-xl border border-white/15 bg-neutral-900 group-hover:scale-105 duration-700 transition-all shadow-xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Simulated Dentist Footer bar with high conversion local info */}
                <div className="flex justify-between items-center pt-2 border-t border-white/5 text-[7px] text-white/50 font-bold uppercase">
                  <span>📍 Av. Paulista, 1000 - Bela Vista</span>
                  <span className="text-[#00FF80] flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-[#00FF80] animate-ping" />
                    Avaliação 5.0 ⭐⭐⭐⭐⭐
                  </span>
                </div>

                {/* Embedded Active Status indicator */}
                <div className="absolute bottom-11 right-4 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/90 border border-[#25D366]/40 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-ping" />
                  <span className="text-[7px] font-black tracking-widest text-[#25D366] uppercase">Preview do Site</span>
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
                <p className="text-xs sm:text-base font-black text-white leading-none">+324% Contatos</p>
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
                <span className="text-[7px] sm:text-[8px] font-black text-[#FF0054] uppercase tracking-[0.15em] leading-none mb-0.5 sm:mb-1">DESEMPENHO</span>
                <span className="text-[10px] sm:text-xs font-black text-white leading-none">Ultra Rápido 5G</span>
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

