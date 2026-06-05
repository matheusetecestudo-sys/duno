import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./Icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const formattedId = id
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // remove accents
      .replace(/ /g, "-");
    const element = document.getElementById(formattedId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = ["Como Funciona", "Modelos", "Vantagens", "Depoimentos", "FAQ"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`flex items-center justify-between px-6 md:px-12 h-[70px] transition-all duration-300 ${
          scrolled 
            ? "bg-[#0a0a0af5] backdrop-blur-[20px] border-b border-[#e91e8c]/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)]" 
            : "bg-black/40 border-b border-white/5"
        }`}
      >
        <div className="flex items-center">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:opacity-85 transition-opacity cursor-pointer">
            <Logo size="sm" />
          </button>
        </div>

        <div className="hidden lg:flex items-center justify-center gap-3">
          {navItems.map((item, index) => (
            <div key={item} className="flex items-center">
              {index > 0 && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#e91e8c] mx-3 animate-pulse" />
              )}
              <button
                onClick={() => scrollTo(item)}
                className="text-[15px] font-medium tracking-wide text-white hover:text-[#e91e8c] transition-colors cursor-pointer whitespace-nowrap"
              >
                {item}
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="https://wa.me/5511999999999?text=Olá!%20Vi%20o%20site%20de%20vocês%20e%20quero%20saber%20mais%20sobre%20a%20locação%20de%20site."
            target="_blank"
            rel="noopener noreferrer"
            className="gold-premium-btn !h-11 !text-xs !px-5 flex items-center justify-center gap-2"
          >
            <span>Falar no WhatsApp</span>
            <ArrowRight size={14} />
          </a>
          
          <button 
            className="lg:hidden text-white p-2 hover:text-[#e91e8c] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
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
            className="lg:hidden absolute top-[100%] left-4 right-4 bg-[#0a0a0a]/98 backdrop-blur-3xl border border-white/10 rounded-[24px] mt-2 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-50 pointer-events-auto"
          >
            <div className="flex flex-col p-6 gap-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-sm font-black uppercase tracking-[0.2em] text-white/80 hover:text-[#e91e8c] text-left py-3.5 border-b border-white/5 last:border-0 transition-all flex justify-between items-center group w-full"
                >
                  <span>{item}</span>
                  <ArrowRight size={16} className="text-[#e91e8c] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

