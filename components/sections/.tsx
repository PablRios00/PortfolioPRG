"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Bot, BriefcaseBusiness, Mail, Sparkles, GraduationCap } from "lucide-react";
import Image from "next/image";
import { TypewriterText } from "../ui/TypewriterText";

const floatingCards = [
  {
    icon: Sparkles,
    label: "IA aplicada",
    value: "OpenAI + Claude",
    color: "text-emerald-300",
    position: "top-4 left-4",
    delay: 0,
    amplitude: -10,
  },
  {
    icon: BriefcaseBusiness,
    label: "Experiencia",
    value: "Prácticas IHP",
    color: "text-blue-300",
    position: "top-4 right-4",
    delay: 0.4,
    amplitude: 10,
  },
  {
    icon: GraduationCap,
    label: "Formación",
    value: "DAW + B2",
    color: "text-violet-300",
    position: "bottom-24 left-4",
    delay: 0.8,
    amplitude: -8,
  },
  {
    icon: Bot,
    label: "Automatización",
    value: "Agentes IA",
    color: "text-cyan-300",
    position: "bottom-24 right-4",
    delay: 1.2,
    amplitude: 8,
  },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="hero-grid relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Fondo animado de puntos */}
      <motion.div
        aria-hidden
        className="absolute inset-0 dot-grid opacity-50"
        animate={{ backgroundPosition: ["0px 0px", "42px 42px"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      {/* Blob de luz azul */}
      <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/15 blur-[140px]" />

      <div className="container-shell relative z-10 grid items-center gap-16 py-16 lg:grid-cols-[1.15fr_0.85fr]">

        {/* Columna izquierda: texto */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Badge disponible */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-100">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Disponible para trabajar
          </div>

          {/* Nombre */}
          <h1 className="font-display mt-8 max-w-5xl text-6xl font-black leading-[0.88] tracking-normal md:text-8xl">
            <span className="gradient-text">Pablo Ríos González</span>
          </h1>

          {/* Typewriter */}
          <div className="mt-7">
            <TypewriterText
              words={[
                "Desarrollador Web Full Stack",
                "Especialista en IA Aplicada",
                "Junior Developer · Sevilla",
              ]}
            />
          </div>

          {/* Descripción */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            Construyo aplicaciones web reales con inteligencia artificial integrada.
            Recién graduado en DAW, con prácticas completadas en IHP Pediatría.
            Busco donde seguir creciendo, aprender de los mejores y aportar desde el primer día.
          </p>

          {/* CTAs */}
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
        </motion.div>

        {/* Columna derecha: foto + recuadros flotantes */}
        <motion.div
          className="relative hidden min-h-[640px] items-center justify-center lg:flex"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          {/* Fondo panel */}
          <div className="absolute inset-0 rounded-[2rem] border border-blue-400/20 bg-slate-900/35 shadow-[0_0_80px_rgba(59,130,246,0.14)] backdrop-blur" />

          <div className="relative flex h-full w-full items-center justify-center p-8">

            {/* Foto central flotando */}
            <motion.div
              className="relative z-10 h-48 w-48 overflow-hidden rounded-full border-4 border-blue-400/40 shadow-[0_0_60px_rgba(59,130,246,0.3)]"
              style={{ marginTop: "-40px" }}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/pablo-rios.png"
                alt="Pablo Ríos González"
                width={192}
                height={192}
                className="h-full w-full object-cover object-top"
                priority
              />
            </motion.div>

            {/* Recuadros flotantes en las 4 esquinas */}
            {floatingCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.label}
                  className={`absolute ${card.position} w-[132px] rounded-2xl border border-slate-700/80 bg-slate-950/85 p-4 shadow-2xl backdrop-blur`}
                  animate={{ y: [0, card.amplitude, 0] }}
                  transition={{
                    duration: 4.5 + card.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: card.delay,
                  }}
                >
                  <Icon className={`mb-3 ${card.color}`} size={20} />
                  <p className="text-xs text-slate-400">{card.label}</p>
                  <p className="font-display mt-1 text-sm font-bold leading-tight text-white">
                    {card.value}
                  </p>
                </motion.div>
              );
            })}

            {/* Bloque de código — centrado abajo */}
            <motion.div
              className="absolute bottom-5 left-1/2 w-[210px] -translate-x-1/2 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 font-mono text-xs leading-6 text-emerald-100"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-blue-300">const</span>{" "}dev {"= {"}
              <br />
              &nbsp;&nbsp;value:{" "}<span className="text-white">&quot;real projects&quot;</span>,
              <br />
              &nbsp;&nbsp;focus:{" "}<span className="text-white">&quot;applied AI&quot;</span>
              <br />
              {"}"}
            </motion.div>

          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
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
