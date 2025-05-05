"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Enregistrement du plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ScrollRevealProps = {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  from?: "bottom" | "left" | "right" | "top";
  delay?: number;
  className?: string;
  once?: boolean;
  distance?: number;
  duration?: number;
  useGsap?: boolean;
  id?: string;
};

export const ScrollReveal = ({
  children,
  width = "fit-content",
  from = "bottom",
  delay = 0,
  className = "",
  once = true,
  distance = 50,
  duration = 0.8,
  useGsap = false,
  id
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once });
  const mainControls = useAnimation();

  // Mapper la direction au vecteur de transformation
  const fromDirectionMap = {
    bottom: { y: distance },
    top: { y: -distance },
    left: { x: -distance },
    right: { x: distance },
  };

  // Configurer les variantes d'animation en fonction de la direction
  const variants = {
    hidden: {
      opacity: 0,
      ...fromDirectionMap[from],
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Animation avec Framer Motion
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  // Animation avec GSAP
  useEffect(() => {
    if (useGsap && ref.current) {
      const element = ref.current;

      gsap.fromTo(
        element,
        {
          opacity: 0,
          ...(from === "bottom" && { y: distance }),
          ...(from === "top" && { y: -distance }),
          ...(from === "left" && { x: -distance }),
          ...(from === "right" && { x: distance }),
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [from, delay, distance, duration, useGsap]);

  if (useGsap) {
    return (
      <div
        ref={ref}
        className={className}
        style={{ width }}
        id={id}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ width }}
      variants={variants}
      initial="hidden"
      animate={mainControls}
      id={id}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;