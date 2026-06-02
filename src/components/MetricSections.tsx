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
                <div 
                  className="w-[48px] h-[48px] rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${p.color}15`, border: `1px solid ${p.color}30` }}
                >
                  <IconComponent size={24} style={{ color: p.color }} strokeWidth={2} />
                </div>
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
  const bulletPoints = [
    { title: "Botão de WhatsApp fixo e visível", icon: MessageSquareCode },
    { title: "Formulário de agendamento online", icon: CalendarDays },
    { title: "Otimizado para aparecer no Google (SEO)", icon: Search },
    { title: "Google Maps integrado", icon: MapPin },
    { title: "100% adaptado para celular", icon: Smartphone },
    { title: "Personalizado com sua logo, cores e fotos", icon: Sparkles }
  ];

  return (
    <section className="py-24 px-6 bg-[#111111] relative overflow-hidden flex items-center justify-center">
      {/* Background visual glosses */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#e91e8c]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute left-[-100px] top-[10%] w-[400px] h-[400px] bg-[#7c3aed]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* COLUNA ESQUERDA: Persuasive text */}
        <div className="text-left">
          <div className="text-[#e91e8c] text-[12px] font-black tracking-[0.2em] uppercase mb-4">
            A SOLUÇÃO
          </div>
          
          <h2 className="text-3xl md:text-[48px] font-black mb-6 uppercase tracking-tight text-white leading-tight">
            Um site profissional <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e91e8c] to-[#7c3aed]">feito para o seu negócio</span>
          </h2>
          
          <p className="text-[#a0a0a0] text-[17px] mb-10 leading-relaxed font-semibold">
            Nós criamos, personalizamos e colocamos no ar. Você só precisa responder os clientes que vão chegar.
          </p>
          
          {/* List of 6 features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {bulletPoints.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-[#e91e8c]/15 border border-[#e91e8c]/30 flex items-center justify-center text-[#e91e8c] shrink-0">
                  <Check size={14} className="stroke-[3]" />
                </div>
                <span className="font-bold text-[16px] text-white">{item.title}</span>
              </motion.div>
            ))}
          </div>

          {/* Badge de destaque (margin-top 32px) */}
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#e91e8c] to-[#7c3aed] rounded-[12px] py-4 px-6 shadow-lg shadow-[#e91e8c]/20 max-w-md">
            <Clock size={20} className="text-white shrink-0" />
            <span className="font-bold text-white text-[16px]">Seu site no ar em até 48 horas</span>
          </div>
        </div>

        {/* COLUNA DIREITA: veterinary site mockup with annotations */}
        <div className="relative w-full max-w-[500px] lg:max-w-none mx-auto select-none">
          {/* Main Showcase wrapper with gradient border styling */}
          <div className="relative p-[1.5px] bg-gradient-to-tr from-[#e91e8c]/50 to-[#7c3aed]/50 rounded-[24px] overflow-visible shadow-2xl">
            
            {/* Embedded interactive-look mockup of a vet clinic */}
            <div className="bg-[#0a0a0a] rounded-[22.5px] p-4 flex flex-col justify-between aspect-[4/3] relative">
              
              {/* Browser window header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-3">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-400/80" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400/80" />
                  <div className="w-2 h-2 rounded-full bg-green-400/80" />
                </div>
                <span className="text-[8px] font-mono text-[#606060] tracking-wider leading-none">bichofeliz-veterinaria.com.br</span>
                <div className="w-8" />
              </div>

              {/* Vet site simulation layout */}
              <div className="flex-1 bg-[#111111] rounded-xl border border-white/5 p-4 flex flex-col justify-between text-left relative overflow-hidden">
                <div className="absolute inset-0 bg-radial-gradient from-[#e91e8c]/5 to-transparent pointer-events-none" />
                
                {/* Simulated Dentist Landing Page navbar */}
                <div className="flex justify-between items-center pb-2 border-b border-white/5 text-[7px] text-white/50 font-bold uppercase">
                  <span>🐾 BICHO FELIZ HOSPIVAL</span>
                  <div className="flex gap-1.5 font-bold">
                    <span>Espaços</span>
                    <span>Vacinas</span>
                  </div>
                </div>

                <div className="my-auto">
                  <span className="text-[6px] text-emerald-400 font-bold uppercase tracking-widest block mb-1">🏥 Aberto 24 Horas</span>
                  <h4 className="text-lg font-black text-white uppercase leading-none tracking-tight mb-1">
                    Cuidado Puro <br />
                    Para Seu Pet
                  </h4>
                  <p className="text-[7px] text-[#a0a0a0] leading-relaxed max-w-[170px] mb-2 font-medium">
                    Serviço hospitalar com infraestrutura completa para banhos, hotelaria, exames de imagem e consultas veterinárias especializadas.
                  </p>
                  
                  {/* WhatsApp button inside mockup */}
                  <span id="mockup-whatsapp-btn" className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#25D366] text-black font-black text-[6px] uppercase tracking-wider shadow-md">
                    Iniciar Atendimento via WhatsApp
                  </span>
                </div>

                {/* Local Maps widget simulated */}
                <div id="mockup-maps-widget" className="grid grid-cols-2 gap-2 border-t border-white/5 pt-2 items-center">
                  <span className="text-[6px] text-[#606060] font-black uppercase">📍 AV. PAULISTA, 450 · SÃO PAULO</span>
                  <span id="mockup-agendamento-btn" className="text-center px-1.5 py-0.5 rounded bg-transparent border border-[#e91e8c] text-[#e91e8c] text-[5px] font-black uppercase">
                    Agendar online
                  </span>
                </div>
              </div>
            </div>

            {/* ANNOTATIVE LABELS AND POINTER LINES */}
            
            {/* Annotation 1: WhatsApp Badge */}
            <div className="absolute -top-10 -right-6 lg:-right-10 bg-white border border-[#2a2a2a] rounded-lg px-2.5 py-1 flex items-center gap-1.5 shadow-xl animate-float z-30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] shrink-0" />
              <span className="text-[10px] font-black text-black uppercase tracking-wider">WhatsApp</span>
            </div>
            {/* SVG Connector for WhatsApp */}
            <svg className="absolute -top-4 right-6 w-16 h-12 pointer-events-none z-20 overflow-visible text-[#e91e8c] opacity-60">
              <line x1="0" y1="0" x2="60" y2="45" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            </svg>

            {/* Annotation 2: Agendamento Badge */}
            <div className="absolute bottom-16 -right-16 bg-white border border-[#2a2a2a] rounded-lg px-2.5 py-1 flex items-center gap-1.5 shadow-xl animate-float z-30" style={{ animationDelay: "1s" }}>
              <span className="text-[#e91e8c] text-xs">📅</span>
              <span className="text-[10px] font-black text-black uppercase tracking-wider">Agendamento</span>
            </div>
            {/* SVG Connector for Agendamento */}
            <svg className="absolute bottom-16 right-0 w-16 h-8 pointer-events-none z-20 overflow-visible text-[#e91e8c] opacity-60">
              <line x1="60" y1="0" x2="0" y2="20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            </svg>

            {/* Annotation 3: Mapa Badge */}
            <div className="absolute -bottom-6 -left-4 bg-white border border-[#2a2a2a] rounded-lg px-2.5 py-1 flex items-center gap-1.5 shadow-xl animate-float z-30" style={{ animationDelay: "2s" }}>
              <span className="text-blue-500">📍</span>
              <span className="text-[10px] font-black text-black uppercase tracking-wider">Mapa</span>
            </div>
            {/* SVG Connector for Mapa */}
            <svg className="absolute -bottom-2 left-10 w-16 h-8 pointer-events-none z-20 overflow-visible text-[#e91e8c] opacity-60">
              <line x1="0" y1="10" x2="40" y2="-10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            </svg>

          </div>
        </div>

      </div>
    </section>
  );
}
