import { motion } from "motion/react";
import { 
  XCircle, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Check, 
  Clock, 
  MapPin, 
  CalendarDays, 
  Smartphone, 
  MessageSquareCode, 
  Sparkles,
  Search
} from "lucide-react";
import { StyledIcon } from "./StyledIcon";

// SEÇÃO 3 — DOR ("Você está perdendo vendas")
export function Problem() {
  const points = [
    { 
      title: "Sem site, sem confiança", 
      desc: "Quando um cliente pesquisa sua clínica e não acha nada, ele vai direto para o concorrente que aparece no Google. Simples assim.",
      icon: XCircle,
      color: "#ef4444" // red
    },
    { 
      title: "Refém das indicações", 
      desc: "Depender só de indicação é arriscado. Um mês bom, um mês ruim. Com um site, você atrai clientes novos todos os dias, no piloto automático.",
      icon: Users,
      color: "#f97316" // orange
    },
    { 
      title: "Concorrente na sua frente", 
      desc: "Enquanto você não tem site, seu concorrente aparece no topo do Google quando alguém busca pelo seu serviço na sua cidade. Esse cliente era seu.",
      icon: TrendingUp,
      color: "#e91e8c" // pink
    },
    { 
      title: "Agência cobrou caro e não entregou", 
      desc: "R$3.000, R$5.000 ou mais, meses de espera e um site que ninguém sabe usar. Você merece uma opção melhor do que isso.",
      icon: DollarSign,
      color: "#7c3aed" // purple
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0a] relative flex items-center justify-center">
      <div className="max-w-[1100px] w-full mx-auto relative z-10 text-center">
        
        <h2 className="text-3xl md:text-[48px] font-black mb-4 uppercase tracking-tight text-white leading-tight">
          Você está <span className="text-[#e91e8c] italic font-black">perdendo vendas</span>
        </h2>
        
        <p className="text-[#a0a0a0] text-[17px] max-w-[600px] mx-auto leading-relaxed font-semibold mb-16">
          A falta de presença digital está custando clientes reais para o seu negócio. Todo dia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {points.map((p, i) => {
            const IconComponent = p.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6 p-8 rounded-[16px] border border-[#2a2a2a] bg-[#1a1a1a] hover:border-[#e91e8c]/60 hover:scale-[1.02] transition-all duration-300"
              >
                <StyledIcon icon={IconComponent} size={24} containerSize={56} className="mb-2" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {p.title}
                  </h3>
                  <p className="text-[#a0a0a0] leading-relaxed font-medium text-[15px]">
                    {p.desc}
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

// SEÇÃO 4 — SOLUÇÃO ("Site de Elite")
export function Solution() {
  const features = [
    { 
      title: "WhatsApp de Alta Conversão", 
      desc: "Botão flutuante perfeitamente posicionado e pré-configurado com mensagem personalizada para direcionar novos contatos direto para o seu bolso.", 
      icon: MessageSquareCode 
    },
    { 
      title: "Agendamento Prático", 
      desc: "Formulário estratégico para que novos pacientes ou clientes agendem consultas e serviços com facilidade e credibilidade.", 
      icon: CalendarDays 
    },
    { 
      title: "Otimizado para o Google", 
      desc: "Programado sob as estritas diretrizes oficiais de indexação local (SEO), maximizando as chances do seu negócio liderar buscas locais.", 
      icon: Search 
    },
    { 
      title: "Localização Inteligente", 
      desc: "Google Maps interativo integrado para que seus potenciais clientes tracem rotas diretas até o seu endereço físico com um só clique.", 
      icon: MapPin 
    },
    { 
      title: "Design Mobile-First", 
      desc: "Interface ultra-fluida e responsiva, desenvolvida sob medida para carregar velozmente até nas conexões 3G e 4G mais instáveis.", 
      icon: Smartphone 
    },
    { 
      title: "100% Personalizado", 
      desc: "Nossa equipe adapta todo o layout com sua própria marca: logotipo, paleta de cores e fotografias do seu negócio real.", 
      icon: Sparkles 
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#111111] relative overflow-hidden flex items-center justify-center">
      {/* Background visual glosses */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#e91e8c]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute left-[-100px] top-[10%] w-[400px] h-[400px] bg-[#7c3aed]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10 text-center">
        <div className="text-[#e91e8c] text-[12px] font-black tracking-[0.2em] uppercase mb-4 animate-pulse">
          A SOLUÇÃO
        </div>
        
        <h2 className="text-3xl md:text-[54px] font-black mb-6 uppercase tracking-tight text-white leading-tight">
          Um site profissional <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e91e8c] to-[#7c3aed]">feito para o seu negócio vender</span>
        </h2>
        
        <p className="text-[#a0a0a0] text-[17px] md:text-[19px] max-w-[720px] mx-auto leading-relaxed font-semibold mb-16">
          Nós criamos, personalizamos e colocamos seu modelo de elite no ar em até 48 horas. Veja toda a estrutura inclusa, construída sem peso e otimizada para conversão:
        </p>

        {/* Beautiful Modern Grid Layout without images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative p-[1px] rounded-[20px] bg-[#2a2a2a] hover:bg-gradient-to-tr hover:from-[#e91e8c]/50 hover:to-[#7c3aed]/50 transition-all duration-300"
              >
                <div className="bg-[#161616] h-full p-8 rounded-[19px] flex flex-col gap-5 justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#e91e8c]/5 to-transparent blur-xl rounded-full" />
                  <div>
                    <div className="mb-6">
                      <StyledIcon icon={Icon} size={24} containerSize={56} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-[#a0a0a0] text-sm leading-relaxed font-medium">{item.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-[#e91e8c] uppercase tracking-wider">
                    <span>100% Incluso</span>
                    <span className="opacity-0 group-hover:opacity-100 text-emerald-500 transition-opacity duration-300 flex items-center gap-1">✓ Integrado</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Real hosting, no maintenance, high performance cards below */}
        <div className="mt-16 inline-flex flex-wrap items-center justify-center gap-6 bg-[#161616] border border-[#2a2a2a] rounded-[20px] p-6 shadow-xl max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-black text-white uppercase tracking-wider">Tráfego Ilimitado</span>
          </div>
          <div className="w-[1px] h-4 bg-[#2a2a2a] hidden sm:block" />
          <div className="flex items-center gap-3">
            <Check size={16} className="text-[#e91e8c] stroke-[3]" />
            <span className="text-xs font-black text-white uppercase tracking-wider">Hospedagem de Alta Resposta AWS</span>
          </div>
          <div className="w-[1px] h-4 bg-[#2a2a2a] hidden sm:block" />
          <div className="flex items-center gap-3">
            <Clock size={16} className="text-[#7c3aed]" />
            <span className="text-xs font-black text-white uppercase tracking-wider">No ar em 48 Horas</span>
          </div>
        </div>

      </div>
    </section>
  );
}
