import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Dr. André Silva",
    company: "Clínica Pet Feliz",
    quote: "Escolhi o modelo de veterinário e em uma semana estava no ar com minhas cores. Por R$ 197 mensais, o site já se pagou no primeiro dia com os agendamentos que recebi.",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2340&auto=format&fit=crop"
  },
  {
    name: "Mariana Costa",
    company: "Costa Advocacia",
    quote: "A facilidade de assinar e ter tudo incluso me deu paz de espírito. O site é premium, carrega rápido e passa toda a autoridade que meu escritório precisava.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2276&auto=format&fit=crop"
  },
  {
    name: "Felipe Mendes",
    company: "Elite Cross",
    quote: "O custo-benefício é imbatível. Um site desse nível custaria milhares de reais em agências. Aqui pago o valor fixo e tenho suporte total para minhas fotos e aulas.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2340&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-6">
            Resultados <br />
            <span className="gradient-text">de Elite</span>
          </h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto font-medium">
            Quem já assinou, colhe os frutos de uma presença digital de alto padrão todos os dias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="pink-card flex flex-col gap-6 relative overflow-hidden group shadow-2xl transition-all"
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
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-linear-to-r from-[#FF0054]/10 to-[#A328D6]/10 text-white/90 text-[10px] font-black uppercase tracking-[0.2em] w-fit border border-[#FF0054]/40">
                  <span className="gradient-text">Verificado</span>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-white/60 relative z-10 font-medium italic">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4 relative z-10 mt-auto pt-6 border-t border-white/5">
                <img 
                  src={t.img} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#FF0054]/20 shadow-2xl"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-black gradient-text text-base leading-none mb-1">{t.name}</h4>
                  <p className="text-xs text-white/40 font-bold uppercase tracking-widest">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
