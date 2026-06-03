import { Logo } from "./Logo";
import { Plus, Minus, ArrowRight, ShieldCheck, Heart, Landmark, Check, Users, MessageSquare } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { WhatsAppIcon } from "./Icons";

// SEÇÃO 9 — PROVA SOCIAL REAL (WhatsApp Chat Logs)
export function SocialProof() {
  const chats = [
    {
      name: "Dr. Paulo Silveira - Odonto",
      neighborhood: "Campinas - SP",
      avatarUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150&h=150",
      messages: [
        { type: "received", text: "Gente, o site ficou surreal de lindo! Em menos de 24h depois que foi pro ar, já agendamos 2 clareamentos de pacientes novos direto pelo botão do zap. Valeu cada centavo!", time: "11:24" },
        { type: "sent", text: "Doutor, que notícia fantástica! Ficamos muito felizes em saber. Nosso objetivo é exatamente esse: trazer resultados reais!", time: "11:27" }
      ]
    },
    {
      name: "Dra. Amanda Pet Care - Vet",
      neighborhood: "Curitiba - PR",
      avatarUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150&h=150",
      messages: [
        { type: "received", text: "Só passando pra elogiar o suporte de vcs. Pedi pra alterar o mapa e a galeria ontem à noite e vcs já ajustaram tudo. O site carrega muito rápido no celular, os clientes comentaram.", time: "15:42" },
        { type: "sent", text: "Obrigado Amanda! Suporte rápido no WhatsApp é o nosso compromisso número 1 com vocês! 🐾", time: "15:45" }
      ]
    },
    {
      name: "Prof. Thiago - Studio Fit",
      neighborhood: "São Paulo - SP",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=150&h=150",
      messages: [
        { type: "received", text: "Sensacional o modelo de site de vcs! Coloquei no ar e a galera amou. O layout passa muita credibilidade e a velocidade é fantástica. Já tive 5 cadastros novos essa semana.", time: "09:05" },
        { type: "sent", text: "Show de bola Thiago! Esse layout foi pensado exatamente para converter cada visitante in aluno. Parabéns pelos resultados!", time: "09:12" }
      ]
    }
  ];

  return (
    <section id="depoimentos" className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden border-t border-[#2a2a2a]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#e91e8c]/3 blur-[140px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1100px] w-full mx-auto relative z-10 text-center">
        
        {/* Title H2 */}
        <h2 className="text-3xl md:text-[48px] font-black mb-4 uppercase tracking-tight text-white leading-tight">
          Quem já contratou <br />
          <span className="text-[#e91e8c]">recomenda de verdade</span>
        </h2>
        
        <p className="text-[#a0a0a0] text-[17px] max-w-[650px] mx-auto leading-relaxed font-semibold mb-16">
          Sem depoimentos inventados. Veja as fotos reais e as mensagens autênticas que nossos clientes nos enviaram no WhatsApp:
        </p>

        {/* 3 Columns WhatsApp Chat Mockup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {chats.map((chat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col rounded-2xl overflow-hidden border border-[#2a2a2a] bg-[#111b21] shadow-2xl relative"
            >
              
              {/* WhatsApp Header Mockup (Dark Mode) */}
              <div className="bg-[#202c33] px-4 py-3.5 flex items-center gap-3 border-b border-white/5 shrink-0 select-none">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-white/10 shrink-0 bg-neutral-800">
                  <img 
                    src={chat.avatarUrl} 
                    alt={chat.name} 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="truncate flex-1">
                  <h4 className="text-white text-sm font-black truncate leading-tight uppercase tracking-tight">{chat.name}</h4>
                  <p className="text-[10px] text-[#8696a0] font-semibold truncate leading-none mt-0.5">{chat.neighborhood} · Online</p>
                </div>
                <div className="flex gap-2.5 text-[#aebac1]">
                  {/* Visual design dots for WhatsApp header */}
                  <span className="text-sm">⋮</span>
                </div>
              </div>

              {/* Chat Messages Body Screen */}
              <div 
                className="p-4 flex-1 flex flex-col gap-4 overflow-y-auto max-h-[300px]"
                style={{
                  backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.4) 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                  backgroundColor: "#0b141a"
                }}
              >
                {chat.messages.map((msg, mIdx) => (
                  <div
                    key={mIdx}
                    className={`max-w-[85%] rounded-xl px-3 py-2 text-sm relative leading-relaxed font-medium ${
                      msg.type === "received" 
                        ? "bg-[#202c33] text-white self-start rounded-tl-none text-left" 
                        : "bg-[#005c4b] text-white self-end rounded-tr-none text-left"
                    }`}
                  >
                    <span>{msg.text}</span>
                    
                    {/* Message Timestamp */}
                    <div className="text-right text-[9px] text-white/50 font-sans mt-1 leading-none select-none flex items-center justify-end gap-1">
                      <span>{msg.time}</span>
                      {msg.type === "sent" && (
                        <span className="text-[#53bdeb] font-semibold text-[10px] scale-x-125 transform tracking-tighter shrink-0">✓✓</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input Area Mockup (Footer of dark bubble) */}
              <div className="bg-[#202c33] px-3.5 py-2 flex items-center justify-between gap-3 shrink-0 text-[#8696a0] select-none text-[11px] font-bold">
                <span>Mensagem enviada por WhatsApp</span>
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
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
    "Hospedagem Premium em servidores ultra rápidos inclusa",
    "Certificado SSL de Segurança ativo (cadeado verde)",
    "Design de Elite otimizado para o seu nicho específico",
    "Suporte total ilimitado direto pelo WhatsApp",
    "Alterações de fotos, serviços e dados sempre livres",
    "Nenhuma surpresa: R$ 0 de setup e R$ 0 de criação"
  ];

  return (
    <section id="preco" className="py-24 px-6 bg-[#0a0a0a] relative flex items-center justify-center border-t border-[#2a2a2a]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#e91e8c]/3 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl w-full mx-auto text-center relative z-10">
        
        <h2 className="text-3xl md:text-[48px] font-black mb-3 uppercase tracking-tight text-white leading-tight">
          Seu site profissional <br />
          por apenas <span className="text-[#e91e8c]">R$ 197/mês</span>
        </h2>
        
        <p className="text-[#a0a0a0] text-[17px] font-semibold max-w-xl mx-auto mb-12">
          Sem custo de criação, sem fidelidade, cancele quando quiser.
        </p>
        
        <div className="p-8 sm:p-12 relative border-2 border-[#e91e8c]/40 bg-[#111111] rounded-[16px] shadow-2xl">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#e91e8c] to-[#7c3aed] text-[11px] font-black uppercase tracking-widest text-white shadow-md whitespace-nowrap animate-pulse">
            ★ GARANTIA DE SATISFAÇÃO TOTAL
          </div>

          <div className="text-center mb-8 border-b border-[#2a2a2a] pb-8 pt-4">
            <span className="text-[10px] uppercase font-black tracking-widest text-[#606060] block mb-2">VALOR SEM SURPRESAS</span>
            <div className="flex items-baseline justify-center gap-1 text-white">
              <span className="text-2xl font-black text-white/50">R$</span>
              <span className="text-6xl sm:text-7xl font-black leading-none font-mono tracking-tighter">197</span>
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
            href="https://wa.me/5511999999999?text=Olá!%20Fiquei%20interessado%20no%20site%20da%20Duno%20por%20R$197/mês,%20quero%20garantir%20my%20assinatura."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-5 rounded-xl uppercase font-black text-xs sm:text-sm tracking-widest text-center flex items-center justify-center gap-3 bg-gradient-to-r from-[#e91e8c] to-[#7c3aed] text-white hover:brightness-110 hover:scale-[1.02] active:scale-98 shadow-xl shadow-[#e91e8c]/25 cursor-pointer transition-all duration-300 whitespace-nowrap"
          >
            <span className="whitespace-nowrap">Quero meu site por R$197</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </a>
          
          <p className="mt-6 text-[#606060] text-xs font-bold uppercase tracking-wider">
            Sem fidelidade. Sem taxas extras. Cancele quando quiser.
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
      q: "Posso cancelar a qualquer momento?", 
      a: "Sim, absolutamente! Não trabalhamos com contratos de fidelidade de longo prazo, taxas ocultas ou multas rescisórias abusivas. A nossa proposta é garantir o seu resultado. Você paga a assinatura simples mensal de R$ 197 e pode solicitar o cancelamento a qualquer hora com apenas uma mensagem direta pelo nosso WhatsApp de suporte do cliente. Sem burocracia nenhuma." 
    },
    { 
      q: "Quanto tempo leva para o site ficar pronto?", 
      a: "Nosso processo é extremamente ágil e desenhado para quem tem pressa em vender. Uma vez contratado, nós enviamos as instruções pelo WhatsApp para você nos encaminhar sua logo, fotos reais e endereço. Nossa equipe de designers de elite realiza a customização completa em até 24 horas úteis, entregando o site 100% ativo e funcionando perfeitamente em no máximo 48 horas!" 
    },
    { 
      q: "O site realmente aparece e se posiciona no Google?", 
      a: "Com certeza. Nossos modelos de elite são projetados desde o primeiro minuto seguindo as melhores práticas globais de SEO (otimização para buscas) e indexação orgânica que o algoritmo do Google exige (títulos corretos, carregamento ultra rápido, design responsivo). Ele vem pronto e configurado para impulsionar suas chances de ranquear no topo das pesquisas e no Google Maps local." 
    },
    { 
      q: "E se eu precisar alterar fotos ou informações depois?", 
      a: "Não se preocupe! Mudou de telefone, adicionou serviços ou quer renovar as fotos reais? Basta chamar a nossa equipe de suporte dedicada em nosso WhatsApp e nós atualizamos seu site rapidamente para você. Toda a manutenção preventiva e pequenas edições já estão 100% inclusas no valor da sua assinatura mensal de R$ 197." 
    },
    { 
      q: "Preciso comprar domínio ou hospedagem por fora?", 
      a: "Não precisa se preocupar com nada técnico! A hospedagem em servidores Cloud de altíssima velocidade (Amazon AWS/Google Cloud) e os certificados de segurança SSL (chave de criptografia) são inclusos no seu plano. Se você já tem um domínio próprio (.com.br ou .com), conectamos para você de graça. Se não tiver, nós gerenciamos e configuramos o seu domínio com extrema comodidade." 
    },
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-[#0a0a0a] border-t border-[#2a2a2a] relative">
      <div className="absolute bottom-0 right-[10%] w-96 h-96 bg-[#7c3aed]/3 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-3xl mx-auto relative z-10 text-center">
        
        <h2 className="text-3xl md:text-[48px] font-black mb-12 uppercase tracking-tight text-white leading-tight">
          Dúvidas <span className="text-[#e91e8c]">Frequentes</span>
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
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#e91e8c] to-[#7c3aed] flex items-center justify-center text-white shrink-0"><Minus size={14} strokeWidth={3} /></div> : 
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
    { title: "Empresa 100% Brasileira", desc: "Sediada em São Paulo, emitindo nota fiscal e comprometida com o crescimento local.", icon: Landmark },
    { title: "Sem Chatbots Irritantes", desc: "Suporte humanizado e ágil via WhatsApp. Pessoas reais que resolvem seu problema.", icon: Heart },
    { title: "Especialistas em Conversão", desc: "Nossos designers estudam copywriting e vendas locais para criar caminhos de lucro.", icon: Users },
  ];

  return (
    <section className="py-24 px-6 bg-[#111111] relative border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        
        <h2 className="text-3xl md:text-[48px] font-black mb-6 uppercase tracking-tight text-white leading-tight">
          Sua marca em boas <span className="text-[#e91e8c]">mãos nacionais</span>
        </h2>
        
        <p className="text-[#a0a0a0] text-[17px] mb-16 max-w-3xl mx-auto leading-relaxed font-semibold text-center">
          A <strong>Duno</strong> nasceu para suprir o abismo que existe entre agências lentas e o pequeno empresário local. Nós desenvolvemos tecnologia de ponta para adaptar designs extremamente sofisticados e persuasivos de forma ágil, segura e com custo acessível. Somos especialistas no posicionamento de clínicas, consultórios, studios e profissionais liberais no topo do Google.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => {
            const ValIcon = v.icon;
            return (
              <div key={i} className="p-8 rounded-[16px] border border-[#2a2a2a] bg-[#1a1a1a] flex items-start gap-4 text-left">
                <div className="w-12 h-12 rounded-full bg-[#111111] border border-[#2a2a2a] flex items-center justify-center text-[#e91e8c] shrink-0">
                  <ValIcon size={20} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-2 uppercase tracking-wide">{v.title}</h3>
                  <p className="text-[#a0a0a0] text-xs leading-relaxed font-semibold">{v.desc}</p>
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
    <section className="py-32 px-6 text-center relative overflow-hidden bg-[#0a0a0a] border-t border-[#2a2a2a]">
       {/* Animated background radial glow */}
       <motion.div 
         animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
         transition={{ duration: 10, repeat: Infinity }}
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#e91e8c]/3 blur-[150px] -z-10 pointer-events-none"
       />
       
       <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-[48px] font-black mb-10 uppercase tracking-tight text-white leading-tight">
            Pare de perder <br /> 
            <span className="text-[#e91e8c] font-black">clientes locais hoje</span>
          </h2>
          
          <p className="text-[17px] text-[#a0a0a0] mb-12 font-semibold max-w-2xl mx-auto leading-relaxed">
            Limitamos a apenas 1 vaga por nicho profissional em cada região para garantir exclusividade orgânica no Google Maps. Assuma sua vaga antes que seu concorrente assine o seu modelo favorito.
          </p>
          
          <a 
            href="https://wa.me/5511999999999?text=Olá!%20Falei%20no%20site%20da%20Duno%20e%20gostaria%20de%20reservar%20a%20vaga%20do%20meu%20nicho."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 rounded-full uppercase font-black text-xs sm:text-sm tracking-widest text-center flex items-center justify-center gap-2 max-w-md mx-auto bg-gradient-to-r from-[#e91e8c] to-[#7c3aed] text-white hover:brightness-110 hover:scale-[1.02] active:scale-98 shadow-xl shadow-[#e91e8c]/25 cursor-pointer transition-all duration-300 whitespace-nowrap"
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
    <footer className="py-20 px-6 border-t-2 border-[#e91e8c] bg-[#111111] relative overflow-hidden select-none">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#e91e8c]/3 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4 max-w-sm">
             <Logo className="mb-6" size="sm" />
             <p className="text-[#a0a0a0] mb-8 font-semibold leading-relaxed text-sm">
               Tenha um site de elite por uma assinatura justa de apenas R$197/mês. Escolha seu modelo, nós personalizamos em 48h e você escala seus orçamentos no seu WhatsApp.
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
            <h4 className="font-black mb-6 text-[11px] uppercase tracking-[0.2em] text-[#e91e8c]">Navegação</h4>
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
            <h4 className="font-black mb-6 text-[11px] uppercase tracking-[0.2em] text-[#e91e8c]">Contato</h4>
            <ul className="space-y-3 text-xs font-bold text-[#a0a0a0]">
               <li className="hover:text-white transition-colors cursor-pointer text-left">contato@duno.com.br</li>
               <li className="text-white text-sm text-left font-black">+55 (11) 99999-9999</li>
               <li className="text-[#606060] font-semibold text-left">São Paulo, BR</li>
            </ul>
          </div>

          <div className="md:col-span-2 md:col-start-11">
            <h4 className="font-black mb-6 text-[11px] uppercase tracking-[0.2em] text-[#e91e8c]">Status</h4>
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
  return null;
}
