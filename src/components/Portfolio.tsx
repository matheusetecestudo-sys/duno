import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X, Sparkles, Eye, CheckCircle2, ZoomIn } from "lucide-react";
import { useState, useEffect } from "react";

const NICHES = [
  { 
    niche: "Clínica de Estética", 
    subtitle: "Clínicas de Estética & Spas — página premium com depoimentos em carrossel, tratamentos e portfólio de antes/depois.",
    persuasionDesc: "Site de alto padrão com galerias de antes/depois e agendamento pelo WhatsApp para converter visitantes em clientes de forma instantânea.", 
    img: "/images/clinica de estetica.webp",
    stats: { speed: "99", seo: "100" },
    tag: "Estética",
    highlight: "✨ Com antes e depois, WhatsApp integrado e galeria de tratamentos"
  },
  { 
    niche: "Clínica de Nutrição", 
    subtitle: "Nutricionistas & Nutrólogos — página moderna focada em bem-estar, programas nutricionais e captação de consultas particulares.",
    persuasionDesc: "Layout moderno focado em bem-estar e programas nutricionais, estruturado para atrair consultas particulares.", 
    img: "/images/clinica de nutrição.webp",
    stats: { speed: "98", seo: "100" },
    tag: "Nutrição",
    highlight: "🍏 Com agendamento de consultas, depoimentos e programas"
  },
  { 
    niche: "Clínica Odontológica", 
    subtitle: "Clínicas & Consultórios Odontológicos — site premium com agendamento de consultas, especialidades e FAQ clínico.",
    persuasionDesc: "Transmita total credibilidade com agendamento integrado, visualização de especialidades e FAQ clínico completo.", 
    img: "/images/clinica odontologica.webp",
    stats: { speed: "100", seo: "100" },
    tag: "Odontologia",
    highlight: "🦷 Com agendamento direto, FAQ de dúvidas e WhatsApp"
  },
  { 
    niche: "Clínica Veterinária", 
    subtitle: "Clínicas Pet & Hospitais Veterinários — alta conversão para agendamentos, banho e tosa, exames e emergências 24h.",
    persuasionDesc: "Experiência móvel rápida com canal de emergência 24h, agendamentos de banho/tosa e integração de mapas.", 
    img: "/images/clinica veterinaria.webp",
    stats: { speed: "99", seo: "98" },
    tag: "Veterinária",
    highlight: "🐾 Com canal de emergência, banho e tosa, e mapas"
  },
  { 
    niche: "Dedetizadora", 
    subtitle: "Dedetização & Controle de Pragas — página de conversão imediata, botões de ligação rápidos e selos de conformidade ANVISA.",
    persuasionDesc: "Otimizado para conversão imediata de urgência com botões de ligação rápidos, selos ANVISA e orçamentos via WhatsApp.", 
    img: "/images/dedetizadora (2).webp",
    stats: { speed: "100", seo: "100" },
    tag: "Serviços",
    highlight: "🛡️ Com botões de orçamento rápido, ligação e ANVISA"
  },
  { 
    niche: "Psicólogo", 
    subtitle: "Consultórios de Psicologia & Terapeutas — design ético e acolhedor, agendamento de sessões presenciais ou online.",
    persuasionDesc: "Ambiente digital ético e acolhedor estruturado para agendar consultas presenciais ou online com facilidade.", 
    img: "/images/psicologo.webp",
    stats: { speed: "97", seo: "100" },
    tag: "Psicologia",
    highlight: "🧠 Com agendamento de sessões (online/presencial) e ética"
  },
  { 
    niche: "Salão de Beleza", 
    subtitle: "Salões, Barbearias & Cabeleireiros — vitrine dos melhores trabalhos, tabela de preços e agendamento de horários.",
    persuasionDesc: "A vitrine digital perfeita para expor seus melhores cortes, tabela de preços e marcação de horários com a equipe.", 
    img: "/images/salao de beleza.webp",
    stats: { speed: "98", seo: "100" },
    tag: "Beleza",
    highlight: "💇‍♀️ Com tabela de preços, galeria de cortes e agendamento"
  },
  { 
    niche: "Vidraçaria", 
    subtitle: "Vidraçarias & Serralherias — portfólio de projetos instalados (box, espelhos, janelas) e formulário de orçamento.",
    persuasionDesc: "Exponha seus projetos de box e espelhos em alta resolução com canal de orçamento rápido por WhatsApp.", 
    img: "/images/vidracaria.webp",
    stats: { speed: "99", seo: "100" },
    tag: "Vidros",
    highlight: "🪟 Com galeria de projetos e orçamento rápido"
  }
];

