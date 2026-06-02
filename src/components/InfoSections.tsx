import { motion } from "motion/react";
import { Zap, ShieldCheck, TrendingUp, Clock, MousePointerClick, Rocket, Check, X, Layout, Headphones, Edit3, RefreshCw } from "lucide-react";

export function Benefits() {
  const benefits = [
    { 
      title: "<span class='gradient-text'>Identidade</span> Personalizada", 
      desc: "Adaptamos logotipo, cores e fotos de forma elegante para ficar com a cara única do seu negócio local.", 
      icon: Layout,
      featured: true
    },
    { 
      title: "<span class='gradient-text'>Hospedagem</span> Inclusa", 
      desc: "Você não se preocupa com nada técnico. Servidor de alta velocidade e certificado de segurança inclusos.", 
      icon: Headphones,
      featured: false
    },
    { 
      title: "<span class='gradient-text'>Pronto em</span> 48 Horas", 
      desc: "Sua presença digital pronta para vender em tempo recorde, sem atrasos de agências convencionais.", 
      icon: Edit3,
      featured: false
    },
    { 
      title: "<span class='gradient-text'>Suporte</span> WhatsApp", 
      desc: "Qualquer alteração ou dúvida, nossa equipe resolve rapidamente para você direto no WhatsApp.", 
      icon: RefreshCw,
      featured: false
    },
    { 
      title: "<span class='gradient-text'>Preço</span> Sem Pegadinhas", 
      desc: "Site de alta agência de R$ 5k por apenas R$ 197 mensais. Sem taxa de adesão ou de criação.", 
      icon: Clock,
      featured: true
    },
    { 
      title: "<span class='gradient-text'>Foco</span> em Conversão", 
      desc: "Modelos com botão de agendamento em 1 clique e botões de chamada rápida para explodir seus contatos.", 
      icon: Rocket,
      featured: true
    }
  ];

  return (
    <section id="benefícios" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-6">
            Vantagens <span className="gradient-text">Exclusivas</span>
          </h2>
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto font-bold leading-relaxed">
            Entregamos tudo pronto de ponta a ponta. Você foca em atender seus clientes, nós cuidamos do design e da engenharia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div 
              key={i} 
              className={`pink-card group transition-all duration-300 relative border ${
                b.featured 
                  ? "border-[#FF0054]/50 bg-gradient-to-b from-[#0F0108] to-black shadow-[0_15px_40px_rgba(255,0,84,0.15)] scale-[1.02] ring-2 ring-[#FF0054]/20" 
                  : "border-white/5 bg-[#0F0108]/40 hover:bg-[#0F0108]/80 hover:border-[#FF0054]/30"
              }`}
            >
              {b.featured && (
                <div className="absolute -top-3 right-6 px-3 py-1 bg-[#FF0054] text-[9px] font-black uppercase tracking-widest text-white rounded-full shadow-lg shadow-[#FF0054]/30">
                  Destaque
                </div>
              )}
              <div className="w-16 h-16 rounded-full bg-linear-to-tr from-[#FF0054] to-[#A328D6] flex items-center justify-center text-white mb-8 shadow-lg shadow-[#FF0054]/20 group-hover:scale-110 transition-transform">
                <b.icon size={28} strokeWidth={2.5} />
              </div>
              <div>
                <h3 
                  className="text-2xl font-black mb-4 leading-tight text-white normal-case tracking-tight"
                  dangerouslySetInnerHTML={{ __html: b.title }}
                />
                <p className="text-white/80 leading-relaxed font-semibold text-sm sm:text-base">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { 
      title: "Escolha o modelo (5 min)", 
      desc: "Selecione o design vencedor de alta conversão ideal para o seu nicho profissional em nosso catálogo.", 
      icon: MousePointerClick 
    },
    { 
      title: "Customizamos em 24h", 
      desc: "Nossa equipe adapta as cores, fotos reais, logotipo e textos do seu consultório ou clínica de forma ultra rápida.", 
      icon: Zap 
    },
    { 
      title: "No ar em 48h totais", 
      desc: "Cuidamos de toda a infraestrutura técnica: registro de domínio, hospedagem 5G e certificados de segurança inclusos.", 
      icon: Rocket 
    },
    { 
      title: "Atraia Clientes Diários", 
      desc: "Seu site começa a gerar contatos e agendamentos diretos no seu WhatsApp. Daí em diante, pague apenas R$197/mês fixos.", 
      icon: TrendingUp 
    },
  ];

  return (
    <section className="py-20 px-6 bg-linear-to-b from-black to-[#0F0108]/90">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4">
            Como <span className="gradient-text">funciona</span>
          </h2>
          <p className="text-white/80 text-base sm:text-xl max-w-xl mx-auto font-bold tracking-tight">
            Seu site de elite no ar em menos de 48 horas de forma 100% descomplicada e rápida.
          </p>
        </div>
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#FF0054]/30 to-transparent" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((s, i) => (
              <div key={i} className="relative flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-[#FF0054] to-[#A328D6] flex items-center justify-center text-white mb-8 z-10 group-hover:scale-110 transition-all shadow-[0_10px_20px_rgba(255,0,84,0.3)]">
                  <s.icon size={36} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-tighter text-white">
                  <span className="gradient-text">{i + 1}.</span> {s.title}
                </h3>
                <p className="text-white/70 text-sm font-bold leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Comparison() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-16 text-center">
          Comprar vs <span className="gradient-text">Assinar</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-black rounded-[40px] overflow-hidden border-2 border-[#FF0054]/30 shadow-2xl">
          <div className="p-6 sm:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-[#FF0054]/10">
            <h3 className="text-2xl font-black mb-8 md:mb-12 text-white/40 tracking-tighter uppercase">COMPRA TRADICIONAL</h3>
            <ul className="space-y-6 md:space-y-10">
              {[
                { text: "Alto custo inicial (R$3.000+)", bad: true },
                { text: "Demora meses para entregar", bad: true },
                { text: "Manutenção por sua conta", bad: true },
                { text: "Contratos longos e taxas ocultas", bad: true },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 sm:gap-6 text-white/60 font-bold text-base md:text-lg">
                  <X className="text-red-500/80 shrink-0 w-5 h-5 md:w-6 md:h-6" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0F0108] p-6 sm:p-12 lg:p-16 relative">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8 md:mb-12">
              <h3 className="text-3xl font-black gradient-text tracking-tighter uppercase leading-none">DUNO® (Locação de Site de Elite)</h3>
              <div className="px-4 py-1.5 rounded-xl bg-[#FF0054] text-[9px] font-black uppercase tracking-[0.2em] text-white shadow-[0_0_15px_rgba(255,0,84,0.4)] md:animate-pulse">MELHOR ESCOLHA</div>
            </div>
            <ul className="space-y-6 md:space-y-10">
              {[
                { text: "Apenas R$ 197 mensais", good: true },
                { text: "Pronto em menos de 48 horas", good: true },
                { text: "Sem multa ou contrato de fidelidade", good: true },
                { text: "Cancele a qualquer momento", good: true },
                { text: "Suporte e Manutenção 100% inclusos", good: true },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 sm:gap-6 text-white font-bold text-base md:text-lg group">
                  <Check className="text-[#00FF80] shrink-0 w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
