import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id.toLowerCase().replace(/ /g, "-"));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-2xl transition-all duration-300 ${
          scrolled 
            ? "bg-[#0F0108]/95 border-b-2 border-[#FF0054] shadow-[0_10px_40px_rgba(255,0,84,0.15)]" 
            : "bg-black/40 border-b border-white/5"
        }`}
      >
        <div className="flex items-center gap-6">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:opacity-85 transition-opacity">
            <Logo size="sm" />
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-6 xl:gap-10">
          {["Como funciona", "Portfólio", "Benefícios", "Depoimentos", "Preço"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 hover:text-[#FF0054] hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="premium-btn px-3 py-2.5 sm:px-6 sm:py-3.5 rounded-xl sm:rounded-2xl text-[10px] sm:text-[12px] group uppercase tracking-[0.15em] font-black flex items-center justify-center gap-1.5"
          >
            <span>
              <span className="hidden sm:inline">Falar Conosco</span>
              <span className="sm:hidden">WhatsApp</span>
            </span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <button 
            className="lg:hidden text-white p-2 hover:text-[#FF0054] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu as a Premium Dropdown Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-[100%] left-4 right-4 bg-[#0F0108]/98 backdrop-blur-3xl border-2 border-[#FF0054] rounded-[24px] mt-2 overflow-hidden shadow-[0_20px_50px_rgba(255,0,84,0.3)] z-50 pointer-events-auto"
          >
            <div className="flex flex-col p-6 gap-4">
              {["Como funciona", "Portfólio", "Benefícios", "Depoimentos", "Preço"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-sm font-black uppercase tracking-[0.2em] text-white/80 hover:text-[#FF0054] text-left py-3.5 border-b border-white/5 last:border-0 transition-all flex justify-between items-center group w-full"
                >
                  <span>{item}</span>
                  <ArrowRight size={16} className="text-[#FF0054] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

