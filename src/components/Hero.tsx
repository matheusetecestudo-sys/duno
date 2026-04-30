import { motion } from "motion/react";
import { useRef } from "react";
import { ShieldCheck } from "lucide-react";
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
    <section ref={containerRef} className="relative min-h-[100dvh] flex flex-col items-center justify-center px-6 overflow-hidden bg-black">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=60&w=1600&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-[0.04]" 
          alt="Hero Background"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(255,0,84,0.10)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(163,40,214,0.08)_0%,transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 pt-24">
        
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 text-center lg:text-left"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10"
          >
            <div className="flex -space-x-1.5">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
              ].map((src, i) => (
                <img key={i} src={src} className="w-6 h-6 rounded-full border-2 border-black object-cover" alt="User" />
              ))}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
              Mais de <span className="gradient-text">200 projetos</span> entregues
            </span>
          </motion.div>

          {/* H1 */}
          <h1 className="text-[42px] sm:text-[56px] lg:text-[68px] xl:text-[80px] font-black leading-[0.95] tracking-[-0.04em] uppercase mb-6">
            Sites que <span className="gradient-text">Vendem</span><br />
            por R$ <span className="gradient-text">197/mês</span>
          </h1>

          <p className="text-base md:text-lg text-white/65 mb-10 max-w-xl leading-relaxed font-medium mx-auto lg:mx-0">
            Pare de perder clientes para a concorrência. Entregamos uma máquina de vendas digital, totalmente personalizada para o seu negócio, em tempo recorde.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button 
              onClick={() => scrollTo('preço')}
              className="premium-btn w-full sm:w-auto px-10 py-4 rounded-2xl text-sm font-black uppercase tracking-[0.08em]"
            >
              <WhatsAppIcon size={20} />
              Garantir meu site agora
            </button>
            <button 
              onClick={() => scrollTo('portfólio')}
              className="w-full sm:w-auto px-10 py-4 rounded-2xl text-sm font-black border border-white/20 hover:bg-white/10 transition-all text-white/70 hover:text-white uppercase tracking-[0.08em]"
            >
              Ver Portfólio
            </button>
          </div>

          {/* Social proof bar */}
          <div className="mt-12 flex flex-wrap items-center gap-6 justify-center lg:justify-start">
            {[
              { label: "Sites Entregues", value: "200+" },
              { label: "Taxa de Satisfação", value: "98%" },
              { label: "Aumento de Leads", value: "3x" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-black gradient-text">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-white/40 font-bold">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Preview Grid */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex-1 relative hidden lg:block max-w-[520px] w-full ml-auto"
        >
          <div className="grid grid-cols-2 gap-3">
            {[
              "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400",
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400",
              "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=400",
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400"
            ].map((src, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/8 overflow-hidden bg-white/[0.02] group"
              >
                <img src={src} className="w-full aspect-video object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500" alt="Template" />
              </div>
            ))}
            
            {/* Badge bar */}
            <div className="col-span-2 mt-1 bg-white/[0.03] border border-white/8 p-4 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FF0054] to-[#A328D6] flex items-center justify-center text-white">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <span className="block text-[10px] font-black uppercase tracking-widest gradient-text">Performance Master</span>
                  <span className="block text-[9px] text-white/40 mt-0.5">Google PageSpeed Score</span>
                </div>
              </div>
              <div className="text-3xl font-black gradient-text">99</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}



