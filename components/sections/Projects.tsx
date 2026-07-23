"use client";

import { projects } from "@/lib/data";
import { useState } from "react";
import { AnimatedSection } from "../ui/AnimatedSection";
import { ProjectCard } from "./ProjectCard";

const INITIAL_VISIBLE = 3;

export function Projects() {
  const [showAll, setShowAll] = useState(false);

  const hasMore = projects.length > INITIAL_VISIBLE;
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_VISIBLE);

  return (
    <AnimatedSection id="proyectos" className="container-shell py-10 md:py-20">
      <div>
        <p className="section-kicker">Lo que he construido</p>
        <h2 className="section-title">Proyectos</h2>
        <p className="section-subtitle">
          Proyectos reales desplegados, con especial foco en IA aplicada y producto real.
        </p>
      </div>

      {projects.length > 0 ? (
        <>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>

          {hasMore && (
            <div className="mt-10 flex justify-center">
              <button
                onClick={() => setShowAll((value) => !value)}
                className="btn-secondary px-6 py-3 text-sm"
              >
                {showAll ? "Ver menos proyectos" : `Ver todos los proyectos (${projects.length})`}
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-900/60 p-8 text-center text-slate-300">
          Todavía no hay proyectos publicados. ¡Pronto habrá más!
        </div>
      )}
    </AnimatedSection>
  );
}
