import { motion } from "motion/react";
import { WhatsAppIcon } from "./Icons";

const NICHES = [
  { 
    niche: "Dedetizadora", 
    desc: "Design de alta conversão focado em gerar mais orçamentos para sua empresa de controle de pragas.", 
    img: "/Dedetizadora.png",
    link: "https://dedetizadora.duno.net.br/"
  },
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
              className="pink-card group flex flex-col p-0 overflow-hidden cursor-pointer h-[450px] sm:h-[550px]"
            >
              {/* Imagem - 80% do Card */}
              <div className="h-[80%] w-full overflow-hidden relative border-b border-[#FF0054]/20">
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noreferrer" className="block w-full h-full">
                    <img 
                      src={item.img} 
                      alt={item.niche} 
                      className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:object-bottom transition-all duration-[4000ms] ease-in-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                      <span className="py-3 px-6 rounded-xl bg-[#FF0054] text-white text-sm font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        Visualizar Site Completo
                      </span>
                    </div>
                  </a>
                ) : (
                  <div className="block w-full h-full relative">
                    <img 
                      src={item.img} 
                      alt={item.niche} 
                      className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:object-bottom transition-all duration-[4000ms] ease-in-out"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>

              {/* Texto - 20% do Card */}
              <div className="flex-1 p-4 sm:p-5 flex flex-col justify-center bg-[#0F0108] z-10 relative">
                <h3 className="text-xl sm:text-2xl font-black gradient-text leading-none uppercase tracking-tighter">
                   {item.niche}
                </h3>
                <p className="text-white/60 text-sm font-medium mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
