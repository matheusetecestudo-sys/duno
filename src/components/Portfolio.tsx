import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X, Sparkles, Eye, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

const NICHES = [
  { 
    niche: "Odontologia", 
    subtitle: "Clínicas & Consultórios — site premium com agendamento direto de consultas, galeria de tratamentos e botão de WhatsApp flutuante.",
    desc: "Personalizamos este modelo completo com as suas fotos, logomarca e procedimentos clínicos em até 48 horas.", 
    img: "/images/nicho_1.png",
    desktopImg: "/images/nicho_1.png",
    stats: { speed: "99", seo: "100" },
    tag: "Dentistas",
    highlight: "🦷 Com agendamento, WhatsApp integrado e Google Maps"
  },
  { 
    niche: "Veterinário", 
    subtitle: "Clínicas Pet & Hospitais — site de alta conversão para tutores agendarem consultas, banhos e exames 24h por dia.",
    desc: "Layout dócil e corporativo que adaptamos em até 48 horas para passar total segurança e autoridade para sua clínica veterinária.", 
    img: "/images/nicho_2.png",
    desktopImg: "/images/nicho_2.png",
    stats: { speed: "98", seo: "100" },
    tag: "Veterinários",
    highlight: "🐾 Com agendamento, WhatsApp integrado e Google Maps"
  },
  { 
    niche: "Estética", 
    subtitle: "Clínicas de Estética & Spas — página premium com depoimentos em carrossel, tratamentos, portfólio de antes/depois.",
    desc: "Design clean focado em captar contatos de pessoas interessadas em procedimentos estéticos e tratamentos corporais.", 
    img: "/images/nicho_3.png",
    desktopImg: "/images/nicho_3.png",
    stats: { speed: "100", seo: "100" },
    tag: "Estética",
    highlight: "✂️ Com agendamento, WhatsApp integrado e Google Maps"
  },
  { 
    niche: "Academia", 
    subtitle: "Studios, CrossFit & Acadeias — página com grade de horários, chamada rápida de matrícula e contato direto.",
    desc: "Design dinâmico e enérgico que customizamos para o seu método de treinamento físico, crossfit ou studio funcional.", 
    img: "/images/nicho_4.png",
    desktopImg: "/images/nicho_4.png",
    stats: { speed: "99", seo: "98" },
    tag: "Fitness",
    highlight: "💪 Com agendamento, WhatsApp integrado e Google Maps"
  },
  { 
    niche: "Advocacia", 
    subtitle: "Escritórios Jurídicos — design de grande seriedade destacando especialidades e formulário de consulta rápida.",
    desc: "Um design extremamente refinado e estruturado que adaptamos com rapidez para transmitir máxima credibilidade em sua cidade.", 
    img: "/images/nicho_5.png",
    desktopImg: "/images/nicho_5.png",
    stats: { speed: "100", seo: "100" },
    tag: "Direito",
    highlight: "⚖️ Com agendamento, WhatsApp integrado e Google Maps"
  },
  { 
    niche: "Restaurante", 
    subtitle: "Gourmet & Bistrô — página para mostrar cardápio digital, reservas automáticas e botão de disk delivery.",
    desc: "Layout sofisticado que destaca pratos principais, horário de funcionamento e rota GPS para clientes chegarem sem erro.", 
    img: "/images/nicho_6.png",
    desktopImg: "/images/nicho_6.png",
    stats: { speed: "97", seo: "100" },
    tag: "Gastronomia",
    highlight: "🍽️ Com agendamento, WhatsApp integrado e Google Maps"
  },
  { 
    niche: "Psicologia", 
    subtitle: "Clínicas & Consultórios de Psicologia — site acolhedor com agendamento online de sessões e formulário de contato.",
    desc: "Design empático e profissional, personalizado com seu CRP, especialidades, horários e modo de atendimento presencial ou online.", 
    img: "/images/nicho_7.png",
    desktopImg: "/images/nicho_7.png",
    stats: { speed: "98", seo: "100" },
    tag: "Saúde Mental",
    highlight: "🧠 Com agendamento de sessões e WhatsApp integrado"
  },
  { 
    niche: "Arquitetura", 
    subtitle: "Escritórios & Ateliês de Arquitetura — portfólio premium com galeria de projetos e formulário de contato exclusivo.",
    desc: "Apresentação sofisticada dos seus projetos mais impactantes, com galeria de fotos em alta definição e chamada para orçamento pelo WhatsApp.", 
    img: "/images/nicho_8.png",
    desktopImg: "/images/nicho_8.png",
    stats: { speed: "99", seo: "100" },
    tag: "Arquitetura",
    highlight: "🏛️ Com galeria de projetos e formulário de orçamento"
  }
];

