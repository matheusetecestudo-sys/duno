import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X, Sparkles, AlertCircle, ShoppingBag, Eye, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const NICHES = [
  { 
    niche: "Veterinários", 
    desc: "Personalizamos este modelo com as cores e fotos da sua clínica pet em tempo recorde.", 
    img: "https://images.unsplash.com/photo-1581888227599-779811939961?q=80&w=800",
    desktopImg: "https://images.unsplash.com/photo-1581888227599-779811939961?q=80&w=1200",
    stats: { speed: "99", seo: "100", mobile: "Oui" },
    tag: "Clínicas Pet"
  },
  { 
    niche: "Advogados", 
    desc: "Um design sóbrio e autoritário que adaptamos para o seu escritório jurídico.", 
    img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800",
    desktopImg: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200",
    stats: { speed: "98", seo: "100", mobile: "Oui" },
    tag: "Escritórios"
  },
  { 
    niche: "Estética & Saúde", 
    desc: "Design clean e moderno pronto para receber a identidade visual do seu consultório.", 
    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800",
    desktopImg: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200",
    stats: { speed: "100", seo: "100", mobile: "Oui" },
    tag: "Consultórios"
  },
  { 
    niche: "Academia & Personal", 
    desc: "Design de alta energia que customizamos para o seu método de treinamento.", 
    img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800",
    desktopImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200",
    stats: { speed: "99", seo: "98", mobile: "Oui" },
    tag: "High Energy"
  },
  { 
    niche: "Nutrição & Bem-Estar", 
    desc: "Sua autoridade e consultas a um clique de distância com este modelo premium.", 
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800",
    desktopImg: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200",
    stats: { speed: "100", seo: "100", mobile: "Oui" },
    tag: "Saúde Integrada"
  },
  { 
    niche: "Gourmet & Bistrô", 
    desc: "Modelo visual de dar água na boca adaptado para o cardápio do seu restaurante.", 
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800",
    desktopImg: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200",
    stats: { speed: "97", seo: "100", mobile: "Oui" },
    tag: "Gastronomia"
  }
];

