"use client";

import { skills } from "@/lib/data";
import { motion } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";
import { TechBadge } from "../ui/TechBadge";

export function Skills() {
  return (
    <AnimatedSection id="habilidades" className="bg-[#0f172a]/55 py-28">
      <div className="container-shell">
        <p className="section-kicker">Tecnologías con las que trabajo</p>
        <h2 className="section-title">Stack Técnico</h2>
        <p className="section-subtitle">Una base full stack moderna, con especial sensibilidad por automatización e IA aplicada.</p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skills.map((group, groupIndex) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                className="premium-card rounded-2xl p-6"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIndex * 0.08 }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-200">
                    <Icon size={22} />
                  </span>
                  <h3 className="font-display text-2xl font-bold">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map(([name, color], itemIndex) => (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: groupIndex * 0.04 + itemIndex * 0.025 }}
                    >
                      <TechBadge name={name} color={color} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
