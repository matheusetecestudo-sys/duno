import { motion } from "motion/react";
import { useRef } from "react";
import { Zap, ArrowRight, Star } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 xl:py-0 overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* Background Gradients and Effects per guidelines */}
      <div className="absolute inset-0 -z-10 bg-[#0a0a0a] overflow-hidden">
        {/* Subtle grid of points (radial gradient) */}
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{
            backgroundImage: "radial-gradient(rgba(233, 30, 140, 0.15) 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        />
        
        {/* Glow Blobs */}
        {/* Blob of luz rosa no canto superior direito */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#e91e8c]/15 blur-[120px] rounded-full pointer-events-none" />
        {/* Blob de luz roxo no canto inferior esquerdo */}
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-[#7c3aed]/15 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-30 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 xl:gap-8 justify-between mt-12">
        
        {/* COLUNA ESQUERDA - 60% text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-left w-full lg:max-w-[55%] xl:max-w-[58%]"
        >
          {/* Badge topo (antes do headline) */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e91e8c]/10 border border-[#e91e8c]/30 text-[#e91e8c] text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
            <Zap size={14} className="fill-[#e91e8c] text-[#e91e8c] animate-pulse" />
            <span>⚡ Site no ar em até 48 horas</span>
          </div>

          {/* Headline principal (H1, 72px bold 900) */}
          <h1 className="text-4xl sm:text-6xl xl:text-[72px] font-black leading-[1.1] tracking-tight uppercase mb-6 text-white text-left">
            Seu concorrente já aparece <br />
            no Google. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e91e8c] to-[#7c3aed]">Você ainda não.</span>
          </h1>
          
          {/* Subheadline (18px, cor secundária, max-width 520px) */}
          <p className="text-base sm:text-lg text-[#a0a0a0] mb-8 max-w-[520px] leading-relaxed font-semibold">
            Tenha um site profissional personalizado com sua marca, pronto em até 48h, por apenas R$197/mês. Sem contrato. Sem taxa de setup. Cancele quando quiser.
          </p>

          {/* Bloco de CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <a 
              href="https://wa.me/5511999999999?text=Olá!%20Vi%20o%20site%2520de%2520vocês%2520e%2520quero%2520garantir%2520meu%2520site%2520agora."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 rounded-full text-[17px] font-black uppercase tracking-wider text-center bg-gradient-to-r from-[#e91e8c] to-[#7c3aed] text-white shadow-[0_0_30px_rgba(233,30,140,0.4)] hover:shadow-[0_0_45px_rgba(233,30,140,0.65)] hover:scale-[1.03] active:scale-95 transition-all duration-300 shrink-0 cursor-pointer"
            >
              Quero meu site agora — Falar no WhatsApp
            </a>
            <button 
              onClick={() => scrollTo('modelos')}
              className="w-full sm:w-auto px-10 py-5 rounded-full text-[17px] font-black text-white hover:text-[#e91e8c] uppercase tracking-wider text-center border-2 border-white hover:border-[#e91e8c] transition-all duration-300 bg-transparent shrink-0 cursor-pointer"
            >
              Ver modelos prontos
            </button>
          </div>

          {/* Barra de prova social (margin-top 48px) */}
          <div className="flex items-center gap-4 sm:gap-8 py-5 border-t border-b border-[#2a2a2a] max-w-lg mb-4 bg-[#111111]/30 px-6 rounded-2xl">
            <div className="flex-1">
              <span className="block text-2xl sm:text-[28px] font-black text-[#e91e8c] leading-none">+100</span>
              <span className="text-[13px] font-medium text-[#a0a0a0]">Sites Criados</span>
            </div>
            <div className="h-10 w-[1px] bg-[#2a2a2a]" />
            <div className="flex-1 text-center">
              <span className="block text-2xl sm:text-[28px] font-black text-[#e91e8c] leading-none">+15</span>
              <span className="text-[13px] font-medium text-[#a0a0a0]">Nichos Atendidos</span>
            </div>
            <div className="h-10 w-[1px] bg-[#2a2a2a]" />
            <div className="flex-1 text-right">
              <span className="block text-2xl sm:text-[28px] font-black text-[#e91e8c] leading-none">48h</span>
              <span className="text-[13px] font-medium text-[#a0a0a0]">Pronto no Ar</span>
            </div>
          </div>
        </motion.div>

        {/* COLUNA DIREITA - 40% visual mockup content with perspective rotation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex-1 w-full lg:max-w-[40%] xl:max-w-[38%] relative block mt-12 lg:mt-0"
        >
          <div 
            className="relative w-full max-w-[460px] mx-auto lg:ml-auto select-none"
            style={{
              transform: "perspective(1000px) rotateY(-5deg)",
              filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.8))"
            }}
          >
            {/* Ambient Background Glow behind the mockup */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#e91e8c] to-[#7c3aed] rounded-[24px] opacity-20 blur-xl pointer-events-none" />

            {/* MacBook Mockup */}
            <div className="relative border border-[#2a2a2a] rounded-[16px] bg-[#1a1a1a] overflow-hidden shadow-2xl">
              {/* Chrome/Barra superior do navegador */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#111111] border-b border-[#2a2a2a]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="px-3 py-1 rounded bg-black/60 border border-[#2a2a2a] text-[9px] text-[#a0a0a0] font-mono flex items-center gap-1.5 justify-center w-[180px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  clinicaporonicho.com.br
                </div>
                <div className="w-8" />
              </div>

              {/* Conteúdo de elite simulando o site do nicho Odonto */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#0a0a0a] text-white p-4 flex flex-col justify-between font-sans">
                {/* Header */}
                <div className="flex justify-between items-center pb-2 border-b border-[#2a2a2a]">
                  <div className="flex items-center gap-1 text-left">
                    <span className="font-black text-[10px] uppercase text-white tracking-widest">DUNO CLINIC</span>
                  </div>
                  <div className="flex gap-2 text-[7px] text-[#a0a0a0] font-semibold">
                    <span>Início</span>
                    <span>Serviços</span>
                    <span>Contato</span>
                  </div>
                </div>

                {/* Hero Inside Mockup */}
                <div className="my-auto text-left">
                  <div className="inline-block px-1.5 py-0.5 rounded bg-[#e91e8c]/10 border border-[#e91e8c]/30 text-[6px] text-[#e91e8c] font-black uppercase tracking-wider mb-1.5">
                    Estética de Alto Padrão
                  </div>
                  <h4 className="text-xl font-black leading-tight mb-1 uppercase text-white">
                    Seu bem-estar <br />
                    <span className="text-[#e91e8c]">em boas mãos.</span>
                  </h4>
                  <p className="text-[8px] text-[#a0a0a0] leading-relaxed mb-3 font-medium max-w-[170px]">
                    Atendimento humanizado com suporte especializado e infraestrutura de elite na sua região.
                  </p>
                  
                  {/* Floating Action Button inside client mockup */}
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#25D366] text-black font-black text-[7px] uppercase tracking-wider shadow-lg shadow-[#25D366]/20">
                    <span className="w-1 h-1 rounded-full bg-white animate-ping" />
                    Agendar Horário
                  </span>
                </div>

                {/* Footer simulation info */}
                <div className="flex justify-between items-center pt-2 border-t border-[#2a2a2a] text-[7px] text-[#606060] font-bold uppercase">
                  <span>📍 Atendimento VIP</span>
                  <span className="text-[#25D366] flex items-center gap-1">
                    Ativo ⭐⭐⭐⭐⭐
                  </span>
                </div>
              </div>
            </div>

            {/* Overlapping iPhone mobile screen showing corresponding mobile design */}
            <div className="absolute -bottom-10 -right-4 w-[140px] border-4 border-[#2a2a2a] rounded-[24px] bg-[#0a0a0a] overflow-hidden shadow-2xl z-20">
              <div className="h-4 bg-[#111111] flex items-center justify-center relative">
                <div className="w-12 h-2 rounded-full bg-black" />
              </div>
              <div className="aspect-[9/16] p-2 flex flex-col justify-between text-left">
                <div className="flex justify-between items-center border-b border-white/5 pb-1">
                  <span className="text-[6px] font-black tracking-widest text-[#e91e8c]">DUNO</span>
                  <span className="text-[5px] bg-[#25D366]/10 text-[#25D366] px-1 py-0.2 rounded font-black">CHAT</span>
                </div>
                
                <div className="my-auto">
                  <h5 className="text-[11px] font-black text-white leading-tight uppercase mb-1">
                    Design de <span className="text-[#e91e8c]">Elite</span>
                  </h5>
                  <p className="text-[5px] text-[#a0a0a0] leading-normal font-semibold mb-2">
                    Adaptado 100% para carregar instantaneamente em celulares.
                  </p>
                  <span className="inline-block text-center w-full px-2 py-0.8 bg-[#25D366] text-black text-[5px] font-black rounded uppercase">
                    Falar agora
                  </span>
                </div>

                <div className="text-[4.5px] text-[#606060] font-bold uppercase text-center border-t border-white/5 pt-1">
                  Celular Ultra Rápido
                </div>
              </div>
            </div>

            {/* Levitating Badge 1 (✓ 3 novos contatos hoje) - GREEN - upper left */}
            <div 
              className="absolute -top-6 -left-6 bg-black/90 border border-emerald-500/40 px-3.5 py-2.5 rounded-2xl flex items-center gap-2 shadow-2xl z-30 pointer-events-none animate-bounce"
              style={{ animationDuration: "3.5s" }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse shrink-0" />
              <span className="text-xs font-black text-[#25D366] uppercase tracking-wider">✓ 3 novos contatos hoje</span>
            </div>

            {/* Levitating Badge 2 (⭐ 4.9/5 avaliação média) - GOLD/YELLOW - lower left */}
            <div 
              className="absolute bottom-16 -left-12 bg-black/90 border border-yellow-500/40 px-3.5 py-2.5 rounded-2xl flex items-center gap-2 shadow-2xl z-30 pointer-events-none animate-bounce"
              style={{ animationDuration: "5s", animationDelay: "1s" }}
            >
              <span className="text-yellow-400">⭐</span>
              <span className="text-xs font-black text-white uppercase tracking-wider">4.9/5 avaliação média</span>
            </div>

          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
