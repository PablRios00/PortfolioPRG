# Portfolio v2 — Pablo Ríos González

Portfolio personal profesional de Pablo Ríos González, desarrollador web junior de Sevilla especializado en Next.js, TypeScript, PHP e inteligencia artificial aplicada.

## Screenshot

> Añadir captura del portfolio desplegado aquí.

## Stack tecnológico

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-ff0055)
![Resend](https://img.shields.io/badge/Resend-Email-black)

## Instalación

```bash
git clone https://github.com/PablRios00/PortfolioPRG.git
cd PortfolioPRG
npm install
cp .env.local.example .env.local
```

Rellena `RESEND_API_KEY` en `.env.local` con tu clave de Resend:

```env
RESEND_API_KEY=tu_clave_resend
CONTACT_EMAIL_TO=pabloriosglez@gmail.com
NEXT_PUBLIC_GITHUB_USERNAME=PablRios00
```

Arranca el entorno local:

```bash
npm run dev
```

Abre `http://localhost:3000`.

## Deploy en Vercel

1. Conecta el repositorio `https://github.com/PablRios00/PortfolioPRG.git` en Vercel.
2. Añade las variables de entorno:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL_TO=pabloriosglez@gmail.com`
   - `NEXT_PUBLIC_GITHUB_USERNAME=PablRios00`
3. Haz deploy automático desde la rama `main`.

## Repositorio Git

```bash
git init
git remote add origin https://github.com/PablRios00/PortfolioPRG.git
git add .
git commit -m "feat: portfolio v2 inicial"
git push -u origin main
```

## Créditos

Construido con Next.js 15, Tailwind CSS y Framer Motion.
