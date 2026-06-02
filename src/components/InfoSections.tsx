import { motion } from "motion/react";
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
  Award
} from "lucide-react";

// SEÇÃO 5 — COMO FUNCIONA
export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Layout,
      title: "Você escolhe o modelo",
      desc: "Seleciona o template do seu nicho e nos manda logo, cores e textos básicos. Leva 10 minutos.",
      time: "Hoje"
    },
    {
      number: "02",
      icon: Paintbrush,
      title: "Personalizamos tudo",
      desc: "Nossa equipe adapta o site com a identidade visual do seu negócio: logo, paleta de cores e fotos.",
      time: "Em até 24h"
    },
    {
      number: "03",
      icon: Globe,
      title: "Site vai ao ar",
      desc: "Publicamos, configuramos o domínio e fazemos os últimos ajustes. Você recebe o link pronto.",
      time: "Em até 48h"
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Clientes começam a chegar",
      desc: "Seu negócio aparece online, recebe contatos diretos e você só precisa atender.",
      time: "A partir daí"
    }
  ];

  return (
    <section id="como-funciona" className="py-24 px-6 bg-[#0a0a0a] relative">
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-96 h-96 bg-[#e91e8c]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-[48px] font-black mb-3 uppercase tracking-tight text-white">
          Do contato ao site no ar <br />
          <span className="text-[#e91e8c]">em 48 horas</span>
        </h2>
        
        <p className="text-[#a0a0a0] text-[17px] max-w-[600px] mx-auto leading-relaxed font-semibold mb-20 animate-pulse">
          Processo simples. Resultado rápido. Sem burocracia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Optional decorative dotted connection line */}
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-[#e91e8c]/30 to-transparent border-t-2 border-dashed border-[#e91e8c]/30 z-0" />
          
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center bg-[#111111] border border-[#2a2a2a] rounded-[24px] p-8 relative z-10 group hover:border-[#e91e8c]/50 transition-all duration-300"
              >
                {/* Large semi-transparent background step number */}
                <span className="absolute top-4 right-6 text-5xl font-black text-white/[0.05] group-hover:text-[#e91e8c]/10 transition-colors select-none font-mono">
                  {s.number}
                </span>

                {/* Central Icon */}
                <div className="w-[80px] h-[80px] rounded-2xl bg-[#111111] border border-[#2a2a2a] group-hover:border-[#e91e8c] flex items-center justify-center text-[#e91e8c] mb-6 shadow-xl relative transition-transform group-hover:scale-105 duration-300">
                  <Icon size={40} className="text-[#e91e8c] stroke-[1.8]" />
                </div>

                <h3 className="text-lg font-black text-white uppercase tracking-wide text-center mb-2">
                  {s.title}
                </h3>

                {/* Tag de tempo */}
                <span className="inline-block px-2.5 py-0.5 bg-[#e91e8c]/15 text-[#e91e8c] text-[10px] font-black uppercase tracking-widest rounded-md border border-[#e91e8c]/30 mb-4">
                  {s.time}
                </span>

                <p className="text-[#a0a0a0] leading-relaxed text-xs sm:text-sm font-semibold text-center">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Barra abaixo dos passos */}
        <div className="mt-16 p-5 sm:p-6 bg-gradient-to-r from-[#e91e8c] to-[#7c3aed] rounded-[12px] max-w-3xl mx-auto shadow-xl shadow-[#e91e8c]/15">
          <p className="text-white font-black uppercase tracking-widest text-sm sm:text-base leading-none">
            Sem burocracia · Sem contrato · Sem dor de cabeça
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
  ];

  return (
    <section id="vantagens" className="py-24 px-6 bg-[#111111] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[48px] font-black mb-6 uppercase tracking-tight text-white leading-tight">
            Por que mais de 100 negócios <br />
            <span className="text-[#e91e8c]">escolhem a gente</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((b, i) => {
            const AdvantageIcon = b.icon;
            return (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="p-8 rounded-[16px] border border-[#2a2a2a] bg-[#1a1a1a] relative overflow-hidden group hover:border-[#e91e8c]/40 hover:shadow-[0_0_20px_rgba(233,30,140,0.15)] hover:scale-[1.02] transition-all duration-300"
              >
                {/* Icon Inside circle wrapper with custom class variable */}
                <div className={`w-[40px] h-[40px] rounded-full flex items-center justify-center mb-6 border ${b.badgeColor} shrink-0`}>
                  <AdvantageIcon size={20} className="stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">
                    {b.title}
                  </h3>
                  <p className="text-[#a0a0a0] leading-relaxed font-semibold text-xs sm:text-sm">
                    {b.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// SEÇÃO 7 — ANTES E DEPOIS (split 50/50 with gradient center divider)
export function BeforeAfter() {
  const badPoints = [
    "Invisible no Google",
    "Perde cliente para o concorrente",
    "Depende só de indicação",
    "Parece menos profissional",
    "Sem canal de contato direto"
  ];

  const goodPoints = [
    "Aparece no Google da sua cidade",
    "Recece contatos diretos no WhatsApp",
    "Atrai clientes novos todo dia",
    "Transmite confiança e profissionalismo",
    "Agenda online funcionando 24h"
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden border-t border-[#2a2a2a]">
      {/* Visual background atmospheric pink blob */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-[300px] bg-[#e91e8c]/2 blur-[140px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[48px] font-black mb-6 uppercase tracking-tight text-white">
            A diferença que <span className="text-[#e91e8c]">um site faz</span>
          </h2>
        </div>

        {/* 50/50 Split Board with Vertical Gradient Divider */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch mt-12 px-2">
          
          {/* Vertical central divider (Desktop Only) */}
          <div className="hidden md:block absolute top-[5%] bottom-[5%] left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#e91e8c] to-[#7c3aed] z-10" />

          {/* LADO ESQUERDO: "Sem o site" (fundo levemente avermelhado) */}
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

          {/* LADO DIREITO: "Com o site" (fundo levemente esverdeado) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-[16px] border border-emerald-500/15 bg-gradient-to-b from-emerald-950/10 to-black/10 flex flex-col gap-6"
          >
            <div className="pb-3 border-b border-emerald-500/10 flex items-center justify-between">
              <span className="text-xs font-black uppercase text-[#25D366] tracking-[0.2em] bg-emerald-500/10 py-1.5 px-3 rounded-md">
                ✓ DEPOIS — Com a Duno
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
    "Prazo de 30 a 90 dias",
    "Pagamento total adiantado",
    "Sem suporte após entrega",
    "Alterações cobradas à parte",
    "Sem garantia de resultado",
    "Fidelidade contratual"
  ];

  const freelancList = [
    "Qualidade imprevisível",
    "Some depois da entrega",
    "Sem manutenção inclusa",
    "Prazo não confiável",
    "Sem suporte técnico",
    "Você sozinho com o site"
  ];

  const dunoList = [
    "Site no ar em até 48h",
    "Sem taxa de setup",
    "Sem contrato de fidelidade",
    "Suporte incluso",
    "Alterações inclusas",
    "Cancele quando quiser"
  ];

  return (
    <section className="py-24 px-6 bg-[#111111] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[48px] font-black mb-6 uppercase tracking-tight text-white">
            Por que assinar é <span className="text-[#e91e8c]">mais inteligente</span>
          </h2>
          <p className="text-[#a0a0a0] text-sm sm:text-base font-bold uppercase tracking-widest">
            Compare com as outras opções do mercado
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-12 relative z-10 px-2">
          
          {/* Coluna 1 — Agência Tradicional */}
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[24px] p-8 flex flex-col justify-between shrink-0 text-left">
            <div>
              <div className="bg-neutral-800 text-white px-4 py-2 rounded-xl text-center font-bold text-xs uppercase tracking-wider mb-6">
                Agência Tradicional
              </div>
              <p className="text-2xl sm:text-3xl font-black text-white/40 mb-6 font-mono">
                R$3.000–R$8.000
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
              Custo Elevado de Desenvolvimento
            </div>
          </div>

          {/* Coluna 2 — Locação de Site (SUA OFERTA — DESTACADA) */}
          <div className="p-[2px] bg-gradient-to-b from-[#e91e8c] to-[#7c3aed] rounded-[24px] overflow-visible relative text-left shadow-[0_0_40px_rgba(233,30,140,0.3)] scale-100 lg:scale-[1.04]">
            {/* Top Absolute badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#e91e8c] to-[#7c3aed] text-white text-[11px] font-black uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap shadow-md shadow-[#e91e8c]/30">
              ★ MAIS ESCOLHIDO
            </div>

            <div className="bg-[#0a0a0af8] rounded-[22.5px] p-8 h-full flex flex-col justify-between">
              <div>
                <div className="bg-gradient-to-r from-[#e91e8c] to-[#7c3aed] text-white px-4 py-2.5 rounded-xl text-center font-black text-xs uppercase tracking-widest mb-6">
                  Locação de Site Duno®
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
                  href="https://wa.me/5511999999999?text=Olá!%20Fiquei%20interessado%20na%20locação%20de%20sites%20por%20R$197/mês."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4.5 rounded-xl uppercase font-black tracking-widest text-xs text-center flex items-center justify-center bg-gradient-to-r from-[#e91e8c] to-[#7c3aed] text-white hover:brightness-110 hover:scale-103 active:scale-97 transition-all cursor-pointer shadow-lg shadow-[#e91e8c]/25"
                >
                  Quero esse →
                </a>
              </div>
            </div>
          </div>

          {/* Coluna 3 — Freelancer */}
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[24px] p-8 flex flex-col justify-between shrink-0 text-left">
            <div>
              <div className="bg-neutral-800 text-white px-4 py-2 rounded-xl text-center font-bold text-xs uppercase tracking-wider mb-6">
                Freelancer
              </div>
              <p className="text-2xl sm:text-3xl font-black text-white/40 mb-6 font-mono">
                R$800–R$2.000
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
              Sem Manutenção ou Suporte de Longo Prazo
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
