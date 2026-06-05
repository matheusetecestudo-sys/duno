import React from "react";
import { motion } from "motion/react";

interface RevealSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

export default function RevealSection({ children, id, className, delay = 0 }: RevealSectionProps) {
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px 0px" }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.16, 1, 0.3, 1] // Ultra premium easeOutExposition curve
      }}
    >
      {children}
    </motion.div>
  );
}
