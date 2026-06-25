import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 overflow-hidden bg-[#121212] text-white"
    >
      {/* Background Banner Image covering the entire screen */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 pointer-events-none"
        style={{ 
          backgroundImage: "url('/img-desktop-showcase.png')",
        }}
      />
      {/* Dark overlay — dimming the background so text is perfectly readable */}
      <div className="absolute inset-0 bg-[#121212]/62 pointer-events-none z-[1]" />
      {/* Gradient — bottom fade to dark */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#121212] to-transparent pointer-events-none z-[2]" />
      {/* Gradient — top fade to dark (navbar area) */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#121212]/80 to-transparent pointer-events-none z-[2]" />

      {/* Background soft ambient lights only */}
      <div className="absolute right-[-10%] top-[10%] w-[500px] h-[500px] bg-[#f0134d]/8 blur-[160px] rounded-full pointer-events-none z-[1] animate-pulse" />
      <div className="absolute left-[-10%] bottom-[10%] w-[400px] h-[400px] bg-[#7c3aed]/6 blur-[160px] rounded-full pointer-events-none z-[1]" />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center" style={{ paddingTop: '90px', paddingBottom: '60px' }}>
        
        <div className="w-full flex flex-col items-center text-center">
          {/* Badge topo */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-4.5 py-1.5 rounded-full bg-[#12020a]/85 border border-[#f0134d]/45 text-white text-xs sm:text-sm font-extrabold tracking-wide mb-6 shadow-[0_0_20px_rgba(240,19,77,0.25)]"
          >
            <div className="flex -space-x-2">
              <img className="inline-block h-6 w-6 rounded-full ring-2 ring-[#f0134d] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80" alt="User 1" />
              <img className="inline-block h-6 w-6 rounded-full ring-2 ring-[#f0134d] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80" alt="User 2" />
              <img className="inline-block h-6 w-6 rounded-full ring-2 ring-[#f0134d] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80" alt="User 3" />
              <img className="inline-block h-6 w-6 rounded-full ring-2 ring-[#f0134d] object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80" alt="User 4" />
            </div>
            <span className="text-[#f0134d] font-black tracking-widest uppercase text-[10px] sm:text-xs">⚡ Seu site no ar completo em 48h</span>
          </motion.div>

          {/* Headline principal (H1) matching Print 2 */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] font-black leading-[1.12] tracking-tight uppercase mb-6 text-center text-white font-sans"
          >
            Seu site de <span className="gradient-text">alta conversão</span> <br />
            colocado no ar em apenas <span className="gradient-text">48 horas</span>
          </motion.h1>
          
          {/* Subheadline description */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#b3b3b3] text-base sm:text-lg mb-8 leading-relaxed font-semibold max-w-2xl text-center"
          >
            Um site de elite completo, ultra-veloz, totalmente otimizado para celulares e focado em transformar seus visitantes em clientes reais por apenas R$197/mês.
          </motion.p>

          {/* Bloco de CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full sm:w-auto"
          >
            <a 
              href="https://wa.me/5511992876219?text=Ol%C3%A1!%20Li%20os%20detalhes%20da%20assinatura%20do%20site%20Duno%20e%20quero%20come%C3%A7ar."
              target="_blank"
              rel="noopener noreferrer"
              className="gold-premium-btn w-full sm:w-auto"
            >
              <span>Quero meu site de elite</span>
              <ArrowRight size={15} />
            </a>
            <button 
              onClick={() => {
                const element = document.getElementById('modelos');
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-black text-white hover:text-[#f0134d] hover:border-[#f0134d] uppercase tracking-wider text-center border-2 border-white/20 hover:border-white/40 transition-all duration-300 bg-white/5 hover:bg-white/10 backdrop-blur-md shrink-0 cursor-pointer flex items-center justify-center gap-2 group whitespace-nowrap"
            >
              <span>Modelos de Sites</span>
              <ArrowRight size={15} className="text-white transition-transform group-hover:translate-x-1 shrink-0" />
            </button>
          </motion.div>

          {/* Prova Social Integrada com visual moderno */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-4 sm:gap-6 py-4 border-t border-b border-white/10 w-full max-w-md bg-white/5 backdrop-blur-md px-6 rounded-2xl mx-auto"
          >
            <div className="flex-1">
              <span className="block text-2xl sm:text-3xl font-black text-[#f0134d] leading-none">+100</span>
              <span className="text-[10px] font-black text-neutral-400 uppercase tracking-wider block mt-1">Sites</span>
            </div>
            <div className="h-8 w-[1px] bg-white/10" />
            <div className="flex-1 text-center">
              <span className="block text-2xl sm:text-3xl font-black text-[#f0134d] leading-none">+15</span>
              <span className="text-[10px] font-black text-neutral-400 uppercase tracking-wider block mt-1">Nichos</span>
            </div>
            <div className="h-8 w-[1px] bg-white/10" />
            <div className="flex-1 text-right">
              <span className="block text-2xl sm:text-3xl font-black text-[#f0134d] leading-none">48h</span>
              <span className="text-[10px] font-black text-neutral-400 uppercase tracking-wider block mt-1">Pronto</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
