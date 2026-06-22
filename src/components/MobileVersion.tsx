import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Zap, 
  ArrowRight, 
  Star, 
  X, 
  Check, 
  CheckCircle, 
  ChevronRight, 
  XCircle, 
  Clock, 
  Coins,
  MapPin, 
  Calendar, 
  Smartphone, 
  MessageSquare, 
  Sparkles, 
  Search, 
  Layout, 
  Paintbrush, 
  Globe, 
  Palette, 
  Unlock, 
  Tag, 
  Target, 
  Minus, 
  Plus, 
  Landmark, 
  Heart, 
  Award,
  ChevronDown,
  MessageSquareCode,
  CalendarDays,
  MessageCircle,
  Users,
  TrendingUp,
  DollarSign,
  Menu,
  Package,
  Eye,
  ZoomIn
} from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./Icons";
import { StyledIcon } from "./StyledIcon";
import RevealSection from "./RevealSection";
import Counter from "./Counter";

// ----------------------------------------------------------------------
// CUSTOM STYLES & SUB-INTERACTIVE WRAPPERS FOR MOBILE
// ----------------------------------------------------------------------

interface NicheItem {
  niche: string;
  subtitle: string;
  persuasionDesc: string;
  img: string;
  stats: { speed: string; seo: string };
  tag: string;
  highlight: string;
}

const MOBILE_NICHES: NicheItem[] = [
  { 
    niche: "Clínica de Estética", 
    subtitle: "Clínicas de Estética & Spas",
    persuasionDesc: "Site premium com galerias de antes/depois e agendamento via WhatsApp para converter visitantes em clientes instantaneamente.", 
    img: "/images/clinica de estetica.webp",
    stats: { speed: "99", seo: "100" },
    tag: "Estética",
    highlight: "✨ Antes e depois + WhatsApp"
  },
  { 
    niche: "Clínica de Nutrição", 
    subtitle: "Nutricionistas & Nutrólogos",
    persuasionDesc: "Layout moderno para atrair consultas particulares, com depoimentos de pacientes e programas nutricionais em destaque.", 
    img: "/images/clinica de nutrição.webp",
    stats: { speed: "98", seo: "100" },
    tag: "Nutrição",
    highlight: "🍏 Agendamento + depoimentos"
  },
  { 
    niche: "Clínica Odontológica", 
    subtitle: "Clínicas & Consultórios Odontológicos",
    persuasionDesc: "Transmita credibilidade com agendamento integrado, especialidades visíveis e FAQ clínico que reduz dúvidas dos pacientes.", 
    img: "/images/clinica odontologica.webp",
    stats: { speed: "100", seo: "100" },
    tag: "Odontologia",
    highlight: "🦷 Agendamento + FAQ clínico"
  },
  { 
    niche: "Clínica Veterinária", 
    subtitle: "Clínicas Pet & Hospitais Veterinários",
    persuasionDesc: "Canal de emergência 24h, agendamentos de banho/tosa e mapas integrados para tranquilizar tutores de pets.", 
    img: "/images/clinica veterinaria.webp",
    stats: { speed: "99", seo: "98" },
    tag: "Veterinária",
    highlight: "🐾 Emergência 24h + banho e tosa"
  },
  { 
    niche: "Dedetizadora", 
    subtitle: "Dedetização & Controle de Pragas",
    persuasionDesc: "Botões de ligação e WhatsApp em destaque máximo, selos ANVISA e orçamento imediato para fechar mais contratos.", 
    img: "/images/dedetizadora (2).webp",
    stats: { speed: "100", seo: "100" },
    tag: "Serviços",
    highlight: "🛡️ Orçamento rápido + ANVISA"
  },
  { 
    niche: "Psicólogo", 
    subtitle: "Consultórios de Psicologia & Terapeutas",
    persuasionDesc: "Ambiente digital acolhedor para agendamento presencial ou online, com design ético que incentiva o primeiro contato.", 
    img: "/images/psicologo.webp",
    stats: { speed: "97", seo: "100" },
    tag: "Psicologia",
    highlight: "🧠 Sessões online/presencial"
  },
  { 
    niche: "Salão de Beleza", 
    subtitle: "Salões, Barbearias & Cabeleireiros",
    persuasionDesc: "Galeria de cortes, tabela de preços e agendamento online para converter seguidores em clientes assíduos.", 
    img: "/images/salao de beleza.webp",
    stats: { speed: "98", seo: "100" },
    tag: "Beleza",
    highlight: "💇‍♀️ Preços + galeria + agendamento"
  },
  { 
    niche: "Vidraçaria", 
    subtitle: "Vidraçarias & Serralherias",
    persuasionDesc: "Portfólio de projetos em alta resolução (box, espelhos, janelas) com orçamento rápido direto no WhatsApp.", 
    img: "/images/vidracaria.webp",
    stats: { speed: "99", seo: "100" },
    tag: "Vidros",
    highlight: "🪟 Projetos + orçamento rápido"
  }
];

const CHATS = [
  {
    name: "Dr. Paulo S.",
    role: "Dentista - Campinas",
    avatarUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150&h=150",
    text: "Gente, o site ficou surreal de lindo! Em menos de 24h depois que foi pro ar, já agendamos 2 clareamentos de pacientes novos direto pelo zap. Valeu!"
  },
  {
    name: "Amanda Vet",
    role: "Pet Care - Curitiba",
    avatarUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150&h=150",
    text: "Pedi pra alterar o mapa e a galeria ontem à noite e vocês já ajustaram tudo. O site carrega muito rápido no celular, os clientes sempre elogiam."
  },
  {
    name: "Prof. Thiago",
    role: "Studio Fit - SP",
    avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=150&h=150",
    text: "Sensacional o modelo de site de vcs! Coloquei no ar e a galera amou. O layout passa muita credibilidade e já tive 5 cadastros novos essa semana!"
  }
];

interface MobileVersionProps {
  onPriceInView?: (visible: boolean) => void;
}

