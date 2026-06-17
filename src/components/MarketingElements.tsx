import { Logo } from "./Logo";
import { Plus, Minus, ArrowRight, ShieldCheck, Heart, Landmark, Check, Users, MessageSquare, Star, Quote } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { WhatsAppIcon } from "./Icons";
import Counter from "./Counter";
import { StyledIcon } from "./StyledIcon";

// SEÇÃO 9 — PROVA SOCIAL REAL (Beautiful Editorial Testimonial Cards)
export function SocialProof() {
  const testimonials = [
    {
      name: "Dr. Paulo Silveira",
      role: "Cirurgião Dentista",
      neighborhood: "Campinas - SP",
      avatarUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150&h=150",
      rating: 5,
      text: "Ter meu site com a Duno transformou a captação de pacientes no meu consultório! Eu não tenho tempo de codificar ou gerenciar servidores AWS. Com a assinatura de R$ 197/mês, os engenheiros deles colocaram minha landing page no ar em 48 horas e cuidam de 100% de tudo para mim. Se preciso trocar um texto ou foto, solicito via WhatsApp e eles resolvem imediatamente."
    },
    {
      name: "Dra. Amanda Silveira",
      role: "Nutricionista Clínica",
      neighborhood: "Curitiba - PR",
      avatarUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150&h=150",
      rating: 5,
      text: "Meu site é leve, carrega instantaneamente no celular e tem um visual minimalista e luxuoso. No primeiro mês após colocarem o site no ar, fechei mais de 12 novos agendamentos premium com pessoas que me encontraram no Google. O suporte deles pelo WhatsApp é muito prestativo e ágil, recomendo totalmente."
    },
    {
      name: "Thiago Ramos",
      role: "Fisioterapeuta Dermato-Funcional",
      neighborhood: "São Paulo - SP",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=150&h=150",
      rating: 5,
      text: "A assinatura da Duno é de longe o investimento de maior retorno no meu negócio! O custo fixo de R$ 197/mês substituiu o valor absurdo que as agências tradicionais cobravam para criar, editar ou hospedar meu site. Não há contratos de fidelidade enrolados, mudo o que quiser e o suporte é sensacional."
    }
  ];

  return (
    <section id="depoimentos" className="py-24 px-6 bg-[#121212] relative overflow-hidden border-t border-[#2a2a2a]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#e91e8c]/3 blur-[140px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        
        {/* Beautiful Unified Badge with Icon */}
        <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12020b]/90 border border-[#f0134d]/45 text-white mb-6">
          <div className="w-5 h-5 rounded-full bg-[#f0134d] flex items-center justify-center">
            <StyledIcon iconName="MessageSquare" size={10} className="text-white fill-white" />
          </div>
          <span className="text-[10px] uppercase font-black tracking-widest text-neutral-300">
            depoimentos reais
          </span>
        </div>

        {/* Title H2 */}
        <h2 className="text-3xl md:text-[44px] lg:text-[48px] font-black uppercase tracking-tight mb-4 leading-tight text-white">
          QUEM JÁ ADQUIRIU O PACK <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">RECOMENDA DE VERDADE</span>
        </h2>
        
        <p className="text-[#a0a0a0] text-[17px] max-w-[650px] mx-auto leading-relaxed font-semibold mb-16">
          Veja a opinião real de profissionais que multiplicaram a velocidade de criação e a conversão de seus clientes usando nossos modelos premium de páginas:
        </p>

        {/* 3 Columns Premium Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="pink-card hover:scale-[1.02] !p-8 !pb-10"
            >
              {/* Background elegant Quote Icon */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#f0134d]/5 group-hover:text-[#f0134d]/10 transition-colors pointer-events-none stroke-[2]" />
              
              <div>
                {/* 5-Star Rating */}
                <div className="flex gap-1.5 mb-5 shrink-0">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={15} className="fill-[#f0134d] text-[#f0134d]" />
                  ))}
                </div>

                {/* Comment Text with elegant paragraph font */}
                <p className="text-[#a0a0a0] leading-relaxed font-semibold text-xs sm:text-sm text-left italic mb-6">
                  "{t.text}"
                </p>
              </div>

              {/* Profile Card Header */}
              <div className="flex items-center gap-4 bg-white/[0.02] border border-white/5 rounded-xl p-4 mt-auto">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-[#f0134d]/40 shrink-0 bg-neutral-900 shadow-md">
                  <img 
                    src={t.avatarUrl} 
                    alt={t.name} 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="truncate flex-1">
                  <h4 className="text-white text-sm font-black truncate leading-tight uppercase tracking-tight">{t.name}</h4>
                  <p className="text-[10px] text-[#f0134d] font-black uppercase tracking-wider truncate mt-0.5">{t.role}</p>
                  <p className="text-[9px] text-[#606060] font-semibold truncate leading-none mt-0.5">{t.neighborhood}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

// SEÇÃO 11 — PREÇO + CTA PRINCIPAL
export function Offer() {
  const benefits = [
    "Hospedagem inclusa de alta resposta AWS",
    "Manutenção técnica completa sem preocupações",
    "Alterações ilimitadas inclusas no plano",
    "Certificado de segurança SSL criptografado incluso",
    "Zero contrato de fidelidade ou multas de cancelamento",
    "Suporte imediato de elite feito direto pelo WhatsApp"
  ];

  return (
    <section id="preco" className="py-24 px-6 bg-[#121212] relative flex items-center justify-center border-t border-[#2a2a2a]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#e91e8c]/3 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl w-full mx-auto text-center relative z-10">
        
        <h2 className="text-3xl md:text-[48px] font-black mb-3 uppercase tracking-tight leading-tight text-white">
          Adquira todo o seu <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">site de elite</span> <br />
          por apenas <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black"><Counter value={197} prefix="R$ " suffix="" /></span> por mês
        </h2>
        
        <p className="text-[#a0a0a0] text-[17px] font-semibold max-w-xl mx-auto mb-12">
          Sem taxas ocultas, sem preocupação com programação. Deixe tudo nas mãos de nossos engenheiros e mude quando quiser.
        </p>
        
        <div className="pink-card shadow-2xl !p-8 !sm:p-12 relative !overflow-visible">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] text-[11px] font-black uppercase tracking-widest text-white shadow-md whitespace-nowrap animate-pulse">
            ★ ATIVAÇÃO EM ATÉ 48 HORAS
          </div>

          <div className="text-center mb-8 border-b border-[#2a2a2a] pb-8 pt-4">
            <span className="text-[10px] uppercase font-black tracking-widest text-[#606060] block mb-2">ASSINATURA DE ELITE</span>
            <div className="flex items-baseline justify-center gap-1 text-white">
              <span className="text-2xl font-black text-white/50">R$</span>
              <span className="text-6xl sm:text-7xl font-black leading-none font-mono tracking-tighter">
                <Counter value={197} />
              </span>
              <span className="text-lg font-black text-white/50">/mês</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left mb-10">
            {benefits.map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-white font-bold text-xs sm:text-sm">
                <div className="w-5 h-5 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3.5} />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* High Urgency CTA Button */}
          <a 
            href="https://wa.me/5511999999999?text=Olá!%20Fiquei%20interessado%20na%20locação%20de%20site%20da%20Duno%20por%20R$197/mês,%20quero%20começar."
            target="_blank"
            rel="noopener noreferrer"
            className="gold-premium-btn w-full text-xs sm:text-sm"
          >
            <span className="whitespace-nowrap">Quero garantir meu site por R$197/mês</span>
            <ArrowRight size={16} className="shrink-0" />
          </a>
          
          <p className="mt-6 text-[#606060] text-xs font-bold uppercase tracking-wider">
            Sem fidelidade de longo prazo. Suporte e alterações inclusos direto via WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}

// SEÇÃO 12 — FAQ (Dúvida frequente)
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { 
      q: "O site realmente fica pronto em 48 horas?", 
      a: "Sim! Após a contratação, você preenche um formulário super simples com as informações básicas da sua clínica ou consultório e nos envia seu logotipo. Em até 48 horas úteis, nossa equipe de engenharia entrega o link oficial funcionando com toda a estrutura e com criptografia SSL ativada." 
    },
    { 
      q: "E se eu quiser trocar algum texto ou foto depois?", 
      a: "Você tem total liberdade! Todas as alterações simples de textos, horários e fotografias estão inclusas na sua assinatura de elite, sem limite por mês. Basta solicitar via WhatsApp e nosso suporte técnico aplica as mudanças para você com velocidade máxima, ou você mesmo pode fazer via painel administrativo amigável." 
    },
    { 
      q: "Existe algum período de fidelidade?", 
      a: "De forma alguma! Acreditamos no nosso serviço e na satisfação dos nossos assinantes. Você pode cancelar a mensalidade a qualquer momento que desejar, sem multas contratuais, sem letras miúdas ou taxas ocultas de rescisão." 
    },
    { 
      q: "Como funciona a hospedagem inclusa?", 
      a: "Toda a infraestrutura de servidores rápidos da Amazon Web Services (AWS) e manutenção de rede de alta velocidade estão inclusas na assinatura. Você não precisa se preocupar em assinar servidores, configurar DNS ou resolver problemas técnicos — nós cuidamos de 100% da parte chata para você focar em receber clientes." 
    },
    { 
      q: "Preciso já ter um domínio próprio registrado?", 
      a: "Não é obrigatório. Se você já tem um domínio próprio (ex: suaempresa.com.br), fazemos o apontamento sem custo adicional. Caso não tenha, auxiliamos você a registrar o domínio oficial correto em seu CPF/CNPJ diretamente no Registro.br pelo menor valor do mercado." 
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-[#121212] border-t border-[#2a2a2a] relative">
      <div className="absolute bottom-0 right-[10%] w-96 h-96 bg-[#7c3aed]/3 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-3xl mx-auto relative z-10 text-center">
        
        {/* Beautiful Unified Badge with Icon */}
        <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12020b]/90 border border-[#f0134d]/45 text-white mb-6">
          <div className="w-5 h-5 rounded-full bg-[#f0134d] flex items-center justify-center">
            <StyledIcon iconName="CheckSquare" size={10} className="text-white fill-white" />
          </div>
          <span className="text-[10px] uppercase font-black tracking-widest text-neutral-300">
            Dúvidas Frequentes Respondidas
          </span>
        </div>

        <h2 className="text-3xl md:text-[44px] lg:text-[48px] font-black uppercase tracking-tight mb-12 leading-tight text-white">
          Perguntas <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">Frequentes</span>
        </h2>
        
        <div className="space-y-6 text-left">
          {faqs.map((f, i) => (
            <div key={i} className="overflow-hidden border border-[#2a2a2a] bg-[#111111] hover:border-white/10 rounded-2xl transition-all duration-300">
               <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left cursor-pointer group"
              >
                <span className="font-bold text-base md:text-lg text-white pr-4">{f.q}</span>
                {openIndex === i ? 
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] flex items-center justify-center text-white shrink-0"><Minus size={14} strokeWidth={3} /></div> : 
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:text-white shrink-0"><Plus size={14} strokeWidth={2.5} /></div>
                }
              </button>
              {openIndex === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="px-6 pb-8 text-[#a0a0a0] leading-relaxed font-semibold text-xs sm:text-sm text-left"
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

// SEÇÃO 13 — SEÇÃO DE CONFIANÇA / SOBRE
export function AboutTrust() {
  const values = [
    { 
      title: (
        <span>
          Empresa 100% <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">Brasileira</span>
        </span>
      ), 
      desc: "Sediada no Brasil, emitindo nota fiscal de serviço e totalmente comprometida com o crescimento do seu negócio local.", 
      iconName: "Landmark" 
    },
    { 
      title: (
        <span>
          Sem Chatbots <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">Irritantes</span>
        </span>
      ), 
      desc: "Suporte 100% humanizado e ágil diretamente pelo WhatsApp. Pessoas reais prontas para lhe atender e resolver suas dúvidas.", 
      iconName: "Heart" 
    },
    { 
      title: (
        <span>
          Design de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">Alta Performance</span>
        </span>
      ), 
      desc: "Nossos layouts são desenhados para captar e converter ao máximo cada potencial cliente que entra na sua página.", 
      iconName: "Users" 
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#121212] relative border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        
        <h2 className="text-3xl md:text-[48px] font-black mb-6 uppercase tracking-tight leading-tight text-white">
          Sua marca em boas <span className="gradient-text">mãos</span> nacionais
        </h2>
        
        <p className="text-[#a0a0a0] text-[17px] mb-16 max-w-3xl mx-auto leading-relaxed font-semibold text-center">
          A <strong>Duno</strong> nasceu para suprir o abismo que existe entre agências lentas e o empresário local. Nós desenvolvemos tecnologia de ponta para adaptar designs extremamente sofisticados e persuasivos de forma ágil, segura e com custo acessível. Somos especialistas no posicionamento de alta conversão.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => {
            return (
              <div 
                key={i} 
                className="pink-card hover:scale-[1.02] !p-8 !pb-10 gap-6"
              >
                <div className="flex justify-start">
                  <StyledIcon iconName={v.iconName} size={24} containerSize={48} flat={true} className="shrink-0 !mx-0 !my-0" />
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-base md:text-lg mb-2 uppercase tracking-tight text-left leading-snug w-fit">{v.title}</h3>
                  <p className="text-[#a0a0a0] text-xs sm:text-sm leading-relaxed font-semibold text-left">{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

// SEÇÃO 14 — CTA FINAL
export function FinalCTA() {
  return (
    <section className="py-32 px-6 text-center relative overflow-hidden bg-[#121212] border-t border-[#2a2a2a]">
       {/* Animated background radial glow */}
       <motion.div 
         animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
         transition={{ duration: 10, repeat: Infinity }}
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#e91e8c]/3 blur-[150px] -z-10 pointer-events-none"
       />
       
       <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-[44px] lg:text-[48px] font-black mb-10 uppercase tracking-tight leading-tight text-white">
            Pare de perder <br /> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] font-black">clientes locais hoje</span>
          </h2>
          
          <p className="text-[17px] text-[#a0a0a0] mb-12 font-semibold max-w-2xl mx-auto leading-relaxed">
            Limitamos a apenas 1 vaga por nicho profissional em cada região para garantir exclusividade orgânica no Google Maps. Assuma sua vaga antes que seu concorrente assine o seu modelo favorito.
          </p>
          
          <a 
            href="https://wa.me/5511999999999?text=Olá!%20Falei%20no%20site%20da%20Duno%20e%20gostaria%20de%20reservar%20a%20vaga%20do%20meu%20nicho."
            target="_blank"
            rel="noopener noreferrer"
            className="gold-premium-btn w-full sm:w-auto max-w-md mx-auto"
          >
            <span className="whitespace-nowrap">Garantir minha vaga</span>
            <ArrowRight size={18} className="shrink-0" />
          </a>
          
          <p className="mt-6 text-[#606060] text-xs font-bold uppercase tracking-wider">
            🔒 Comprometimento Zero · Cancele ou Altere Quando Quiser sem Fidelidade ou Multas
          </p>
        </div>
    </section>
  );
}

// FOOTER
export function Footer() {
  const scrollTo = (id: string) => {
    const sectionMap: Record<string, string> = {
      "como funciona": "como-funciona",
      "portfólio": "modelos",
      "benefícios": "vantagens",
      "depoimentos": "depoimentos",
      "preço": "preco"
    };
    
    const elementId = sectionMap[id.toLowerCase()] || id.toLowerCase().replace(/ /g, "-");
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-20 px-6 border-t-2 border-[#f0134d] bg-[#121212] relative overflow-hidden select-none">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#e91e8c]/3 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4 max-w-sm">
             <Logo className="mb-6" size="sm" />
             <p className="text-[#a0a0a0] mb-8 font-semibold leading-relaxed text-sm">
               Sediada no Brasil, a Duno é especializada em construir landing pages de alta resposta e conversão para médicos, clínicas, consultórios e prestadores de serviços de elite.
             </p>
             <div className="flex gap-6">
               {['Instagram', 'WhatsApp', 'E-mail'].map(social => (
                 <a key={social} href="#" className="text-xs uppercase tracking-[0.2em] font-black text-white/40 hover:text-[#e91e8c] transition-all">
                   {social}
                 </a>
               ))}
             </div>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <h4 className="font-black mb-6 text-[11px] uppercase tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] inline-block">Navegação</h4>
            <ul className="space-y-3">
               {["Como funciona", "Portfólio", "Benefícios", "Depoimentos", "Preço"].map(item => (
                 <li key={item}>
                   <button 
                     onClick={() => scrollTo(item)}
                     className="text-xs font-bold text-[#a0a0a0] hover:text-[#e91e8c] cursor-pointer transition-all hover:translate-x-1"
                   >
                     {item}
                   </button>
                 </li>
               ))}
            </ul>
          </div>

          <div className="md:col-span-3 md:col-start-8">
            <h4 className="font-black mb-6 text-[11px] uppercase tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] inline-block">Contato</h4>
            <ul className="space-y-3 text-xs font-bold text-[#a0a0a0]">
               <li className="hover:text-white transition-colors cursor-pointer text-left">contato@duno.com.br</li>
               <li className="text-white text-sm text-left font-black">+55 (11) 99999-9999</li>
               <li className="text-[#606060] font-semibold text-left">São Paulo, BR</li>
            </ul>
          </div>

          <div className="md:col-span-2 md:col-start-11">
            <h4 className="font-black mb-6 text-[11px] uppercase tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r from-[#f0134d] via-[#e91e8c] to-[#9b1fbd] inline-block">Status</h4>
            <div className="flex items-center gap-2">
               <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
               <span className="text-[10px] font-black uppercase tracking-widest text-[#10b981]">Agência Online</span>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-left">
            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#606060] mb-1.5">
              © {new Date().getFullYear()} DUNO DIGITAL · LOCAL DE ELITE
            </p>
            <p className="text-[9px] font-bold text-[#404040]">
              DUNO TECNOLOGIA LTDA · CNPJ: 45.182.903/0001-89 · Av. Paulista, 1000 - Bela Vista - São Paulo / SP
            </p>
          </div>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.25em] text-[#606060]">
            <span className="hover:text-white cursor-pointer transition-colors">Termos de Uso</span>
            <span className="hover:text-white cursor-pointer transition-colors">Privacidade</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// WHATSAPP FLOAT BUTTON
export function WhatsAppButton({ hideOnMobile = false }: { hideOnMobile?: boolean }) {
  return (
    <div
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center`}
      style={{ pointerEvents: hideOnMobile ? "none" : "auto" }}
    >
      {/* Radiant Pulsing Rings for extreme attention */}
      <div className="absolute inset-x-0 inset-y-0 w-full h-full rounded-full bg-[#25D366]/30 animate-pulse scale-125 pointer-events-none z-0" />
      <div className="absolute inset-x-0 inset-y-0 w-full h-full rounded-full bg-[#25D366]/20 animate-ping pointer-events-none z-0" />

      <motion.a
        href="https://wa.me/5511999999999?text=Olá!%20Falei%20no%20site%20da%20Duno%20e%20quero%20um%20site%20profissional."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: hideOnMobile ? 0 : 1, 
          scale: hideOnMobile ? 0.8 : 1.1, // slightly larger standard size for attention
          y: [0, -4, 0],
        }}
        whileHover={{ scale: 1.18 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          opacity: { duration: 0.3 },
          scale: { type: "spring", stiffness: 260, damping: 20 },
          y: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2.2,
            ease: "easeInOut"
          }
        }}
        className={`relative z-10 flex items-center justify-center p-3.5 sm:p-4 rounded-full bg-gradient-to-tr from-[#1ebd5d] to-[#25D366] text-white shadow-[0_12px_40px_rgba(37,211,102,0.55)] border-2 border-white/20 hover:border-white/40 group cursor-pointer`}
        aria-label="Fale conosco no WhatsApp"
      >
        <WhatsAppIcon size={31} className="text-white shrink-0 drop-shadow-md animate-pulse" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-[200px] transition-all duration-300 ease-in-out font-black uppercase text-[11px] sm:text-[12px] tracking-widest text-white whitespace-nowrap ml-0 group-hover:ml-2.5">
          Fale Conosco
        </span>
      </motion.a>
    </div>
  );
}
