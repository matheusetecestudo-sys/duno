import { motion } from "motion/react";
import { useState, useRef } from "react";
import { 
  Layout, 
  Paintbrush, 
  Globe, 
  TrendingUp, 
  Palette, 
  Zap, 
  Unlock, 
  MessageCircle, 
  Tag, 
  Target,
  XCircle,
  CheckCircle,
  X,
  Check,
  Award,
  ArrowRight,
  Clock,
  Coins,
  Rocket,
  Monitor,
  PhoneCall,
  Smartphone,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { StyledIcon } from "./StyledIcon";

// SEÇÃO 5 — COMO FUNCIONA
export function HowItWorks() {
  const steps = [
    {
      number: "01",
      iconName: "Monitor",
      title: (
        <span>
          Escolha o <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black pb-0.5">modelo</span>
        </span>
      ),
      desc: "Selecione o modelo validado do seu nicho profissional ideal.",
      time: "Hoje"
    },
    {
      number: "02",
      iconName: "Paintbrush",
      title: (
        <span>
          Nós <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black pb-0.5">customizamos</span> tudo
        </span>
      ),
      desc: "Aplicamos suas logos, fotos, cores exclusivas de marca.",
      time: "Em até 24h"
    },
    {
      number: "03",
      iconName: "Globe",
      title: (
        <span>
          Publicação <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black pb-0.5">imediata!</span>
        </span>
      ),
      desc: "Configuramos certificado criptografado SSL e domínio pronto.",
      time: "Em até 48h"
    },
    {
      number: "04",
      iconName: "MessageCircle",
      title: (
        <span>
          Vendas e <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black pb-0.5">contatos</span>
        </span>
      ),
      desc: "Clientes acessam direto e chegam no seu WhatsApp de trabalho.",
      time: "Para sempre!"
    }
  ];

  return (
    <section id="como-funciona" className="py-24 px-6 bg-[#000000] relative">
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-96 h-96 bg-[#f0134d]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">        {/* Beautiful Unified Badge with Icon */}
        <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12020b]/90 border border-[#f0134d]/45 text-white mb-6">
          <div className="w-5 h-5 rounded-full bg-[#f0134d] flex items-center justify-center">
            <StyledIcon iconName="Clock" size={10} className="text-white fill-white" />
          </div>
          <span className="text-[10px] uppercase font-black tracking-widest text-neutral-300">
            Passo a Passo Simples
          </span>
        </div>

        <h2 className="text-3xl md:text-[44px] lg:text-[48px] font-black uppercase tracking-tight mb-4 leading-tight text-white">
          COMO FUNCIONA <br />
          EM <span className="gradient-text">48 HORAS</span>
        </h2>
        
        <p className="text-[#a0a0a0] text-[17px] max-w-[600px] mx-auto leading-relaxed font-semibold mb-20">
          Etapas rápidas, sem perda de tempo ou ligações cansativas para ter o seu site profissional rodando.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Optional decorative dotted connection line */}
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-[#f0134d]/30 to-transparent border-t-2 border-dashed border-[#f0134d]/30 z-0 pointer-events-none" />
          
          {steps.map((s, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="pink-card hover:scale-[1.02] relative z-10 !p-8 !pb-10 gap-4"
              >
                {/* Large semi-transparent background step number */}
                <span className="absolute top-4 right-6 text-5xl font-black text-white/[0.05] group-hover:text-[#f0134d]/10 transition-colors select-none font-mono">
                  {s.number}
                </span>

                {/* Central Icon */}
                <div className="mb-2">
                  <StyledIcon iconName={s.iconName} size={24} containerSize={48} flat={true} />
                </div>

                <h3 className="text-lg font-black uppercase tracking-wide text-left mb-1 leading-snug w-fit text-white">
                  {s.title}
                </h3>

                {/* Tag de tempo */}
                <span className="inline-block px-2.5 py-0.5 bg-[#f0134d]/15 text-[#f0134d] text-[10px] font-black uppercase tracking-widest rounded-md border border-[#f0134d]/30 mb-2">
                  {s.time}
                </span>

                <p className="text-[#a0a0a0] leading-relaxed text-xs sm:text-sm font-semibold">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Barra abaixo dos passos */}
        <div className="mt-16 p-5 sm:p-6 bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] rounded-[20px] border-2 border-[#f0134d] max-w-3xl mx-auto shadow-xl shadow-[#f0134d]/15">
          <p className="text-white font-black uppercase tracking-widest text-sm sm:text-base leading-none">
            Sem conhecimento em códigos · Sem taxas de criação · Sem dores de cabeça
          </p>
        </div>
      </div>
    </section>
  );
}

// SEÇÃO 6 — VANTAGENS EXCLUSIVAS
export function Benefits() {
  const list = [
    { 
      title: (
        <span>
          Totalmente <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black pb-0.5">Personalizado</span>
        </span>
      ), 
      desc: "Sua logo, suas cores, suas fotos. Nenhum cliente vai achar que é um modelo genérico — parece feito do zero para você.", 
      iconName: "Palette"
    },
    { 
      title: (
        <span>
          Pronto em <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black pb-0.5">48 Horas</span>
        </span>
      ), 
      desc: "Enquanto uma agência levaria 60 dias, você já está recebendo cliques de novos clientes. Dois dias de prazo.", 
      iconName: "Clock"
    },
    { 
      title: (
        <span>
          Sem <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black pb-0.5">Fidelidade</span>
        </span>
      ), 
      desc: "Sem multa de rescisão, sem contrato mínimo. Se em algum mês não quiser continuar ativo, basta nos avisar.", 
      iconName: "Unlock"
    },
    { 
      title: (
        <span>
          Suporte por <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black pb-0.5">WhatsApp</span>
        </span>
      ), 
      desc: "Quer trocar uma foto? Atualizar um texto? Manda uma mensagem. Respondemos com agilidade e eficiência.", 
      iconName: "MessageCircle"
    },
    { 
      title: (
        <span>
          Sem <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black pb-0.5">Letras Miúdas</span>
        </span>
      ), 
      desc: "R$ 197/mês fixos. Sem taxas extras ou custos ocultos, sem surpresas desagradáveis na fatura.", 
      iconName: "Coins"
    },
    { 
      title: (
        <span>
          Feito para <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black pb-0.5">Converter</span>
        </span>
      ), 
      desc: "Cada botão, seção e texto foi otimizado para transformar visitante em contato real no seu WhatsApp.", 
      iconName: "Target"
    }
  ];

  return (
    <section id="vantagens" className="py-24 px-6 bg-[#000000] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          
          {/* Beautiful Unified Badge with Icon */}
          <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12020b]/90 border border-[#f0134d]/45 text-white mb-6">
            <div className="w-5 h-5 rounded-full bg-[#f0134d] flex items-center justify-center">
              <StyledIcon iconName="Zap" size={10} className="text-white fill-white animate-pulse" />
            </div>
            <span className="text-[10px] uppercase font-black tracking-widest text-neutral-300">
              Vantagens da nossa assinatura
            </span>
          </div>

          <h2 className="text-3xl md:text-[44px] lg:text-[48px] font-black uppercase tracking-tight mb-4 leading-tight text-white">
            VANTAGENS EXCLUSIVAS <br />
             DA NOSSA <span className="gradient-text">ASSINATURA</span>
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((b, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="pink-card hover:scale-[1.02] !p-8 !pb-10"
            >
              <div className="mb-6 flex justify-start">
                <StyledIcon iconName={b.iconName} size={24} containerSize={48} flat={true} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 leading-snug w-fit text-white">
                  {b.title}
                </h3>
                <p className="text-[#a0a0a0] leading-relaxed font-semibold text-xs sm:text-sm">
                  {b.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// SEÇÃO 7 — ANTES E DEPOIS (split 50/50 with gradient center divider)
export function BeforeAfter() {
  const badPoints = [
    "Sem site, dependendo de indicações oscilantes",
    "Concorrentes aparecendo no Google e você invisível",
    "Layout amador feito de forma improvisada",
    "Orçamento caro e meses de espera com agência lenta",
    "Dores de cabeça para tentar hospedar ou alterar texto"
  ];

  const goodPoints = [
    "Presença profissional que gera máxima autoridade",
    "No topo das buscas da região atraindo novos contatos",
    "Design de elite projetado para conversão ágil",
    "Site completo e personalizado no ar em até 48h",
    "Liberdade de alterações inclusas sem pagar taxas"
  ];

  return (
    <section className="py-24 px-6 bg-[#000000] relative overflow-hidden border-t border-[#2a2a2a]">
      {/* Visual background atmospheric pink blob */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-[300px] bg-[#e91e8c]/2 blur-[140px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1100px] mx-auto relative z-10 text-center">
        
        {/* Beautiful Unified Badge with Icon */}
        <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12020b]/90 border border-[#f0134d]/45 text-white mb-6">
          <div className="w-5 h-5 rounded-full bg-[#f0134d] flex items-center justify-center">
            <StyledIcon iconName="Monitor" size={10} className="text-white fill-white" />
          </div>
          <span className="text-[10px] uppercase font-black tracking-widest text-neutral-300">
            Comparação Prática comercial
          </span>
        </div>

        <h2 className="text-3xl md:text-[44px] lg:text-[48px] font-black uppercase tracking-tight mb-4 leading-tight text-white">
          A DIFERENÇA QUE <br />
          A <span className="gradient-text">DUNO</span> FAZ NO SEU <span className="gradient-text">NEGÓCIO</span>
        </h2>

        {/* 50/50 Split Board with Vertical Gradient Divider */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch mt-16 px-2 text-left">
          
          {/* Vertical central divider (Desktop Only) */}
          <div className="hidden md:block absolute top-[5%] bottom-[5%] left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#e91e8c] to-[#9b1fbd] z-10" />

          {/* LADO ESQUERDO: "Sem a Duno" (fundo levemente avermelhado) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-[16px] border border-red-500/15 bg-gradient-to-b from-red-950/10 to-black/10 flex flex-col gap-6"
          >
            <div className="pb-3 border-b border-red-500/10 flex items-center justify-between">
              <span className="text-xs font-black uppercase text-red-500 tracking-[0.2em] bg-red-500/10 py-1.5 px-3 rounded-md">
                ✗ ANTES — Sem Site Profissional
              </span>
            </div>

            <ul className="space-y-4 text-left">
              {badPoints.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3.5 text-white/50 text-xs sm:text-sm font-semibold">
                  <XCircle className="text-red-500 shrink-0 w-5 h-5 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* LADO DIREITO: "Com a Duno" (fundo levemente esverdeado) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-[16px] border border-emerald-500/15 bg-gradient-to-b from-emerald-950/10 to-black/10 flex flex-col gap-6"
          >
            <div className="pb-3 border-b border-emerald-500/10 flex items-center justify-between">
              <span className="text-xs font-black uppercase text-[#25D366] tracking-[0.2em] bg-emerald-500/10 py-1.5 px-3 rounded-md">
                ✓ DEPOIS — Com a Assinatura Duno
              </span>
            </div>

            <ul className="space-y-4 text-left">
              {goodPoints.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3.5 text-white/90 text-xs sm:text-sm font-bold">
                  <CheckCircle className="text-[#25D366] shrink-0 w-5 h-5 mt-0.5" />
                  <span className="text-white">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// SEÇÃO 10 — COMPARATIVO (3 Colunas, coluna central destacada)
export function Comparison() {
  const agencList = [
    "Custos de R$1.500 a R$5.000+",
    "Prazo longo de 15 a 45 dias",
    "Total dependência de código",
    "Alterações simples cobradas extra",
    "Sem garantia de conversão",
    "Manutenção complexa e estressante"
  ];

  const freelancList = [
    "Bugs e travamentos ao importar",
    "Modelos gringos não adaptados",
    "Sem nenhum suporte técnico",
    "Exige plugins pesados",
    "Custo extra por complementos",
    "Instruções complexas em inglês"
  ];

  const dunoList = [
    "Site no ar completo em 48h",
    "Sem taxas ocultas de adesão",
    "Sem fidelidade de contrato",
    "Alterações ilimitadas inclusas",
    "Criptografia SSL de segurança",
    "Suporte total no WhatsApp"
  ];

  return (
    <section className="py-24 px-6 bg-[#000000] relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Beautiful Unified Badge with Icon */}
        <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12020b]/90 border border-[#f0134d]/45 text-white mb-6">
          <div className="w-5 h-5 rounded-full bg-[#f0134d] flex items-center justify-center">
            <StyledIcon iconName="CheckSquare" size={10} className="text-white fill-white" />
          </div>
          <span className="text-[10px] uppercase font-black tracking-widest text-neutral-300">
            Tabela de Comparação Direta
          </span>
        </div>

        <h2 className="text-3xl md:text-[44px] lg:text-[48px] font-black uppercase tracking-tight mb-4 leading-tight text-white">
          POR QUE A DUNO É <br />
          A ESCOLHA MAIS <span className="gradient-text">INTELIGENTE</span>
        </h2>
        <p className="text-[#a0a0a0] text-sm sm:text-base font-bold uppercase tracking-widest mb-4">
          Compare com as outras formas do mercado
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-12 relative z-10 px-2">
          
          {/* Coluna 1 — Agência Tradicional */}
          <div className="pink-card opacity-80 !rounded-[24px] !p-8 flex flex-col justify-between shrink-0 text-left">
            <div>
              <div className="bg-neutral-800 text-white px-4 py-2 rounded-xl text-center font-bold text-xs uppercase tracking-wider mb-6">
                Agência Tradicional
              </div>
              <p className="text-2xl sm:text-3xl font-black text-white/40 mb-6 font-mono">
                R$1.500–R$5.000
              </p>
              
              <ul className="space-y-4 text-left border-t border-white/5 pt-6">
                {agencList.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-white/55 text-xs sm:text-sm font-semibold">
                    <X className="text-red-500 shrink-0 mt-0.5 w-4.5 h-4.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 text-[10px] text-white/30 font-black uppercase text-center">
              Custo Elevado & Lento
            </div>
          </div>

          {/* Coluna 2 — Locação de Site (SUA OFERTA — DESTACADA) */}
          <div className="p-[2px] bg-gradient-to-b from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] rounded-[24px] overflow-visible relative text-left shadow-[0_0_40px_rgba(240,19,77,0.3)] scale-100 lg:scale-[1.04]">
            {/* Top Absolute badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] text-white text-[11px] font-black uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap shadow-md shadow-[#f0134d]/30">
              ★ INDICADO PARA SEU NEGÓCIO
            </div>

            <div className="bg-[#000000] rounded-[22.5px] p-8 h-full flex flex-col justify-between">
              <div>
                <div className="bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] text-white px-4 py-2.5 rounded-xl text-center font-black text-xs uppercase tracking-widest mb-6">
                  Assinatura Duno®
                </div>
                <p className="text-4xl font-black text-[#25D366] mb-6 font-mono tracking-tight flex items-baseline gap-1">
                  R$ 197<span className="text-xs text-white/50 lowercase font-sans font-semibold">/mês</span>
                </p>

                <ul className="space-y-4 text-left border-t border-white/10 pt-6">
                  {dunoList.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-white text-xs sm:text-sm font-bold">
                      <Check className="text-[#25D366] shrink-0 mt-0.5 w-4.5 h-4.5 stroke-[3.5]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botão CTA interior */}
              <div className="mt-10 pt-6 border-t border-white/10">
                <a 
                  href="https://wa.me/5511992876219?text=Olá!%20Li%2520os%2520detalhes%2520da%252520assinatura%252520do%252520site%252520Duno%2520e%2520quero%2520começar."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-premium-btn w-full text-xs"
                >
                  <span>Quero meu site</span>
                  <ArrowRight size={14} className="shrink-0" />
                </a>
              </div>
            </div>
          </div>

          {/* Coluna 3 — Freelancer */}
          <div className="pink-card opacity-80 !rounded-[24px] !p-8 flex flex-col justify-between shrink-0 text-left">
            <div>
              <div className="bg-neutral-800 text-white px-4 py-2 rounded-xl text-center font-bold text-xs uppercase tracking-wider mb-6">
                Templates Soltos
              </div>
              <p className="text-2xl sm:text-3xl font-black text-white/40 mb-6 font-mono">
                R$97–R$197
              </p>
              
              <ul className="space-y-4 text-left border-t border-white/5 pt-6">
                {freelancList.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-white/55 text-xs sm:text-sm font-semibold">
                    <X className="text-red-500 shrink-0 mt-0.5 w-4.5 h-4.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 text-[10px] text-white/30 font-black uppercase text-center">
              Erros & Falta de Suporte
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// SEÇÃO 7.5 — APRESENTAÇÃO DE SITE PREMIUM (SHOWCASE SEM FOTO)
export function ProductShowcase() {
  const features = [
    {
      iconName: "Target",
      title: (
        <span>
          Neuromarketing de <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black pb-0.5">Elite</span>
        </span>
      ),
      desc: "Estruturas de navegação desenhadas estrategicamente por especialistas para prender a atenção e guiar o cliente diretamente para a tomada de decisão.",
    },
    {
      iconName: "Zap",
      title: (
        <span>
          Velocidade <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black pb-0.5">Ultra Rápida</span>
        </span>
      ),
      desc: "Código limpo e otimizado para carregamento instantâneo. Isso melhora seu posicionamento nas pesquisas do Google e evita que clientes desistam por demora.",
    },
    {
      iconName: "Smartphone",
      title: (
        <span>
          Design <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black pb-0.5">Responsivo & Fluído</span>
        </span>
      ),
      desc: "Sua marca apresentada com perfeição impecável em qualquer tela de celular, tablet ou computador. Layouts adaptativos de alto impacto.",
    },
    {
      iconName: "MessageCircle",
      title: (
        <span>
          Conversão via <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black pb-0.5">WhatsApp</span>
        </span>
      ),
      desc: "Posicionamento inteligente de gatilhos e botões de chamada rápida para preencher sua agenda. Conecte visitantes ao seu WhatsApp em apenas um toque.",
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#000000] relative border-t border-[#2a2a2a]">
      {/* Background visual glosses */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#e91e8c]/3 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#7c3aed]/3 blur-[140px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Header Block */}
        <div className="max-w-3xl mx-auto mb-16 flex flex-col items-center">
          
          {/* Beautiful Unified Badge with Icon */}
          <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12020b]/90 border border-[#f0134d]/45 text-white mb-6">
            <div className="w-5 h-5 rounded-full bg-[#f0134d] flex items-center justify-center">
              <StyledIcon iconName="Sparkles" size={10} className="text-white fill-white animate-pulse" />
            </div>
            <span className="text-[10px] uppercase font-black tracking-widest text-neutral-300">
              Design Premium de Conversão
            </span>
          </div>

          <h2 className="text-3xl md:text-[44px] lg:text-[48px] font-black uppercase tracking-tight mb-4 leading-tight text-white">
            ESTRUTURAS COM NEUROMARKETING <br />
            FEITAS PARA <span className="gradient-text">CONVERTER</span> SEUS <span className="gradient-text">LEADS</span>
          </h2>
          
          <p className="text-[#a0a0a0] text-sm sm:text-base md:text-lg leading-relaxed font-semibold">
            Cada layout traz gatilhos persuasivos estudados, velocidade ultrarápida e apelo mobile de alta conversão. Não crie sites simples ou sem persuasão.
          </p>
        </div>

        {/* Bento Grid-like Layout configured to match Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {features.map((feat, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="pink-card hover:scale-[1.02] !p-8 !pb-10"
              >
                {/* Central Icon container */}
                <div className="mb-6 flex justify-start">
                  <StyledIcon iconName={feat.iconName} size={24} containerSize={48} flat={true} />
                </div>
                
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 w-fit text-white">
                    {feat.title}
                  </h3>
                  
                  <p className="text-[#a0a0a0] leading-relaxed font-semibold text-xs sm:text-sm">
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="flex justify-center pt-min">
          <a 
            href="https://wa.me/5511992876219?text=Olá!%20Li%2520os%2520detalhes%2520da%252520assinatura%252520do%252520site%252520Duno%2520e%2520quero%2520começar."
            target="_blank"
            rel="noopener noreferrer"
            className="gold-premium-btn w-full sm:w-auto"
          >
            <span>Quero meu site de elite</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
