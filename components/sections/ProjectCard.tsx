"use client";

import type { Project } from "@/lib/data";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import Image from "next/image";

function StackSection({ label, items, color }: { label: string; items: string[]; color: string }) {
  if (!items || items.length === 0) return null;
  return (
    <div>
      <p className={`mb-1.5 text-[0.65rem] font-bold uppercase tracking-widest ${color}`}>{label}</p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-slate-700/90 bg-slate-950/55 px-2.5 py-1 font-mono text-[0.68rem] text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`premium-card group flex h-full flex-col rounded-2xl p-6 ${project.featured ? "lg:col-span-2" : ""}`}
    >
      {/* Media: imagen o vídeo */}
      {project.media && (
        <div className="mb-5 overflow-hidden rounded-xl border border-slate-700/80 bg-slate-950/60">
          {project.media.type === "image" ? (
            <Image
              src={project.media.src}
              alt={project.media.alt}
              width={1200}
              height={675}
              className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            />
          ) : (
            <video
              src={project.media.src}
              className="aspect-video w-full object-cover"
              muted
              loop
              playsInline
              controls
              preload="metadata"
              aria-label={project.media.alt}
            />
          )}
        </div>
      )}

      {/* Badges */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className={`rounded-full border px-3 py-1 text-xs font-bold ${project.badgeTone}`}>
          {project.badge}
        </span>
        {project.specialBadge && (
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/15 px-3 py-1 text-xs font-bold text-blue-100">
            {project.specialBadge === "Proyecto estrella" && <Star size={13} fill="currentColor" />}
            {project.specialBadge}
          </span>
        )}
      </div>

      {/* Título y descripción */}
      <h3 className="font-display mt-6 text-2xl font-bold text-white">{project.name}</h3>
      <p className="mt-3 line-clamp-4 flex-1 text-sm leading-7 text-slate-300">{project.description}</p>

      {/* Stack segmentado */}
      <div className="mt-5 space-y-3">
        {project.stackSegmented ? (
          <>
            <StackSection label="Frontend" items={project.stackSegmented.frontend} color="text-blue-400" />
            <StackSection label="Backend" items={project.stackSegmented.backend} color="text-emerald-400" />
            <StackSection label="Base de datos" items={project.stackSegmented.database} color="text-violet-400" />
          </>
        ) : (
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700/90 bg-slate-950/55 px-2.5 py-1 font-mono text-[0.68rem] text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Botones */}
      <div className="mt-7 flex gap-3">
        <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary px-4 py-2 text-sm">
          <Github size={16} />
          GitHub
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary px-4 py-2 text-sm">
            <ExternalLink size={16} />
            Demo
          </a>
        )}
      </div>
    </motion.article>
  );
}
