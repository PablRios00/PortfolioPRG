"use client";

import { heroTech, highlightCards } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Mail } from "lucide-react";
import { TypewriterText } from "../ui/TypewriterText";

export function Hero() {
  return (
    <section id="inicio" className="hero-grid relative flex min-h-screen items-center overflow-hidden pt-20">
      <motion.div
        aria-hidden
        className="absolute inset-0 dot-grid opacity-50"
        animate={{ backgroundPosition: ["0px 0px", "42px 42px"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="container-shell relative z-10 grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-100">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Disponible para trabajar
          </div>

          <h1 className="font-display mt-8 max-w-5xl text-6xl font-black leading-[0.88] tracking-normal md:text-8xl">
            <span className="gradient-text">Pablo Ríos González</span>
          </h1>

          <div className="mt-7">
            <TypewriterText
              words={["Desarrollador Web Full Stack", "Especialista en IA Aplicada", "Junior Developer · Sevilla"]}
            />
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            Desarrollo aplicaciones web reales con inteligencia artificial integrada. Actualmente en prácticas en IHP
            Pediatría, construyendo el futuro desde Sevilla.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#proyectos" className="btn-primary px-6 py-3.5">
              Ver mis proyectos
              <ArrowRight size={18} />
            </a>
            <a href="#contacto" className="btn-secondary px-6 py-3.5">
              <Mail size={18} />
              Contactar
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            {heroTech.map((tech) => (
              <span
                key={tech}
                title={tech}
                className="rounded-full border border-slate-700/90 bg-slate-900/60 px-3 py-2 font-mono text-xs font-semibold text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative hidden h-[520px] lg:block"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="absolute inset-6 rounded-[2rem] border border-blue-400/20 bg-slate-900/40 shadow-[0_0_80px_rgba(59,130,246,0.16)] backdrop-blur" />
          {highlightCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                className="absolute rounded-2xl border border-slate-700/80 bg-slate-950/78 p-5 shadow-2xl backdrop-blur"
                style={{
                  left: `${index % 2 === 0 ? 3 : 48}%`,
                  top: `${12 + index * 21}%`,
                  width: "250px"
                }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Icon className="mb-4 text-emerald-300" size={26} />
                <p className="text-sm text-slate-400">{card.label}</p>
                <p className="font-display mt-1 text-xl font-bold text-white">{card.value}</p>
              </motion.div>
            );
          })}
          <div className="absolute bottom-16 left-16 right-10 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 font-mono text-sm leading-7 text-emerald-100">
            <span className="text-blue-300">const</span> developer = {"{"}
            <br />
            &nbsp;&nbsp;value: <span className="text-white">&quot;real projects&quot;</span>,
            <br />
            &nbsp;&nbsp;focus: <span className="text-white">&quot;applied AI&quot;</span>
            <br />
            {"}"}
          </div>
        </motion.div>
      </div>

      <a
        href="#sobre-mi"
        aria-label="Ir a Sobre mí"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-slate-400"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  );
}
