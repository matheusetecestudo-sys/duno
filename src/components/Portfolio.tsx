import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X, Sparkles, Eye, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const NICHES = [
  { 
    niche: "Veterinários", 
    subtitle: "Clínicas Pet — site premium com agendamento online de consultas, galeria de fotos e botão de WhatsApp.",
    desc: "Personalizamos este modelo completo com as cores, fotos e estrutura da sua clínica de animais de estimação ou pet shop em tempo recorde.", 
    img: "https://images.unsplash.com/photo-1581888227599-779811939961?q=80&w=800",
    desktopImg: "https://images.unsplash.com/photo-1581888227599-779811939961?q=80&w=1200",
    stats: { speed: "99", seo: "100", mobile: "Sim" },
    tag: "Clínicas Pet"
  },
  { 
    niche: "Advogados", 
    subtitle: "Escritórios — design sóbrio e de grande autoridade, áreas de atuação e captação direta de clientes.",
    desc: "Um design extremamente refinado e estruturado que adaptamos em até 48 horas para passar total confiança ao seu escritório jurídico.", 
    img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800",
    desktopImg: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200",
    stats: { speed: "98", seo: "100", mobile: "Sim" },
    tag: "Refinado"
  },
  { 
    niche: "Estética & Saúde", 
    subtitle: "Estética e Clínicas — página com depoimentos, tratamentos, espaço para fotos reais e agendamento.",
    desc: "Design clean e moderno focado em captar contatos e marcar tratamentos estéticos. Pronto para receber o conteúdo do seu negócio.", 
    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800",
    desktopImg: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200",
    stats: { speed: "100", seo: "100", mobile: "Sim" },
    tag: "Consultórios"
  },
  { 
    niche: "Academia & Personal", 
    subtitle: "Studio & Personal — site de alta energia para treinadores, tabela de planos, dúvidas e contato de agendamento.",
    desc: "Design dinâmico e enérgico que customizamos para o seu método de treinamento físico, crossfit, natação ou studio funcional.", 
    img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800",
    desktopImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200",
    stats: { speed: "99", seo: "98", mobile: "Sim" },
    tag: "High Energy"
  },
  { 
    niche: "Nutrição & Saúde", 
    subtitle: "Alimentação e Bem-estar — página focada em converter leads com botão de agendamento e consultoria rápida.",
    desc: "Sua autoridade profissional e agendamento clínico a um clique de distância com este layout premium otimizado pela Duno.", 
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800",
    desktopImg: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200",
    stats: { speed: "100", seo: "100", mobile: "Sim" },
    tag: "Saúde Integrada"
  },
  { 
    niche: "Gourmet & Bistrô", 
    subtitle: "Restaurantes e Bistrôs — cardápio dinâmico integrado, galeria de fotos de dar água na boca e reservas.",
    desc: "Modelo altamente fotográfico e sofisticado, ideal para apresentar seu cardápio de pratos e linkar direto ao delivery ou reserva de mesa.", 
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800",
    desktopImg: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200",
    stats: { speed: "97", seo: "100", mobile: "Sim" },
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-6">
            Escolha seu <span className="gradient-text">Modelo</span>
          </h2>
          <p className="text-white/95 text-lg sm:text-xl font-bold max-w-2xl mx-auto mb-8 leading-relaxed">
            Selecione o design vencedor para o seu nicho profissional. Clique no modelo para ver detalhes ou use o botão de demonstração.
          </p>
        </div>

        {/* Urgency Scarcity Warning Card */}
        <div className="px-5 py-4 rounded-2xl bg-[#FF0054]/10 border border-[#FF0054]/30 max-w-2xl mx-auto mb-16 flex items-center justify-center gap-3 text-center shadow-lg shadow-[#FF0054]/5 animate-pulse">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF0054] animate-ping shrink-0" />
          <span className="text-xs sm:text-sm font-bold text-white tracking-wide leading-relaxed">
            ⚠️ ATENÇÃO: Limitamos a apenas <strong className="text-[#FF0054]">2 contratantes por nicho</strong> em cada cidade para garantir exclusividade e manter alta performance local.
          </span>
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
              className="pink-card group flex flex-col p-0 overflow-hidden cursor-pointer h-full border border-white/5 bg-[#0F0108]/60 hover:bg-[#0F0108]/90 hover:border-[#FF0054]/50 transition-all duration-300 rounded-3xl"
            >
              <div className="aspect-video overflow-hidden relative">
                {/* Visual Header Mock */}
                <div className="absolute top-3 left-3 right-3 z-20 flex justify-between items-center">
                  <span className="px-3 py-1 text-[9px] font-black tracking-widest text-[#FF0054] bg-black/70 backdrop-blur-md rounded-full border border-[#FF0054]/30 uppercase">
                    {item.tag}
                  </span>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/85 backdrop-blur-md border border-[#00FF80]/40 text-[8px] font-black text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FF80] animate-pulse" />
                    PREVIEW ATIVO
                  </div>
                </div>

                {/* Brighter image default, high contrast hover */}
                <img 
                  src={item.img} 
                  alt={item.niche} 
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
                
                {/* Clean hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0108] to-transparent opacity-95" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF0054] text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-[#FF0054]/30">
                    <Eye size={14} className="stroke-[3]" />
                    <span>Ampliar Preview</span>
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#FF0054] leading-none uppercase tracking-tighter transition-colors">
                     {item.niche}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-[#FF0054]/10 group-hover:bg-[#FF0054] flex items-center justify-center text-[#FF0054] group-hover:text-white shadow-lg group-hover:shadow-[#FF0054]/20 transition-all duration-300">
                    <ArrowRight size={20} className="stroke-[3] group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Niche What-It-Does description line in high-contrast highlighting */}
                <p className="text-white text-sm sm:text-base font-black border-l-2 border-[#FF0054] pl-3 py-1.5 mb-4 bg-linear-to-r from-white/5 to-transparent">
                  {item.subtitle}
                </p>

                <p className="text-white/80 text-sm sm:text-base font-medium leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Explicit "Ver Demonstração" Button for conversion prompt */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedModel(item);
                  }}
                  className="mt-auto w-full py-3 rounded-2xl bg-white/5 border border-white/15 hover:border-[#FF0054]/50 text-white hover:text-[#FF0054] text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Ver Demonstração</span>
                  <Eye size={14} />
                </button>

                <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00FF80]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00FF80]">Garantia Duno</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-white">SCORE {item.stats.speed}/100</span>
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
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Decorative float badges */}
                  <div className="absolute bottom-6 left-6 flex flex-wrap gap-3">
                    <span className="px-3.5 py-1.5 rounded-xl bg-black/80 border border-[#FF0054]/30 backdrop-blur-md text-[10px] font-black text-[#FF0054] tracking-widest uppercase flex items-center gap-1.5">
                      <Sparkles size={11} className="stroke-[3]" />
                      Imagens Inclusas de Alta Conversão
                    </span>
                    <span className="px-3.5 py-1.5 rounded-xl bg-black/80 border border-white/10 backdrop-blur-md text-[10px] font-black text-white/80 tracking-widest uppercase">
                      Estética Extraordinária
                    </span>
                  </div>
                </div>

                {/* Info and action panel */}
                <div className="lg:col-span-4 p-8 lg:p-10 flex flex-col justify-between h-auto lg:h-[540px] bg-linear-to-b from-[#0F0108] to-black">
                  <div>
                    {/* Close button */}
                    <div className="flex justify-between items-center mb-8">
                      <span className="text-[10px] font-black text-[#FF0054] uppercase tracking-[0.3em]">MODELO PERSONALIZÁVEL</span>
                      <button 
                        onClick={() => setSelectedModel(null)}
                        className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#FF0054]/20 hover:text-[#FF0054] flex items-center justify-center text-white/70 transition-all active:scale-95 cursor-pointer animate-pulse"
                      >
                        <X size={18} className="stroke-[3]" />
                      </button>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-black text-white leading-none uppercase tracking-tighter mb-4">
                      {selectedModel.niche}
                    </h3>
                    <p className="text-white/80 text-sm font-semibold leading-relaxed mb-6 bg-white/5 p-3 rounded-xl border border-white/5">
                      {selectedModel.subtitle}
                    </p>
                    <p className="text-white/70 text-xs sm:text-sm font-medium leading-relaxed mb-6">
                      Nós adaptamos este design impecável com seu logotipo, cores e fotos de forma ultra rápida. Não cobramos taxa de desenvolvimento.
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
                        <span className="text-[11px] font-bold text-white/40 uppercase tracking-wider">SEO Local & Maps</span>
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
