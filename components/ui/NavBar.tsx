"use client";

import { navItems } from "@/lib/data";
import { Download, Menu, X } from "lucide-react";
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

  const links = (
    <>
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={() => setOpen(false)}
          className={`rounded-full px-3 py-2 text-sm font-medium transition ${
            active === item.id ? "bg-blue-500/15 text-blue-200" : "text-slate-300 hover:text-white"
          }`}
        >
          {item.label}
        </a>
      ))}
    </>
  );

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-slate-800/80 bg-[#0a0f1e]/82 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container-shell flex h-20 items-center justify-between">
        <a href="#inicio" className="font-display text-2xl font-black gradient-text">
          PR
        </a>

        <div className="hidden items-center gap-1 lg:flex">{links}</div>

        <a
          href="/cv-pablo-rios-gonzalez.pdf"
          download
          className="btn-secondary hidden px-4 py-2 text-sm md:inline-flex"
        >
          <Download size={16} />
          Descargar CV
        </a>

        <button
          aria-label="Abrir menú"
          onClick={() => setOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 lg:hidden"
        >
          <Menu size={22} />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm lg:hidden">
          <aside className="ml-auto flex h-full w-[min(82vw,360px)] flex-col gap-6 border-l border-slate-800 bg-[#0f172a] p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="font-display text-2xl font-black gradient-text">PR</span>
              <button
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex flex-col gap-2">{links}</div>
            <a href="/cv-pablo-rios-gonzalez.pdf" download className="btn-primary px-4 py-3 text-sm">
              <Download size={16} />
              Descargar CV
            </a>
          </aside>
        </div>
      )}
    </header>
  );
}
