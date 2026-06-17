import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 pt-32 pb-24 overflow-hidden bg-[#0F0108] text-white"
    >
      {/* Background soft ambient lights only */}
      <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] bg-[#e10270]/8 blur-[160px] rounded-full pointer-events-none z-0 animate-pulse" />
      <div className="absolute left-[-10%] bottom-[10%] w-[500px] h-[500px] bg-[#9b1fbd]/6 blur-[160px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        
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
            className="text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] font-black leading-[1.12] tracking-tight uppercase mb-6 text-center text-glow text-white font-sans"
          >
            Seu site de <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">alta conversão</span> <br />
            colocado no ar em <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">apenas 48 horas</span>
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

          {/* Browser Showcase Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full max-w-4xl mt-12 rounded-[20px] overflow-hidden border-2 border-[#e10270]/30 shadow-[0_20px_50px_rgba(225,2,112,0.15)] bg-[#0F0108] p-1.5"
          >
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-black/45">
              <div className="w-3 h-3 rounded-full bg-[#ef4444]/70" />
              <div className="w-3 h-3 rounded-full bg-[#eab308]/70" />
              <div className="w-3 h-3 rounded-full bg-[#22c55e]/70" />
              <div className="ml-4 px-3 py-1 rounded bg-white/5 text-[10px] text-neutral-500 font-mono select-none w-48 text-center truncate">
                duno.com.br/modelo-premium
              </div>
            </div>
            <img 
              src="/img-desktop-showcase.png" 
              alt="Modelo Premium Duno" 
              className="w-full h-auto object-cover rounded-b-xl"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
