import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section 
      className="relative min-h-[100vh] lg:min-h-[750px] lg:h-screen lg:max-h-[1000px] flex items-center justify-start px-6 sm:px-12 py-24 lg:py-0 overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* Background Banner Image integrated smoothly into the session background (on the right) */}
      <div 
        className="absolute inset-y-0 right-0 w-full lg:w-[54%] bg-cover lg:bg-contain bg-right bg-no-repeat z-0 pointer-events-none opacity-20 lg:opacity-100"
        style={{ 
          backgroundImage: "url('/img-desktop-showcase.png')",
        }}
      />
      {/* Dynamic gradient overlay to blend the banner seamlessly with the dark background */}
      <div className="absolute inset-y-0 right-[45%] w-[15%] bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none z-5 hidden lg:block" />
      <div className="absolute inset-0 bg-[#0a0a0a]/70 lg:bg-transparent pointer-events-none z-5 lg:hidden" />

      {/* Background soft ambient lights only */}
      <div className="absolute right-[-10%] top-[10%] w-[500px] h-[500px] bg-[#f0134d]/6 blur-[160px] rounded-full pointer-events-none z-0 animate-pulse" />
      <div className="absolute left-[-10%] bottom-[10%] w-[400px] h-[400px] bg-[#7c3aed]/4 blur-[160px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center pt-10 lg:pt-0">
        
        {/* Left Copy Container (Takes up 55% width to layout perfectly side-by-side with the right-aligned background banner) */}
        <div className="w-full lg:max-w-[55%] flex flex-col items-start text-left">
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
            className="text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] font-black leading-[1.12] tracking-tight uppercase mb-6 text-left text-glow text-white font-sans"
          >
            Seu site de <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">alta conversão</span> <br />
            colocado no ar em <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">apenas 48 horas</span>
          </motion.h1>
          
          {/* Subheadline description */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#b3b3b3] text-base sm:text-lg mb-8 leading-relaxed font-semibold max-w-xl text-left"
          >
            Um site de elite completo, ultra-veloz, totalmente otimizado para celulares e focado em transformar seus visitantes em clientes reais por apenas R$197/mês.
          </motion.p>

          {/* Bloco de CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto"
          >
            <a 
              href="https://wa.me/5511999999999?text=Olá!%20Li%2520os%2520detalhes%2520da%252520assinatura%252520do%252520site%252520Duno%2520e%2520quero%2520começar."
              target="_blank"
              rel="noopener noreferrer"
              className="gold-premium-btn w-full sm:w-auto"
            >
              <span>Quero meu site de elite</span>
              <ArrowRight size={15} />
            </a>
            <button 
              onClick={() => {
                const element = document.getElementById('vantagens');
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-black text-white hover:text-[#f0134d] hover:border-[#f0134d] uppercase tracking-wider text-center border-2 border-white/20 hover:border-white/40 transition-all duration-300 bg-white/5 hover:bg-white/10 backdrop-blur-md shrink-0 cursor-pointer flex items-center justify-center gap-2 group whitespace-nowrap"
            >
              <span>Ver vantagens</span>
              <ArrowRight size={15} className="text-white transition-transform group-hover:translate-x-1 shrink-0" />
            </button>
          </motion.div>

          {/* Prova Social Integrada com visual moderno */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-4 sm:gap-6 py-4 border-t border-b border-white/10 w-full max-w-md bg-white/5 backdrop-blur-md px-6 rounded-2xl"
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
