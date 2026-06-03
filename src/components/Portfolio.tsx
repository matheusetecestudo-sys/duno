import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X, Sparkles, Eye, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const NICHES = [
  { 
    niche: "Odontologia", 
    subtitle: "Clínicas & Consultórios — site premium com agendamento direto de consultas, galeria de tratamentos e botão de WhatsApp flutuante.",
    desc: "Personalizamos este modelo completo com as suas fotos, logomarca e procedimentos clínicos em até 48 horas.", 
    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800",
    desktopImg: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200",
    stats: { speed: "99", seo: "100" },
    tag: "Dentistas",
    highlight: "🦷 Com agendamento, WhatsApp integrado e Google Maps"
  },
  { 
    niche: "Veterinário", 
    subtitle: "Clínicas Pet & Hospitais — site de alta conversão para tutores agendarem consultas, banhos e exames 24h por dia.",
    desc: "Layout dócil e corporativo que adaptamos em até 48 horas para passar total segurança e autoridade para sua clínica veterinária.", 
    img: "https://images.unsplash.com/photo-1581888227599-779811939961?q=80&w=800",
    desktopImg: "https://images.unsplash.com/photo-1581888227599-779811939961?q=80&w=1200",
    stats: { speed: "98", seo: "100" },
    tag: "Veterinários",
    highlight: "🐾 Com agendamento, WhatsApp integrado e Google Maps"
  },
  { 
    niche: "Estética", 
    subtitle: "Clínicas de Estética & Spas — página premium com depoimentos em carrossel, tratamentos, portfólio de antes/depois.",
    desc: "Design clean focado em captar contatos de pessoas interessadas em procedimentos estéticos e tratamentos corporais.", 
    img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800",
    desktopImg: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200",
    stats: { speed: "100", seo: "100" },
    tag: "Estética",
    highlight: "✂️ Com agendamento, WhatsApp integrado e Google Maps"
  },
  { 
    niche: "Academia", 
    subtitle: "Studios, CrossFit & Acadeias — página com grade de horários, chamada rápida de matrícula e contato direto.",
    desc: "Design dinâmico e enérgico que customizamos para o seu método de treinamento físico, crossfit ou studio funcional.", 
    img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800",
    desktopImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200",
    stats: { speed: "99", seo: "98" },
    tag: "Fitness",
    highlight: "💪 Com agendamento, WhatsApp integrado e Google Maps"
  },
  { 
    niche: "Advocacia", 
    subtitle: "Escritórios Jurídicos — design de grande seriedade destacando especialidades e formulário de consulta rápida.",
    desc: "Um design extremamente refinado e estruturado que adaptamos com rapidez para transmitir máxima credibilidade em sua cidade.", 
    img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800",
    desktopImg: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200",
    stats: { speed: "100", seo: "100" },
    tag: "Direito",
    highlight: "⚖️ Com agendamento, WhatsApp integrado e Google Maps"
  },
  { 
    niche: "Restaurante", 
    subtitle: "Gourmet & Bistrô — página para mostrar cardápio digital, reservas automáticas e botão de disk delivery.",
    desc: "Layout sofisticado que destaca pratos principais, horário de funcionamento e rota GPS para clientes chegarem sem erro.", 
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800",
    desktopImg: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200",
    stats: { speed: "97", seo: "100" },
    tag: "Gastronomia",
    highlight: "🍽️ Com agendamento, WhatsApp integrado e Google Maps"
  }
];