export default function Portfolio() {
  const [panningIndex, setPanningIndex] = useState<number | null>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [lightboxNiche, setLightboxNiche] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<typeof NICHES[0] | null>(null);

  const openLightbox = (item: typeof NICHES[0]) => {
    setLightboxImg(item.img);
    setLightboxNiche(item.niche);
  };

  useEffect(() => {
    if (lightboxImg) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, [lightboxImg]);

  return (
    <section id="modelos" className="py-24 px-6 bg-[#000000] relative overflow-hidden text-center border-t border-[#2a2a2a]">
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#e91e8c]/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#7c3aed]/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl md:text-[48px] font-black mb-4 uppercase tracking-tight leading-tight text-white">
          Escolha seu <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">modelo</span> <br />
          do seu <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">segmento</span>
        </h2>

        <p className="text-[#a0a0a0] text-[17px] font-semibold max-w-3xl mx-auto mb-8 leading-relaxed">
          Nossos modelos já foram validados e trazem clientes de verdade. Passe o mouse para rolar ou clique na imagem para visualizar melhor o site completo.
        </p>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 text-left">
          {NICHES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col gap-3 text-left"
            >
              {/* Image viewport card — click opens lightbox */}
              <div
                onClick={() => openLightbox(item)}
                onMouseEnter={() => setPanningIndex(i)}
                onMouseLeave={() => setPanningIndex(null)}
                onTouchStart={() => setPanningIndex(i)}
                onTouchEnd={() => setPanningIndex(null)}
                onTouchCancel={() => setPanningIndex(null)}
                className="w-full h-[300px] rounded-[20px] bg-[#000000] border-2 border-[#e10270] overflow-hidden relative cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(225,2,112,0.35)] hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={item.img}
                  alt={item.niche}
                  className="w-full absolute top-0 left-0 origin-top transition-transform ease-in-out"
                  style={{
                    height: "auto",
                    transitionDuration: panningIndex === i ? "5s" : "1s",
                    transform: panningIndex === i ? "translateY(calc(-100% + 300px))" : "translateY(0)",
                  }}
                  loading="lazy"
                  draggable={false}
                />

                {/* Zoom hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/45 backdrop-blur-[1px] pointer-events-none">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#e91e8c] to-[#7c3aed] text-white text-[10px] font-black uppercase tracking-widest shadow-xl">
                    <ZoomIn size={13} className="stroke-[3]" />
                    <span>Ver completo</span>
                  </div>
                </div>

                {/* Direct info label overlay */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/85 backdrop-blur-xs px-3 py-1 rounded-full text-[9px] font-black text-white/95 uppercase border border-white/10 flex items-center gap-1 shadow-md pointer-events-none whitespace-nowrap">
                  <ZoomIn size={10} className="stroke-[3] text-[#e91e8c]" />
                  <span>Clique para visualizar melhor</span>
                </div>
              </div>

              {/* Name + buttons row */}
              <div className="flex items-center justify-between px-1 gap-2">
                <h3 className="text-[13px] font-black text-white uppercase tracking-tight">
                  {item.niche}
                </h3>
                <a
                  href={`https://wa.me/5511992876219?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Duno%20e%20me%20interessei%20pelo%20modelo%20de%20site%20para%20*${encodeURIComponent(item.niche)}*.%20Quero%20saber%20mais%20e%20come%C3%A7ar!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#e10270]/10 border border-[#e10270]/25 text-[10px] font-black text-[#e10270] uppercase tracking-wider hover:bg-[#e10270]/20 transition-all shrink-0 cursor-pointer"
                >
                  <ArrowRight size={10} className="stroke-[3]" />
                  <span>Saiba mais</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Missing niche banner */}
        <div className="text-center py-6 px-8 border border-[#2a2a2a] rounded-[16px] bg-[#000000] max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[#a0a0a0] font-bold text-sm sm:text-base text-left">
            Não encontrou seu segmento? Fale conosco — criamos para qualquer nicho.
          </p>
          <a
            href="https://wa.me/5511992876219?text=Olá!%20Não%20encontrei%20meu%20nicho%20nos%20modelos%20prontos%20e%20gostaria%20de%20um%20personalizado."
            target="_blank"
            rel="noopener noreferrer"
            className="gold-premium-btn !h-11 !text-xs !px-5"
          >
            <span>Falar com a Equipe</span>
            <ArrowRight size={14} className="shrink-0" />
          </a>
        </div>

      </div>

      {/* ── LIGHTBOX (image fullscreen) ── */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 touch-none"
            onClick={() => setLightboxImg(null)}
          >
            {/* Premium Gradient Border Wrapper */}
            <div 
              className="p-[1px] bg-gradient-to-br from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] rounded-[24px] shadow-[0_25px_60px_rgba(233,30,140,0.35)] w-full max-w-4xl"
              style={{ height: '80vh' }}
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Card */}
              <div className="w-full h-full bg-[#050505] rounded-[23px] overflow-hidden flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#050505] shrink-0">
                  <span className="font-black uppercase tracking-widest text-xs bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd]">
                    {lightboxNiche}
                  </span>
                  <button
                    onClick={() => setLightboxImg(null)}
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/80 hover:text-white cursor-pointer transition-colors"
                  >
                    <X size={16} className="stroke-[2.5]" />
                  </button>
                </div>

                {/* Scrollable Image Area */}
                <div className="flex-1 overflow-y-auto bg-black scroll-smooth hide-scrollbar">
                  <img
                    src={lightboxImg}
                    alt={lightboxNiche}
                    className="w-full h-auto block"
                    draggable={false}
                  />
                </div>

                {/* Footer hint */}
                <div className="px-6 py-4 bg-[#050505] border-t border-white/10 text-center shrink-0 flex items-center justify-center">
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-wider animate-pulse">
                    ↕️ Role para cima ou para baixo para ver o modelo completo
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
