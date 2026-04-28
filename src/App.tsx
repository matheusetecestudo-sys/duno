import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import { Metrics, Problem, Solution } from "./components/MetricSections";
import { Benefits, HowItWorks, Comparison } from "./components/InfoSections";
import { Offer, FAQ, FinalCTA, Footer, WhatsAppButton } from "./components/MarketingElements";
import { Logo } from "./components/Logo";

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
  return (
    <div className="min-h-screen bg-premium text-white selection:bg-[#FF0054]/30 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <div id="como-funciona">
          <Metrics />
          <Problem />
          <Solution />
          <HowItWorks />
        </div>

        <div id="benefícios">
          <Benefits />
        </div>

        <div id="depoimentos">
          <Testimonials />
        </div>

        <div id="portfólio">
          <Portfolio />
        </div>

        <Comparison />

        <div id="preço">
          <Offer />
        </div>

        <div id="faq">
          <FAQ />
        </div>

        <FinalCTA />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
