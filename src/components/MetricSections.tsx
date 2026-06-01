import { motion } from "motion/react";
import { TrendingUp, Users, CheckCircle } from "lucide-react";

export function Metrics() {
  const metrics = [
    { label: "+100 sites criados", sub: "Qualidade comprovada", icon: CheckCircle },
    { label: "Vários nichos", sub: "Experiência em todo mercado", icon: Users },
    { label: "Aumento de leads", sub: "Foco em resultados reais", icon: TrendingUp },
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-2 group-hover:scale-110 transition-transform relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-[#FF0054] to-[#A328D6] opacity-10 group-hover:opacity-20 transition-opacity" />
                <m.icon size={32} className="relative z-10 text-[#FF0054]" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-4xl font-display font-black text-white mb-2 leading-none">{m.label}</h3>
                <p className="text-white/60 text-xs uppercase tracking-[0.2em] font-bold">
                  <span className="gradient-text">{m.sub}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Problem() {
  const points = [
    { title: "Não ter site = Não existir", desc: "Se seu negócio local não é encontrado na primeira página do Google, você simplesmente não existe para 97% dos potenciais clientes locais." },
    { title: "Dependência de indicação", desc: "Contar apenas com indicação é arriscado e instável. Você precisa de um fluxo constante de orçamentos diários no seu WhatsApp." },
    { title: "Concorrentes na frente", desc: "Empresas com serviços piores que o seu estão faturando alto simplesmente por terem um site mais bonito e chamativo." },
    { title: "Pagar caro por agência", desc: "Agências cobram fortunas (de R$ 3.000 a R$ 8.000) e levam meses para entregar. Com a gente, você tem um site profissional ativo em 48h." },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-6">
            Você está <br />
            <span className="gradient-text">perdendo vendas</span>
          </h2>
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-bold">
            O mercado hoje não perdoa empresas invisíveis. Cada dia sem um site de alta conversão é mais dinheiro sendo entregue direto para a concorrência.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, i) => (
            <div key={i} className="pink-card group border border-white/5 bg-[#0F0108]/40 hover:bg-[#0F0108]/90 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#FF0054] flex items-center justify-center text-white mb-8 shadow-lg shadow-[#FF0054]/20 text-xl font-black">
                {i+1}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black mb-4 leading-tight text-white normal-case tracking-tight group-hover:text-[#FF0054] transition-colors">
                  <span className="gradient-text">{p.title.split(' ')[0]}</span> {p.title.split(' ').slice(1).join(' ')}
                </h3>
                <p className="text-white/90 leading-relaxed font-semibold text-sm sm:text-base">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Solution() {
  return (
    <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-b from-black to-[#0F0108]/45">
      {/* Abstract Shape */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF0054]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#FF0054] mb-3 block">ESPECIFICAÇÕES PREMIUM</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 transition-all tracking-tight uppercase">
            Site de <span className="gradient-text">Elite</span>
          </h2>
          <p className="text-white/80 text-base md:text-lg mb-10 leading-relaxed font-semibold">
            Nossa metodologia é 100% focada em atrair e capturar clientes na sua região. Não cobramos taxa de desenvolvimento e entregamos o site totalmente pronto para gerar lucro.
          </p>
          
          <ul className="space-y-6">
            {[
              "Aparece no Google Maps Integrado com seu Perfil Local",
              "Botão de WhatsApp Fixo, Flutuante e Chamativo na Tela",
              "Formulário de Agendamento e Captura de Leads Direto",
              "Carregamento Instantâneo (Otimizado para Celular e 4G/5G)",
              "Criação de Copy persuasiva (textos que vendem seu serviço)",
              "Suporte Técnico e Hospedagem Inclusos na Mensalidade"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-white/90 group">
                <div className="w-6 h-6 rounded-full bg-linear-to-br from-[#FF0054] to-[#A328D6] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-[0_0_10px_rgba(255,0,84,0.4)] group-hover:scale-110 transition-transform">
                  <CheckCircle size={14} strokeWidth={3} />
                </div>
                <span className="font-bold text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 relative w-full max-w-[500px] lg:max-w-none mx-auto">
          <div className="relative z-10 pink-card !p-5 md:rotate-2 hover:rotate-0 transition-all duration-500 shadow-2xl bg-gradient-to-tr from-[#0F0108] to-black border-2 border-[#FF0054]/30 rounded-[32px] overflow-hidden group">
             {/* Tech Grid Background inside card */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,0,84,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,0,84,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
             
             {/* Glowing light behind image */}
             <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#FF0054]/15 blur-2xl rounded-full" />

             {/* Minimalist device header */}
             <div className="flex items-center gap-1.5 mb-4 pb-3 border-b border-white/5">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] ml-auto">ESTRUTURA DE ALTA CONVERSÃO</span>
             </div>

             <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-black">
               <img 
                 src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200" 
                 alt="Aesthetics of Elite Mobile and Web Site Construction" 
                 className="rounded-xl shadow-2xl opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 w-full h-full object-cover"
                 loading="lazy"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

               {/* Simulated Active Live Overlay elements mimicking an actual working site being clicked */}
               <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md p-4 rounded-xl border border-white/10 text-left z-20">
                 <div className="flex justify-between items-center mb-2">
                   <div className="flex items-center gap-1.5">
                     <span className="w-2 h-2 rounded-full bg-[#00FF80] animate-pulse" />
                     <span className="text-[9px] font-black tracking-widest text-[#00FF80] uppercase">Agendamento Ativo</span>
                   </div>
                   <span className="text-[9px] font-semibold text-white/50">Disponível Hoje</span>
                 </div>
                 <div className="h-0.5 bg-white/5 rounded-full mb-3 overflow-hidden">
                   <div className="w-[85%] h-full bg-gradient-to-r from-[#FF0054] to-[#A328D6]" />
                 </div>
                 <div className="flex justify-between items-center">
                   <span className="text-[11px] font-black text-white uppercase">Ortodontia Premium</span>
                   <span className="px-3 py-1 rounded bg-[#FF0054] text-[9px] font-black uppercase text-white shadow-lg shadow-[#FF0054]/20 animate-pulse">
                     Reservar Vaga
                   </span>
                 </div>
               </div>

               {/* Simulated Cursor Clicking */}
               <div className="absolute bottom-6 right-10 w-6 h-6 pointer-events-none group-hover:-translate-x-4 group-hover:-translate-y-2 transition-transform duration-1000 z-30">
                 <svg viewBox="0 0 24 24" className="w-full h-full text-white fill-current drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] filter">
                   <path d="M4.5 3v15.3l4.7-4.3 3.3 6.9 2.8-1.3-3.3-6.9 5.2-.2L4.5 3z" />
                 </svg>
               </div>
             </div>

             {/* Dynamic Float Badge inside card */}
             <div className="absolute top-20 right-8 bg-[#0F0108]/95 backdrop-blur-md border border-[#FF0054]/40 px-3.5 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-xl animate-float">
                <span className="w-2 h-2 rounded-full bg-[#00FF80]" />
                <div className="text-left leading-none">
                  <p className="text-[8px] font-black text-[#FF0054] tracking-widest uppercase">PAGESPEED</p>
                  <p className="text-xs font-black text-white">Excelência 100%</p>
                </div>
             </div>

             {/* Bottom visual overlay bar */}
             <div className="absolute -bottom-8 -left-8 pink-card !p-6 animate-float hidden md:flex items-center gap-4 shadow-3xl border border-white/10 bg-black/90 backdrop-blur-md">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#FF0054] to-[#A328D6] flex items-center justify-center text-white shadow-lg shadow-[#FF0054]/20">
                  <TrendingUp size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-2xl font-black gradient-text">+324%</div>
                  <div className="text-[10px] text-white/60 uppercase font-bold tracking-widest">Leads e Contatos</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
