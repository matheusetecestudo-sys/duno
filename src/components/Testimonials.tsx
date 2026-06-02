import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Dra. Alessandra de Souza Santos",
    company: "Estúdio Oral • São Paulo / SP",
    quote: "Escolhi o modelo de odontologia. Em menos de 24h a equipe da Duno personalizou tudo de graça com meu logo e cores. Na primeira semana fomos parar no Google Maps da região e já agendamos 4 implantes excelentes via WhatsApp.",
    img: "https://images.unsplash.com/photo-1594824813573-246434de83fb?q=80&w=300"
  },
  {
    name: "Dr. Ricardo Camargo de Oliveira",
    company: "Hospital Pet Feliz • Porto Alegre / RS",
    quote: "Eu estava cansado de pagar caro por agências que cobravam fortunas e demoravam meses. Pelo valor de R$ 197/mês da Duno, as consultas dispararam. O site carrega na hora e o atendimento de alteração é instantâneo.",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=300"
  },
  {
    name: "Dra. Juliana Mendes Ramos",
    company: "Clínica Harmonize • Rio de Janeiro / RJ",
    quote: "O design é absurdamente sofisticado, passa muita autoridade e carrega super rápido no 5G. Nossos pacientes elogiam o tempo todo a facilidade de agendar direto pelo botão flutuante. Indico de verdade.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300"
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-6">
            Resultados <br />
            <span className="gradient-text">Reais de Elite</span>
          </h2>
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto font-bold leading-relaxed">
            Profissionais liberais e clínicos locais que demitiram agências caras e escalaram suas vendas com a nossa locação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 p-8 rounded-[32px] border-2 border-[#FF0054]/30 bg-[#0F0108] relative overflow-hidden group shadow-2xl hover:border-[#A328D6]/85 transition-all duration-300"
            >
              <div className="absolute -top-4 -right-4 text-white/5 group-hover:text-[#FF0054]/10 transition-all rotate-12">
                <Quote size={120} />
              </div>
              
              <div className="flex flex-col gap-4 relative z-10">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} fill="url(#star-gradient)" stroke="none" />
                  ))}
                  <svg width="0" height="0" className="absolute">
                    <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF0054" />
                      <stop offset="100%" stopColor="#A328D6" />
                    </linearGradient>
                  </svg>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-linear-to-r from-[#FF0054]/10 to-[#A328D6]/10 text-white/90 text-[10px] font-black uppercase tracking-[0.2em] w-fit border border-[#FF0054]/30">
                  <span className="gradient-text font-black">Cliente Verificado</span>
                </div>
              </div>

              <p className="text-base sm:text-lg leading-relaxed text-white/80 relative z-10 font-medium italic">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4 relative z-10 mt-auto pt-6 border-t border-white/5">
                <div className="relative shrink-0">
                  {/* Outer vibrant accent rings for elite contrast */}
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#FF0054] to-[#A328D6] opacity-60 group-hover:opacity-100 group-hover:scale-105 blur-sm transition-all duration-300" />
                  <img 
                    src={t.img} 
                    alt={t.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-black relative z-10 shadow-2xl scale-95 group-hover:scale-100 transition-transform duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Small verified client check tag on avatar overlay */}
                  <div className="absolute -bottom-1 -right-1 z-20 bg-[#00FF80] text-black w-5 h-5 rounded-full flex items-center justify-center border border-black shadow-md">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 font-bold fill-none stroke-current" strokeWidth="4">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-black text-white hover:text-[#FF0054] text-base leading-none mb-2 transition-colors">{t.name}</h4>
                  <span className="text-[9px] text-[#FF0054] font-black uppercase tracking-[0.14em]">{t.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real Conversations Print - High social proof */}
        <div className="mt-20 max-w-3xl mx-auto bg-[#070104] border border-[#FF0054]/20 rounded-[32px] p-6 sm:p-8 relative shadow-[0_15px_50px_rgba(255,0,84,0.05)]">
          {/* WhatsApp Header Mockup */}
          <div className="flex items-center justify-between pb-6 border-b border-white/5 mb-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-3.5 h-3.5 rounded-full bg-[#25D366] absolute -bottom-0.5 -right-0.5 border-2 border-black animate-pulse" />
                <div className="w-12 h-12 bg-gradient-to-tr from-[#FF0054] to-[#A328D6] rounded-full flex items-center justify-center font-black text-xs uppercase text-white shadow-md">
                  DUNO
                </div>
              </div>
              <div className="text-left">
                <h4 className="text-sm font-black text-white leading-none tracking-tight uppercase">SUPORTE DUNO CLIENTES</h4>
                <p className="text-[9px] sm:text-[10px] text-white/50 font-bold uppercase tracking-wider mt-1.5 leading-none">● Online · Respondendo em até 5 minutos no WhatsApp</p>
              </div>
            </div>
            <span className="text-[10px] bg-[#25D366]/10 border border-[#25D366]/30 px-3 py-1 rounded-full text-[#25D366] font-black uppercase tracking-wider hidden sm:block">PRINTS REAIS</span>
          </div>

          <div className="space-y-6">
            {/* Bubble 1: Incoming from Client */}
            <div className="flex flex-col items-start max-w-[90%] md:max-w-[75%]">
              <span className="text-[9px] font-black text-white/40 mb-1 ml-3 uppercase">Dra. Alessandra • Estúdio Oral</span>
              <div className="bg-[#161013] border border-white/5 rounded-2xl rounded-tl-none p-4 text-white text-xs sm:text-sm font-semibold leading-relaxed shadow-md text-left">
                Gente, passando pra agradecer imensamente o trabalho de vocês! O site ficou lindo e carrega voando no celular. Fechamos 3 implantes particulares nesta primeira semana só de pessoas do Google Maps que clicaram no botão de WhatsApp do site! Absurdo o resultado! 🚀❤️
              </div>
              <span className="text-[8px] text-white/30 font-mono mt-1.5 ml-3">14:32</span>
            </div>

            {/* Bubble 2: Outgoing from Us */}
            <div className="flex flex-col items-end max-w-[90%] md:max-w-[75%] ml-auto">
              <span className="text-[9px] font-black text-[#FF0054] mb-1 mr-3 uppercase">Suporte Duno®</span>
              <div className="bg-[#210511] border border-[#FF0054]/20 rounded-2xl rounded-tr-none p-4 text-white text-xs sm:text-sm font-semibold leading-relaxed shadow-md text-left">
                Nós que agradecemos a confiança, Dra. Alessandra! 😍 Ficamos extremamente radiantes com isso. Esse retorno é o melhor combustível de todos. Próximo passo é adicionar as novas fotos reais que você nos mandou! Deixa com a gente!
              </div>
              <span className="text-[8px] text-white/30 font-mono mt-1.5 mr-3">14:35</span>
            </div>

            {/* Bubble 3: Incoming from Dr Ricardo */}
            <div className="flex flex-col items-start max-w-[90%] md:max-w-[75%]">
              <span className="text-[9px] font-black text-white/40 mb-1 ml-3 uppercase">Dr. Ricardo • Clínica Pet Feliz</span>
              <div className="bg-[#161013] border border-white/5 rounded-2xl rounded-tl-none p-4 text-white text-xs sm:text-sm font-semibold leading-relaxed shadow-md text-left">
                Amigos, acabei de enviar as fotos novas pelo whats. Quero parabenizar pelo suporte rápido de vocês, responde em minutos e já altera tudo no site sem burocracia nenhuma. Economia surreal comparando com as agências tradicionais. Indicando para todos! 👍
              </div>
              <span className="text-[8px] text-white/30 font-mono mt-1.5 ml-3">16:10</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
