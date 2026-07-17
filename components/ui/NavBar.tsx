"use client";

import { navItems } from "@/lib/data";
import { Download, Github, Linkedin, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(navItems[0].id);
  const [open, setOpen] = useState(false);

  // Fondo del header al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sección activa: cálculo directo por posición de scroll (robusto con secciones de altura variable,
  // a diferencia de IntersectionObserver con rootMargin, que puede quedarse "pillado" en la primera sección).
  //
  // IMPORTANTE: no asumimos que el orden de `navItems` coincide con el orden real de las secciones
  // en la página (no coincide: en la web "Habilidades" va antes que "GitHub", pero en el menú van al
  // revés). Por eso en cada scroll recalculamos la posición real de cada sección con
  // getBoundingClientRect() y las ordenamos por esa posición antes de decidir cuál está activa.
  useEffect(() => {
    const sectionEls = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionEls.length === 0) return;

    const HEADER_OFFSET = 140;

    const handleScroll = () => {
      const scrollPos = window.scrollY + HEADER_OFFSET;
      const doc = document.documentElement;
      const nearBottom = window.scrollY + window.innerHeight >= doc.scrollHeight - 4;

      const positions = sectionEls
        .map((el) => ({ id: el.id, top: el.getBoundingClientRect().top + window.scrollY }))
        .sort((a, b) => a.top - b.top);

      if (nearBottom) {
        setActive(positions[positions.length - 1].id);
        return;
      }

      let current = positions[0].id;
      for (const pos of positions) {
        if (pos.top <= scrollPos) {
          current = pos.id;
        }
      }
      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Bloquea el scroll del body mientras el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Cierra el menú móvil si se agranda la ventana a escritorio
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-slate-800/80 bg-[#0a0f1e]/95 backdrop-blur-md" : "bg-transparent"
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
      </header>

      {/* ── Menú móvil ──
          Se renderiza FUERA del <header> a propósito: el header cambia de clases (backdrop-blur)
          según el scroll, y un ancestro con backdrop-filter puede crear un "containing block" para
          elementos position:fixed, haciendo que el panel no cubra toda la pantalla y deje ver
          contenido de fondo. Al ponerlo como hermano del header, siempre se posiciona respecto
          al viewport completo. El color de fondo va también en `style` (no solo en className) como
          garantía extra de opacidad total, sin depender de que Tailwind genere la clase arbitraria. */}
      {open && (
        <div className="fixed inset-0 z-[999] lg:hidden" role="dialog" aria-modal="true">
          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(2, 6, 23, 0.88)", backdropFilter: "blur(6px)" }}
            onClick={() => setOpen(false)}
          />

          {/* Panel lateral — 100% opaco, sin transparencia */}
          <aside
            className="absolute right-0 top-0 flex h-full w-[min(85vw,340px)] flex-col shadow-2xl"
            style={{ backgroundColor: "#0a0f1e", opacity: 1 }}
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
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
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
    </>
  );
}
