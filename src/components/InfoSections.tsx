import { motion } from "motion/react";
import { Zap, ShieldCheck, TrendingUp, Clock, MousePointerClick, Rocket, Check, X, Layout, Headphones, Edit3, RefreshCw } from "lucide-react";

export function Benefits() {
  const benefits = [
    { 
      title: "<span class='gradient-text'>Identidade</span> Personalizada", 
      desc: "Pegamos o template escolhido e adaptamos cores e imagens para ficarem idênticos à sua marca.", 
      icon: Layout 
    },
    { 
      title: "<span class='gradient-text'>Hospedagem</span> Inclusiva", 
      desc: "Você não se preocupa com nada técnico. Servidor de alta velocidade já incluso na mensalidade.", 
      icon: Headphones 
    },
    { 
      title: "<span class='gradient-text'>Edição</span> Ultra Veloz", 
      desc: "Sua presença digital fica pronta em poucos dias, não meses. Foco total em agilidade.", 
      icon: Edit3 
    },
    { 
      title: "<span class='gradient-text'>Suporte</span> Prioritário", 
      desc: "Qualquer alteração ou dúvida, nossa equipe resolve rapidamente para você.", 
      icon: RefreshCw 
    },
    { 
      title: "<span class='gradient-text'>Preço</span> Imbatível", 
      desc: "Design de agência de R$ 5k por uma fração do preço mensal. Sem custos escondidos.", 
      icon: Clock 
    },
    { 
      title: "<span class='gradient-text'>Foco</span> em Conversão", 
      desc: "Nossos templates são testados para vender. Seu site será uma máquina de captar clientes.", 
      icon: Rocket 
    }
  ];

  return (
    <section id="benefícios" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-16 text-center">
          Vantagens <span className="gradient-text">Exclusivas</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="pink-card group transition-all">
              <div className="w-16 h-16 rounded-full bg-[#FF0054] flex items-center justify-center text-white mb-8 shadow-lg shadow-[#FF0054]/20 group-hover:scale-110 transition-transform">
                <b.icon size={30} strokeWidth={2.5} />
              </div>
              <div>
                <h3 
                  className="text-2xl font-black mb-4 leading-tight text-white normal-case tracking-tight"
                  dangerouslySetInnerHTML={{ __html: b.title }}
                />
                <p className="text-white/60 leading-relaxed font-medium text-[16px]">{b.desc}</p>
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
    { title: "Escolha o modelo", desc: "Selecione o layout baseado no seu nicho.", icon: MousePointerClick },
    { title: "Personalizamos", desc: "Adaptamos cores, logos e fotos do seu negócio.", icon: Zap },
    { title: "Publicamos", desc: "Cuidamos de toda parte técnica e hospedagem.", icon: Rocket },
    { title: "Receba contatos", desc: "O site começa a gerar leads diretamente no seu WhatsApp.", icon: TrendingUp },
  ];

  return (
    <section id="como-funciona" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-16 text-center">
          Como <span className="gradient-text">funciona</span>
        </h2>
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
                <p className="text-white/60 text-sm font-medium leading-relaxed">{s.desc}</p>
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
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-16 text-center">
          Comprar vs <span className="gradient-text">Assinar</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-black rounded-[40px] overflow-hidden border-2 border-[#FF0054]/30 shadow-2xl">
          <div className="p-12 lg:p-16 border-r border-[#FF0054]/10">
            <h3 className="text-2xl font-black mb-12 text-white/40 tracking-tighter uppercase">TRADICIONAL</h3>
            <ul className="space-y-10">
              {[
                { text: "Alto custo inicial (R$3k+)", bad: true },
                { text: "Demora meses para entregar", bad: true },
                { text: "Risco de abandono", bad: true },
                { text: "Manutenção por sua conta", bad: true },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-6 text-white/60 font-bold text-lg">
                  <X className="text-red-500/80 shrink-0" size={24} />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0F0108] p-12 lg:p-16 relative">
            <div className="flex justify-between items-start mb-12">
              <h3 className="text-3xl font-black gradient-text tracking-tighter uppercase">DUNO</h3>
              <div className="px-5 py-2 rounded-xl bg-[#FF0054] text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-[0_0_20px_rgba(255,0,84,0.4)] animate-pulse">MELHOR ESCOLHA</div>
            </div>
            <ul className="space-y-10">
              {[
                { text: "Apenas R$ 197 mensais", good: true },
                { text: "Pronto em poucos dias", good: true },
                { text: "Sem risco (cancela quando quiser)", good: true },
                { text: "Técnico e suporte inclusos", good: true },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-6 text-white font-bold text-lg group">
                  <Check className="text-[#00FF80] shrink-0" size={24} strokeWidth={3} />
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
