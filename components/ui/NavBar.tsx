"use client";

import { navItems } from "@/lib/data";
import { Download, Github, Linkedin, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("sobre-mi");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );
    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-slate-800/80 bg-[#0a0f1e]/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container-shell flex h-20 items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="font-display text-2xl font-black gradient-text">
          PR
        </a>

        {/* Links escritorio */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                active === item.id ? "bg-blue-500/15 text-blue-200" : "text-slate-300 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Botones escritorio */}
        <div className="hidden items-center gap-2 md:flex">
          <a href="/cv-pablo-rios-gonzalez.pdf" download className="btn-secondary px-4 py-2 text-sm">
            <Download size={16} />
            Descargar CV
          </a>
          <a
            href="https://github.com/PablRios00"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-blue-400 hover:text-white"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/pablo-ríos-gonzález-414500332"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-blue-400 hover:text-white"
          >
            <Linkedin size={18} />
          </a>
        </div>

        {/* Botón hamburguesa móvil */}
        <button
          aria-label="Abrir menú"
          onClick={() => setOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 lg:hidden"
        >
          <Menu size={22} />
        </button>
      </nav>

      {/* ── Menú móvil ── */}
      {open && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          onClick={() => setOpen(false)}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />

          {/* Panel lateral */}
          <aside
            className="absolute right-0 top-0 z-10 flex h-full w-[min(85vw,340px)] flex-col bg-[#0a0f1e] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cabecera del panel */}
            <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
              <span className="font-display text-xl font-black gradient-text">Pablo Ríos</span>
              <button
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            {/* Links de navegación */}
            <nav className="flex flex-1 flex-col gap-1 px-4 py-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center rounded-2xl px-5 py-4 text-base font-semibold transition ${
                    active === item.id
                      ? "bg-blue-500/15 text-blue-200"
                      : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Botones inferiores */}
            <div className="border-t border-slate-800 px-4 py-6 space-y-3">
              {/* CV */}
              <a
                href="/cv-pablo-rios-gonzalez.pdf"
                download
                className="btn-primary flex w-full items-center justify-center gap-2 px-4 py-3.5 text-sm font-bold"
                onClick={() => setOpen(false)}
              >
                <Download size={17} />
                Descargar CV
              </a>

              {/* Sociales */}
              <div className="flex gap-3">
                <a
                  href="https://github.com/PablRios00"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-700 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-400 hover:text-white"
                >
                  <Github size={17} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/pablo-ríos-gonzález-414500332"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-700 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-400 hover:text-white"
                >
                  <Linkedin size={17} />
                  LinkedIn
                </a>
              </div>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
