import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X, Sparkles, Eye, CheckCircle2, ZoomIn } from "lucide-react";
import { useState } from "react";

const NICHES = [
  { 
    niche: "Clínica de Estética", 
    subtitle: "Clínicas de Estética & Spas — página premium com depoimentos em carrossel, tratamentos e portfólio de antes/depois.",
    persuasionDesc: "Ter um site premium para sua Clínica de Estética é o diferencial para atrair clientes de alto padrão. O modelo conta com galerias elegantes para expor procedimentos (como toxina botulínica, preenchimentos e tratamentos corporais), depoimentos de clientes satisfeitos que geram segurança e um botão de agendamento rápido integrado ao WhatsApp, transformando visitas em consultas agendadas instantaneamente.", 
    img: "/images/clinica de estetica.webp",
    stats: { speed: "99", seo: "100" },
    tag: "Estética",
    highlight: "✨ Com antes e depois, WhatsApp integrado e galeria de tratamentos"
  },
  { 
    niche: "Clínica de Nutrição", 
    subtitle: "Nutricionistas & Nutrólogos — página moderna focada em bem-estar, programas nutricionais e captação de consultas particulares.",
    persuasionDesc: "Sua autoridade como profissional de saúde merece uma presença online à altura. Este modelo destaca seus planos de acompanhamento, sua abordagem clínica, depoimentos de pacientes que alcançaram resultados e uma agenda simplificada. Ideal para nutricionistas e nutrólogos que buscam qualificar seus contatos e preencher a agenda de consultas particulares de forma automática.", 
    img: "/images/clinica de nutrição.webp",
    stats: { speed: "98", seo: "100" },
    tag: "Nutrição",
    highlight: "🍏 Com agendamento de consultas, depoimentos e programas"
  },
  { 
    niche: "Clínica Odontológica", 
    subtitle: "Clínicas & Consultórios Odontológicos — site premium com agendamento de consultas, especialidades e FAQ clínico.",
    persuasionDesc: "Pacientes buscam segurança e profissionalismo ao escolher um dentista. Este site foi projetado com uma interface clean e institucional que transmite total credibilidade. Conta com seções estruturadas para expor especialidades (implantes, clareamento, ortodontia), respostas a dúvidas frequentes (FAQ) e chamadas de ação diretas para o agendamento de avaliações pelo WhatsApp.", 
    img: "/images/clinica odontologica.webp",
    stats: { speed: "100", seo: "100" },
    tag: "Odontologia",
    highlight: "🦷 Com agendamento direto, FAQ de dúvidas e WhatsApp"
  },
  { 
    niche: "Clínica Veterinária", 
    subtitle: "Clínicas Pet & Hospitais Veterinários — alta conversão para agendamentos, banho e tosa, exames e emergências 24h.",
    persuasionDesc: "Facilite o contato de tutores de pets nos momentos que eles mais precisam. Com um design acolhedor e focado em experiência móvel rápida, este site destaca seu canal de emergência 24h, serviços prestados (consultas, exames, vacinas), equipe médica e localização fácil com integração de mapas, garantindo a tranquilidade que os tutores buscam ao escolher sua clínica.", 
    img: "/images/clinica veterinaria.webp",
    stats: { speed: "99", seo: "98" },
    tag: "Veterinária",
    highlight: "🐾 Com canal de emergência, banho e tosa, e mapas"
  },
  { 
    niche: "Dedetizadora", 
    subtitle: "Dedetização & Controle de Pragas — página de conversão imediata, botões de ligação rápidos e selos de conformidade ANVISA.",
    persuasionDesc: "Serviços de dedetização e controle de pragas exigem conversão imediata, pois o cliente geralmente tem uma urgência. Este modelo foi otimizado para celulares com botões de ligação e WhatsApp em destaque máximo. Apresenta de forma clara suas certificações da ANVISA, métodos de segurança e garantia de serviço, aumentando a taxa de fechamento de orçamentos rápidos.", 
    img: "/images/dedetizadora (2).webp",
    stats: { speed: "100", seo: "100" },
    tag: "Serviços",
    highlight: "🛡️ Com botões de orçamento rápido, ligação e ANVISA"
  },
  { 
    niche: "Psicólogo", 
    subtitle: "Consultórios de Psicologia & Terapeutas — design ético e acolhedor, agendamento de sessões presenciais ou online.",
    persuasionDesc: "Um ambiente digital acolhedor e profissional é fundamental para que pacientes se sintam confortáveis para dar o primeiro passo. Este modelo é desenhado de acordo com os critérios do conselho, destacando sua formação, abordagens (como TCC, psicanálise), áreas de atendimento (ansiedade, depression, casal) e um canal prático e discreto para agendamento de consultas presenciais ou online.", 
    img: "/images/psicologo.webp",
    stats: { speed: "97", seo: "100" },
    tag: "Psicologia",
    highlight: "🧠 Com agendamento de sessões (online/presencial) e ética"
  },
  { 
    niche: "Salão de Beleza", 
    subtitle: "Salões, Barbearias & Cabeleireiros — vitrine dos melhores trabalhos, tabela de preços e agendamento de horários.",
    persuasionDesc: "Sua arte visual e a transformação das suas clientes merecem o melhor destaque. Este modelo possui uma galeria moderna integrada para fotos de cortes, colorações, penteados e manicure, além de uma tabela de preços clara e depoimentos. É a ferramenta perfeita para converter seguidoras do Instagram em clientes assíduas do salão.", 
    img: "/images/salao de beleza.webp",
    stats: { speed: "98", seo: "100" },
    tag: "Beleza",
    highlight: "💇‍♀️ Com tabela de preços, galeria de cortes e agendamento"
  },
  { 
    niche: "Vidraçaria", 
    subtitle: "Vidraçarias & Serralherias — portfólio de projetos instalados (box, espelhos, janelas) e formulário de orçamento.",
    persuasionDesc: "Apresente seus projetos de envidraçamento, boxes de banheiro, espelhos e esquadrias de forma profissional e sofisticada. Este modelo conta com galerias de fotos de alta definição que mostram a qualidade do seu acabamento. Possui também um formulário de solicitação de orçamento rápido por WhatsApp, agilizando o contato comercial e o fechamento de novas vendas na sua região.", 
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
          Nossos modelos já foram validados e trazem clientes de verdade. Passe o mouse ou o dedo para rolar e ver o site completo.
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
                    <span>Ver maior</span>
                  </div>
                </div>
              </div>

              {/* Name + buttons row */}
              <div className="flex items-center justify-between px-1">
                <h3 className="text-lg font-black text-white uppercase tracking-tight">
                  {item.niche}
                </h3>
                <button
                  onClick={() => setSelectedModel(item)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#e10270]/10 border border-[#e10270]/25 text-[10px] font-black text-[#e10270] uppercase tracking-wider hover:bg-[#e10270]/20 transition-all"
                >
                  <Eye size={10} className="stroke-[3]" />
                  Detalhes
                </button>
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

      {/* ── LIGHTBOX (image fullscreen) ── */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-black/98 backdrop-blur-2xl py-6 px-4"
            onClick={() => setLightboxImg(null)}
          >
            {/* Close bar */}
            <div className="w-full max-w-3xl flex items-center justify-between mb-4 shrink-0" onClick={e => e.stopPropagation()}>
              <span className="text-white font-black uppercase tracking-widest text-sm">
                {lightboxNiche}
              </span>
              <button
                onClick={() => setLightboxImg(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#e91e8c]/30 flex items-center justify-center text-white transition-all cursor-pointer"
              >
                <X size={18} className="stroke-[2.5]" />
              </button>
            </div>

            {/* Full image scrollable container */}
            <div
              className="w-full max-w-3xl h-[70vh] rounded-[20px] overflow-y-auto border border-[#e91e8c]/20 shadow-[0_0_60px_rgba(233,30,140,0.2)] bg-black/50 scroll-smooth"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={lightboxImg}
                alt={lightboxNiche}
                className="w-full h-auto block"
                draggable={false}
              />
            </div>

            <p className="text-white/40 text-xs mt-4 shrink-0 font-bold uppercase tracking-wider animate-pulse flex items-center gap-1.5 select-none pointer-events-none">
              ↕️ Role para cima ou para baixo para ver o modelo completo
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── DETAILS MODAL ── */}
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
              className="relative w-full max-w-4xl lg:max-w-5xl bg-[#000000] border-2 border-[#e91e8c]/30 rounded-[20px] overflow-hidden shadow-[0_25px_80px_rgba(233,30,140,0.25)] max-h-[90vh] overflow-y-auto select-none"
              onClick={e => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">

                {/* Left: image preview — click to lightbox */}
                <div
                  className="lg:col-span-8 relative aspect-video lg:aspect-auto lg:h-[500px] overflow-hidden bg-black border-r border-[#2a2a2a] flex items-center justify-center cursor-zoom-in"
                  onClick={() => openLightbox(selectedModel)}
                >
                  <img
                    src={selectedModel.img}
                    alt={selectedModel.niche}
                    className="w-full h-full object-cover opacity-90 p-4 rounded-[20px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* Zoom hint */}
                  <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 border border-white/10 text-[9px] font-black text-white/60 tracking-widest uppercase backdrop-blur-sm pointer-events-none">
                    <ZoomIn size={10} /> Ver completo
                  </div>

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

                {/* Right: info */}
                <div className="lg:col-span-4 p-8 lg:p-10 flex flex-col justify-between h-auto lg:h-[500px] bg-[#000000] text-left border-t border-[#2a2a2a] lg:border-t-0">
                  <div>
                    <div className="flex justify-between items-center mb-8">
                      <span className="text-[9px] font-black text-[#e91e8c] uppercase tracking-[0.25em]">MODELO DO SEU NICHO</span>
                      <button
                        onClick={() => setSelectedModel(null)}
                        className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#e91e8c]/20 hover:text-[#e91e8c] flex items-center justify-center text-white/60 transition-all cursor-pointer"
                      >
                        <X size={16} className="stroke-[2.5]" />
                      </button>
                    </div>

                    <h3 className="text-3xl font-black uppercase tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] w-fit">
                      {selectedModel.niche}
                    </h3>

                    <div className="px-3.5 py-1.5 rounded-lg bg-[#e91e8c]/10 text-[9px] font-black text-[#e91e8c] border border-[#e91e8c]/20 mb-5 inline-block uppercase tracking-wider">
                      {selectedModel.highlight}
                    </div>

                    <p className="text-neutral-300 text-xs font-semibold leading-relaxed mb-6 bg-white/[0.02] p-4.5 rounded-[16px] border border-white/5 shadow-inner">
                      {selectedModel.persuasionDesc}
                    </p>

                    <div className="space-y-3.5 mb-6">
                      <div className="flex justify-between items-center py-2 border-b border-white/5 text-[11px] font-bold">
                        <span className="text-white/40 uppercase tracking-widest">Mobile Adaptado</span>
                        <span className="text-[#25D366] font-black flex items-center gap-1"><CheckCircle2 size={13} strokeWidth={2.5} /> SIM</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-white/5 text-[11px] font-bold">
                        <span className="text-white/40 uppercase tracking-widest">Velocidade Computador</span>
                        <span className="text-white bg-[#e91e8c] px-2 py-0.5 rounded text-[10px] font-black shadow-sm">{selectedModel.stats.speed}/100</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-white/5 text-[11px] font-bold">
                        <span className="text-white/40 uppercase tracking-widest">Otimização SEO Local</span>
                        <span className="text-white text-[10px] font-black">{selectedModel.stats.seo}/100</span>
                      </div>
                    </div>
                  </div>

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
