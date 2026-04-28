import { motion } from "motion/react";
import { WhatsAppIcon } from "./Icons";

const NICHES = [
  { 
    niche: "Veterinários", 
    desc: "Personalizamos este modelo com as cores e fotos da sua clínica pet em tempo recorde.", 
    img: "https://images.unsplash.com/photo-1576201836106-cf175821f00e?q=80&w=600" 
  },
  { 
    niche: "Advogados", 
    desc: "Um design sóbrio e autoritário que adaptamos para o seu escritório jurídico.", 
    img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=600" 
  },
  { 
    niche: "Clínicas", 
    desc: "Design clean e moderno pronto para receber a identidade visual do seu consultório.", 
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600" 
  },
  { 
    niche: "Academia", 
    desc: "Design de alta energia que customizamos para o seu método de treinamento.", 
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600" 
  },
  { 
    niche: "Nutrição", 
    desc: "Sua autoridade e consultas a um clique de distância com este modelo premium.", 
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2340&auto=format&fit=crop" 
  },
  { 
    niche: "Restaurante", 
    desc: "Modelo visual de dar água na boca adaptado para o cardápio do seu restaurante.", 
    img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=600" 
  }
];

export default function Portfolio() {
  return (
    <section id="portfólio" className="py-20 px-6 bg-black relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#FF0054]/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#A328D6]/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-6">
            Escolha seu <span className="gradient-text">Modelo</span>
          </h2>
          <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto">
            Selecione o design que mais gosta e nós cuidamos de toda a personalização para o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NICHES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="pink-card group flex flex-col p-0 overflow-hidden cursor-pointer h-full"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.niche} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0F0108] to-transparent opacity-80" />
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-black gradient-text leading-none uppercase tracking-tighter">
                     {item.niche}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-[#FF0054] flex items-center justify-center text-white shadow-lg shadow-[#FF0054]/20 scale-90 group-hover:scale-100 transition-transform">
                    <WhatsAppIcon size={20} />
                  </div>
                </div>
                <p className="text-white/80 text-base font-medium leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-auto pt-6 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-[#FF0054] to-[#A328D6]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50">Modelo Verificado</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
