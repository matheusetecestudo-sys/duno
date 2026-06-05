import React, { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

interface CounterProps {
  value: number;
  duration?: number; // duration in seconds
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function Counter({ 
  value, 
  duration = 1.2, 
  prefix = "", 
  suffix = "", 
  className 
}: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px 0px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Premium easeOut curves
      const ease = 1 - Math.pow(1 - progress, 4); // Quartic easeOut for premium sleekness
      
      const currentCount = Math.floor(startValue + (value - startValue) * ease);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
