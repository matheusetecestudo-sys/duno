import { motion } from "motion/react";
import { useRef } from "react";
import { ShieldCheck, Play } from "lucide-react";
import { WhatsAppIcon } from "./Icons";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] flex flex-col items-center justify-center px-6 overflow-hidden bg-[#050002]">
      
      {/* Background - Elevado com malha e gradientes vivos */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,0,84,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(163,40,214,0.15),transparent_50%)]" />
        {/* Grid lines animadas sutis */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050002] to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 pt-24 pb-12">
        
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 text-center lg:text-left z-20"
        >
          {/* Badge premium */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(255,0,84,0.1)]"
          >
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
              ].map((src, i) => (
                <img key={i} src={src} className="w-7 h-7 rounded-full border-2 border-[#050002] object-cover" alt="User" />
              ))}
            </div>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/80">
              Mais de <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">200 projetos</span>
            </span>
          </motion.div>

          {/* H1 - Modernizado */}
          <h1 className="text-[46px] sm:text-[60px] lg:text-[76px] xl:text-[88px] font-black leading-[0.9] tracking-[-0.03em] uppercase mb-8">
            <span className="block text-white">Máquinas</span>
            <span className="block gradient-text drop-shadow-[0_0_30px_rgba(255,0,84,0.3)]">de Vendas</span>
            <span className="block text-[32px] sm:text-[40px] lg:text-[48px] text-white/40 mt-2">por R$ 197/mês</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-xl leading-relaxed font-medium mx-auto lg:mx-0">
            Pare de perder clientes. Entregamos uma infraestrutura digital de luxo, projetada exclusivamente para dominar o seu mercado.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
            <button 
              onClick={() => scrollTo('preço')}
              className="group premium-btn w-full sm:w-auto px-10 py-4 rounded-full text-sm font-black uppercase tracking-[0.1em] flex items-center justify-center gap-3 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <WhatsAppIcon size={22} className="relative z-10" />
              <span className="relative z-10">Garantir meu site</span>
            </button>
            
            <button 
              onClick={() => scrollTo('portfólio')}
              className="group w-full sm:w-auto px-10 py-4 rounded-full text-sm font-black border border-white/10 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.08] hover:border-white/20 transition-all text-white/80 hover:text-white uppercase tracking-[0.1em] flex items-center justify-center gap-3"
            >
              <Play size={18} className="text-[#FF0054] group-hover:scale-110 transition-transform" />
              Ver Portfólio
            </button>
          </div>

          {/* Social proof bar - Mais sofisticado */}
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap items-center gap-8 lg:gap-12 justify-center lg:justify-start">
            {[
              { label: "Sites Entregues", value: "200+" },
              { label: "Satisfação", value: "98%" },
              { label: "Lead Gen", value: "3x+" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center lg:items-start group">
                <span className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-br from-white to-white/40 group-hover:to-white/80 transition-colors">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#FF0054] font-bold mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Preview Grid - Estilo Flutuante e 3D */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex-1 relative hidden lg:block w-full"
        >
          {/* Efeito de brilho de fundo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(255,0,84,0.15),rgba(163,40,214,0.15),transparent_70%)] blur-[80px] rounded-full -z-10" />

          <div className="relative grid grid-cols-2 gap-5 max-w-[500px] ml-auto [perspective:1000px]" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-12deg) rotateX(8deg)' }}>
            {[
              { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400", delay: 0 },
              { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400", delay: 0.1 },
              { src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=400", delay: 0.2 },
              { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400", delay: 0.3 }
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 + img.delay }}
                whileHover={{ scale: 1.05, translateZ: 30 }}
                className={`rounded-2xl border border-white/10 overflow-hidden bg-[#050002]/80 backdrop-blur-md shadow-2xl ${i % 2 !== 0 ? 'mt-10' : ''}`}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent z-10 pointer-events-none opacity-50" />
                <img src={img.src} className="w-full aspect-[4/5] object-cover opacity-70 hover:opacity-100 transition-opacity duration-500" alt="Template" />
              </motion.div>
            ))}
            
            {/* Badge de Performance Flutuante */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
              className="absolute -left-16 bottom-16 bg-[#050002]/90 backdrop-blur-xl border border-white/10 p-5 rounded-3xl flex items-center gap-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF0054] to-[#A328D6] flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,0,84,0.4)]">
                <ShieldCheck size={28} />
              </div>
              <div>
                <span className="block text-xs font-black uppercase tracking-widest text-white/70">Performance</span>
                <span className="block text-2xl font-black gradient-text mt-0.5">Score 99</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