export default function MobileVersion({ onPriceInView }: MobileVersionProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [portfolioIndex, setPortfolioIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [solucaoIndex, setSolucaoIndex] = useState(0);
  const [selectedModel, setSelectedModel] = useState<NicheItem | null>(null);
  const [isCompExpanded, setIsCompExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [lightboxNiche, setLightboxNiche] = useState<string>("");
  const [panningIndex, setPanningIndex] = useState<number | null>(null);
  
  const priceRef = useRef<HTMLDivElement>(null);

  // Smooth scroll helper
  const scrollToMobile = (id: string) => {
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Intersection observer to notify parent about Price section visibility (hides float WA button)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (onPriceInView) {
          onPriceInView(entry.isIntersecting);
        }
      },
      { threshold: 0.1 }
    );
    if (priceRef.current) {
      observer.observe(priceRef.current);
    }
    return () => observer.disconnect();
  }, [onPriceInView]);

  return (
    <div className="w-full max-w-full mx-auto bg-[#000000] text-white overflow-x-hidden font-sans border-x border-neutral-900 relative" style={{ contain: 'layout' }}>
      
      {/* ----------------------------------------------------------------------
          NAVBAR MOBILE (includes emergency countdown bar above)
          ---------------------------------------------------------------------- */}
      <div className="fixed top-0 left-0 w-full max-w-[430px] mx-auto z-[999]">
        {/* Home header */}
        <div className="h-[64px] bg-[#000000] backdrop-blur-md border-b border-[#f0134d]/20 px-4 flex items-center justify-between relative">
          <button 
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="focus:outline-none shrink-0"
          >
            <Logo size="sm" />
          </button>

          <div className="flex items-center gap-2">
            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#f0134d] transition-colors focus:outline-none focus:ring-1 focus:ring-[#f0134d]"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Animated Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backing backdrop with subtle blur to close the menu on click */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 top-[64px] bg-black/60 backdrop-blur-md z-[997] max-w-[430px] mx-auto"
              />

              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute top-[64px] inset-x-0 bg-[#000000] border-b border-[#f0134d]/20 backdrop-blur-2xl z-[998] p-6 flex flex-col gap-6 shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd]">
                    Navegação Exclusiva
                  </span>
                  <p className="text-xs text-neutral-400 font-semibold">
                    Selecione uma seção para navegar com fluidez:
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-2.5 border-t border-white/5 pt-4">
                  {[
                    { number: "01", label: "Como Funciona", target: "como-funciona-mobile", badge: "48 Horas", desc: "Seu site pronto em tempo recorde" },
                    { number: "02", label: "Vantagens", target: "beneficios-mobile", badge: "Alta Conversão", desc: "Por que nos escolher faz a diferença" },
                    { number: "03", label: "Modelos", target: "modelos-carrossel", badge: "Seu Nicho", desc: "Layouts validados para vendas" },
                    { number: "04", label: "FAQ", target: "faq-mobile", badge: "Suporte", desc: "Tire todas as suas dúvidas" },
                  ].map((link, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollToMobile(link.target)}
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-white/[0.01] border border-white/5 text-left text-[13px] font-black text-white hover:text-[#f0134d] active:bg-[#f0134d]/5 transition-all uppercase tracking-wide group outline-none"
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="text-xs font-mono font-bold text-[#f0134d]">
                          {link.number}
                        </span>
                        <div className="flex flex-col">
                          <span className="font-black text-white group-hover:text-[#f0134d] transition-colors leading-none mb-1">
                            {link.label}
                          </span>
                          <span className="text-[9px] text-neutral-500 font-medium lowercase tracking-normal leading-none">
                            {link.desc}
                          </span>
                        </div>
                      </div>
                      <span className="text-[8px] font-bold px-2 py-0.5 rounded bg-white/5 text-neutral-400 group-hover:bg-[#f0134d]/10 group-hover:text-[#f0134d] transition-colors font-mono">
                        {link.badge}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="bg-[#000000] border border-white/5 p-4 rounded-xl flex items-center justify-between mt-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                    <span className="text-[9px] font-black uppercase tracking-wider text-neutral-400">Agência Online ativa</span>
                  </div>
                  <a
                    href="https://wa.me/5511992876219?text=Olá!%20Falei%20no%20site%20da%20Duno%20e%20quero%20um%20site%20profissional."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[9px] font-black uppercase tracking-widest text-[#f0134d] hover:underline"
                  >
                    Contato imediato →
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* ----------------------------------------------------------------------
          HERO MOBILE
          ---------------------------------------------------------------------- */}
      <section
        className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#000000]"
        style={{ paddingTop: '95px', paddingBottom: '56px', paddingLeft: '20px', paddingRight: '20px' }}
      >
        {/* Background Image — Mobile Cards Showcase */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none z-0"
          style={{
            backgroundImage: "url('/img04mobile.png')",
          }}
        />

        {/* Dark overlay — dimming the background so text is perfectly readable */}
        <div className="absolute inset-0 bg-[#000000]/62 pointer-events-none z-[1]" />
        {/* Gradient — bottom fade to dark */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#121212] to-transparent pointer-events-none z-[2]" />
        {/* Gradient — top fade to dark (navbar area) */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#121212]/80 to-transparent pointer-events-none z-[2]" />

        {/* Ambient pink glow accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#f0134d]/8 blur-[100px] rounded-full pointer-events-none z-[1]" />

        {/* 1. Header Badge */}
        <div className="relative z-10 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#12020a]/90 border border-[#f0134d]/45 text-white text-xs font-extrabold tracking-wide mb-6 shadow-[0_0_15px_rgba(240,19,77,0.25)]">
          <div className="flex -space-x-1.5">
            <img className="inline-block h-5.5 w-5.5 rounded-full ring-2 ring-[#f0134d] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80" alt="1" />
            <img className="inline-block h-5.5 w-5.5 rounded-full ring-2 ring-[#f0134d] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80" alt="2" />
            <img className="inline-block h-5.5 w-5.5 rounded-full ring-2 ring-[#f0134d] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80" alt="3" />
            <img className="inline-block h-5.5 w-5.5 rounded-full ring-2 ring-[#f0134d] object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80" alt="4" />
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black tracking-widest uppercase text-[10px]">⚡ Seu site no ar completo em 48h</span>
        </div>

        {/* 2. Headline */}
        <h1 className="relative z-10 font-black mb-4 text-center px-1 text-2xl min-[370px]:text-[28px] uppercase tracking-tight leading-[1.15]">
          Seu site de <span className="gradient-text">alta conversão</span>{" "}<br />
          colocado no ar em apenas <span className="gradient-text">48 horas</span>
        </h1>

        {/* 3. Subheadline */}
        <p className="relative z-10 text-[13px] min-[370px]:text-[14px] text-[#c8c8c8] text-center mb-8 font-semibold leading-relaxed max-w-[340px]">
          Um site de elite completo, ultra-veloz, totalmente otimizado para celulares e focado em transformar seus visitantes em clientes reais por apenas R$197/mês.
        </p>

        {/* 4. CTAs Blocks */}
        <div className="relative z-10 w-full max-w-[340px] flex flex-col gap-3 px-1.5 pb-2 text-center items-center">
          <a
            href="https://wa.me/5511992876219?text=Olá!%20Li%2520os%2520detalhes%2520da%252520assinatura%252520do%252520site%252520Duno%2520e%2520quero%2520começar."
            target="_blank"
            rel="noopener noreferrer"
            className="gold-premium-btn w-full"
            style={{ minHeight: "48px" }}
          >
            <span className="text-black whitespace-nowrap font-black">Quero meu site</span>
            <ArrowRight size={15} />
          </a>
          <button
            onClick={() => scrollToMobile("modelos-carrossel")}
            className="w-full h-[52px] rounded-full text-[13px] font-black text-white hover:text-[#f0134d] uppercase tracking-widest border-2 border-white/20 bg-black/45 backdrop-blur-sm active:bg-white/5 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            style={{ minHeight: "48px" }}
          >
            <span className="text-white whitespace-nowrap font-black">Modelos de Sites</span>
            <ArrowRight size={15} className="text-white bg-transparent shrink-0" />
          </button>
        </div>

        {/* 5. Social proof strip — mirroring desktop */}
        <div className="relative z-10 mt-8 flex items-center gap-4 py-3.5 border-t border-b border-white/10 w-full max-w-[340px] bg-black/40 backdrop-blur-md px-5 rounded-2xl">
          <div className="flex-1 text-center">
            <span className="block text-xl font-black text-[#f0134d] leading-none">+100</span>
            <span className="text-[9px] font-black text-neutral-400 uppercase tracking-wider block mt-0.5">Sites</span>
          </div>
          <div className="h-8 w-[1px] bg-white/10" />
          <div className="flex-1 text-center">
            <span className="block text-xl font-black text-[#f0134d] leading-none">+15</span>
            <span className="text-[9px] font-black text-neutral-400 uppercase tracking-wider block mt-0.5">Nichos</span>
          </div>
          <div className="h-8 w-[1px] bg-white/10" />
          <div className="flex-1 text-center">
            <span className="block text-xl font-black text-[#f0134d] leading-none">48h</span>
            <span className="text-[9px] font-black text-neutral-400 uppercase tracking-wider block mt-0.5">Pronto</span>
          </div>
        </div>
      </section>




      {/* ----------------------------------------------------------------------
          DOR MOBILE
          ---------------------------------------------------------------------- */}
      <RevealSection>
        <section className="py-20 px-5 bg-[#000000] relative flex flex-col items-center overflow-hidden">
        <h2 className="text-[22px] min-[375px]:text-[28px] font-black uppercase text-center tracking-tight leading-tight mb-4 text-white">
          Você está <span className="gradient-text italic font-black">perdendo vendas</span>
        </h2>
        
        <p className="text-[15px] text-[#a0a0a0] font-semibold text-center max-w-[360px] mx-auto mb-12 leading-relaxed">
          A falta de presença digital está custando clientes reais para o seu negócio. Todo dia.
        </p>

        <div className="flex flex-col gap-4.5 w-full">
          {[
            {
              title: (
                <span>
                  Sem site, <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">sem confiança</span>
                </span>
              ),
              desc: "Quando um cliente pesquisa sua marca ou serviço e não acha nada sobre você, ele vai direto para o concorrente que aparece de forma profissional no Google. Simples assim.",
              iconName: "XCircle"
            },
            {
              title: (
                <span>
                  Refém das <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">indicações</span>
                </span>
              ),
              desc: "Depender só de indicação boca a boca é arriscado. Um mês maravilhoso, um mês vazio. Com um site de alto padrão, você atrai novos clientes interessados todos os dias no automático.",
              iconName: "Users"
            },
            {
              title: (
                <span>
                  Concorrente na <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">sua frente</span>
                </span>
              ),
              desc: "Enquanto você adia ter sua página profissional, seu concorrente aparece no topo do Google quando as pessoas buscam na sua região. Esse novo cliente que ligou para ele era para ser seu.",
              iconName: "TrendingUp"
            },
            {
              title: (
                <span>
                  Agência cobrou <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">caro</span> e não entregou
                </span>
              ),
              desc: "R$ 3.000, R$ 5.000 ou mais por meses a fio de espera e no final entregaram um painel complexo que ninguém consegue editar. Você merece ter uma solução ágil, completa e acessível hoje.",
              iconName: "DollarSign"
            }
          ].map((item, i) => {
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="pink-card hover:scale-[1.01] transition-all duration-300 flex flex-col gap-4 text-left"
              >
                <div className="flex justify-start">
                  <StyledIcon iconName={item.iconName} size={20} containerSize={44} flat={true} className="!mx-0 !my-0 shrink-0" />
                </div>
                <div>
                  <h3 className="text-[17px] font-black text-white uppercase tracking-tight mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#a0a0a0] text-[13px] sm:text-[14px] leading-relaxed font-semibold">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
      </RevealSection>

      {/* ----------------------------------------------------------------------
          SOLUÇÃO MOBILE
          ---------------------------------------------------------------------- */}
      <RevealSection>
        <section className="py-20 px-5 bg-[#000000] border-t border-b border-[#202020]/20 relative overflow-hidden flex flex-col items-center">
        {/* Background visual glosses */}
        <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#f0134d]/5 blur-[90px] rounded-full pointer-events-none" />
        <div className="absolute -left-10 top-[10%] w-60 h-60 bg-[#7c3aed]/5 blur-[90px] rounded-full pointer-events-none" />

        <div className="text-center mb-10 relative z-10 w-full">
          <div className="text-[#f0134d] text-[11px] font-black tracking-[0.2em] uppercase mb-4 animate-pulse">
            A SOLUÇÃO
          </div>
          
          <h2 className="text-[24px] min-[375px]:text-[30px] font-black mb-6 uppercase tracking-tight text-white leading-tight">
            Um site profissional <br />
            <span className="gradient-text block mt-1">feito para seu negócio vender</span>
          </h2>
          
          <p className="text-[#a0a0a0] text-[15px] max-w-[340px] mx-auto leading-relaxed font-semibold">
            Nós criamos, personalizamos e colocamos seu modelo de elite no ar em até 48 horas. Veja toda a estrutura inclusa, construída para conversão rápida:
          </p>
        </div>

        {/* Vertical list of service feature cards */}
        <div className="w-full px-5 mb-10 z-10 relative">
          <div className="grid grid-cols-1 gap-4.5">
            {[
              { 
                title: (
                  <span>
                    WhatsApp de <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">Alta Conversão</span>
                  </span>
                ), 
                desc: "Botão flutuante perfeitamente posicionado e pré-configurado com mensagem personalizada para direcionar novos contatos direto para seu WhatsApp.", 
                iconName: "MessageSquare" 
              },
              { 
                title: (
                  <span>
                    Agendamento <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">Prático</span>
                  </span>
                ), 
                desc: "Formulário estratégico para que novos pacientes ou clientes agendem consultas e serviços de forma totalmente rápida.", 
                iconName: "CalendarDays" 
              },
              { 
                title: (
                  <span>
                    Otimizado para <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">Google</span>
                  </span>
                ), 
                desc: "Programado sob as estritas diretrizes oficiais de indexação local (SEO), ampliando sua visibilidade na sua cidade.", 
                iconName: "Search" 
              },
              { 
                title: (
                  <span>
                    Google <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">Maps Integrado</span>
                  </span>
                ), 
                desc: "Integração do mapa interativo oficial para que seus clientes tracem rotas físicas exatas até seu consultório com apenas um toque.", 
                iconName: "MapPin" 
              },
              { 
                title: (
                  <span>
                    Design <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">Mobile-First</span>
                  </span>
                ), 
                desc: "Interface ultra-veloz, desenvolvida sob medida para carregar velozmente até nas conexões 3G/4G mais instáveis.", 
                iconName: "Smartphone" 
              },
              { 
                title: (
                  <span>
                    100% <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">Personalizado</span>
                  </span>
                ), 
                desc: "Nossa equipe adapta todo o layout com sua identidade visual: logotipo, paleta de cores e fotografias reais do seu consultório.", 
                iconName: "Sparkles" 
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="pink-card w-full relative flex flex-col gap-4 text-left"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#f0134d]/5 to-transparent blur-lg rounded-full pointer-events-none" />
                <div className="flex items-center gap-4">
                  <StyledIcon iconName={item.iconName} size={20} containerSize={44} flat={true} className="shrink-0 !mx-0 !my-0" />
                  <h3 className="text-[15px] font-black text-white tracking-tight leading-snug">{item.title}</h3>
                </div>
                <p className="text-[#a0a0a0] text-xs leading-relaxed font-semibold">{item.desc}</p>
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-black uppercase text-[#f0134d] mt-1">
                  <span>Ativo na Assinatura</span>
                  <span>✓ Incluso</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Highlights Badge list */}
        <div className="w-full max-w-sm bg-[#000000] p-5 border border-[#2a2a2a] rounded-[16px] text-center space-y-3 relative z-10 shadow-lg">
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-wider text-white">Acessos e Tráfego Ilimitado</span>
          </div>
          <div className="h-[1px] bg-[#2a2a2a] w-1/2 mx-auto" />
          <div className="flex items-center justify-center gap-2">
            <Check size={14} className="text-[#f0134d] stroke-[3]" />
            <span className="text-[11px] font-black uppercase tracking-wider text-white">Servidor Dedicado AWS</span>
          </div>
          <div className="h-[1px] bg-[#2a2a2a] w-1/2 mx-auto" />
          <div className="flex items-center justify-center gap-2">
            <Clock size={14} className="text-[#f0134d]" />
            <span className="text-[11px] font-black uppercase tracking-wider text-white">No ar em até 48 horas</span>
          </div>
        </div>
      </section>
      </RevealSection>

      {/* ----------------------------------------------------------------------
          COMO FUNCIONA MOBILE (Timeline Vertical)
          ---------------------------------------------------------------------- */}
      <RevealSection id="como-funciona-mobile">
        <section id="como-funciona-mobile" className="py-16 px-5 bg-[#000000]">
        <h2 className="text-[22px] min-[375px]:text-[28px] font-black uppercase text-center tracking-tight leading-tight mb-3 text-white">
          Como funciona <span className="gradient-text">em 48 horas</span>
        </h2>
        
        <p className="text-[15px] text-[#a0a0a0] font-semibold text-center mb-12 max-w-[300px] mx-auto leading-relaxed">
          Etapas rápidas, sem perda de tempo ou ligações cansativas.
        </p>

        {/* Vertical Timeline container */}
        <div className="relative pl-4 space-y-8">
          {/* Timeline continuous connector line */}
          <div className="absolute top-4 bottom-4 left-[30px] w-[2px] bg-gradient-to-b from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] z-0" />

          {[
            {
              step: "01",
              title: "Escolha o modelo",
              desc: "Selecione o modelo validado do seu nicho profissional ideal.",
              time: "Hoje"
            },
            {
              step: "02",
              title: "Nós customizamos tudo",
              desc: "Aplicamos suas logos, fotos, cores exclusivas de marca.",
              time: "Em até 24h"
            },
            {
              step: "03",
              title: "Publicação!",
              desc: "Configuramos certificado criptografado SSL e domínio pronto.",
              time: "Em até 48h"
            },
            {
              step: "04",
              title: "Vendas e contatos",
              desc: "Clientes acessam direto e chegam no seu WhatsApp de trabalho.",
              time: "Para sempre!"
            }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 relative z-10 items-start">
              {/* Timeline circle badge */}
              <div className="w-[32px] h-[32px] rounded-full bg-gradient-to-tr from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] flex items-center justify-center text-white text-[12px] font-black shrink-0 relative shadow-lg">
                {item.step}
              </div>
              
              <div className="flex-1 bg-[#000000]/90 border border-white/5 rounded-2xl p-4 text-left">
                <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                  <h3 className="text-[15px] font-black text-white uppercase tracking-tight">{item.title}</h3>
                  <span className="px-2 py-0.5 rounded bg-[#f0134d]/15 text-[#f0134d] text-[9px] font-black uppercase border border-[#f0134d]/30">
                    {item.time}
                  </span>
                </div>
                <p className="text-[#a0a0a0] text-xs font-semibold leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Wide assurance banner */}
        <div className="mt-12 bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] p-4 text-center rounded-xl">
          <p className="text-white text-[12px] font-black uppercase tracking-wider">
            Sem Contrato de Fidelidade · Sem Taxa de Cancelamento
          </p>
        </div>
      </section>
      </RevealSection>

      {/* ----------------------------------------------------------------------
          VANTAGENS MOBILE
          ---------------------------------------------------------------------- */}
      <RevealSection id="beneficios-mobile">
        <section id="beneficios-mobile" className="py-16 px-5 bg-[#000000] border-y border-[#202020]/20">
        <div className="text-center mb-10">
          <h2 className="text-[22px] min-[375px]:text-[28px] font-black uppercase tracking-tight leading-tight mb-4 text-white">
            Vantagens exclusivas da nossa <span className="gradient-text">assinatura</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5">
          {[
            { 
              title: (
                <span>
                  Totalmente <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">Personalizado</span>
                </span>
              ), 
              desc: "Sua logo, suas cores, suas fotos. Nenhum cliente vai achar que é um modelo genérico — parece feito do zero para você.", 
              iconName: "Palette"
            },
            { 
              title: (
                <span>
                  Pronto em <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">48 Horas</span>
                </span>
              ), 
              desc: "Enquanto uma agência levaria 60 dias, você já está recebendo cliques de novos clientes. Dois dias de prazo.", 
              iconName: "Clock"
            },
            { 
              title: (
                <span>
                  Sem <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">Fidelidade</span>
                </span>
              ), 
              desc: "Sem multa de rescisão, sem contrato mínimo. Se em algum mês não quiser continuar ativo, basta nos avisar.", 
              iconName: "Unlock"
            },
            { 
              title: (
                <span>
                  Suporte por <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">WhatsApp</span>
                </span>
              ), 
              desc: "Quer trocar uma foto? Atualizar um texto? Manda uma mensagem. Respondemos com agilidade e eficiência.", 
              iconName: "MessageCircle"
            },
            { 
              title: (
                <span>
                  Sem <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">Letras Miúdas</span>
                </span>
              ), 
              desc: "R$ 197/mês fixos. Sem taxas extras ou custos ocultos, sem surpresas desagradáveis na fatura.", 
              iconName: "Coins"
            },
            { 
              title: (
                <span>
                  Feito para <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">Converter</span>
                </span>
              ), 
              desc: "Cada botão, seção e texto foi otimizado para transformar visitante em contato real no seu WhatsApp.", 
              iconName: "Target"
            }
          ].map((item, i) => {
            return (
              <div 
                key={i} 
                className="pink-card relative flex flex-col gap-4 text-left"
              >
                {/* Icon Wrapper badge */}
                <div className="flex justify-start">
                  <StyledIcon iconName={item.iconName} size={20} containerSize={44} flat={true} className="shrink-0 !mx-0 !my-0" />
                </div>
                <div>
                  <h3 className="text-[17px] font-black text-white uppercase tracking-tight mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[#a0a0a0] leading-relaxed font-semibold text-xs sm:text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      </RevealSection>

      {/* ----------------------------------------------------------------------
          ANTES E DEPOIS MOBILE (Vertical Stack with divider)
          ---------------------------------------------------------------------- */}
      <RevealSection id="diferenca-mobile">
        <section id="diferenca-mobile" className="py-16 px-5 bg-[#000000]">
        <h2 className="text-[22px] min-[375px]:text-[28px] font-black uppercase text-center tracking-tight leading-[1.05] mb-10 text-white">
          A diferença <span className="gradient-text">de um site útil</span>
        </h2>

        <div className="flex flex-col gap-6">
          {/* Card ANTES */}
          <div className="p-5 rounded-2xl border border-red-500/10 bg-gradient-to-b from-red-950/20 to-neutral-950 text-left">
            <span className="inline-block px-2.5 py-1 text-[10px] font-black uppercase tracking-widest bg-red-500/10 text-red-500 border border-red-500/20 rounded-md mb-4">
              ✗ ANTES — Sem site
            </span>
            <ul className="space-y-2.5">
              {["Invisível nas buscas de celular", "Perde o contato para anúncios concorrentes", "Sem agendamento centralizado", "Amadorismo digital", "Fila de espera vazia"].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs font-semibold text-white/50">
                  <X className="text-red-500 shrink-0 w-4 h-4" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Connected arrow banner */}
          <div className="flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] flex items-center justify-center shadow-lg transform rotate-90">
              <ArrowRight size={16} className="text-white" />
            </div>
          </div>

          {/* Card DEPOIS */}
          <div className="p-5 rounded-2xl border border-emerald-500/10 bg-gradient-to-b from-emerald-950/20 to-neutral-950 text-left animate-pulse" style={{ animationDuration: "3s" }}>
            <span className="inline-block px-2.5 py-1 text-[10px] font-black uppercase tracking-widest bg-emerald-500/10 text-[#25D366] border border-emerald-500/20 rounded-md mb-4">
              ✓ DEPOIS — Com a Duno
            </span>
            <ul className="space-y-2.5">
              {["Presença de busca no Google maps", "WhatsApp integrado clicável", "Agendamento instantâneo", "Confiança local extrema", "Novos leads diários"].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs font-bold text-white">
                  <Check className="text-[#25D366] shrink-0 w-4 h-4 stroke-[3]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      </RevealSection>

      {/* ----------------------------------------------------------------------
          SHOWCASE DE DESIGN EXCLUSIVO MOBILE
          ---------------------------------------------------------------------- */}
      <RevealSection>
        <section className="py-16 px-5 bg-[#000000] border-t border-[#202020]/20 relative flex flex-col items-center overflow-hidden">
        {/* Subtle glow light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] bg-[#f0134d]/5 blur-[70px] rounded-full pointer-events-none" />

        <div className="relative z-10 w-full text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f0134d]/15 border border-[#f0134d]/30 text-[#f0134d] text-[11px] font-black uppercase tracking-wider mb-5">
            <span>💎 Design Exclusivo & Persuasivo</span>
          </div>

          <h2 className="text-[22px] min-[375px]:text-[28px] font-black uppercase tracking-tight leading-tight mb-4">
            Layouts de elite para <span className="gradient-text">converter visitantes</span>
          </h2>

          <p className="text-neutral-400 text-[14px] font-semibold leading-relaxed mb-8 max-w-[340px] mx-auto text-center">
            Não fazemos sites genéricos ou amadores. Cada pixel é desenhado de forma milimétrica para garantir que seu negócio transmita autoridade máxima instantaneamente.
          </p>

          {/* Elegant aligned feature cards (removed image container as requested) */}
          <div className="grid grid-cols-1 gap-4.5 w-full max-w-[340px] mx-auto text-left">
            {[
              {
                title: (
                  <span>
                    Neuromarketing de <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">Elite</span>
                  </span>
                ),
                desc: "Texto persuasivo escrito por especialistas focado em conversão e vendas locais.",
                iconName: "Target"
              },
              {
                title: (
                  <span>
                    Velocidade <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">Ultra Rápida</span>
                  </span>
                ),
                desc: "Site otimizado sob regras rígidas de SEO para carregar de forma instantânea.",
                iconName: "Zap"
              },
              {
                title: (
                  <span>
                    Design <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">Responsivo</span>
                  </span>
                ),
                desc: "Adaptado perfeitamente para qualquer tamanho ou orientação de tela móvel.",
                iconName: "Layout"
              }
            ].map((v, i) => {
              return (
                <div 
                  key={i} 
                  className="pink-card flex items-start gap-4 transition-all duration-300 !p-5"
                >
                  <StyledIcon iconName={v.iconName} size={18} containerSize={40} flat={true} className="shrink-0 !mx-0 !my-0" />
                  <div>
                    <h3 className="text-[15px] font-black text-white uppercase tracking-tight mb-1.5 leading-tight">{v.title}</h3>
                    <p className="text-[#a0a0a0] text-xs font-semibold leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      </RevealSection>

      {/* ----------------------------------------------------------------------
          MODELOS MOBILE (Horizontal Snap Carrossel with Right Gradient Mask)
          ---------------------------------------------------------------------- */}
      <RevealSection id="modelos-carrossel">
        <section id="modelos-carrossel" className="py-16 bg-[#000000] border-y border-[#202020]/20 relative">
        <h2 className="text-[22px] min-[375px]:text-[28px] font-black uppercase text-center tracking-tight leading-tight mb-3 text-white px-5">
          Escolha seu modelo <span className="gradient-text">do seu nicho</span>
        </h2>
        
        <p className="text-[14px] text-neutral-400 font-semibold text-center mb-8 max-w-[320px] mx-auto px-5">
          Passe o dedo para rolar e toque na imagem para visualizar melhor o site completo.
        </p>

        {/* 1x8 Grid of Niche Cards */}
        <div className="w-full px-5 mb-10">
          <div className="grid grid-cols-1 gap-8">
            {MOBILE_NICHES.map((item, i) => (
              <div 
                key={i}
                className="w-full flex flex-col gap-3 text-left"
              >
                {/* Card containing ONLY the image viewport */}
                <div 
                  onClick={() => {
                    setLightboxImg(item.img);
                    setLightboxNiche(item.niche);
                  }}
                  onMouseEnter={() => setPanningIndex(i)}
                  onMouseLeave={() => setPanningIndex(null)}
                  onTouchStart={() => setPanningIndex(i)}
                  onTouchEnd={() => setPanningIndex(null)}
                  onTouchCancel={() => setPanningIndex(null)}
                  className="w-full h-[300px] rounded-[20px] bg-[#000000] border-2 border-[#e10270] overflow-hidden relative cursor-pointer shadow-lg transition-all duration-300"
                >
                  <img 
                    src={item.img} 
                    alt={item.niche} 
                    className="w-full absolute top-0 left-0 origin-top transition-transform ease-in-out"
                    style={{
                      height: 'auto',
                      transitionDuration: panningIndex === i ? '5s' : '1s',
                      transform: panningIndex === i ? 'translateY(calc(-100% + 300px))' : 'translateY(0)',
                    }}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/45 backdrop-blur-[1px] pointer-events-none">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#e91e8c] to-[#7c3aed] text-white text-[10px] font-black uppercase tracking-widest shadow-xl">
                      <ZoomIn size={13} className="stroke-[3]" />
                      <span>Ver completo</span>
                    </div>
                  </div>

                  {/* Direct info label overlay */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/85 backdrop-blur-xs px-3 py-1 rounded-full text-[9px] font-black text-white/95 uppercase border border-white/10 flex items-center gap-1 shadow-md pointer-events-none whitespace-nowrap">
                    <ZoomIn size={10} className="stroke-[3] text-[#e91e8c]" />
                    <span>Toque para visualizar melhor</span>
                  </div>

                  {/* Tag overlay */}
                  <div className="absolute top-2.5 right-2.5 bg-black/85 px-2 py-0.5 rounded text-[9px] font-extrabold text-[#f0134d] uppercase border border-[#f0134d]/30 pointer-events-none">
                    {item.tag}
                  </div>
                </div>

                {/* Niche details and WhatsApp button below card image */}
                <div className="flex items-center justify-between mt-1 px-1 gap-2">
                  <h3 className="text-base font-black text-white uppercase tracking-tight truncate">
                    {item.niche}
                  </h3>
                  <a
                    href={`https://wa.me/5511992876219?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Duno%20e%20me%20interessei%20pelo%20modelo%20de%20site%20para%20*${encodeURIComponent(item.niche)}*.%20Quero%20saber%20mais%20e%20come%C3%A7ar!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#e10270]/10 border border-[#e10270]/25 text-[10px] font-black text-[#e10270] uppercase tracking-wider active:bg-[#e10270]/20 cursor-pointer shrink-0"
                  >
                    <ArrowRight size={10} className="stroke-[3]" />
                    <span>Saiba mais</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>        <div className="mt-8 mx-5 p-5 border border-white/5 bg-neutral-950 rounded-xl text-center">
          <p className="text-xs text-neutral-400 font-bold mb-3.5">
            Deseja outro segmento? Customizamos para seu nicho local gratuitamente.
          </p>
          <a
            href="https://wa.me/5511992876219?text=Olá!%20Não%20achei%20minha%20profissão%20nos%20modelos%20e%20gostaria%20de%20consultar%20sobre%2520meu%252520segmento."
            target="_blank"
            rel="noopener noreferrer"
            className="gold-premium-btn !h-11 !text-[11px] !px-5"
          >
            <span className="whitespace-nowrap">Falar com designer</span>
            <ArrowRight size={11} className="stroke-[3] shrink-0" />
          </a>
        </div>
      </section>
      </RevealSection>

      {/* ----------------------------------------------------------------------
          DEPOIMENTOS MOBILE (Desktop-style premium carousel cards)
          ---------------------------------------------------------------------- */}
      <RevealSection id="depoimentos-mobile">
        <section id="depoimentos-mobile" className="py-16 bg-[#000000] border-b border-[#202020] relative">
        <h2 className="text-[22px] min-[375px]:text-[28px] font-black uppercase text-center tracking-tight leading-tight mb-3 text-white px-5">
          Quem já adquiriu <span className="gradient-text">recomenda de verdade</span>
        </h2>
        
        <p className="text-[14px] text-neutral-400 font-semibold text-center mb-10 max-w-[320px] mx-auto px-5">
          Veja a opinião real de profissionais que multiplicaram a conversão de seus clientes.
        </p>

        {/* Vertical stack of premium cards identical to desktop */}
        <div className="w-full px-5 mb-8">
          <div className="grid grid-cols-1 gap-6">
            {CHATS.map((item, idx) => (
              <div 
                key={idx}
                className="pink-card w-full relative flex flex-col justify-between transition-all duration-300"
              >
                {/* Decorative quote icon */}
                <div className="absolute top-4 right-4 text-[#f0134d]/5 text-5xl font-black leading-none select-none pointer-events-none">"</div>

                <div>
                  {/* 5 stars */}
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} size={13} className="fill-[#f0134d] text-[#f0134d]" />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-[#a0a0a0] leading-relaxed font-semibold text-xs italic mb-5">
                    "{item.text}"
                  </p>
                </div>

                {/* Profile footer */}
                <div className="flex items-center gap-3 bg-white/[0.02] border border-white/5 rounded-xl p-3 mt-auto">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-[#f0134d]/40 shrink-0 bg-neutral-900">
                    <img 
                      src={item.avatarUrl} 
                      alt={item.name} 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="truncate flex-1">
                    <h4 className="text-white text-xs font-black truncate leading-tight uppercase tracking-tight">{item.name}</h4>
                    <p className="text-[9px] text-[#f0134d] font-black uppercase tracking-wider truncate mt-0.5">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </RevealSection>

      {/* ----------------------------------------------------------------------
          COMPARATIVO MOBILE (Highlight Duno first)
          ---------------------------------------------------------------------- */}
      <RevealSection id="comparativo-mobile">
        <section id="comparativo-mobile" className="py-16 px-5 bg-[#000000] border-b border-[#202020]/20">
        <div className="text-center mb-10">
          <h2 className="text-[22px] min-[375px]:text-[28px] font-black uppercase tracking-tight leading-tight mb-3">
            O melhor <span className="gradient-text">custo-benefício</span>
          </h2>
          <p className="text-[14px] text-neutral-400 font-bold uppercase tracking-widest text-center">
            Compare antes de tomar decisão
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Card Duno (Primário e Destacado) */}
          <div className="border-2 border-[#f0134d] rounded-[20px] bg-[#000000] overflow-hidden shadow-[0_4px_30px_rgba(240,19,77,0.25)]">
            <div className="bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] p-3 text-center">
              <span className="text-white text-[11px] font-black uppercase tracking-widest block">★ INDICADO PARA SEU NEGÓCIO</span>
            </div>
            
            <div className="p-5 text-left">
              <span className="text-[10px] text-[#707070] font-black uppercase tracking-widest block mb-1">ASSINATURA DUNO®</span>
              <p className="text-[34px] font-black text-[#25D366] font-mono leading-none flex items-baseline gap-1 mb-6">
                R$ 197<span className="text-xs text-neutral-400 lowercase font-semibold font-sans">/mês</span>
              </p>

              <ul className="space-y-3.5 mb-6">
                {[
                  "Site no ar completo em 48h",
                  "Sem taxas ocultas de adesão",
                  "Sem fidelidade de contrato",
                  "Alterações ilimitadas inclusas",
                  "Criptografia SSL de segurança",
                  "Suporte total no WhatsApp"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs font-bold text-white">
                    <Check size={14} className="text-[#25D366] shrink-0 mt-0.5 stroke-[3]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5511992876219?text=Olá!%20Li%2520os%2520detalhes%2520da%252520assinatura%252520do%252520site%252520Duno%2520e%2520quero%2520começar."
                target="_blank"
                rel="noopener noreferrer"
                className="gold-premium-btn w-full text-xs"
              >
                <span>Quero meu site</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Opaque options (Agência / Freelancer) */}
          <div className="bg-[#000000] rounded-[20px] border border-white/5 opacity-80 p-5 text-left">
            <span className="text-neutral-500 font-extrabold text-[10px] uppercase block mb-1">OPÇÃO 02</span>
            <h3 className="text-[16px] font-black uppercase text-white mb-1 leading-none">Agência Tradicional</h3>
            <p className="text-sm font-mono text-neutral-500 font-bold mb-4">R$3.000 a R$8.000 setup</p>
            
            <ul className="space-y-2.5">
              {["Prazo lento de 45 a 90 dias", "Cobrança de adicionais caras", "Preso em contrato de fidelidade"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-neutral-400 font-semibold">
                  <X size={14} className="text-red-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#000000] rounded-[20px] border border-white/5 opacity-80 p-5 text-left">
            <span className="text-neutral-500 font-extrabold text-[10px] uppercase block mb-1">OPÇÃO 03</span>
            <h3 className="text-[16px] font-black uppercase text-white mb-1 leading-none">Freelancer</h3>
            <p className="text-sm font-mono text-neutral-500 font-bold mb-4">R$1.000 a R$2.500 setup</p>
            
            <ul className="space-y-2.5">
              {["Suporte técnico indisponível", "Riscos de atraso na codificação", "Manutenção por sua conta"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-neutral-400 font-semibold">
                  <X size={14} className="text-red-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Expand trigger button option */}
          <button
            onClick={() => setIsCompExpanded(!isCompExpanded)}
            className="w-full text-center py-2.5 text-xs font-black uppercase text-neutral-500 hover:text-white transition-colors"
          >
            {isCompExpanded ? "▲ Mostrar menos comparativo" : "▼ Ver comparativo detalhado"}
          </button>

          {isCompExpanded && (
            <div className="bg-[#000000] border border-white/5 rounded-2xl p-5 text-left text-xs leading-relaxed text-neutral-400 space-y-3 animate-float" style={{ animationDuration: "8s" }}>
              <p>
                <strong>Hospedagem inclusa:</strong> Em todos os pacotes Duno, utilizamos infraestruturas AWS de alta resposta com rede otimizada em CDN internacional para seu site carregar instantaneamente, sem travar nas conexões 4G brasileiras.
              </p>
              <p>
                <strong>Certificado SSL:</strong> Criptografia bancária inclusa que evita o aviso de "Conexão insegura" no navegador do paciente, maximizando taxas de agendamento em até 35%.
              </p>
            </div>
          )}
        </div>
      </section>
      </RevealSection>

      {/* ----------------------------------------------------------------------
          PREÇO + CTA MOBILE (Includes special intersection handle)
          ---------------------------------------------------------------------- */}
      <RevealSection id="preco-mobile">
        <section ref={priceRef} id="preco-mobile" className="py-16 px-5 bg-[#000000]">
        <div className="w-full p-5 rounded-2xl border-2 border-[#f0134d]/30 bg-[#000000] text-center shadow-xl">
          <span className="text-[#f0134d] text-[10px] font-black tracking-[0.2em] uppercase block mb-2">QUERO COMECAR HOJE</span>
          
          {/* Preço de alta conversão */}
          <div className="py-4 border-b border-white/5 mb-6">
            <span className="text-neutral-500 text-xs font-extrabold uppercase select-none tracking-widest block mb-2">ASSINATURA DE ELITE</span>
            <h2 className="text-[44px] min-[370px]:text-[60px] leading-none font-black tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-[#25D366] to-[#10b981] font-mono">
              <Counter value={197} prefix="R$ " /><span className="text-sm min-[370px]:text-lg lowercase font-sans text-neutral-400 font-semibold font-display">/mês</span>
            </h2>
          </div>

          {/* 3 pills wrapping */}
          <div className="flex flex-wrap gap-1.5 justify-center mb-6">
            {["Ativação em 48h", "Alterações Inclusas", "Sem Fidelidade"].map((pill, i) => (
              <span key={i} className="px-2.5 py-1 text-[9px] font-black bg-[#f0134d]/15 text-[#f0134d] border border-[#f0134d]/20 uppercase rounded-full">
                {pill}
              </span>
            ))}
          </div>

          {/* List of included in 1 column */}
          <ul className="space-y-3 text-left mb-8 px-1">
            {[
              "Hospedagem inclusa de alta resposta AWS",
              "Manutenção técnica completa sem preocupações",
              "Alterações ilimitadas inclusas no plano",
              "Certificado de segurança SSL criptografado incluso",
              "Zero contrato de fidelidade ou multas de cancelamento",
              "Suporte imediato de elite feito direto pelo WhatsApp"
            ].map((benefit, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs font-bold text-white">
                <Check className="text-[#25D366] shrink-0 mt-0.5 stroke-[3] w-4 h-4" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          {/* Scarcity Note Container */}
          <div className="bg-emerald-950/20 border border-emerald-500/20 p-4 rounded-xl text-left mb-6 flex items-start gap-2.5">
            <span className="text-base text-emerald-500">★</span>
            <p className="text-[11px] font-bold text-emerald-100 leading-normal">
              Garanta o posicionamento digital da sua marca com a Duno. Deixe a parte técnica conosco e foque somente nas vendas.
            </p>
          </div>

          {/* Bottom Stickyable Action Trigger */}
          <a
            href="https://wa.me/5511992876219?text=Olá!%20Li%2520os%2520detalhes%2520da%252520assinatura%252520do%252520site%252520Duno%2520e%2520quero%2520começar."
            target="_blank"
            rel="noopener noreferrer"
            className="gold-premium-btn w-full max-w-sm mx-auto"
            style={{ minHeight: "48px" }}
          >
            <span>Quero meu site</span>
            <ArrowRight size={16} className="shrink-0" />
          </a>
        </div>
      </section>
      </RevealSection>

      {/* ----------------------------------------------------------------------
          FAQ MOBILE
          ---------------------------------------------------------------------- */}
      <RevealSection id="faq-mobile">
        <section id="faq-mobile" className="py-16 px-5 bg-[#000000] border-t border-[#202020]">
        <h2 className="text-[22px] min-[375px]:text-[28px] font-black uppercase text-center tracking-tight leading-tight mb-10 text-white">
          Dúvidas <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">Frequentes</span>
        </h2>

        <div className="space-y-4 text-left">
          {[
            {
              q: "Posso cancelar a qualquer momento?",
              a: "Sim! Não temos contrato mínimo, fidelidade ou multa de saída. Se quiser parar por qualquer motivo, basta pedir o encerramento do plano pelo WhatsApp."
            },
            {
              q: "Em quanto tempo fica pronto?",
              a: "Nossa equipe realiza a customização e publica tudo em no máximo 48 horas úteis após o recebimento dos dados básicos da sua marca."
            },
            {
              q: "O site me ajuda a aparecer no Google?",
              a: "Sim, os sites são programados sob as diretrizes oficiais de indexação local do Google (SEO) para maximizar suas conversões locais."
            },
            {
              q: "E se eu precisar alterar algo depois?",
              a: "Não cobramos nada. Atualizar fotos, telefones ou procedimentos está incluso na sua mensalidade. Só mandar uma mensagem."
            },
            {
              q: "Preciso pagar domínio ou hospedagem?",
              a: "Não. Hospedagem SSD rápida em Cloud e certificado de segurança SSL seguro já estão totalmente inclusos no plano mensal."
            },
            {
              q: "E se eu já tiver um domínio próprio?",
              a: "Nós o conectamos para você sem custo adicional e cuidamos de todos os apontamentos de DNS técnicos."
            }
          ].map((item, i) => {
            const isOpen = activeFaq === i;
            return (
              <div 
                key={i}
                className="border border-[#202020] bg-[#000000] rounded-2xl overflow-hidden text-left"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : i)}
                  className="w-full p-4.5 flex items-center justify-between text-left h-[56px] focus:outline-none"
                  style={{ minHeight: "56px" }}
                >
                  <span className="font-extrabold text-[14px] text-white pr-4">{item.q}</span>
                  {isOpen ? (
                    <div className="w-7 h-7 rounded-full bg-[#f0134d] flex items-center justify-center text-white shrink-0">
                      <Minus size={12} strokeWidth={3} />
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-white/50 shrink-0">
                      <Plus size={12} strokeWidth={2.5} />
                    </div>
                  )}
                </button>
                {isOpen && (
                  <div className="px-4.5 pb-5 text-neutral-400 text-xs font-semibold leading-relaxed pt-2 border-t border-white/5">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8">
          <a
            href="https://wa.me/5511992876219?text=Olá!%20Li%20o%20FAQ%20da%2520Duno%2520mas%2520ainda%2520tenho%2520uma%2520duvida%2520especifica."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4.5 rounded-xl border border-[#25D366] bg-[#25D366]/10 text-white hover:bg-[#25D366]/20 text-xs font-black uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all"
          >
            <ArrowRight size={14} className="text-white" />
            <span className="text-white">Tirar outra dúvida</span>
          </a>
        </div>
      </section>
      </RevealSection>

      {/* ----------------------------------------------------------------------
          SOBRE / CONFIANÇA MOBILE
          ---------------------------------------------------------------------- */}
      <RevealSection>
        <section className="py-16 px-5 bg-[#000000] border-y border-[#202020]/20 text-center">
        <h2 className="text-[22px] min-[375px]:text-[28px] font-black uppercase tracking-tight leading-tight mb-4 text-white">
          Cuidado local em boas <span className="gradient-text">mãos</span>
        </h2>
        
        {/* 3 trust cards stacked vertically — same size as other pink-cards */}
        <div className="flex flex-col gap-4 w-full">
          {[
            { 
              t: (
                <span>
                  Nacional de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black pb-0.5">verdade</span>
                </span>
              ), 
              text: "Sediada no Brasil, emitindo nota fiscal e com suporte 100% PT-BR para o seu negócio local.", 
              iconName: "Landmark" 
            },
            { 
              t: (
                <span>
                  Foco em <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black pb-0.5">Conversão</span>
                </span>
              ), 
              text: "Design de alta performance desenhado para captar e converter cada potencial cliente que entra na sua página.", 
              iconName: "Award" 
            },
            { 
              t: (
                <span>
                  Sem <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black pb-0.5">Robôs</span>
                </span>
              ), 
              text: "Suporte 100% humanizado e ágil diretamente pelo WhatsApp. Pessoas reais prontas para lhe atender.", 
              iconName: "Heart" 
            }
          ].map((v, i) => {
            return (
              <div 
                key={i} 
                className="pink-card hover:scale-[1.02] !p-6 !pb-8 gap-4 text-left flex flex-row items-start"
              >
                <div className="shrink-0 mt-1">
                  <StyledIcon iconName={v.iconName} size={18} containerSize={42} flat={true} className="!mx-0 !my-0" />
                </div>
                <div>
                  <h4 className="text-[13px] font-black uppercase leading-tight mb-2 w-fit">{v.t}</h4>
                  <p className="text-[11px] text-[#a0a0a0] font-semibold leading-relaxed">{v.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      </RevealSection>

      {/* ----------------------------------------------------------------------
          CTA FINAL MOBILE
          ---------------------------------------------------------------------- */}
      <RevealSection>
        <section className="py-20 px-5 bg-[#000000] border-t border-[#202020] text-center relative overflow-hidden">
        {/* Background gloss overlay decoration */}
        <div className="absolute inset-0 bg-[#e91e8c]/5 pointer-events-none" />
        
        <div className="relative z-10">
          <h2 className="text-[24px] min-[375px]:text-[30px] font-black uppercase leading-[1.05] tracking-tight mb-6 text-white">
            Pare de perder <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">clientes locais hoje</span>
          </h2>

          <p className="text-[14px] text-neutral-400 font-bold mb-10 max-w-[300px] mx-auto leading-relaxed">
            Nós conectamos os clientes até o seu WhatsApp. Garanta a sua vaga local exclusiva antes do seu concorrente.
          </p>

          <a
            href="https://wa.me/5511992876219?text=Olá!%20Li%2520os%2520detalhes%2520da%252520assinatura%252520do%252520site%252520Duno%2520e%2520quero%2520começar."
            target="_blank"
            rel="noopener noreferrer"
            className="gold-premium-btn w-full max-w-[300px] mx-auto text-xs sm:text-sm"
          >
            <span>Quero meu site de elite</span>
            <ArrowRight size={16} className="shrink-0" />
          </a>

          {/* Social Proof metrics below */}
          <div className="mt-10 flex flex-col items-center gap-2">
            <div className="flex gap-1 justify-center">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={14} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-neutral-400 text-xs font-black uppercase tracking-widest leading-none">4.9/5 Estrelas · Satisfação Plena</p>
          </div>
        </div>
      </section>
      </RevealSection>

      {/* ----------------------------------------------------------------------
          RODAPÉ MOBILE
          ---------------------------------------------------------------------- */}
      <footer className="py-12 px-5 bg-[#000000] border-t-2 border-[#f0134d] text-center">
        <Logo size="sm" className="justify-center mb-6" />
        
        <p className="text-xs text-neutral-400 font-semibold leading-relaxed mb-6 max-w-[320px] mx-auto">
          Sediada no Brasil, a Duno é especializada em construir landing pages de alta resposta para médicos, consultórios e prestadores de serviços por assinatura mensal.
        </p>

        {/* Links Navigation Row */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center mb-10 text-xs font-black uppercase tracking-widest text-[#f0134d]">
          {["Como funciona", "Preço", "Apoio"].map((tab) => (
            <button key={tab} className="focus:outline-none" onClick={() => scrollToMobile(tab === "Como funciona" ? "como-funciona" : tab === "Preço" ? "preco-mobile" : "faq")}>
              {tab}
            </button>
          ))}
        </div>

        {/* Contacts details */}
        <div className="space-y-2 mb-10 text-xs font-bold text-neutral-500">
          <p className="text-white text-sm">contato@duno.com.br</p>
          <p className="text-white text-base font-black">+55 (11) 99287-6219</p>
          <p>São Paulo, BR</p>
        </div>

        {/* CNPJ and Legal disclaimer details */}
        <div className="pt-6 border-t border-white/5 space-y-2 text-[10px] text-neutral-600 font-medium">
          <p className="font-extrabold uppercase">© {new Date().getFullYear()} DUNO DIGITAL · LOCAL DE ELITE</p>
          <p className="leading-relaxed">
            DUNO TECNOLOGIA LTDA · CNPJ: 45.182.903/0001-89 · Av. Paulista, 1000 - Bela Vista - São Paulo / SP
          </p>
          <div className="flex gap-4 justify-center text-[9px] font-black uppercase tracking-wider text-neutral-500">
            <span>Termos de Uso</span>
            <span className="w-1 h-1 rounded-full bg-neutral-700 my-auto" />
            <span>Privacidade</span>
          </div>
        </div>
      </footer>



      {/* ── LIGHTBOX MOBILE ── */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex flex-col items-center justify-center bg-black/98 backdrop-blur-md py-6 px-4"
            onClick={() => setLightboxImg(null)}
          >
            {/* Close bar */}
            <div className="w-full max-w-[95%] flex items-center justify-between mb-4 shrink-0" onClick={e => e.stopPropagation()}>
              <span className="text-white font-black uppercase tracking-widest text-xs">
                {lightboxNiche}
              </span>
              <button
                onClick={() => setLightboxImg(null)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Scrollable image - maximized to fill mobile screens */}
            <div
              className="w-full max-w-[95%] h-[82vh] rounded-2xl overflow-y-auto border border-[#f0134d]/20 shadow-2xl bg-black/50 scroll-smooth"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={lightboxImg}
                alt={lightboxNiche}
                className="w-full h-auto block"
                draggable={false}
              />
            </div>

            <p className="text-white/40 text-[10px] mt-4 shrink-0 font-bold uppercase tracking-wider animate-pulse text-center select-none pointer-events-none">
              ↕️ Deslize para cima ou para baixo para ver o modelo completo
            </p>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
