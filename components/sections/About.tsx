"use client";

import { AnimatedSection } from "../ui/AnimatedSection";
import Image from "next/image";
import { Mail, MapPin, Github } from "lucide-react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1200, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => spring.on("change", (latest) => setDisplay(Math.round(latest))), [spring]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <AnimatedSection id="sobre-mi" className="container-shell py-28">
      <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <div className="premium-card overflow-hidden rounded-3xl p-4">
            <Image
              src="https://github.com/PablRios00.png"
              alt="Foto de perfil de Pablo Ríos González"
              width={640}
              height={640}
              className="aspect-square rounded-2xl object-cover"
              priority={false}
            />
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              ["6", "Proyectos principales"],
              ["2", "Años de experiencia"],
              ["B2", "Nivel de inglés"]
            ].map(([value, label]) => (
              <motion.div
                key={label}
                className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4 text-center"
                whileHover={{ y: -4 }}
              >
                <p className="font-display text-2xl font-black text-white">
                  {Number.isNaN(Number(value)) ? value : <Counter value={Number(value)} />}
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="section-kicker">Perfil profesional</p>
          <h2 className="section-title">Sobre mí</h2>
          <div className="mt-7 space-y-5 text-base leading-8 text-slate-300 md:text-lg">
            <p>
              Soy Pablo Ríos González, desarrollador web junior de Sevilla con una gran pasión por construir proyectos
              reales que resuelven problemas concretos. Actualmente realizo mis prácticas en IHP Pediatría, donde trabajo
              en la gestión de bases de datos, el frontend corporativo y el desarrollo de herramientas con inteligencia
              artificial aplicada a producción.
            </p>
            <p>
              Me especializo en el stack web moderno (Next.js, TypeScript, React) y en la integración de IA en
              aplicaciones reales. He trabajado con OpenAI, Mistral AI, LangGraph y herramientas de automatización como
              n8n para generar contenido, reducir tiempos de producción y construir sistemas agentivos. Creo firmemente
              que la IA no reemplaza al desarrollador, sino que lo convierte en 10 veces más productivo.
            </p>
            <p>
              Fuera del código, mi experiencia de dos años en hostelería me ha enseñado más sobre trabajo en equipo,
              gestión del estrés y atención al cliente que cualquier libro. Eso también es parte de quién soy.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2">
              <MapPin size={16} className="text-blue-300" /> Sevilla, España
            </span>
            <a className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2" href="mailto:pabloriosglez@gmail.com">
              <Mail size={16} className="text-emerald-300" /> pabloriosglez@gmail.com
            </a>
            <a className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2" href="https://github.com/PablRios00" target="_blank">
              <Github size={16} className="text-slate-200" /> github.com/PablRios00
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
