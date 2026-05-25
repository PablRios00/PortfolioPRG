"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Record<string, Variants> = {
  fadeInUp: {
    hidden: { opacity: 0, y: 42 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -42 },
    visible: { opacity: 1, x: 0 }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 42 },
    visible: { opacity: 1, x: 0 }
  },
  staggerChildren: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: keyof typeof variants;
  delay?: number;
};

export function AnimatedSection({
  children,
  className,
  id,
  variant = "fadeInUp",
  delay = 0
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={variants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
    >
      {children}
    </motion.section>
  );
}

export const childVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};
