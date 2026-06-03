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
  DollarSign
} from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./Icons";
import { StyledIcon } from "./StyledIcon";

// ----------------------------------------------------------------------
// CUSTOM STYLES & SUB-INTERACTIVE WRAPPERS FOR MOBILE
// ----------------------------------------------------------------------

interface NicheItem {
  niche: string;
  subtitle: string;
  desc: string;
  img: string;
  stats: { speed: string; seo: string };
  tag: string;
  highlight: string;
}

const MOBILE_NICHES: NicheItem[] = [
  { 
    niche: "Odontologia", 
    subtitle: "Clínicas & Consultórios — site premium",
    desc: "Personalizamos com suas fotos, logomarca e procedimentos clínicos em até 48 horas.", 
    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600",
    stats: { speed: "99", seo: "100" },
    tag: "Dentistas",
    highlight: "🦷 Agendamento e WhatsApp integrado"
  },
  { 
    niche: "Veterinário", 
    subtitle: "Clínicas Pet & Hospitais — alta conversão",
    desc: "Layout dócil e corporativo para passar total segurança para sua clínica em até 48 horas.", 
    img: "https://images.unsplash.com/photo-1581888227599-779811939961?q=80&w=600",
    stats: { speed: "98", seo: "100" },
    tag: "Veterinários",
    highlight: "🐾 Agendamento e WhatsApp"
  },
  { 
    niche: "Estética", 
    subtitle: "Clínicas de Estética & Spas",
    desc: "Design clean focado em captar contatos interessados em procedimentos estéticos.", 
    img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=600",
    stats: { speed: "100", seo: "100" },
    tag: "Estética",
    highlight: "✂️ Portfólio de antes e depois"
  },
  { 
    niche: "Academia", 
    subtitle: "Studios, CrossFit & Academias",
    desc: "Design dinâmico e enérgico que customizamos para o seu método de treinamento físico.", 
    img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600",
    stats: { speed: "99", seo: "98" },
    tag: "Fitness",
    highlight: "💪 Chamada de matrícula rápida"
  },
  { 
    niche: "Advocacia", 
    subtitle: "Escritórios Jurídicos",
    desc: "Um design extremamente refinado para transmitir máxima credibilidade em sua cidade.", 
    img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=600",
    stats: { speed: "100", seo: "100" },
    tag: "Direito",
    highlight: "⚖️ Destaque de especialidades"
  },
  { 
    niche: "Restaurante", 
    subtitle: "Gourmet & Bistrô — página otimizada",
    desc: "Layout sofisticado que destaca pratos, reservas automáticas e disk delivery.", 
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600",
    stats: { speed: "97", seo: "100" },
    tag: "Gastronomia",
    highlight: "🍽️ Cardápio e rota GPS guiados"
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
  const [selectedModel, setSelectedModel] = useState<NicheItem | null>(null);
  const [isCompExpanded, setIsCompExpanded] = useState(false);
  
  const priceRef = useRef<HTMLDivElement>(null);

  // Smooth scroll helper
  const scrollToMobile = (id: string) => {
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
    <div className="w-full max-w-[430px] mx-auto bg-[#0a0a0a] text-white overflow-x-hidden font-sans border-x border-neutral-900 relative">
      
      {/* ----------------------------------------------------------------------
          NAVBAR MOBILE (includes emergency countdown bar above)
          ---------------------------------------------------------------------- */}
      <div className="fixed top-0 left-0 right-0 z-[999] max-w-[430px] mx-auto">
        {/* Barra de urgência superior */}
        <div className="h-[36px] bg-gradient-to-r from-[#e91e8c] to-[#7c3aed] flex items-center overflow-hidden relative select-none">
          <style>{`
            @keyframes mobileMarquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .mobile-marquee-wrap {
              display: flex;
              width: max-content;
              animation: mobileMarquee 15s linear infinite;
            }
          `}</style>
          <div className="mobile-marquee-wrap whitespace-nowrap">
            <span className="text-[13px] font-bold text-white px-2">
              ⚡ Site no ar em 48h · Apenas 1 vaga por nicho por cidade •&nbsp;
            </span>
            <span className="text-[13px] font-bold text-white px-2">
              ⚡ Site no ar em 48h · Apenas 1 vaga por nicho por cidade •&nbsp;
            </span>
            <span className="text-[13px] font-bold text-white px-2">
              ⚡ Site no ar em 48h · Apenas 1 vaga por nicho por cidade •&nbsp;
            </span>
          </div>
        </div>

        {/* Home header */}
        <div className="h-[64px] bg-[#0a0a0af2] backdrop-blur-md border-b border-[#e91e8c]/20 px-4 flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="focus:outline-none shrink-0"
          >
            <Logo size="sm" />
          </button>

          <a
            href="https://wa.me/5511999999999?text=Olá!%20Falei%20no%20site%2520da%2520Duno%2520e%2520quero%2520garantir%2520um%2520site%2520profissional%2520em%252048h."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#e91e8c] to-[#7c3aed] text-white font-black uppercase text-[12px] tracking-wide h-[40px] px-4 rounded-full flex items-center gap-2 shadow-md shadow-[#e91e8c]/20 active:scale-95 transition-all outline-none"
            style={{ minHeight: "40px" }}
          >
            <ArrowRight size={14} className="text-white" />
            <span className="text-white">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* ----------------------------------------------------------------------
          HERO MOBILE
          ---------------------------------------------------------------------- */}
      <section className="relative px-5 pt-[130px] pb-12 flex flex-col items-center justify-center overflow-hidden">
        {/* Decorative backdrop elements */}
        <div className="absolute top-1/4 right-0 w-[200px] h-[200px] bg-[#e91e8c]/10 blur-[60px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-[200px] h-[200px] bg-[#7c3aed]/10 blur-[60px] rounded-full pointer-events-none" />
        
        {/* Badge topo */}
        <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#e91e8c]/10 border border-[#e91e8c]/30 text-[#e91e8c] text-[12px] font-black uppercase tracking-wider mb-8">
          <Zap size={11} className="fill-[#e91e8c] text-[#e91e8c] animate-pulse" />
          <span>⚡ Site no ar em até 48 horas</span>
        </div>

        {/* Headline */}
        <h1 className="font-h1-mobile mb-6 text-white text-center px-1">
          Seu concorrente já aparece no Google. <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e91e8c] to-[#7c3aed] filter drop-shadow-[0_2px_10px_rgba(233,30,140,0.15)] block mt-2">Você ainda não.</span>
        </h1>

        {/* Subheadline (16px) */}
        <p className="text-[16px] text-[#a0a0a0] text-center mb-8 font-semibold leading-relaxed max-w-[340px]">
          Site profissional personalizado com sua marca, pronto em 48h, por R$197/mês. Sem contrato, sem multa.
        </p>

        {/* CTAs Blocks */}
        <div className="w-full flex flex-col gap-3.5 px-1 pb-10">
          <a
            href="https://wa.me/5511999999999?text=Olá!%20Vi%20o%20site%2520de%2520vocês%2520e%2520quero%2520garantir%2520meu%2520site%2520no%2520ar%2520em%252048h."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-[52px] rounded-full text-[14px] font-black uppercase tracking-widest text-center flex items-center justify-center bg-gradient-to-r from-[#e91e8c] to-[#7c3aed] text-white shadow-[0_4px_20px_rgba(233,30,140,0.4)] active:scale-95 transition-transform gap-2 whitespace-nowrap"
            style={{ minHeight: "48px" }}
          >
            <span className="text-white whitespace-nowrap">Quero meu site</span>
            <ArrowRight size={16} className="text-white bg-transparent shrink-0" />
          </a>
          
          <button
            onClick={() => scrollToMobile("modelos-carrossel")}
            className="w-full h-[52px] rounded-full text-[14px] font-black text-white hover:text-[#e91e8c] uppercase tracking-widest border border-white/50 bg-transparent active:bg-white/5 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            style={{ minHeight: "48px" }}
          >
            <span className="text-white whitespace-nowrap">Ver modelos</span>
            <ArrowRight size={16} className="text-white bg-transparent shrink-0" />
          </button>
        </div>

        {/* Barra de prova social (3 itens em linha) */}
        <div className="w-full grid grid-cols-3 py-4 border-y border-[#202020] bg-neutral-950/40 rounded-xl px-2">
          <div className="text-center">
            <span className="block text-[20px] font-black text-[#e91e8c]">+100</span>
            <span className="text-[11px] font-medium text-[#707070] uppercase">Sites</span>
          </div>
          <div className="border-l border-[#202020] text-center">
            <span className="block text-[20px] font-black text-[#e91e8c]">+15</span>
            <span className="text-[11px] font-medium text-[#707070] uppercase">Nichos</span>
          </div>
          <div className="border-l border-[#202020] text-center">
            <span className="block text-[20px] font-black text-[#e91e8c]">48h</span>
            <span className="text-[11px] font-medium text-[#707070] uppercase">Pronto</span>
          </div>
        </div>

        {/* Lightweight iPhone Showcase Frame mockup */}
        <div className="w-full max-w-[280px] mt-10 relative">
          <div className="absolute inset-x-0 -bottom-2 top-2 bg-gradient-to-r from-[#e91e8c] to-[#7c3aed] rounded-[24px] opacity-15 blur-lg pointer-events-none" />
          <div className="relative border-4 border-[#252525] rounded-[32px] bg-[#0c0c0c] overflow-hidden shadow-2xl">
            {/* Notch */}
            <div className="h-4 bg-[#111] flex items-center justify-center">
              <div className="w-16 h-2 rounded-full bg-black" />
            </div>
            
            {/* Internal site simulator */}
            <div className="p-3.5 aspect-[9/16] flex flex-col justify-between text-left">
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-[8px] font-black tracking-widest text-[#e91e8c]">DUNO CLINIC</span>
                <span className="text-[6px] bg-[#25D366]/15 text-[#25D366] px-1.5 py-0.5 rounded font-black">CHAT ATIVO</span>
              </div>
              
              <div className="my-auto py-4">
                <span className="text-[7px] text-emerald-400 font-extrabold uppercase tracking-widest block mb-1">🏥 Estética de Elite</span>
                <h5 className="text-[16px] font-black text-white leading-tight uppercase mb-1.5">
                  Design que <br />gera <span className="text-[#e91e8c]">orçamentos</span>
                </h5>
                <p className="text-[8px] text-[#a0a0a0] leading-relaxed font-semibold mb-3">
                  Páginas instantâneas otimizadas 100% para celular com agendamento direto.
                </p>
                <div className="inline-block text-center w-full py-2 bg-[#25D366] text-black text-[8px] font-black rounded-lg uppercase tracking-wider">
                  Agendar Consulta
                </div>
              </div>

              <div className="text-[6px] text-neutral-600 font-bold uppercase text-center border-t border-white/5 pt-2">
                Celulares Android & iPhone
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          BARRA DE NICHOS MOBILE
          ---------------------------------------------------------------------- */}
      <section className="bg-[#111] border-y border-[#202020] py-4 overflow-hidden select-none relative">
        <style>{`
          @keyframes nicheMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.3333%); }
          }
          .mobile-marquee-ticker {
            display: flex;
            width: max-content;
            animation: nicheMarquee 20s linear infinite;
          }
        `}</style>
        <div className="mobile-marquee-ticker">
          {[
            { n: "Odontologia", e: "🦷" },
            { n: "Veterinário", e: "🐾" },
            { n: "Estética", e: "✂️" },
            { n: "Academia", e: "💪" },
            { n: "Advocacia", e: "⚖️" },
            { n: "Nutrição", e: "🥗" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-1.5 mx-4 shrink-0">
              <span className="text-sm">{item.e}</span>
              <span className="text-[13px] font-bold text-white uppercase tracking-wider">{item.n}</span>
              <span className="text-neutral-700 ml-2 font-black">•</span>
            </div>
          ))}
          {[
            { n: "Odontologia", e: "🦷" },
            { n: "Veterinário", e: "🐾" },
            { n: "Estética", e: "✂️" },
            { n: "Academia", e: "💪" },
            { n: "Advocacia", e: "⚖️" },
            { n: "Nutrição", e: "🥗" }
          ].map((item, i) => (
            <div key={i + 10} className="flex items-center gap-1.5 mx-4 shrink-0">
              <span className="text-sm">{item.e}</span>
              <span className="text-[13px] font-bold text-white uppercase tracking-wider">{item.n}</span>
              <span className="text-neutral-700 ml-2 font-black">•</span>
            </div>
          ))}
          {[
            { n: "Odontologia", e: "🦷" },
            { n: "Veterinário", e: "🐾" },
            { n: "Estética", e: "✂️" },
            { n: "Academia", e: "💪" },
            { n: "Advocacia", e: "⚖️" },
            { n: "Nutrição", e: "🥗" }
          ].map((item, i) => (
            <div key={i + 20} className="flex items-center gap-1.5 mx-4 shrink-0">
              <span className="text-sm">{item.e}</span>
              <span className="text-[13px] font-bold text-white uppercase tracking-wider">{item.n}</span>
              <span className="text-neutral-700 ml-2 font-black">•</span>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          DOR MOBILE
          ---------------------------------------------------------------------- */}
      <section className="py-20 px-5 bg-[#0a0a0a] relative flex flex-col items-center">
        <h2 className="text-[22px] min-[375px]:text-[28px] font-black uppercase text-center tracking-tight leading-tight mb-4 text-white">
          Você está <span className="text-[#e91e8c] italic font-black">perdendo vendas</span>
        </h2>
        
        <p className="text-[15px] text-[#a0a0a0] font-semibold text-center max-w-[360px] mx-auto mb-12 leading-relaxed">
          A falta de presença digital está custando clientes reais para o seu negócio. Todo dia.
        </p>

        <div className="flex flex-col gap-4.5 w-full">
          {[
            {
              title: "Sem site, sem confiança",
              desc: "Quando um cliente pesquisa sua clínica e não acha nada, ele vai direto para o concorrente que aparece no Google. Simples assim.",
              icon: XCircle,
              color: "#ef4444"
            },
            {
              title: "Refém das indicações",
              desc: "Depender só de indicação é arriscado. Um mês bom, um mês ruim. Com um site, você atrai clientes novos todos os dias, no piloto automático.",
              icon: Users,
              color: "#f97316"
            },
            {
              title: "Concorrente na sua frente",
              desc: "Enquanto você não tem site, seu concorrente aparece no topo do Google quando alguém busca pelo seu serviço na sua cidade. Esse cliente era seu.",
              icon: TrendingUp,
              color: "#e91e8c"
            },
            {
              title: "Agência cobrou caro e não entregou",
              desc: "R$3.000, R$5.000 ou mais, meses de espera e um site que ninguém sabe usar. Você merece uma opção melhor do que isso.",
              icon: DollarSign,
              color: "#7c3aed"
            }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 rounded-[16px] border border-[#2a2a2a] bg-[#1a1a1a] hover:border-[#e91e8c]/60 hover:scale-[1.01] transition-all duration-300 flex flex-col gap-4 text-left"
              >
                <div 
                  className="w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}30` }}
                >
                  <Icon size={20} style={{ color: item.color }} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-[17px] font-black text-white uppercase tracking-tight mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#a0a0a0] text-[14px] leading-relaxed font-semibold">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          SOLUÇÃO MOBILE
          ---------------------------------------------------------------------- */}
      <section className="py-20 px-5 bg-[#111111] border-t border-b border-[#202020] relative overflow-hidden flex flex-col items-center">
        {/* Background visual glosses */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-72 h-72 bg-[#e91e8c]/5 blur-[90px] rounded-full pointer-events-none" />
        <div className="absolute left-[-50px] top-[10%] w-[300px] h-[300px] bg-[#7c3aed]/5 blur-[90px] rounded-full pointer-events-none" />

        <div className="text-center mb-10 relative z-10 w-full">
          <div className="text-[#e91e8c] text-[11px] font-black tracking-[0.2em] uppercase mb-4 animate-pulse">
            A SOLUÇÃO
          </div>
          
          <h2 className="text-[24px] min-[375px]:text-[30px] font-black mb-6 uppercase tracking-tight text-white leading-tight">
            Um site profissional <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e91e8c] to-[#7c3aed] block mt-1">feito para seu negócio vender</span>
          </h2>
          
          <p className="text-[#a0a0a0] text-[15px] max-w-[340px] mx-auto leading-relaxed font-semibold">
            Nós criamos, personalizamos e colocamos seu modelo de elite no ar em até 48 horas. Veja toda a estrutura inclusa, construída para conversão rápida:
          </p>
        </div>

        {/* Beautiful Stacked Cards of features in Mobile - No Images! */}
        <div className="w-full space-y-4 relative z-10 max-w-sm mb-10">
          {[
            { 
              title: "WhatsApp de Conversão", 
              desc: "Botão flutuante perfeitamente posicionado e pré-configurado com mensagem personalizada para direcionar novos contatos direto para seu WhatsApp.", 
              icon: MessageSquareCode 
            },
            { 
              title: "Agendamento Prático", 
              desc: "Formulário estratégico para que novos pacientes ou clientes agendem consultas e serviços de forma totalmente rápida.", 
              icon: CalendarDays 
            },
            { 
              title: "Otimizado para Google", 
              desc: "Programado sob as estritas diretrizes oficiais de indexação local (SEO), ampliando sua visibilidade na sua cidade.", 
              icon: Search 
            },
            { 
              title: "Google Maps Integrado", 
              desc: "Integração do mapa interativo oficial para que seus clientes tracem rotas físicas exatas até seu consultório com apenas um toque.", 
              icon: MapPin 
            },
            { 
              title: "Design Mobile-First", 
              desc: "Interface ultra-veloz, desenvolvida sob medida para carregar velozmente até nas conexões 3G/4G mais instáveis.", 
              icon: Smartphone 
            },
            { 
              title: "100% Personalizado", 
              desc: "Nossa equipe adapta todo o layout com sua identidade visual: logotipo, paleta de cores e fotografias reais do seu consultório.", 
              icon: Sparkles 
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="relative p-[1px] rounded-[16px] bg-[#2a2a2a] active:bg-gradient-to-tr active:from-[#e91e8c]/30 active:to-[#7c3aed]/30 transition-all text-left"
              >
                <div className="bg-[#161616] p-6 rounded-[15px] flex flex-col gap-4 relative overflow-hidden">
                  <div className="flex items-center gap-4">
                    <StyledIcon icon={Icon} size={20} containerSize={44} />
                    <h3 className="text-base font-bold text-white tracking-tight">{item.title}</h3>
                  </div>
                  <p className="text-[#a0a0a0] text-xs leading-relaxed font-semibold">{item.desc}</p>
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-black uppercase text-[#e91e8c]">
                    <span>Ativo na Assinatura</span>
                    <span className="text-emerald-500">✓ Incluso</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Info Highlights Badge list */}
        <div className="w-full max-w-sm bg-[#161616] p-5 border border-[#2a2a2a] rounded-[16px] text-center space-y-3 relative z-10 shadow-lg">
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-wider text-white">Acessos e Tráfego Ilimitado</span>
          </div>
          <div className="h-[1px] bg-[#2a2a2a] w-1/2 mx-auto" />
          <div className="flex items-center justify-center gap-2">
            <Check size={14} className="text-[#e91e8c] stroke-[3]" />
            <span className="text-[11px] font-black uppercase tracking-wider text-white">Servidor Dedicado AWS</span>
          </div>
          <div className="h-[1px] bg-[#2a2a2a] w-1/2 mx-auto" />
          <div className="flex items-center justify-center gap-2">
            <Clock size={14} className="text-[#7c3aed]" />
            <span className="text-[11px] font-black uppercase tracking-wider text-white">No ar em até 48 horas</span>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          COMO FUNCIONA MOBILE (Timeline Vertical)
          ---------------------------------------------------------------------- */}
      <section className="py-16 px-5 bg-[#0a0a0a]">
        <h2 className="text-[22px] min-[375px]:text-[28px] font-black uppercase text-center tracking-tight leading-tight mb-3 text-white">
          Como funciona <span className="text-[#e91e8c]">em 48 horas</span>
        </h2>
        
        <p className="text-[15px] text-[#a0a0a0] font-semibold text-center mb-12 max-w-[300px] mx-auto leading-relaxed">
          Etapas rápidas, sem perda de tempo ou ligações cansativas.
        </p>

        {/* Vertical Timeline container */}
        <div className="relative pl-4 space-y-8">
          {/* Timeline continuous connector line */}
          <div className="absolute top-4 bottom-4 left-[30px] w-[2px] bg-gradient-to-b from-[#e91e8c] via-[#7c3aed] to-emerald-500 z-0" />

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
              <div className="w-[32px] h-[32px] rounded-full bg-gradient-to-tr from-[#e91e8c] to-[#7c3aed] flex items-center justify-center text-white text-[12px] font-black shrink-0 relative shadow-lg">
                {item.step}
              </div>
              
              <div className="flex-1 bg-[#111]/90 border border-white/5 rounded-2xl p-4 text-left">
                <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                  <h3 className="text-[15px] font-black text-white uppercase tracking-tight">{item.title}</h3>
                  <span className="px-2 py-0.5 rounded bg-[#e91e8c]/15 text-[#e91e8c] text-[9px] font-black uppercase border border-[#e91e8c]/30">
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
        <div className="mt-12 bg-gradient-to-r from-[#e91e8c] to-[#7c3aed] p-4 text-center rounded-xl">
          <p className="text-white text-[12px] font-black uppercase tracking-wider">
            Sem contrato garantido · Sem fidelidade rescindível
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          VANTAGENS MOBILE
          ---------------------------------------------------------------------- */}
      <section className="py-16 px-5 bg-[#111] border-y border-[#202020]">
        <div className="text-center mb-10">
          <h2 className="text-[22px] min-[375px]:text-[28px] font-black uppercase tracking-tight leading-tight mb-4 text-white">
            Por que mais de 100 negócios <span className="text-[#e91e8c]">escolhem a gente</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4.5">
          {[
            { 
              title: "Totalmente Personalizado", 
              desc: "Sua logo, suas cores, suas fotos. Nenhum cliente vai saber que é um modelo — parece feito do zero para você.", 
              icon: Palette,
              badgeColor: "bg-[#e91e8c]/15 text-[#e91e8c] border-[#e91e8c]/30"
            },
            { 
              title: "Pronto em 48 Horas", 
              desc: "Enquanto uma agência levaria 60 dias, você já está recebendo clientes. Dois dias. Não dois meses.", 
              icon: Zap,
              badgeColor: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30"
            },
            { 
              title: "Sem Fidelidade", 
              desc: "Sem multa, sem contrato mínimo. Se em algum mês não quiser continuar, é só avisar. Sem enrolação.", 
              icon: Unlock,
              badgeColor: "bg-[#25D366]/15 text-[#25D366] border-[#25D366]/30"
            },
            { 
              title: "Suporte por WhatsApp", 
              desc: "Quer trocar uma foto? Atualizar um texto? Manda mensagem. Respondemos em até 2 horas em dias úteis.", 
              icon: MessageCircle,
              badgeColor: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30"
            },
            { 
              title: "Sem Letras Miúdas", 
              desc: "R$197/mês é R$197/mês. Sem cobranças escondidas, sem renovação automática surpresa, sem taxa de cancelamento.", 
              icon: Tag,
              badgeColor: "bg-purple-500/15 text-purple-400 border-purple-500/30"
            },
            { 
              title: "Feito para Converter", 
              desc: "Cada botão, cada seção e cada texto foi pensado para transformar visitante em contato. Não é só bonito — funciona.", 
              icon: Target,
              badgeColor: "bg-[#e91e8c]/15 text-[#e91e8c] border-[#e91e8c]/30"
            }
          ].map((item, i) => {
            const AdvantageIcon = item.icon;
            return (
              <div 
                key={i} 
                className="p-6 rounded-[16px] border border-[#2a2a2a] bg-[#1a1a1a]/80 relative overflow-hidden group hover:border-[#e91e8c]/40 transition-all duration-300 flex flex-col gap-4 text-left"
              >
                {/* Icon Wrapper badge */}
                <StyledIcon icon={AdvantageIcon} size={20} containerSize={44} />
                <div>
                  <h3 className="text-[17px] font-black text-white uppercase tracking-tight mb-2">
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

      {/* ----------------------------------------------------------------------
          ANTES E DEPOIS MOBILE (Vertical Stack with divider)
          ---------------------------------------------------------------------- */}
      <section className="py-16 px-5 bg-[#0a0a0a]">
        <h2 className="text-[22px] min-[375px]:text-[28px] font-black uppercase text-center tracking-tight leading-[1.05] mb-10 text-white">
          A diferença <span className="text-[#e91e8c]">de um site útil</span>
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
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#e91e8c] to-[#7c3aed] flex items-center justify-center shadow-lg transform rotate-90">
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

      {/* ----------------------------------------------------------------------
          MODELOS MOBILE (Horizontal Snap Carrossel with Right Gradient Mask)
          ---------------------------------------------------------------------- */}
      <section id="modelos-carrossel" className="py-16 bg-[#111] border-y border-[#202020] relative">
        <h2 className="text-[22px] min-[375px]:text-[28px] font-black uppercase text-center tracking-tight leading-tight mb-3 text-white px-5">
          Escolha seu modelo <span className="text-[#e91e8c]">do seu nicho</span>
        </h2>
        
        <p className="text-[14px] text-neutral-400 font-semibold text-center mb-8 max-w-[320px] mx-auto px-5">
          Deslize com o polegar para explorar. Toque para abrir detalhes e demonstração direta.
        </p>

        {/* Marquee viewport with gradient mask on right */}
        <div className="relative w-full overflow-hidden">
          {/* Scroll fade highlight overlay only on the right to indicate more */}
          <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-[#111] to-transparent z-10 pointer-events-none" />

          {/* Scroll container */}
          <div 
            className="flex gap-4 overflow-x-auto pb-6 px-5 snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}
            onScroll={(e) => {
              const scrollLeft = (e.target as HTMLDivElement).scrollLeft;
              const cardWidth = 280 + 16;
              const approxIdx = Math.round(scrollLeft / cardWidth);
              if (approxIdx >= 0 && approxIdx < MOBILE_NICHES.length) {
                setPortfolioIndex(approxIdx);
              }
            }}
          >
            {MOBILE_NICHES.map((item, i) => (
              <div 
                key={i}
                onClick={() => setSelectedModel(item)}
                className="w-[280px] shrink-0 snap-start bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Image */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={item.img} 
                    alt={item.niche} 
                    className="w-full h-full object-cover" 
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-black/80 px-2 py-0.5 rounded text-[9px] font-extrabold text-[#e91e8c] uppercase border border-[#e91e8c]/30">
                    {item.tag}
                  </div>
                </div>

                {/* Info action pane */}
                <div className="p-4 text-left flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-black text-white leading-none uppercase mb-2">{item.niche}</h3>
                    <div className="text-[11px] font-semibold text-[#e91e8c] line-clamp-1 mb-2.5">{item.highlight}</div>
                    <p className="text-xs text-[#a0a0a0] leading-relaxed line-clamp-3 mb-4 font-semibold">
                      {item.desc}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => setSelectedModel(item)}
                    className="w-full py-2.5 rounded-lg border border-[#e91e8c] text-[#e91e8c] text-[11px] font-black uppercase tracking-wider"
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Pagination Indicators */}
        <div className="flex justify-center gap-1.5 mt-2">
          {MOBILE_NICHES.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${portfolioIndex === i ? "w-4 bg-[#e91e8c]" : "w-1.5 bg-neutral-700"}`} 
            />
          ))}
        </div>

        {/* Segment customized request box */}
        <div className="mt-8 mx-5 p-5 border border-white/5 bg-neutral-950 rounded-xl text-center">
          <p className="text-xs text-neutral-400 font-bold mb-3.5">
            Deseja outro segmento? Customizamos para seu nicho local gratuitamente.
          </p>
          <a
            href="https://wa.me/5511999999999?text=Olá!%20Não%20achei%20minha%20profissão%20nos%20modelos%20e%20gostaria%20de%20consultar%20sobre%20meu%2520segmento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-[#e91e8c] to-[#7c3aed] text-white text-[11px] min-[360px]:text-xs font-black uppercase rounded-lg tracking-wider active:scale-95 transition-transform whitespace-nowrap shadow-md shadow-[#e91e8c]/15"
          >
            <span className="text-white whitespace-nowrap">Falar com designer</span>
            <ArrowRight size={11} className="stroke-[3] text-white shrink-0" />
          </a>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          DEPOIMENTOS MOBILE (WhatsApp-styled carousel cards)
          ---------------------------------------------------------------------- */}
      <section className="py-16 bg-[#0a0a0a] border-b border-[#202020] relative">
        <h2 className="text-[22px] min-[375px]:text-[28px] font-black uppercase text-center tracking-tight leading-tight mb-3 text-white px-5">
          Sucesso real na <span className="text-[#e91e8c]">tela do WhatsApp</span>
        </h2>
        
        <p className="text-[14px] text-neutral-400 font-semibold text-center mb-10 max-w-[320px] mx-auto px-5">
          Confira o retorno real que nossos clientes nos enviaram.
        </p>

        {/* Carrossel 90% wide with snap scroll */}
        <div className="w-full overflow-hidden relative">
          <div 
            className="flex gap-3 overflow-x-auto pb-4 px-5 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onScroll={(e) => {
              const scrollLeft = (e.target as HTMLDivElement).scrollLeft;
              const approxIdx = Math.round(scrollLeft / (window.innerWidth * 0.85));
              if (approxIdx >= 0 && approxIdx < CHATS.length) {
                setTestimonialIndex(approxIdx);
              }
            }}
          >
            {CHATS.map((item, idx) => (
              <div 
                key={idx}
                className="w-[85vw] max-w-[320px] shrink-0 snap-start bg-[#111b21] rounded-2xl border border-[#2a2a2a] shadow-xl flex flex-col justify-between overflow-hidden"
              >
                {/* Header WA styled */}
                <div className="bg-[#202c33] p-3.5 flex items-center gap-2.5 border-b border-white/5 select-none text-left">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 shrink-0 bg-neutral-800">
                    <img 
                      src={item.avatarUrl} 
                      alt={item.name} 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1 truncate">
                    <h4 className="text-white text-xs font-black leading-none uppercase truncate">{item.name}</h4>
                    <span className="text-[9px] text-neutral-400 font-bold leading-none">{item.role}</span>
                  </div>
                  <span className="text-xs text-neutral-400">⋮</span>
                </div>

                {/* Bubble Body Area */}
                <div className="p-4 bg-[#0b141a] text-left min-h-[140px] flex flex-col justify-between">
                  <p className="text-white text-[14px] leading-relaxed font-semibold italic text-neutral-200">
                    "{item.text}"
                  </p>
                  
                  <div className="flex justify-end gap-1 items-center text-[10px] text-white/40 mt-3">
                    <span>Visto</span>
                    <span className="text-emerald-500 font-black tracking-tighter">✓✓</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-1">
          {CHATS.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${testimonialIndex === i ? "w-4 bg-[#e91e8c]" : "w-1.5 bg-neutral-700"}`} 
            />
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          COMPARATIVO MOBILE (Highlight Duno first)
          ---------------------------------------------------------------------- */}
      <section className="py-16 px-5 bg-[#111] border-b border-[#202020]">
        <div className="text-center mb-10">
          <h2 className="text-[22px] min-[375px]:text-[28px] font-black uppercase tracking-tight leading-tight mb-3">
            O comparativo <span className="text-[#e91e8c]">de valor único</span>
          </h2>
          <p className="text-[14px] text-neutral-400 font-bold uppercase tracking-widest text-center">
            Compare antes de tomar decisão
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Card Duno (Primário e Destacado) */}
          <div className="border-2 border-[#e91e8c] rounded-[20px] bg-[#0a0a0a] overflow-hidden shadow-[0_4px_30px_rgba(233,30,140,0.25)]">
            <div className="bg-gradient-to-r from-[#e91e8c] to-[#7c3aed] p-3 text-center">
              <span className="text-white text-[11px] font-black uppercase tracking-widest block">★ PLANO EXCLUSIVO DUNO</span>
            </div>
            
            <div className="p-5 text-left">
              <span className="text-[10px] text-[#707070] font-black uppercase tracking-widest block mb-1">CUSTO DO TRABALHO</span>
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
                href="https://wa.me/5511999999999?text=Olá!%20Fiquei%20interessado%20no%20plano%20de%20R$197/mês%20da%20Duno."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl uppercase text-[12px] font-black tracking-widest text-center flex items-center justify-center gap-2 bg-gradient-to-r from-[#e91e8c] to-[#7c3aed] text-white shadow-lg cursor-pointer"
              >
                <span className="text-white">Ativar Plano</span>
                <ArrowRight size={14} className="text-white" />
              </a>
            </div>
          </div>

          {/* Opaque options (Agência / Freelancer) */}
          <div className="bg-[#151515] rounded-[20px] border border-white/5 opacity-80 p-5 text-left">
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

          <div className="bg-[#151515] rounded-[20px] border border-white/5 opacity-80 p-5 text-left">
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
            <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-5 text-left text-xs leading-relaxed text-neutral-400 space-y-3 animate-float" style={{ animationDuration: "8s" }}>
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

      {/* ----------------------------------------------------------------------
          PREÇO + CTA MOBILE (Includes special intersection handle)
          ---------------------------------------------------------------------- */}
      <section ref={priceRef} id="preco-mobile" className="py-16 px-5 bg-[#0a0a0a]">
        <div className="w-full p-5 rounded-2xl border-2 border-[#e91e8c]/30 bg-[#111] text-center shadow-xl">
          <span className="text-[#e91e8c] text-[10px] font-black tracking-[0.2em] uppercase block mb-2">QUERO COMECAR HOJE</span>
          
          {/* Preço de alta conversão */}
          <div className="py-4 border-b border-white/5 mb-6">
            <span className="text-neutral-500 text-xs font-extrabold uppercase select-none tracking-widest block mb-2">VALOR DA ASSINATURA</span>
            <h2 className="text-[44px] min-[370px]:text-[60px] leading-none font-black tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-[#25D366] to-[#10b981] font-mono">
              R$ 197<span className="text-sm min-[370px]:text-lg lowercase font-sans text-neutral-400 font-semibold font-display">/mês</span>
            </h2>
          </div>

          {/* 3 pills wrapping */}
          <div className="flex flex-wrap gap-1.5 justify-center mb-6">
            {["Sem setup", "Sem fidelidade", "Cancele quando quiser"].map((pill, i) => (
              <span key={i} className="px-2.5 py-1 text-[9px] font-black bg-[#e91e8c]/15 text-[#e91e8c] border border-[#e91e8c]/20 uppercase rounded-full">
                {pill}
              </span>
            ))}
          </div>

          {/* List of included in 1 column */}
          <ul className="space-y-3 text-left mb-8 px-1">
            {[
              "Hospedagem dedicada Cloud ultrarrápida",
              "SSL de proteção ativo (cadeado)",
              "Imagens e design otimizados incluídos",
              "Suporte ilimitado direto por WhatsApp",
              "Mudança de textos/fotos livremente",
              "Exclusividade no seu bairro local"
            ].map((benefit, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs font-bold text-white">
                <Check className="text-[#25D366] shrink-0 mt-0.5 stroke-[3] w-4 h-4" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          {/* Scarcity Note Container */}
          <div className="bg-red-950/20 border border-red-500/20 p-4 rounded-xl text-left mb-6 flex items-start gap-2.5">
            <span className="text-base text-red-500">⚠️</span>
            <p className="text-[11px] font-bold text-red-100 leading-normal">
              Garantimos apenas <strong>1 profissional por nicho na sua microrregião</strong>. Se o seu concorrente do mesmo bairro assinar primeiro, não poderemos te atender.
            </p>
          </div>

          {/* Bottom Stickyable Action Trigger */}
          <a
            href="https://wa.me/5511999999999?text=Olá!%20Li%20os%20detalhes%20da%20assinatura%20de%20R$197%20mensais%20e%20quero%20fazer%20minha%20reserva."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-[54px] rounded-xl uppercase text-[13px] min-[360px]:text-[14px] font-black tracking-widest text-center flex items-center justify-center gap-2 bg-gradient-to-r from-[#e91e8c] to-[#7c3aed] text-white shadow-xl max-w-sm mx-auto whitespace-nowrap"
            style={{ minHeight: "48px" }}
          >
            <span className="text-white whitespace-nowrap">Falar no WhatsApp</span>
            <ArrowRight size={16} className="text-white shrink-0" />
          </a>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          FAQ MOBILE
          ---------------------------------------------------------------------- */}
      <section className="py-16 px-5 bg-[#0a0a0a] border-t border-[#202020]">
        <h2 className="text-[22px] min-[375px]:text-[28px] font-black uppercase text-center tracking-tight leading-tight mb-10 text-white">
          Dúvidas <span className="text-[#e91e8c]">Frequentes</span>
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
                className="border border-[#202020] bg-[#111] rounded-2xl overflow-hidden text-left"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : i)}
                  className="w-full p-4.5 flex items-center justify-between text-left h-[56px] focus:outline-none"
                  style={{ minHeight: "56px" }}
                >
                  <span className="font-extrabold text-[14px] text-white pr-4">{item.q}</span>
                  {isOpen ? (
                    <div className="w-7 h-7 rounded-full bg-[#e91e8c] flex items-center justify-center text-white shrink-0">
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
            href="https://wa.me/5511999999999?text=Olá!%20Li%20o%20FAQ%20da%2520Duno%2520mas%2520ainda%2520tenho%2520uma%2520duvida%2520especifica."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4.5 rounded-xl border border-[#25D366] bg-[#25D366]/10 text-white hover:bg-[#25D366]/20 text-xs font-black uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all"
          >
            <ArrowRight size={14} className="text-white" />
            <span className="text-white">Tirar outra dúvida</span>
          </a>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          SOBRE / CONFIANÇA MOBILE
          ---------------------------------------------------------------------- */}
      <section className="py-16 px-5 bg-[#111] border-y border-[#202020] text-center">
        <h2 className="text-[22px] min-[375px]:text-[28px] font-black uppercase tracking-tight leading-tight mb-4">
          Cuidado local <span className="text-[#e91e8c]">em boas mãos</span>
        </h2>
        
        <p className="text-xs text-neutral-400 font-semibold leading-relaxed mb-10 max-w-[320px] mx-auto">
          Somos uma empresa dedicada ao sucesso comercial online do micro e pequeno profissional autônomo e de clínicas.
        </p>

        {/* 3 seals in line */}
        <div className="flex gap-2 justify-between">
          {[
            { t: "Nacional de verdade", text: "Suporte 100% PT-BR", icon: Landmark },
            { t: "Foco total em CRO", text: "Design para vender", icon: Award },
            { t: "Sem Robôs", text: "Atendimento humano", icon: Heart }
          ].map((v, i) => {
            const Icon = v.icon;
            return (
              <div 
                key={i}
                className="p-3 rounded-xl bg-[#0a0a0a] border border-white/5 text-center flex-1 min-w-[100px] flex flex-col justify-between aspect-square"
              >
                <div className="w-8 h-8 rounded-full bg-[#e91e8c]/15 text-[#e91e8c] flex items-center justify-center mx-auto mb-2">
                  <Icon size={16} />
                </div>
                <div>
                  <h4 className="text-[11px] min-[370px]:text-[12px] font-black uppercase text-white leading-tight mb-1">{v.t}</h4>
                  <p className="text-[9px] min-[370px]:text-[10px] text-neutral-500 font-bold leading-normal">{v.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          CTA FINAL MOBILE
          ---------------------------------------------------------------------- */}
      <section className="py-20 px-5 bg-gradient-to-b from-[#e91e8c] to-[#7c3aed] text-center relative overflow-hidden">
        {/* Background gloss overlay decoration */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        
        <div className="relative z-10">
          <h2 className="text-[24px] min-[375px]:text-[30px] font-black uppercase leading-[1.05] tracking-tight text-white mb-6">
            Pare de perder clientes locais <span className="italic">hoje</span>
          </h2>

          <p className="text-[14px] text-neutral-200 font-bold mb-10 max-w-[300px] mx-auto leading-relaxed">
            Nós conectamos os clientes até o seu WhatsApp. Garanta a sua vaga local exclusiva antes do seu concorrente.
          </p>

          <a
            href="https://wa.me/5511999999999?text=Olá!%20Falei%20no%20site%2520da%2520Duno%2520e%2520quero%2520garantir%2520minha%2520vaga%2520para%2520meu%2520nicho."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-6 rounded-full bg-[#0a0a0a] border border-white/20 text-white text-[13px] min-[360px]:text-[14px] font-black uppercase tracking-wider shadow-xl flex items-center justify-center gap-2 max-w-[300px] mx-auto active:scale-95 transition-transform whitespace-nowrap"
            style={{ minHeight: "48px" }}
          >
            <span className="text-white whitespace-nowrap">Garantir minha vaga</span>
            <ArrowRight size={16} className="text-white shrink-0" />
          </a>

          {/* Social Proof metrics below */}
          <div className="mt-10 flex flex-col items-center gap-2">
            <div className="flex gap-1 justify-center">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={14} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-neutral-100 text-xs font-black uppercase tracking-widest leading-none">4.9/5 Estrelas · Satisfação Plena</p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          RODAPÉ MOBILE
          ---------------------------------------------------------------------- */}
      <footer className="py-12 px-5 bg-[#0c0c0c] border-t-2 border-[#e91e8c] text-center">
        <Logo size="sm" className="justify-center mb-6" />
        
        <p className="text-xs text-neutral-400 font-semibold leading-relaxed mb-6 max-w-[320px] mx-auto">
          Tenha um site de elite por uma assinatura justa de apenas R$197/mês. Escolha seu modelo, nós personalizamos em 48h e você escala seus orçamentos no seu WhatsApp.
        </p>

        {/* Links Navigation Row */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center mb-10 text-xs font-black uppercase tracking-widest text-[#e91e8c]">
          {["Como funciona", "Preço", "Apoio"].map((tab) => (
            <button key={tab} className="focus:outline-none" onClick={() => scrollToMobile(tab === "Como funciona" ? "como-funciona" : tab === "Preço" ? "preco-mobile" : "faq")}>
              {tab}
            </button>
          ))}
        </div>

        {/* Contacts details */}
        <div className="space-y-2 mb-10 text-xs font-bold text-neutral-500">
          <p className="text-white text-sm">contato@duno.com.br</p>
          <p className="text-white text-base font-black">+55 (11) 99999-9999</p>
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

      {/* ----------------------------------------------------------------------
          IMMERSIVE DETAIL MODAL PANEL
          ---------------------------------------------------------------------- */}
      <AnimatePresence>
        {selectedModel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedModel(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 15, opacity: 0 }}
              className="relative w-full max-w-[340px] bg-[#111] border border-[#e91e8c]/30 rounded-2xl overflow-hidden shadow-2xl p-6 text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-[9px] font-black text-[#e91e8c] uppercase tracking-widest">Nicho verificado</span>
                <button 
                  onClick={() => setSelectedModel(null)} 
                  className="w-7 h-7 bg-white/5 rounded-full flex items-center justify-center text-white/60 focus:outline-none"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                {selectedModel.niche}
              </h3>

              {/* Tag and Subtitle highlighted */}
              <div className="px-3 py-1.5 rounded bg-[#e91e8c]/10 text-[11px] font-black text-[#e91e8c] border border-[#e91e8c]/20 mb-4 inline-block">
                {selectedModel.highlight}
              </div>

              <p className="text-[13px] text-neutral-300 font-semibold leading-relaxed mb-6">
                Layout de grande autoridade adaptável para seu consultório em 48h.
              </p>

              {/* Highlights score */}
              <div className="space-y-2.5 mb-6 text-xs font-bold border-y border-white/5 py-4">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Velocidade 4G</span>
                  <span className="text-emerald-500 font-extrabold flex items-center gap-1">100/100 EXCELENTE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Filtro Local Google Maps</span>
                  <span className="text-[#25D366] font-extrabold">PRONTO ATIVO</span>
                </div>
              </div>

              {/* CTA trigger inside details */}
              <a
                href={`https://wa.me/5511999999999?text=Olá!%20Gostei%20do%20modelo%20para%20${selectedModel.niche}%20e%20quero%20esse%20para%20minha%20clínica.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-gradient-to-r from-[#e91e8c] to-[#7c3aed] text-white text-[11px] min-[360px]:text-xs font-black text-center uppercase rounded-xl flex items-center justify-center gap-2 tracking-widest whitespace-nowrap"
              >
                <span className="whitespace-nowrap">Quero este modelo</span>
                <ArrowRight size={12} className="stroke-[3] shrink-0" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
