import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NicheTicker from "./components/NicheTicker";
import { Problem, Solution } from "./components/MetricSections";
import { Benefits, HowItWorks, BeforeAfter, Comparison } from "./components/InfoSections";
import Portfolio from "./components/Portfolio";
import { Offer, FAQ, AboutTrust, FinalCTA, Footer, WhatsAppButton, SocialProof } from "./components/MarketingElements";
import { Logo } from "./components/Logo";
import MobileVersion from "./components/MobileVersion";

function LoadingScreen() {
  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-8"
      >
        <div className="absolute inset-0 bg-[#FF0080] blur-[40px] opacity-20 animate-pulse" />
        <Logo className="scale-150 relative z-10" />
      </motion.div>
      <div className="w-32 h-0.5 bg-white/5 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ left: "-100%" }}
          animate={{ left: "100%" }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-linear-to-r from-transparent via-[#FF0080] to-transparent"
        />
      </div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [priceInView, setPriceInView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 850);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const checkViewport = () => {
      // Handles 430px + some responsive leeway to guarantee 100% of mobiles receive the rewritten layout
      setIsMobile(window.innerWidth <= 480);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  return (
    <div className="min-h-screen bg-premium text-white selection:bg-[#FF0054]/30 selection:text-white">
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {!loading && isMobile ? (
        <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center">
          <MobileVersion onPriceInView={(visible) => setPriceInView(visible)} />
          <WhatsAppButton hideOnMobile={priceInView} />
        </div>
      ) : (
        <>
          <Navbar />
          
          <main>
            {/* Seção 1: Hero */}
            <Hero />
            
            {/* Seção 2: Barra de logos/nichos (Nova) */}
            <NicheTicker />
            
            {/* Seção 3: Dor */}
            <Problem />
            
            {/* Seção 4: Solução */}
            <Solution />
            
            {/* Seção 5: Como funciona */}
            <div id="como-funciona">
              <HowItWorks />
            </div>
    
            {/* Seção 6: Vantagens Exclusivas */}
            <div id="vantagens">
              <Benefits />
            </div>
    
            {/* Seção 7: Comparativo antes/depois (Nova) */}
            <BeforeAfter />
    
            {/* Seção 8: Modelos / escolha seu nicho */}
            <div id="modelos">
              <Portfolio />
            </div>
    
            {/* Seção 9: Depoimentos */}
            <div id="depoimentos">
              <SocialProof />
            </div>
    
            {/* Seção 10: Comprar vs Assinar (comparativo 3 colunas) */}
            <Comparison />
    
            {/* Seção 11: Preço */}
            <div id="preco">
              <Offer />
            </div>
    
            {/* Seção 12: FAQ */}
            <div id="faq">
              <FAQ />
            </div>
    
            {/* Seção 13: Seção de Confiança / Sobre (Nova) */}
            <AboutTrust />
    
            {/* Seção 14: CTA final */}
            <FinalCTA />
          </main>
    
          {/* Seção 15: Footer e WhatsApp flutuante */}
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </div>
  );
}
