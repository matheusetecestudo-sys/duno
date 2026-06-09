import { motion } from "motion/react";
import { 
  Check, 
  Clock
} from "lucide-react";
import { StyledIcon } from "./StyledIcon";

// SEÇÃO 3 — DOR ("Você está perdendo clientes")
export function Problem() {
  const points = [
    { 
      title: (
        <span>
          Sem site, <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black pb-0.5">sem confiança</span>
        </span>
      ), 
      desc: "Quando um cliente pesquisa sua marca ou serviço e não acha nada sobre você, ele vai direto para o concorrente que aparece de forma profissional no Google. Simples assim.",
      iconName: "XCircle"
    },
    { 
      title: (
        <span>
          Refém das <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black pb-0.5">indicações</span>
        </span>
      ), 
      desc: "Depender só de indicação boca a boca é arriscado. Um mês maravilhoso, um mês vazio. Com um site de alto padrão, você atrai novos clientes interessados todos os dias no automático.",
      iconName: "Users"
    },
    { 
      title: (
        <span>
          Concorrente na <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black pb-0.5">sua frente</span>
        </span>
      ), 
      desc: "Enquanto você adia ter sua página profissional, seu concorrente aparece no topo do Google quando as pessoas buscam na sua região. Esse novo cliente que ligou para ele era para ser seu.",
      iconName: "TrendingUp"
    },
    { 
      title: (
        <span>
          Agência cobrou <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black pb-0.5">caro</span> e não entregou
        </span>
      ), 
      desc: "R$ 3.000, R$ 5.000 ou mais por meses a fio de espera e no final entregaram um painel complexo que ninguém consegue editar. Você merece ter uma solução ágil, completa e acessível hoje.",
      iconName: "DollarSign"
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#121212] relative flex items-center justify-center">
      <div className="max-w-[1100px] w-full mx-auto relative z-10 text-center">
        
        {/* Beautiful Unified Badge with Icon */}
        <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12020b]/90 border border-[#f0134d]/45 text-white mb-6">
          <div className="w-5 h-5 rounded-full bg-[#f0134d] flex items-center justify-center">
            <span className="text-white text-[10px] leading-none mb-0.5 font-bold">✗</span>
          </div>
          <span className="text-[10px] uppercase font-black tracking-widest text-neutral-300">
            Dificuldades sem um site de elite
          </span>
        </div>

        <h2 className="text-3xl md:text-[44px] lg:text-[48px] font-black uppercase tracking-tight mb-4 leading-[1.1] text-white">
          VOCÊ ESTÁ <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">PERDENDO CLIENTES</span> <br />
          E <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">VENDAS</span> TODOS OS DIAS
        </h2>
        
        <p className="text-[#a0a0a0] text-[17px] max-w-[600px] mx-auto leading-relaxed font-semibold mb-16">
          A falta de uma presença digital ultra profissional está custando clientes reais que poderiam estar agendando no seu WhatsApp.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {points.map((p, i) => {
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-8 pb-10 rounded-[20px] bg-[#410e28] border-2 border-[#e10270] relative overflow-hidden group hover:shadow-[0_0_25px_rgba(225,2,112,0.35)] hover:scale-[1.02] transition-all duration-300 text-left flex flex-col items-start gap-6"
              >
                <div className="flex justify-start">
                  <StyledIcon iconName={p.iconName} size={24} containerSize={48} flat={true} className="!mx-0 !my-0" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 leading-snug w-fit text-white">
                    {p.title}
                  </h3>
                  <p className="text-[#a0a0a0] leading-relaxed font-semibold text-xs sm:text-sm">
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
      title: (
        <span>
          WhatsApp de <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black pb-0.5">Alta Conversão</span>
        </span>
      ), 
      desc: "Botão flutuante perfeitamente posicionado e pré-configurado com mensagem personalizada para direcionar novos contatos direto para seu WhatsApp.", 
      iconName: "MessageCircle" 
    },
    { 
      title: (
        <span>
          Agendamento <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black pb-0.5">Prático</span>
        </span>
      ), 
      desc: "Formulário estratégico para que novos pacientes ou clientes agendem consultas e serviços de forma totalmente rápida.", 
      iconName: "Calendar" 
    },
    { 
      title: (
        <span>
          Otimizado para <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black pb-0.5">Google (SEO)</span>
        </span>
      ), 
      desc: "Programado sob as estritas diretrizes oficiais de indexação local (SEO), ampliando sua visibilidade na sua cidade.", 
      iconName: "Search" 
    },
    { 
      title: (
        <span>
          Google <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black pb-0.5">Maps Integrado</span>
        </span>
      ), 
      desc: "Integração do mapa interativo oficial para que seus clientes tracem rotas físicas exatas até seu consultório com apenas um toque.", 
      iconName: "MapPin" 
    },
    { 
      title: (
        <span>
          Design <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black pb-0.5">Mobile-First</span>
        </span>
      ), 
      desc: "Interface ultra-veloz, desenvolvida sob medida para carregar velozmente até nas conexões 3G/4G mais instáveis.", 
      iconName: "Smartphone" 
    },
    { 
      title: (
        <span>
          100% <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black pb-0.5">Personalizado</span>
        </span>
      ), 
      desc: "Nossa equipe adapta todo o layout com sua identidade visual: logotipo, paleta de cores e fotografias reais do seu consultório.", 
      iconName: "Sparkles" 
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#121212] relative overflow-hidden flex items-center justify-center">
      {/* Background visual glosses */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#f0134d]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute left-[-100px] top-[10%] w-[400px] h-[400px] bg-[#9b1fbd]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10 text-center">
        
        {/* Beautiful Unified Badge with Icon */}
        <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12020b]/90 border border-[#f0134d]/45 text-white mb-6">
          <div className="w-5 h-5 rounded-full bg-[#f0134d] flex items-center justify-center">
            <span className="text-white text-[10px] leading-none mb-0.5 font-bold">✓</span>
          </div>
          <span className="text-[10px] uppercase font-black tracking-widest text-neutral-300">
            A Solução Exclusiva Duno
          </span>
        </div>

        <h2 className="text-3xl md:text-[44px] lg:text-[48px] font-black mb-4 uppercase tracking-tight leading-tight text-white">
          UM <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">SITE PROFISSIONAL</span> <br />
          FEITO PARA SEU NEGÓCIO <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">VENDER</span>
        </h2>
        
        <p className="text-[#a0a0a0] text-[17px] md:text-[19px] max-w-[720px] mx-auto leading-relaxed font-semibold mb-16">
          Nós criamos, personalizamos e colocamos seu modelo de elite no ar em até 48 horas, estruturado para conversão rápida.
        </p>

        {/* Beautiful Modern Grid Layout matching Print 1 precisely */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {features.map((item, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-8 pb-10 rounded-[20px] bg-[#410e28] border-2 border-[#e10270] relative overflow-hidden group hover:shadow-[0_0_25px_rgba(225,2,112,0.35)] hover:scale-[1.02] transition-all duration-300 text-left flex flex-col items-start gap-6 justify-between animate-glow"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#f0134d]/5 to-transparent blur-xl rounded-full pointer-events-none" />
                <div>
                  <div className="mb-6 flex justify-start">
                    <StyledIcon iconName={item.iconName} size={24} containerSize={48} flat={true} className="!mx-0 !my-0" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight leading-snug w-fit text-white">{item.title}</h3>
                  <p className="text-[#a0a0a0] text-xs sm:text-sm leading-relaxed font-semibold">{item.desc}</p>
                </div>
                <div className="w-full pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-[#f0134d] uppercase tracking-wider mt-2">
                  <span>100% Editável</span>
                  <span className="opacity-0 group-hover:opacity-100 text-[#25D366] transition-opacity duration-300 flex items-center gap-1">✓ Pronto</span>
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
            <Check size={16} className="text-[#f0134d] stroke-[3]" />
            <span className="text-xs font-black text-white uppercase tracking-wider">Hospedagem de Alta Resposta AWS</span>
          </div>
          <div className="w-[1px] h-4 bg-[#2a2a2a] hidden sm:block" />
          <div className="flex items-center gap-3">
            <Clock size={16} className="text-[#9b1fbd]" />
            <span className="text-xs font-black text-white uppercase tracking-wider">No ar em 48 Horas</span>
          </div>
        </div>

      </div>
    </section>
  );
}
