import { motion } from "motion/react";

const NICHES = [
  { 
    niche: "Dedetizadora", 
    desc: "Pare de perder dinheiro para a concorrência. Uma máquina implacável de vendas projetada para exterminar objeções e dominar sua região.", 
    img: "/Dedetizadora.png",
    link: "https://dedetizadora.duno.net.br/"
  },
  { 
    niche: "Veterinários", 
    desc: "Lotar a sua agenda com tutores apaixonados. Um site premium que transforma visitas em clientes fiéis e faz o seu consultório dominar a região.", 
    img: "/Veterinaria.png",
    link: ""
  },
  { 
    niche: "Advogados", 
    desc: "Autoridade inquestionável. Posicione seu escritório como a única escolha lógica para clientes de alto padrão que não aceitam perder.", 
    img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=600" 
  },
  { 
    niche: "Clínicas Médicas", 
    desc: "Lotação máxima na sua agenda. Transformamos curiosos em pacientes premium desesperados e dispostos a pagar o seu preço.", 
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600" 
  },
  { 
    niche: "Academias & Crossfit", 
    desc: "Esmague a concorrência. Um design visceral que injeta adrenalina no seu prospecto e o força a passar o cartão agora mesmo.", 
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600" 
  },
  { 
    niche: "Estética & Beleza", 
    desc: "Venda luxo, não apenas serviço. Uma vitrine digital predatória que atrai clientes desesperadas pelas suas mãos.", 
    img: "/Estetica.png",
    link: ""
  },
  { 
    niche: "Odontologia", 
    desc: "Sorrisos de alto valor. Posicione sua clínica no topo da pirâmide e pare de brigar por preço em tratamentos estéticos.", 
    img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600" 
  },
  { 
    niche: "Imobiliárias", 
    desc: "Feche contratos milionários. Vitrines agressivas que fazem o comprador sentir a urgência absoluta de investir imediatamente.", 
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600" 
  },
  { 
    niche: "Energia Solar", 
    desc: "O mercado está explodindo e quem chega primeiro leva tudo. Uma landing page implacável para capturar os melhores leads da região.", 
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600" 
  },
  { 
    niche: "Delivery Premium", 
    desc: "Faça-os babar antes mesmo de pedir. Um layout agressivo que ativa o desejo primitivo e multiplica o ticket médio instantaneamente.", 
    img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=600" 
  }
];

export default function Portfolio() {
  return (
    <section id="portfólio" className="py-24 px-6 bg-[#050002] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,0,84,0.08),transparent_60%)] -z-10" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(163,40,214,0.08),transparent_60%)] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 uppercase tracking-tighter"
          >
            ESCOLHA SUA <span className="gradient-text">MÁQUINA DE VENDAS</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Pare de deixar dinheiro na mesa. Selecione a estrutura validada que vai engolir a concorrência e monopolizar o seu mercado.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NICHES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative group flex flex-col p-0 overflow-hidden cursor-pointer h-[480px] sm:h-[550px] rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(255,0,84,0.08)]"
            >
              {/* Imagem - 75% do Card */}
              <div className="h-[75%] w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#050002] via-transparent to-transparent z-10 opacity-80" />
                
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noreferrer" className="block w-full h-full">
                    <img 
                      src={item.img} 
                      alt={item.niche} 
                      className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-100 filter grayscale-[40%] group-hover:grayscale-0 group-hover:object-bottom transition-all duration-[5000ms] ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="py-3.5 px-8 rounded-full bg-gradient-to-r from-[#FF0054] to-[#A328D6] text-white text-sm font-bold shadow-[0_0_30px_rgba(255,0,84,0.4)] transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        Visualizar Site
                      </span>
                    </div>
                  </a>
                ) : (
                  <div className="block w-full h-full relative">
                    <img 
                      src={item.img} 
                      alt={item.niche} 
                      className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-100 filter grayscale-[40%] group-hover:grayscale-0 group-hover:object-bottom transition-all duration-[5000ms] ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none" />
                  </div>
                )}
              </div>

              {/* Texto - 25% do Card */}
              <div className="flex-1 p-6 flex flex-col justify-start bg-[#050002] z-10 relative border-t border-white/5 group-hover:border-white/10 transition-colors">
                <h3 className="text-2xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF0054] group-hover:to-[#A328D6] leading-none uppercase tracking-tight transition-all duration-300">
                   {item.niche}
                </h3>
                <p className="text-white/50 group-hover:text-white/70 text-sm font-medium mt-3 leading-relaxed transition-colors duration-300">
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
