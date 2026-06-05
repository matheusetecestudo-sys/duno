import { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NicheTicker from "./components/NicheTicker";
import { Problem, Solution } from "./components/MetricSections";
import { Benefits, HowItWorks, BeforeAfter, Comparison, ProductShowcase } from "./components/InfoSections";
import { Offer, FAQ, AboutTrust, FinalCTA, Footer, WhatsAppButton } from "./components/MarketingElements";
import { Logo } from "./components/Logo";
import MobileVersion from "./components/MobileVersion";
import { PortfolioSkeleton, SocialProofSkeleton } from "./components/Skeletons";
import RevealSection from "./components/RevealSection";

const Portfolio = lazy(() => import("./components/Portfolio"));
const SocialProof = lazy(() => import("./components/MarketingElements").then(m => ({ default: m.SocialProof })));

export default function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [priceInView, setPriceInView] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      // Handles 430px + some responsive leeway to guarantee 100% of mobiles receive the rewritten layout
      setIsMobile(window.innerWidth <= 480);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-premium text-white selection:bg-[#e91e8c]/30 selection:text-white">
      {isMobile ? (
        <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center">
          <MobileVersion 
            onPriceInView={(visible) => setPriceInView(visible)} 
          />
          <WhatsAppButton hideOnMobile={false} />
        </div>
      ) : (
        <>
          <Navbar />
          
          <main>
            {/* Seção 1: Hero - has built-in instant entry on mount animations */}
            <Hero />
            
            {/* Seção 2: Barra de logos/nichos (Nova) */}
            <RevealSection>
              <NicheTicker />
            </RevealSection>
            
            {/* Seção 3: Dor */}
            <RevealSection>
              <Problem />
            </RevealSection>
            
            {/* Seção 4: Solução */}
            <RevealSection>
              <Solution />
            </RevealSection>
            
            {/* Seção 5: Como funciona */}
            <RevealSection id="como-funciona">
              <HowItWorks />
            </RevealSection>
    
            {/* Seção 6: Vantagens Exclusivas */}
            <RevealSection id="vantagens">
              <Benefits />
            </RevealSection>
    
            {/* Seção 7: Comparativo antes/depois (Nova) */}
            <RevealSection>
              <BeforeAfter />
            </RevealSection>
    
            {/* Seção 7.5: Showcase dos Layouts Premium */}
            <RevealSection>
              <ProductShowcase />
            </RevealSection>
    
            {/* Seção 8: Modelos / escolha seu nicho */}
            <RevealSection id="modelos">
              <Suspense fallback={<PortfolioSkeleton />}>
                <Portfolio />
              </Suspense>
            </RevealSection>
    
            {/* Seção 9: Depoimentos */}
            <RevealSection id="depoimentos">
              <Suspense fallback={<SocialProofSkeleton />}>
                <SocialProof />
              </Suspense>
            </RevealSection>
    
            {/* Seção 10: Comprar vs Assinar (comparativo 3 colunas) */}
            <RevealSection>
              <Comparison />
            </RevealSection>
    
            {/* Seção 11: Preço */}
            <RevealSection id="preco">
              <Offer />
            </RevealSection>
    
            {/* Seção 12: FAQ */}
            <RevealSection id="faq">
              <FAQ />
            </RevealSection>
    
            {/* Seção 13: Seção de Confiança / Sobre (Nova) */}
            <RevealSection>
              <AboutTrust />
            </RevealSection>
    
            {/* Seção 14: CTA final */}
            <RevealSection>
              <FinalCTA />
            </RevealSection>
          </main>
    
          {/* Seção 15: Footer e WhatsApp flutuante */}
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </div>
  );
}
