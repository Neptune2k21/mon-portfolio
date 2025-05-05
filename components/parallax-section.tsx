"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxSectionProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  speed?: number;
  className?: string;
  bgColor?: string;
  id?: string;
}

export default function ParallaxSection({
  children,
  direction = "up",
  speed = 0.2,
  className = "",
  bgColor = "transparent",
  id
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Calculer les transformations en fonction de la direction
  const getTransform = () => {
    switch (direction) {
      case "up":
        return useTransform(scrollYProgress, [0, 1], ["0%", `${-speed * 100}%`]);
      case "down":
        return useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
      case "left":
        return useTransform(scrollYProgress, [0, 1], ["0%", `${-speed * 100}%`]);
      case "right":
        return useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
      default:
        return useTransform(scrollYProgress, [0, 1], ["0%", `${-speed * 100}%`]);
    }
  };

  const y = direction === "up" || direction === "down" ? getTransform() : undefined;
  const x = direction === "left" || direction === "right" ? getTransform() : undefined;
  
  // Animation du décalage avec GSAP
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
    
    if (direction === "up" || direction === "down") {
      const yOffset = direction === "up" ? -speed * 100 : speed * 100;
      tl.fromTo(
        element, 
        { y: 0 }, 
        { y: `${yOffset}%`, ease: "none" }
      );
    } else {
      const xOffset = direction === "left" ? -speed * 100 : speed * 100;
      tl.fromTo(
        element, 
        { x: 0 }, 
        { x: `${xOffset}%`, ease: "none" }
      );
    }
    
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [direction, speed]);

  return (
    <section 
      ref={ref} 
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: bgColor }}
      id={id}
    >
      <motion.div 
        style={{ y, x }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}