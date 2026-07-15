import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0f1e] py-10">
      <div className="container-shell">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        <div className="flex flex-col items-center gap-5 pt-10 text-center">
          <div className="font-display text-2xl font-black gradient-text">PR</div>
          <p className="text-slate-200">Pablo Ríos González — Desarrollador Full Stack</p>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/PablRios00"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-blue-400 hover:text-white"
            >
              <Github size={20} />
            </a>
            <a
            href="https://www.linkedin.com/in/pablo-ríos-gonzález-414500332"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
             className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-blue-400 hover:text-white"
            >
            <Linkedin size={20} />
            </a>
            <a
              href="mailto:pabloriosglez@gmail.com"
              aria-label="Email"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-emerald-400 hover:text-white"
            >
              <Mail size={20} />
            </a>
          </div>
          <p className="text-sm text-slate-500">© 2026 Pablo Ríos González · Desarrollador Full Stack</p>
        </div>
      </div>
    </footer>
  );
}