export default function Portfolio() {
  const [selectedModel, setSelectedModel] = useState<typeof NICHES[0] | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const visibleCount = 3;
  const maxIndex = NICHES.length - visibleCount;

  const goTo = (idx: number) => {
    const clamped = Math.max(0, Math.min(idx, maxIndex));
    setActiveIndex(clamped);
    if (trackRef.current) {
      const cardWidth = trackRef.current.scrollWidth / NICHES.length;
      trackRef.current.scrollTo({ left: cardWidth * clamped, behavior: "smooth" });
    }
  };

  const handleOpenDemo = (niche: typeof NICHES[0]) => {
    setSelectedModel(niche);
  };

  return (
    <section id="modelos" className="py-24 px-6 bg-[#121212] relative overflow-hidden text-center border-t border-[#2a2a2a]">
      {/* Background radial gloss blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#e91e8c]/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#7c3aed]/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* H2 Title */}
        <h2 className="text-3xl md:text-[48px] font-black mb-4 uppercase tracking-tight leading-tight text-white">
          Escolha seu <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">modelo</span> <br />
          do seu <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">segmento</span>
        </h2>
        
        {/* Validated Direct-Response Subtitle */}
        <p className="text-[#a0a0a0] text-[17px] font-semibold max-w-3xl mx-auto mb-8 leading-relaxed">
          Nossos modelos já foram validados e trazem clientes de verdade. Passe o mouse ou o dedo para rolar e ver o site completo.
        </p>

        {/* Urgency Scarcity Warning Card Indicator */}
        <div className="inline-flex items-center gap-3 bg-[#ef4444]/15 border border-[#ef4444]/30 rounded-2xl px-5 py-4 max-w-2xl mx-auto mb-16 shadow-lg shadow-[#ef4444]/5 text-center">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444] animate-ping shrink-0" />
          <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
            ⚠️ Limitamos a apenas <strong className="text-[#ef4444]">1 cliente por nicho em cada bairro</strong> para não concorrer no Google Maps. Garantimos exclusividade local.
          </span>
        </div>

        {/* Carousel Wrapper with controls */}
        <div className="relative mb-12">
          {/* Prev Button */}
          <button
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#410e28] border-2 border-[#e10270] flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#e10270] transition-all duration-200 shadow-lg"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>

          {/* Next Button */}
          <button
            onClick={() => goTo(activeIndex + 1)}
            disabled={activeIndex >= maxIndex}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#410e28] border-2 border-[#e10270] flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#e10270] transition-all duration-200 shadow-lg"
            aria-label="Próximo"
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>

          {/* Scrollable Track */}
          <div
            ref={trackRef}
            className="overflow-hidden"
          >
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${activeIndex * (100 / visibleCount)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ width: `${(NICHES.length / visibleCount) * 100}%` }}
            >
              {NICHES.map((item, i) => (
                <motion.div
                  key={i}
                  style={{ width: `${100 / NICHES.length}%` }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="shrink-0 flex flex-col gap-4 text-left"
                >
                  {/* Card containing ONLY the image viewport */}
                  <div 
                    onClick={() => handleOpenDemo(item)}
                    className="w-full h-[320px] rounded-[20px] bg-[#0F0108] border-2 border-[#e10270] overflow-hidden relative cursor-pointer group/img shadow-lg hover:shadow-[0_0_25px_rgba(225,2,112,0.35)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <img 
                      src={item.img} 
                      alt={item.niche} 
                      className="w-full absolute top-0 left-0 transition-transform duration-[6s] ease-in-out origin-top group-hover/img:translate-y-[calc(-100%+320px)] active:translate-y-[calc(-100%+320px)]"
                      style={{ height: 'auto' }}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Visual click overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-black/45 backdrop-blur-[1px] pointer-events-none">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#e91e8c] to-[#7c3aed] text-white text-[10px] font-black uppercase tracking-widest shadow-xl">
                        <Eye size={12} className="stroke-[3]" />
                        <span>Detalhes</span>
                      </div>
                    </div>
                  </div>

                  {/* Niche details and Novo badge below card image */}
                  <div className="flex items-center justify-between mt-2 px-1">
                    <h3 className="text-lg font-black text-white uppercase tracking-tight">
                      {item.niche}
                    </h3>
                    <span className="px-2.5 py-1 rounded bg-[#e10270]/10 text-[10px] font-black text-[#e10270] uppercase border border-[#e10270]/20 tracking-wider">
                      Novo
                    </span>
                  </div>


                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? "w-6 h-2 bg-[#f0134d]"
                    : "w-2 h-2 bg-neutral-700 hover:bg-neutral-500"
                }`}
                aria-label={`Ir para slide ${i + 1}`}
              />
            ))}
          </div>
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
            className="gold-premium-btn !h-11 !text-xs !px-5"
          >
            <span>Falar com a Equipe</span>
            <ArrowRight size={14} className="shrink-0" />
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

                    <h3 className="text-3xl font-black uppercase tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] w-fit">
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
                      className="gold-premium-btn w-full text-xs sm:text-sm"
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