export default function Portfolio() {
  const [selectedModel, setSelectedModel] = useState<typeof NICHES[0] | null>(null);

  return (
    <section id="portfólio" className="py-20 px-6 bg-black relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#FF0054]/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#A328D6]/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-6">
            Escolha seu <span className="gradient-text">Modelo</span>
          </h2>
          <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto">
            Selecione o design que mais gosta. Clique para ampliar e visualizar os detalhes premium de cada modelo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NICHES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedModel(item)}
              className="pink-card group flex flex-col p-0 overflow-hidden cursor-pointer h-full border border-white/5 bg-[#0F0108]/40 hover:bg-[#0F0108]/80 hover:border-[#FF0054]/40 transition-all duration-500 rounded-3xl"
            >
              <div className="aspect-video overflow-hidden relative">
                {/* Visual Header Mock */}
                <div className="absolute top-3 left-3 right-3 z-20 flex justify-between items-center">
                  <span className="px-3 py-1 text-[9px] font-black tracking-widest text-[#FF0054] bg-black/70 backdrop-blur-md rounded-full border border-[#FF0054]/30 uppercase">
                    {item.tag}
                  </span>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[8px] font-black text-white/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FF80] animate-pulse" />
                    PREVIEW ATIVO
                  </div>
                </div>

                <img 
                  src={item.img} 
                  alt={item.niche} 
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
                
                {/* Micro-interaction Hover Badge */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0F0108] to-transparent opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF0054] text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-[#FF0054]/30">
                    <Eye size={14} className="stroke-[3]" />
                    <span>Visualizar Modelo</span>
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-black gradient-text leading-none uppercase tracking-tighter">
                     {item.niche}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-[#FF0054]/10 group-hover:bg-[#FF0054] flex items-center justify-center text-[#FF0054] group-hover:text-white shadow-lg group-hover:shadow-[#FF0054]/20 transition-all duration-300">
                    <ArrowRight size={20} className="stroke-[3] group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
                <p className="text-white/70 text-base font-medium leading-relaxed mb-6">
                  {item.desc}
                </p>
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00FF80]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Garantia Duno</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#FF0054]/80">99/100 SPEED</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Elegant Immersive Interactive Image Modal */}
      <AnimatePresence>
        {selectedModel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedModel(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-4xl lg:max-w-5xl bg-[#0F0108] border-2 border-[#FF0054]/40 rounded-[28px] md:rounded-[32px] overflow-hidden shadow-[0_25px_80px_rgba(255,0,84,0.35)] max-h-[90vh] overflow-y-auto select-none"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* 100% Mockup Image Panel */}
                <div className="lg:col-span-8 relative aspect-video lg:aspect-auto lg:h-[540px] overflow-hidden bg-black border-r border-[#FF0054]/10">
                  <img 
                    src={selectedModel.desktopImg} 
                    alt={selectedModel.niche} 
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Decorative float badges to focus on premium image characteristics */}
                  <div className="absolute bottom-6 left-6 flex flex-wrap gap-3">
                    <span className="px-3.5 py-1.5 rounded-xl bg-black/80 border border-[#FF0054]/30 backdrop-blur-md text-[10px] font-black text-[#FF0054] tracking-widest uppercase flex items-center gap-1.5">
                      <Sparkles size={11} className="stroke-[3]" />
                      Imagens Altamente Otimizadas
                    </span>
                    <span className="px-3.5 py-1.5 rounded-xl bg-black/80 border border-white/10 backdrop-blur-md text-[10px] font-black text-white/80 tracking-widest uppercase">
                      Estética Premium
                    </span>
                  </div>
                </div>

                {/* Info and action panel */}
                <div className="lg:col-span-4 p-8 lg:p-10 flex flex-col justify-between h-auto lg:h-[540px] bg-linear-to-b from-[#0F0108] to-black">
                  <div>
                    {/* Close button with nice styling */}
                    <div className="flex justify-between items-center mb-8">
                      <span className="text-[10px] font-black text-[#FF0054] uppercase tracking-[0.3em]">MODELO CUSTOMIZÁVEL</span>
                      <button 
                        onClick={() => setSelectedModel(null)}
                        className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#FF0054]/20 hover:text-[#FF0054] flex items-center justify-center text-white/70 transition-all active:scale-95 cursor-pointer"
                      >
                        <X size={18} className="stroke-[3]" />
                      </button>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-black text-white leading-none uppercase tracking-tighter mb-4">
                      {selectedModel.niche}
                    </h3>
                    <p className="text-white/70 text-sm font-medium leading-relaxed mb-8">
                      Nós adaptamos este design impecável com seu logotipo, cores personalizadas e textos de conversão ideais para captar mais contatos na sua região.
                    </p>

                    {/* Stats Specs */}
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                        <span className="text-[11px] font-bold text-white/40 uppercase tracking-wider">Mobile Otimizado</span>
                        <span className="text-xs font-black text-[#00FF80] uppercase flex items-center gap-1">
                          <CheckCircle2 size={13} strokeWidth={3} /> SIM
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                        <span className="text-[11px] font-bold text-white/40 uppercase tracking-wider">PageSpeed Score</span>
                        <span className="text-xs font-black text-white bg-[#FF0054] px-2 py-0.5 rounded-md shadow-sm shadow-[#FF0054]/30">{selectedModel.stats.speed}/100</span>
                      </div>
                      <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                        <span className="text-[11px] font-bold text-white/40 uppercase tracking-wider">Otimização SEO Local</span>
                        <span className="text-xs font-black text-white">{selectedModel.stats.seo}/100</span>
                      </div>
                    </div>
                  </div>

                  {/* Immediate Action inside Modal */}
                  <div className="space-y-4">
                    <a 
                      href="https://wa.me/5511999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="premium-btn w-full py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 group shadow-xl"
                    >
                      <span>Quero este modelo</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                    </a>
                    <button 
                      onClick={() => setSelectedModel(null)}
                      className="w-full py-3 rounded-2xl border border-white/5 hover:border-white/10 text-[10px] font-black uppercase tracking-[0.25em] text-white/40 hover:text-white transition-all text-center cursor-pointer"
                    >
                      Voltar ao catálogo
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