export default function Portfolio() {
  const [selectedModel, setSelectedModel] = useState<typeof NICHES[0] | null>(null);

  const handleOpenDemo = (niche: typeof NICHES[0]) => {
    setSelectedModel(niche);
  };

  return (
    <section id="modelos" className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden text-center border-t border-[#2a2a2a]">
      {/* Background radial gloss blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#e91e8c]/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#7c3aed]/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* H2 Title */}
        <h2 className="text-3xl md:text-[48px] font-black mb-4 uppercase tracking-tight text-white leading-tight">
          Escolha seu modelo <br />
          <span className="text-[#e91e8c]">do seu segmento</span>
        </h2>
        
        {/* Validated Direct-Response Subtitle */}
        <p className="text-[#a0a0a0] text-[17px] font-semibold max-w-3xl mx-auto mb-8 leading-relaxed">
          Nossos modelos já foram validados e trazem clientes de verdade. Clique no botão de demonstração para abrir e clicar como se fosse o site real.
        </p>

        {/* Urgency Scarcity Warning Card Indicator */}
        <div className="inline-flex items-center gap-3 bg-[#ef4444]/15 border border-[#ef4444]/30 rounded-2xl px-5 py-4 max-w-2xl mx-auto mb-16 shadow-lg shadow-[#ef4444]/5 text-center">
          <span className="w-2 h-2 rounded-full bg-[#ef4444] animate-ping shrink-0" />
          <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
            ⚠️ Limitamos a apenas <strong className="text-[#ef4444]">1 cliente por nicho em cada bairro</strong> para não concorrer no Google Maps. Garantimos exclusividade local.
          </span>
        </div>

        {/* 3x3 Grid of Niche Cards (Perfect desktop layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 text-left">
          {NICHES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              onClick={() => handleOpenDemo(item)}
              className="group flex flex-col overflow-hidden cursor-pointer h-full border border-[#2a2a2a] bg-[#1a1a1a] rounded-[16px] transition-all duration-300 relative shadow-2xl hover:border-[#e91e8c]/50 hover:shadow-[0_0_25px_rgba(233,30,140,0.15)] hover:-translate-y-1"
            >
              <div className="aspect-[16/10] overflow-hidden relative border-b border-[#2a2a2a]">
                
                {/* Browser top-bar illusion header */}
                <div className="absolute top-0 left-0 right-0 bg-[#111111]/70 backdrop-blur-md px-3 py-1.5 flex items-center justify-between z-15 border-b border-white/5">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-[#a0a0a0] truncate max-w-[130px]">visualizacao-modelo.com</span>
                  <span className="px-2 py-0.5 text-[8px] font-black tracking-widest text-[#e91e8c] bg-[#e91e8c]/15 rounded-md border border-[#e91e8c]/30 uppercase">
                    {item.tag}
                  </span>
                </div>

                <img 
                  src={item.img} 
                  alt={item.niche} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-103 transition-all duration-700 pt-[18px]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual click overlay */}
                <div className="absolute inset-x-0 bottom-0 top-[18px] bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#e91e8c] to-[#7c3aed] text-white text-xs font-black uppercase tracking-widest shadow-xl shadow-[#e91e8c]/20">
                    <Eye size={14} className="stroke-[3]" />
                    <span>Abrir Demonstração</span>
                  </div>
                </div>
              </div>

              {/* CARD DATA */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-black text-white group-hover:text-[#e91e8c] leading-none uppercase tracking-tight transition-colors">
                     {item.niche}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#e91e8c] flex items-center justify-center text-white/55 group-hover:text-white transition-all duration-300 shrink-0">
                    <ArrowRight size={14} className="stroke-[3] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                {/* Rosa high-converting highlighter line detailing tools included */}
                <div className="text-[#e91e8c] text-xs font-bold py-1.5 px-3 rounded bg-[#e91e8c]/5 border border-[#e91e8c]/10 mb-5 leading-normal">
                  {item.highlight}
                </div>

                <p className="text-[#a0a0a0] text-sm font-medium leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* DEFINITIVE SEEMING CONVINCING BUTTON ON BOTTOM OF EVERY CARD */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenDemo(item);
                  }}
                  className="mt-auto w-full py-3.5 rounded-xl text-center bg-gradient-to-r from-[#e91e8c] to-[#7c3aed] text-white text-xs font-black uppercase tracking-widest transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 hover:brightness-110 shadow-md shadow-[#e91e8c]/15"
                >
                  <span className="text-white">Ver demonstração</span>
                  <ArrowRight size={14} className="text-white" />
                </button>

                {/* Card footer details with PageSpeed */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-[#606060] font-bold">
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                    <span className="uppercase tracking-wider text-[#25D366]">Site Pronto 48h</span>
                  </div>
                  <span className="font-mono uppercase">PAGESPEED SCORE: <strong className="text-white">98/100</strong></span>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Missing niche segments banner request */}
        <div className="text-center py-6 px-8 border border-[#2a2a2a] rounded-[16px] bg-[#111111] max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[#a0a0a0] font-bold text-sm sm:text-base text-left">
            Não encontrou seu segmento? Fale conosco — criamos para qualquer nicho.
          </p>
          <a
            href="https://wa.me/5511999999999?text=Olá!%20Não%20encontrei%20meu%20nicho%20nos%20modelos%20prontos%20e%20gostaria%20de%20um%20personalizado."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-gradient-to-r from-[#e91e8c] to-[#7c3aed] text-white text-xs font-black rounded-xl uppercase tracking-widest transition-all scale-100 hover:scale-[1.03] active:scale-95 text-center whitespace-nowrap cursor-pointer shadow-lg shadow-[#e91e8c]/25 flex items-center justify-center gap-2"
          >
            <span className="text-white">Falar com a Equipe</span>
            <ArrowRight size={14} className="text-white" />
          </a>
        </div>

      </div>

      {/* Dynamic Immersive Interactive Simulated Frame Modal */}
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
              className="relative w-full max-w-4xl lg:max-w-5xl bg-[#111111] border-2 border-[#e91e8c]/30 rounded-[20px] overflow-hidden shadow-[0_25px_80px_rgba(233,30,140,0.25)] max-h-[90vh] overflow-y-auto select-none"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Left Side: Gorgeous Mockup visual screen */}
                <div className="lg:col-span-8 relative aspect-video lg:aspect-auto lg:h-[500px] overflow-hidden bg-black border-r border-[#2a2a2a] flex items-center justify-center">
                  <img 
                    src={selectedModel.desktopImg} 
                    alt={selectedModel.niche} 
                    className="w-full h-full object-cover opacity-90 p-4 rounded-[20px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Overlapping information status badges */}
                  <div className="absolute bottom-6 left-6 flex flex-wrap gap-2.5">
                    <span className="px-3.5 py-1.5 rounded-lg bg-black/85 border border-[#e91e8c]/30 backdrop-blur-md text-[9px] font-black text-[#e91e8c] tracking-widest uppercase flex items-center gap-1.5">
                      <Sparkles size={11} className="stroke-[3] text-[#e91e8c]" />
                      Imagens Inclusas de Alta Conversão
                    </span>
                    <span className="px-3.5 py-1.5 rounded-lg bg-black/80 border border-white/10 backdrop-blur-md text-[9px] font-black text-white/80 tracking-widest uppercase">
                      Estética Extraordinária
                    </span>
                  </div>
                </div>

                {/* Right Side Info Action Box */}
                <div className="lg:col-span-4 p-8 lg:p-10 flex flex-col justify-between h-auto lg:h-[500px] bg-gradient-to-b from-[#111111] to-[#0a0a0a] text-left">
                  <div>
                    {/* Close Trigger Button Header element */}
                    <div className="flex justify-between items-center mb-8">
                      <span className="text-[9px] font-black text-[#e91e8c] uppercase tracking-[0.25em]">MODELO DO SEU NICHO</span>
                      <button 
                        onClick={() => setSelectedModel(null)}
                        className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#e91e8c]/20 hover:text-[#e91e8c] flex items-center justify-center text-white/60 transition-all cursor-pointer"
                      >
                        <X size={16} className="stroke-[2.5]" />
                      </button>
                    </div>

                    <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-4">
                      {selectedModel.niche}
                    </h3>
                    
                    <p className="text-white text-xs font-extrabold leading-relaxed mb-6 bg-white/[0.03] p-3.5 rounded-xl border border-white/5">
                      {selectedModel.subtitle}
                    </p>
                    
                    {/* Key Core statistics details */}
                    <div className="space-y-3.5 mb-6">
                      <div className="flex justify-between items-center py-2 border-b border-white/5 text-[11px] font-bold">
                        <span className="text-white/40 uppercase tracking-widest">Mobile Adaptado</span>
                        <span className="text-[#25D366] font-black flex items-center gap-1"><CheckCircle2 size={13} strokeWidth={2.5} /> SIM</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-white/5 text-[11px] font-bold">
                        <span className="text-white/40 uppercase tracking-widest">Velocidade Computador</span>
                        <span className="text-white bg-[#e91e8c] px-2 py-0.5 rounded text-[10px] font-black shadow-sm">98/100</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-white/5 text-[11px] font-bold">
                        <span className="text-white/40 uppercase tracking-widest">Otimização SEO Local</span>
                        <span className="text-white text-[10px] font-black">100/100</span>
                      </div>
                    </div>
                  </div>

                  {/* Immediate Action element inside Modal */}
                  <div className="space-y-3 pt-4 border-t border-white/5">
                    <a 
                      href={`https://wa.me/5511999999999?text=Olá!%20Adorei%20o%20modelo%20da%20Duno%20para%20${selectedModel.niche},%20quero%20esse%20para%20mim.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 rounded-xl text-xs font-black uppercase tracking-widest text-center flex items-center justify-center gap-2 bg-gradient-to-r from-[#e91e8c] to-[#7c3aed] text-white hover:brightness-110 shadow-lg shadow-[#e91e8c]/25 cursor-pointer whitespace-nowrap"
                    >
                      <span className="whitespace-nowrap">Quero esse modelo</span>
                      <ArrowRight size={14} className="stroke-[3] shrink-0" />
                    </a>
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
