"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Github, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { AnimatedSection } from "../ui/AnimatedSection";

const contactCards = [
  { icon: Mail, label: "pabloriosglez@gmail.com", href: "mailto:pabloriosglez@gmail.com" },
  { icon: MapPin, label: "Sevilla, España — Disponible para remoto" },
  { icon: Github, label: "github.com/PablRios00", href: "https://github.com/PablRios00" },
  { icon: Phone, label: "(+34) 640 260 136", href: "tel:+34640260136" },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "No se pudo enviar el mensaje");

      setStatus("success");
      setMessage("Mensaje enviado correctamente. Pablo te responderá muy pronto.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "No se pudo enviar el mensaje");
    }
  }

  return (
    <AnimatedSection id="contacto" className="bg-[#0f172a]/55 py-10 md:py-20">
      <div className="container-shell">
        <p className="section-kicker">Hablemos</p>
        <h2 className="section-title">Contacto</h2>
        <p className="section-subtitle">
          ¿Buscas a alguien que aporte desde el primer día? Hablemos.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info contacto */}
          <div className="space-y-3">
            {contactCards.map((card) => {
              const Icon = card.icon;
              const content = (
                <div className="flex items-center gap-4 rounded-2xl border border-slate-700/80 bg-slate-900/70 p-4 text-slate-200">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-200">
                    <Icon size={19} />
                  </span>
                  <span className="break-all text-sm font-semibold">{card.label}</span>
                </div>
              );
              return card.href ? (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div key={card.label}>{content}</div>
              );
            })}
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-sm leading-7 text-emerald-50">
              Busco un equipo donde seguir creciendo, aprender de profesionales con experiencia
              y demostrar que el compromiso y la humildad valen tanto como el código.
              Si crees que encajamos, escríbeme.
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={onSubmit} className="premium-card rounded-3xl p-5 md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm font-semibold text-slate-300">
                Nombre completo
                <input
                  name="name"
                  required
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-blue-400"
                />
              </label>
              <label className="space-y-2 text-sm font-semibold text-slate-300">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-blue-400"
                />
              </label>
            </div>
            <label className="mt-4 block space-y-2 text-sm font-semibold text-slate-300">
              Asunto
              <input
                name="subject"
                required
                className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-blue-400"
              />
            </label>
            <label className="mt-4 block space-y-2 text-sm font-semibold text-slate-300">
              Mensaje
              <textarea
                name="message"
                required
                minLength={20}
                rows={5}
                className="w-full resize-none rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-blue-400"
              />
            </label>
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary mt-5 w-full px-6 py-3.5 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
              {status === "loading" ? "Enviando..." : "Enviar mensaje"}
            </button>
            <AnimatePresence>
              {message && (
                <motion.p
                  className={`mt-4 rounded-2xl border p-4 text-sm ${
                    status === "success"
                      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-100"
                      : "border-red-400/30 bg-red-400/10 text-red-100"
                  }`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                >
                  {message}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
}
