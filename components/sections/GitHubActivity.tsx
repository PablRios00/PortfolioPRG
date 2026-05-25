"use client";

import type { GitHubRepo } from "@/lib/github";
import { motion } from "framer-motion";
import { ExternalLink, GitFork, Github, Star } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { AnimatedSection } from "../ui/AnimatedSection";

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  Python: "#facc15",
  PHP: "#777bb4",
  Java: "#f89820",
  HTML: "#e34f26",
  JavaScript: "#f7df1e",
  CSS: "#1572b6"
};

function relativeDate(date: string) {
  const diff = Date.now() - new Date(date).getTime();
  const days = Math.floor(diff / 86_400_000);
  if (days <= 0) return "hoy";
  if (days === 1) return "hace 1 día";
  if (days < 30) return `hace ${days} días`;
  const months = Math.floor(days / 30);
  if (months === 1) return "hace 1 mes";
  return `hace ${months} meses`;
}

export function GitHubActivity() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/github")
      .then((response) => {
        if (!response.ok) throw new Error("No se pudo cargar GitHub");
        return response.json();
      })
      .then((data: GitHubRepo[]) => setRepos(data))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const repoCount = useMemo(() => Math.max(24, repos.length), [repos.length]);

  return (
    <AnimatedSection id="github" className="container-shell py-28">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="section-kicker">Actividad en tiempo real desde la API de GitHub</p>
          <h2 className="section-title">GitHub</h2>
          <p className="section-subtitle">Repositorios reales de Pablo, ordenados por última actualización.</p>
        </div>
        <div className="rounded-2xl border border-slate-700 bg-slate-900/60 px-5 py-4 text-sm font-semibold text-slate-200">
          {repoCount} Repositorios públicos · PablRios00
        </div>
      </div>

      {loading && (
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-48 animate-pulse rounded-2xl border border-slate-800 bg-slate-900/60" />
          ))}
        </div>
      )}

      {error && <div className="mt-12 rounded-2xl border border-red-500/30 bg-red-500/10 p-5 text-red-100">{error}</div>}

      {!loading && !error && (
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo, index) => {
            const color = repo.language ? languageColors[repo.language] ?? "#94a3b8" : "#64748b";
            return (
              <motion.a
                key={repo.html_url}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="premium-card block rounded-2xl p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-bold text-white">{repo.name}</h3>
                  <ExternalLink size={18} className="text-slate-500" />
                </div>
                <p className="mt-3 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-slate-400">
                  {repo.description ?? "Repositorio público de Pablo Ríos González."}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-300">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
                    {repo.language ?? "Código"}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Star size={15} /> {repo.stargazers_count}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <GitFork size={15} /> {repo.forks_count}
                  </span>
                </div>
                <p className="mt-4 text-xs text-slate-500">Actualizado {relativeDate(repo.updated_at)}</p>
              </motion.a>
            );
          })}
        </div>
      )}

      <div className="mt-10 text-center">
        <a href="https://github.com/PablRios00" target="_blank" rel="noreferrer" className="btn-primary px-6 py-3">
          <Github size={18} />
          Ver todos en GitHub →
        </a>
      </div>
    </AnimatedSection>
  );
}
