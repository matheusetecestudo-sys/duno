import { Logo } from "./Logo";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { WhatsAppIcon } from "./Icons";

export function Offer() {
  return (
    <section id="preço" className="py-20 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs font-black uppercase tracking-[0.25em] text-[#FF0054] mb-3 block">ASSINATURA DESCOMPLICADA</span>
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-10">
          Seu site por <br />
          <span className="gradient-text">R$ 197/mês</span>
        </h2>
        
        <div className="pink-card p-6 sm:p-12 mb-16 relative border border-[#FF0054]/40 bg-gradient-to-b from-[#0F0108] to-black shadow-[0_20px_50px_rgba(255,0,84,0.15)]">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-5 py-2 rounded-2xl bg-linear-to-r from-[#FF0054] to-[#A328D6] text-[11px] sm:text-xs font-black uppercase tracking-widest text-white shadow-[0_0_20px_rgba(255,0,84,0.5)] whitespace-nowrap animate-pulse">
            Oportunidade de Lançamento
          </div>

          {/* Dr. Ana High Quality Testimonial inside Offer panel */}
          <div className="flex flex-col items-center mb-10 text-center max-w-2xl mx-auto bg-white/5 p-6 rounded-2xl border border-white/5 shadow-inner">
            <p className="text-base sm:text-lg md:text-xl font-bold text-white/90 italic mb-6 leading-relaxed">
              "Eu precisava de uma página profissional urgentemente para atrair pacientes particulares. O site ficou pronto em 48h com minhas fotos e marcas. Um único paciente vindo do Google Meu Negócio já pagou todo o plano anual!"
            </p>
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#FF0054] to-[#A328D6] opacity-60 pointer-events-none" />
                <img 
                  src="https://images.unsplash.com/photo-1594824813573-246434de83fb?q=80&w=200&auto=format&fit=crop" 
                  alt="Dra. Ana, clínica odontológica" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-black relative z-10"
                />
              </div>
              <div className="text-left">
                <p className="text-sm font-black text-white leading-none mb-1">Dra. Ana Carolina</p>
                <p className="text-[10px] text-[#FF0054] font-black uppercase tracking-wider">Clínica Odontológica · Dentista - SP</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left mb-10">
            {[
              "Hospedagem Premium inclusa sem custos extras",
              "Certificado SSL de Segurança ativo",
              "Design de Elite de Alta Conversão",
              "Suporte total ilimitado via WhatsApp",
              "Adaptado com suas fotos, cores e marca",
              "Nenhuma taxa de criação ou adesão"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-white/90 font-bold text-sm sm:text-base">
                <div className="w-5 h-5 rounded-full bg-linear-to-br from-[#FF0054] to-[#A328D6] flex items-center justify-center text-white shrink-0 shadow-[0_0_8px_rgba(255,0,84,0.3)]">
                  <Plus size={14} strokeWidth={3} />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* High Urgency CTA Button */}
          <a 
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="premium-btn w-full py-5 md:py-6 rounded-2xl md:rounded-3xl text-sm sm:text-lg md:text-xl group shadow-2xl flex items-center justify-center gap-2 md:gap-3 transition-colors uppercase font-black tracking-wide"
          >
            <span>Quero meu site agora — começar hoje</span>
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300 shrink-0" />
          </a>
          <p className="mt-6 text-white/50 text-xs font-bold tracking-tight">
            Pagamento recorrente simples. Cancele e mude quando quiser.
          </p>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { 
      q: "Posso cancelar a qualquer momento?", 
      a: "Sim! Não temos contrato de fidelidade ou multa rescisória. Você paga a assinatura simples mensal e pode cancelar quando desejar, mantendo o controle total sobre o seu negócio." 
    },
    { 
      q: "Quanto tempo leva para o site ficar pronto?", 
      a: "Nosso processo é extremamente ágil e descomplicado. Uma vez enviado o logotipo, fotos e informações básicas, nós adaptamos seu modelo escolhido em até 48 horas!" 
    },
    { 
      q: "O site aparece no Google?", 
      a: "Com certeza. Nossos modelos de elite são projetados desde o primeiro minuto seguindo as melhores práticas globais de SEO (otimização para buscas) e já vêm prontos para serem integrados ao Google Maps e Google Meu Negócio." 
    },
    { 
      q: "E se eu quiser trocar as fotos ou informações depois?", 
      a: "Não se preocupe! Mudou de telefone, adicionou serviços ou quer renovar as fotos? Basta nos solicitar direto no suporte via WhatsApp que nós atualizamos seu site rapidamente para você. A manutenção periódica já está totalmente inclusa na sua assinatura." 
    },
  ];

  return (
    <section id="faq" className="py-20 px-6 bg-black border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-12 text-center">
          Dúvida <span className="gradient-text">Frequente</span>
        </h2>
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="pink-card !p-0 overflow-hidden border border-white/5 bg-[#0F0108]/40 hover:bg-[#0F0108]/90 transition-all duration-300">
               <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors group"
              >
                <span className="font-bold text-lg md:text-xl text-white">{f.q}</span>
                {openIndex === i ? 
                  <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#FF0054] to-[#A328D6] flex items-center justify-center text-white shadow-lg"><Minus size={18} strokeWidth={3} /></div> : 
                  <div className="text-white/40 group-hover:text-white transition-colors"><Plus size={24} /></div>
                }
              </button>
              {openIndex === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="px-6 pb-8 text-white/80 leading-relaxed font-semibold text-sm sm:text-base"
                >
                  <div className="pt-4 border-t border-white/5">
                    {f.a}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="py-32 px-6 text-center relative overflow-hidden bg-gradient-to-b from-black to-[#0F0108]/90">
       {/* Animated background element */}
       <motion.div 
         animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
         transition={{ duration: 10, repeat: Infinity }}
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#7928CA]/10 blur-[150px] -z-10"
       />
       
       <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-10 uppercase tracking-tight">
            Pare de perder <br /> 
            <span className="gradient-text">vendas hoje</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-12 font-bold max-w-2xl mx-auto leading-relaxed">
            Junte-se a dezenas de empresas locais que já decolaram suas vendas com nossa estrutura rápida, prática e sem custos abusivos de desenvolvimento de agências.
          </p>
          <a 
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="premium-btn px-10 py-5 rounded-full text-lg uppercase font-black tracking-widest group flex items-center justify-center gap-2 max-w-sm mx-auto shadow-[0_0_30px_rgba(255,0,84,0.4)] hover:shadow-[0_0_40px_rgba(255,0,84,0.65)] transition-all"
          >
            <span>Começar Meu Site Agora</span>
            <ArrowRight size={22} className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </a>
        </div>
    </section>
  );
}

export function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id.toLowerCase().replace(/ /g, "-"));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-20 px-6 border-t-2 border-[#FF0054]/40 bg-linear-to-b from-[#0F0108] to-black relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF0054]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4 max-w-sm">
             <Logo className="mb-6" size="sm" />
             <p className="text-white/80 mb-8 font-semibold leading-relaxed text-sm">
               Tenha um site de elite por uma assinatura justa de apenas R$197/mês. Escolha seu modelo, nós personalizamos de graça em 48h e você escala seus orçamentos no seu WhatsApp.
             </p>
            <div className="flex gap-6">
               {['Instagram', 'WhatsApp', 'E-mail'].map(social => (
                 <a key={social} href="#" className="text-xs uppercase tracking-[0.2em] font-black text-white/70 hover:text-[#FF0054] transition-all">
                   {social}
                 </a>
               ))}
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <h4 className="font-black mb-6 text-[11px] uppercase tracking-[0.2em] text-[#FF0054]">Navegação</h4>
            <ul className="space-y-3">
               {["Como funciona", "Portfólio", "Benefícios", "Depoimentos", "Preço"].map(item => (
                 <li key={item}>
                   <button 
                     onClick={() => scrollTo(item)}
                     className="text-xs font-bold text-white/70 hover:text-[#FF0054] cursor-pointer transition-all hover:translate-x-1"
                   >
                     {item}
                   </button>
                 </li>
               ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-black mb-6 text-[11px] uppercase tracking-[0.2em] text-[#FF0054]">Contato</h4>
            <ul className="space-y-3 text-xs font-bold text-white/80">
               <li className="hover:text-white transition-colors cursor-pointer">contato@duno.com.br</li>
               <li className="text-white text-sm">+55 (11) 99999-9999</li>
               <li className="text-[#FF0054]/60 font-medium">São Paulo, BR</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-black mb-6 text-[11px] uppercase tracking-[0.2em] text-[#FF0054]">Status</h4>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-linear-to-r from-[#FF0054] to-[#A328D6] animate-pulse shadow-[0_0_10px_rgba(255,0,84,0.6)]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#FF0054]/90">Agência Online</span>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-left">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-1.5">
              © {new Date().getFullYear()} DUNO DIGITAL · ESTÉTICA DE ELITE
            </p>
            <p className="text-[9px] font-bold text-white/35">
              DUNO TECNOLOGIA LTDA · CNPJ: 45.182.903/0001-89 · Av. Paulista, 1000 - Bela Vista - São Paulo / SP
            </p>
          </div>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
            <span className="hover:text-white cursor-pointer transition-colors">Termos de Uso</span>
            <span className="hover:text-white cursor-pointer transition-colors">Privacidade</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[100] flex items-center justify-center pointer-events-auto">
      {/* Visual pulse indicator around the floating WhatsApp badge */}
      <span className="absolute inline-flex h-20 w-20 rounded-full bg-emerald-500/25 animate-ping pointer-events-none" />
      <a 
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:scale-110 active:scale-95 transition-all group"
      >
        <div className="absolute -top-12 right-0 px-4 py-2 rounded-xl bg-black/90 border border-white/10 text-white text-xs font-black tracking-wide whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
          Falar com Consultor
        </div>
        <WhatsAppIcon size={34} />
      </a>
    </div>
  );
}
