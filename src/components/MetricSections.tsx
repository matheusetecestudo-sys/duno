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
    { title: "Não ter site = Não existir", desc: "Se você não é encontrado no Google, você simplesmente não existe para 97% dos clientes." },
    { title: "Dependência de indicação", desc: "O 'boca a boca' é ótimo, mas não é previsível. Você precisa de uma máquina de leads." },
    { title: "Concorrentes na frente", desc: "Seu concorrente com um site pior que seu serviço está fechando o cliente que deveria ser seu." },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-6">
            Você está <br />
            <span className="gradient-text">perdendo vendas</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            O mercado digital não perdoa quem está invisível. Cada dia sem um site profissional é um dia dando dinheiro para a concorrência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <div key={i} className="pink-card group">
              <div className="w-12 h-12 rounded-full bg-[#FF0054] flex items-center justify-center text-white mb-8 shadow-lg shadow-[#FF0054]/20 text-xl font-black">
                {i+1}
              </div>
              <div>
                <h3 className="text-2xl font-black mb-4 leading-tight text-white normal-case tracking-tight">
                  <span className="gradient-text">{p.title.split(' ')[0]}</span> {p.title.split(' ').slice(1).join(' ')}
                </h3>
                <p className="text-white/60 leading-relaxed font-medium text-base">{p.desc}</p>
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
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Abstract Shape */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-6 transition-all">
            Site de <span className="gradient-text">Elite</span>
          </h2>
          <p className="text-white/60 text-lg mb-10 leading-relaxed">
            Nossa metodologia é focada em velocidade e conversão. Não reinventamos a roda, entregamos o que funciona para o seu nicho.
          </p>
          
          <ul className="space-y-6">
            {[
              "Modelos validados para conversão",
              "Adaptamos suas cores e imagens",
              "Textos persuasivos (Copywriting)",
              "Otimizado para Celular e Google"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-white/90">
                <div className="w-6 h-6 rounded-full bg-linear-to-br from-[#FF0054] to-[#A328D6] flex items-center justify-center text-white">
                  <CheckCircle size={14} strokeWidth={3} />
                </div>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

         <div className="flex-1 relative">
          <div className="relative z-10 pink-card !p-4 md:rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
             <img 
               src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2340&auto=format&fit=crop" 
               alt="Dashboard Solution" 
               className="rounded-2xl shadow-2xl"
               loading="lazy"
             />
             <div className="absolute -bottom-8 -left-8 pink-card !p-6 animate-float hidden md:flex items-center gap-4 shadow-3xl">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#FF0054] to-[#A328D6] flex items-center justify-center text-white shadow-lg shadow-[#FF0054]/20">
                  <TrendingUp size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-2xl font-black gradient-text">+24%</div>
                  <div className="text-[10px] text-white/60 uppercase font-bold tracking-widest">Taxa de Conversão</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
