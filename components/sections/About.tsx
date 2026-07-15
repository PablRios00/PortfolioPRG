"use client";

import { AnimatedSection } from "../ui/AnimatedSection";
import Image from "next/image";
import { Mail, MapPin, Github, Rocket, Brain, Layers, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const valueCards = [
  {
    icon: Rocket,
    title: "Compromiso real",
    desc: "Aporto desde el primer día sin excusas. La actitud no se aprende en un curso.",
    color: "text-emerald-300",
    border: "border-emerald-400/20",
    glow: "hover:shadow-[0_0_30px_rgba(52,211,153,0.12)]",
    delay: 0.1,
  },
  {
    icon: Brain,
    title: "IA aplicada",
    desc: "Integro inteligencia artificial en proyectos reales, no solo en demos.",
    color: "text-blue-300",
    border: "border-blue-400/20",
    glow: "hover:shadow-[0_0_30px_rgba(96,165,250,0.12)]",
    delay: 0.2,
  },
  {
    icon: Layers,
    title: "Full Stack",
    desc: "Del backend al frontend sin miedo. Entiendo el sistema completo.",
    color: "text-violet-300",
    border: "border-violet-400/20",
    glow: "hover:shadow-[0_0_30px_rgba(167,139,250,0.12)]",
    delay: 0.3,
  },
  {
    icon: TrendingUp,
    title: "Aprendizaje continuo",
    desc: "Cada proyecto es una oportunidad de crecer. Nunca dejo de mejorar.",
    color: "text-cyan-300",
    border: "border-cyan-400/20",
    glow: "hover:shadow-[0_0_30px_rgba(103,232,249,0.12)]",
    delay: 0.4,
  },
];

export function About() {
  return (
    <AnimatedSection id="sobre-mi" className="container-shell py-16 md:py-28">
      <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">

        {/* ── Columna izquierda: foto + cards + contacto ── */}
        <div className="flex flex-col gap-5">

          {/* Foto */}
          <motion.div
            className="premium-card overflow-hidden rounded-3xl p-4"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/pablo-rios.png"
              alt="Foto profesional de Pablo Ríos González"
              width={640}
              height={640}
              className="aspect-square rounded-2xl object-cover object-top"
              priority={false}
            />
          </motion.div>

          {/* Value cards 2x2 */}
          <div className="grid grid-cols-2 gap-3">
            {valueCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  className={`rounded-2xl border ${card.border} bg-slate-900/60 p-4 transition-shadow duration-300 ${card.glow}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: card.delay }}
                  whileHover={{ y: -3 }}
                >
                  <Icon className={`mb-2 ${card.color}`} size={20} />
                  <p className="font-display text-sm font-bold text-white">{card.title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Contacto */}
          <div className="flex flex-col gap-2 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2">
              <MapPin size={16} className="text-blue-300" /> Sevilla, España
            </span>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 transition-colors hover:border-emerald-400/40"
              href="mailto:pabloriosglez@gmail.com"
            >
              <Mail size={16} className="text-emerald-300" /> pabloriosglez@gmail.com
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 transition-colors hover:border-slate-500"
              href="https://github.com/PablRios00"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} className="text-slate-200" /> github.com/PablRios00
            </a>
          </div>

        </div>

        {/* ── Columna derecha: solo texto ── */}
        <div className="flex flex-col justify-center">
          <p className="section-kicker">Perfil profesional</p>
          <h2 className="section-title">Sobre mí</h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-slate-300 md:text-lg">
            <p>
              Soy Pablo Ríos González, desarrollador web Full Stack de Sevilla con una gran pasión
              por construir proyectos reales que resuelven problemas concretos. Acabo de completar
              mis prácticas en IHP Pediatría, donde trabajé en la gestión de bases de datos,
              el frontend corporativo y el desarrollo de herramientas con IA aplicada a producción.
            </p>
            <p>
              Me especializo en el stack web moderno — Java, Spring Boot, React, Python, FastAPI —
              y en la integración de IA en aplicaciones reales. He trabajado con OpenAI, Claude,
              Mistral AI y LangGraph para construir sistemas agentivos que automatizan procesos
              y multiplican la productividad.
            </p>
            <p>
              Busco una empresa donde seguir creciendo junto a un equipo con experiencia,
              aportar desde el primer día y demostrar que el compromiso y la humildad
              son tan importantes como el código.
            </p>
          </div>
        </div>

      </div>
    </AnimatedSection>
  );
}
