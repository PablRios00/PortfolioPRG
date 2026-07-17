"use client";

import { filters, projects } from "@/lib/data";
import { useEffect, useMemo, useState } from "react";
import { AnimatedSection } from "../ui/AnimatedSection";
import { ProjectCard } from "./ProjectCard";

const INITIAL_VISIBLE = 3;

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "Todos") return projects;
    return projects.filter(
      (project) =>
        project.category === activeFilter || project.stack.includes(activeFilter)
    );
  }, [activeFilter]);

  // Al cambiar de filtro, vuelve a mostrar solo el primer bloque
  useEffect(() => {
    setShowAll(false);
  }, [activeFilter]);

  const hasMore = filteredProjects.length > INITIAL_VISIBLE;
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_VISIBLE);

  return (
    <AnimatedSection id="proyectos" className="container-shell py-10 md:py-20">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="section-kicker">Lo que he construido</p>
          <h2 className="section-title">Proyectos</h2>
          <p className="section-subtitle">
            Proyectos reales desplegados, con especial foco en IA aplicada y producto real.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                activeFilter === filter
                  ? "border-blue-400 bg-blue-500/18 text-blue-100"
                  : "border-slate-700 bg-slate-900/60 text-slate-300 hover:border-slate-500"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {filteredProjects.length > 0 ? (
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
                {showAll
                  ? "Ver menos proyectos"
                  : `Ver todos los proyectos (${filteredProjects.length})`}
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-900/60 p-8 text-center text-slate-300">
          Todavía no hay proyectos con esa tecnología. ¡Pronto habrá más!
        </div>
      )}
    </AnimatedSection>
  );
}
