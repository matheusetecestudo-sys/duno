import { motion } from "motion/react";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Location() {
  return (
    <section id="localizacao" className="py-24 px-6 bg-[#050002] relative overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(255,0,84,0.08),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 uppercase tracking-tighter"
          >
            Nossa <span className="gradient-text">Localização</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg max-w-2xl mx-auto font-medium"
          >
            Venha tomar um café conosco ou entre em contato. Nossa equipe está pronta para escalar o seu negócio.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Informações de Contato */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1 flex flex-col gap-6"
          >
            <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF0054]/20 to-[#A328D6]/20 flex items-center justify-center mb-6 border border-[#FF0054]/20">
                <MapPin className="text-[#FF0054] w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Endereço</h3>
              <p className="text-white/60 leading-relaxed">
                Avenida Paulista, 1000<br />
                Bela Vista, São Paulo - SP<br />
                CEP: 01310-100
              </p>
            </div>
            
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF0054]/20 to-[#A328D6]/20 flex items-center justify-center mb-6 border border-[#FF0054]/20">
                <Phone className="text-[#FF0054] w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Contato</h3>
              <p className="text-white/60 leading-relaxed">
                (11) 99999-9999<br />
                Seg a Sex, 9h às 18h
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF0054]/20 to-[#A328D6]/20 flex items-center justify-center mb-6 border border-[#FF0054]/20">
                <Mail className="text-[#FF0054] w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">E-mail</h3>
              <p className="text-white/60 leading-relaxed">
                contato@duno.net.br
              </p>
            </div>
          </motion.div>

          {/* Mapa */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 rounded-3xl overflow-hidden border border-white/5 relative min-h-[400px] lg:min-h-full bg-white/[0.02] group"
          >
            <div className="absolute inset-0 bg-[#050002]/20 pointer-events-none group-hover:bg-transparent transition-colors duration-500 z-10" />
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975765581177!2d-46.65430858440536!3d-23.561338867475874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(100%) brightness(80%)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
