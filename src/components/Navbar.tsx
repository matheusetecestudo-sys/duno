import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./Icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id.toLowerCase().replace(/ /g, "-"));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center justify-between px-6 md:px-12 py-5 backdrop-blur-2xl bg-black/40 border-b border-white/5"
      >
        <div className="flex items-center gap-6">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:opacity-80 transition-opacity">
            <Logo size="sm" />
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-6 xl:gap-10">
          {["Como funciona", "Portfólio", "Benefícios", "Depoimentos", "Preço"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-[11px] font-black uppercase tracking-[0.25em] text-white/40 hover:gradient-text transition-all cursor-pointer whitespace-nowrap"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="premium-btn px-6 py-3.5 rounded-2xl text-[12px] group uppercase tracking-[0.15em] font-black"
          >
            <WhatsAppIcon size={18} />
            <span>WhatsApp</span>
          </a>
          
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {["Como funciona", "Portfólio", "Benefícios", "Depoimentos", "Preço"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-sm font-black uppercase tracking-[0.2em] text-white/50 hover:text-white text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

