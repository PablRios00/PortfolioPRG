"use client";

import { education, experiences } from "@/lib/data";
import { motion } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";
import { GraduationCap } from "lucide-react";

export function Experience() {
  return (
    <AnimatedSection id="experiencia" className="bg-[#0f172a]/55 py-28">
      <div className="container-shell">
        <p className="section-kicker">Trayectoria</p>
        <h2 className="section-title">Experiencia</h2>
        <p className="section-subtitle">Trabajo real, aprendizaje constante y una base sólida para aportar desde el primer día.</p>

        <div className="relative mt-14">
          <motion.div
            className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-blue-500 to-emerald-400 md:left-1/2 md:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.company}
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${index % 2 === 1 ? "md:[&>div]:col-start-2" : ""}`}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
              >
                <div className="premium-card rounded-2xl p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-2xl font-bold">{experience.company}</h3>
                    {experience.current && (
                      <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-200">Actual</span>
                    )}
                  </div>
                  <p className="mt-2 font-semibold text-blue-200">{experience.role}</p>
                  <p className="mt-1 text-sm text-slate-400">{experience.period}</p>
                  {experience.bullets ? (
                    <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                      {experience.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-5 text-sm leading-7 text-slate-300">{experience.description}</p>
                  )}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.stack.map((item) => (
                      <span key={item} className="rounded-full border border-slate-700 bg-slate-950/50 px-3 py-1 text-xs text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-3xl border border-slate-700/80 bg-slate-950/35 p-6">
          <div className="mb-5 flex items-center gap-3">
            <GraduationCap className="text-emerald-300" />
            <h3 className="font-display text-2xl font-bold">Formación</h3>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {education.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
