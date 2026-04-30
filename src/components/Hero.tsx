import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { CheckCircle2, ShieldCheck, Zap, TrendingUp } from "lucide-react";
import { WhatsAppIcon } from "./Icons";
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
    <section ref={containerRef} className="relative h-[100dvh] min-h-[700px] flex flex-col items-center justify-center px-6 pt-24 lg:pt-32 overflow-hidden bg-black">
      {/* Background Gradients and Effects */}
      <div className="absolute inset-0 -z-10 bg-black overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[100%] opacity-[0.05] grayscale pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=60&w=1600&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Hero Background"
            loading="lazy"
          />
        </div>
        
        {/* Layered Overlays for Premium Contrast */}
        <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(255,0,84,0.08)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-30 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-12">
        
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-left"
        >
          {/* Trust Badge / Pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <div className="flex -space-x-1.5">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
              ].map((src, i) => (
                <img key={i} src={src} className="w-5 h-5 rounded-full border border-black object-cover" alt="User" />
              ))}
            </div>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/70">
              Mais de <span className="gradient-text">200 projetos</span> premium
            </span>
          </motion.div>

          <h1 className="text-[48px] sm:text-[64px] md:text-[86px] lg:text-[110px] font-black leading-[0.9] tracking-[-0.06em] uppercase mb-8">
            MÁQUINAS DE VENDAS PARA QUEM <span className="gradient-text">NÃO ACEITA PERDER</span> <br />
            POR APENAS <br />
            <span className="gradient-text">R$ 197/MÊS</span>
          </h1>
          
          <p className="text-sm md:text-base text-white/70 mb-10 max-w-lg leading-relaxed font-medium">
            Pare de jogar dinheiro no lixo. Entregamos uma vitrine digital agressiva, testada e desenhada puramente para esmagar a sua concorrência e multiplicar os seus lucros.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button 
              onClick={() => scrollTo('preço')}
              className="premium-btn w-full sm:w-auto px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-[0.1em]"
            >
              <WhatsAppIcon size={20} />
              Garantir meu site
            </button>
            <button 
              onClick={() => scrollTo('portfólio')}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl text-sm font-black border border-white/20 hover:bg-white/10 transition-all text-white/70 hover:text-white uppercase tracking-[0.1em]"
            >
              Ver Portfolio
            </button>
          </div>
        </motion.div>

        {/* Right Side: Organized Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="flex-1 relative hidden lg:block"
        >
          <div className="grid grid-cols-2 gap-3 max-w-[500px] ml-auto">
            {[
              "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400",
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400",
              "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=400",
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400"
            ].map((src, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/5 overflow-hidden bg-white/[0.02]"
              >
                <img src={src} className="w-full aspect-video object-cover opacity-60" alt="Template" />
              </div>
            ))}
            
            {/* Integrated info bar */}
            <div className="col-span-2 mt-2 bg-white/[0.02] border border-white/5 p-4 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#FF0054] to-[#A328D6] flex items-center justify-center text-white scale-90">
                  <ShieldCheck size={16} />
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest">
                  <span className="gradient-text">Performance Master</span>
                </div>
              </div>
              <div className="text-xl font-black gradient-text">99/100</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

