import { Logo } from "./Logo";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { WhatsAppIcon } from "./Icons";

export function Offer() {
  return (
    <section id="preço" className="py-20 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-10">
          Seu site por <br />
          <span className="gradient-text">R$ 197/mês</span>
        </h2>
        
        <div className="pink-card p-6 sm:p-12 mb-16 relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-5 py-2 rounded-2xl bg-linear-to-r from-[#FF0054] to-[#A328D6] text-[11px] sm:text-sm font-black uppercase tracking-widest text-white shadow-[0_0_20px_rgba(255,0,84,0.5)] whitespace-nowrap">
            Oportunidade Única
          </div>

          <p className="text-xl sm:text-2xl md:text-3xl font-display font-black mb-8 md:mb-12 italic tracking-tight">
            "1 cliente fechado já paga o site"
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left mb-8 md:mb-12">
            {[
              "Hospedagem Premium inclusa",
              "Certificado SSL de Segurança",
              "Design de Alta Conversão",
              "Suporte via WhatsApp",
              "Sem Taxa de Adesão",
              "Dê um UP no seu faturamento"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-white/70 font-medium text-sm sm:text-base">
                <div className="w-5 h-5 rounded-full bg-linear-to-br from-[#FF0054] to-[#A328D6] flex items-center justify-center text-white shrink-0">
                  <Plus size={14} strokeWidth={3} />
                </div>
                {item}
              </div>
            ))}
          </div>

          <a 
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="premium-btn w-full py-5 md:py-6 rounded-2xl md:rounded-3xl text-base sm:text-xl md:text-2xl group shadow-2xl flex items-center justify-center gap-2 md:gap-3"
          >
            <span>Quero meu site agora</span>
            <ArrowRight className="w-5 h-5 md:w-7 md:h-7 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
          <p className="mt-8 text-white/60 text-sm font-bold tracking-tight">
            Pagamento recorrente. Sem contrato de fidelidade.
          </p>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "Posso cancelar quando quiser?", a: "Sim! Não temos contrato de fidelidade. Você paga enquanto quiser usar o site." },
    { q: "Quanto tempo demora?", a: "Após o envio das informações, entregamos seu site pronto para uso em até 7 dias úteis." },
    { q: "Funciona para meu nicho?", a: "Sim, trabalhamos com praticamente todos os nichos de serviços e negócios locais." },
    { q: "Preciso pagar algo além da assinatura?", a: "Não. Hospedagem, suporte e manutenção estão inclusos no valor mensal." },
  ];

  return (
    <section id="faq" className="py-20 px-6 bg-black">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-12 text-center">
          Dúvida <span className="gradient-text">Frequente</span>
        </h2>
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="pink-card !p-0 overflow-hidden">
               <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors group"
              >
                <span className="font-bold text-lg md:text-xl">{f.q}</span>
                {openIndex === i ? 
                  <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#FF0054] to-[#A328D6] flex items-center justify-center text-white shadow-lg"><Minus size={18} strokeWidth={3} /></div> : 
                  <div className="text-white/40 group-hover:text-white transition-colors"><Plus size={24} /></div>
                }
              </button>
              {openIndex === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="px-6 pb-8 text-white/70 leading-relaxed font-medium"
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
    <section className="py-32 px-6 text-center relative overflow-hidden">
       {/* Animated background element */}
       <motion.div 
         animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
         transition={{ duration: 10, repeat: Infinity }}
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#7928CA]/10 blur-[150px] -z-10"
       />
       
       <div className="max-w-4xl mx-auto">
         <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-10">
            Pare de perder <br /> 
            <span className="gradient-text">vendas hoje</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 mb-12">
            Junte-se a centenas de empresas que já transformaram sua presença digital com a Duno.
          </p>
          <a 
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="premium-btn px-10 py-5 rounded-full text-xl group flex items-center justify-center gap-2 max-w-sm mx-auto"
          >
            <span>Quero meu site premium</span>
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
             <p className="text-white/80 mb-8 font-medium leading-relaxed text-sm">
               Tenha um site de elite por uma assinatura justa. Escolha seu modelo, nós personalizamos e você escala seu negócio.
             </p>
            <div className="flex gap-6">
               {['Instagram', 'WhatsApp', 'LinkedIn'].map(social => (
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

          <div className="md:col-span-3">
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
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
            © {new Date().getFullYear()} DUNO DIGITAL · ESTÉTICA DE ELITE
          </p>
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
    <a 
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group"
    >
      <div className="absolute -top-10 right-0 px-4 py-2 rounded-xl bg-white text-black text-xs font-bold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
        Fale conosco agora!
      </div>
      <WhatsAppIcon size={32} />
    </a>
  );
}
