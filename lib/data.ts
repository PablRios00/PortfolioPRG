import {
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  ServerCog,
  Sparkles,
  TerminalSquare,
  Wrench
} from "lucide-react";

export type Project = {
  name: string;
  badge: string;
  category: string;
  badgeTone: string;
  description: string;
  stack: string[];
  github: string;
  demo?: string;
  featured?: boolean;
  specialBadge?: string;
};

export const navItems = [
  { label: "Sobre mí", href: "#sobre-mi", id: "sobre-mi" },
  { label: "Experiencia", href: "#experiencia", id: "experiencia" },
  { label: "Proyectos", href: "#proyectos", id: "proyectos" },
  { label: "Habilidades", href: "#habilidades", id: "habilidades" },
  { label: "GitHub", href: "#github", id: "github" },
  { label: "Contacto", href: "#contacto", id: "contacto" }
];

export const projects: Project[] = [
  {
    name: "FLUJO",
    badge: "IA · Automatización",
    category: "IA",
    badgeTone: "bg-purple-500/15 text-purple-200 border-purple-400/30",
    description:
      "Sistema multiagente de automatización inteligente de procesos de negocio. 4 agentes IA especializados que clasifican, extraen, deciden y ejecutan acciones de forma autónoma en tiempo real.",
    stack: ["Python", "FastAPI", "LangGraph", "OpenAI GPT-4o", "PostgreSQL", "pgvector", "Next.js", "TypeScript", "Docker", "Redis", "Celery"],
    github: "https://github.com/PablRios00/FLUJO",
    featured: true,
    specialBadge: "Proyecto estrella"
  },
  {
    name: "Atlas (HistoryMap)",
    badge: "IA · Historia",
    category: "IA",
    badgeTone: "bg-orange-500/15 text-orange-200 border-orange-400/30",
    description:
      "Atlas histórico mundial interactivo. Arrastra una barra de tiempo desde el 3000 a.C. hasta 2024, haz clic en cualquier punto del mapa y una IA narra lo que ocurría allí en ese momento.",
    stack: ["Next.js", "TypeScript", "Mapbox GL", "OpenAI GPT-4o", "PostgreSQL", "Framer Motion"],
    github: "https://github.com/PablRios00/Atlas",
    featured: true
  },
  {
    name: "DevTask",
    badge: "Full Stack",
    category: "TypeScript",
    badgeTone: "bg-blue-500/15 text-blue-200 border-blue-400/30",
    description:
      "Aplicación de gestión de tareas en tiempo real con tableros tipo Trello, colaboración simultánea mediante WebSockets y autenticación completa con JWT.",
    stack: ["TypeScript", "React", "Node.js", "Express", "PostgreSQL", "Socket.io", "Tailwind CSS", "Docker"],
    github: "https://github.com/PablRios00/DevTask"
  },
  {
    name: "Mini CMS con IA",
    badge: "IA · PHP",
    category: "PHP",
    badgeTone: "bg-emerald-500/15 text-emerald-200 border-emerald-400/30",
    description:
      "CMS completo construido desde cero en PHP con panel de administración, gestión de blogs, generador automático de sitios web y contenido generado con IA mediante la API de OpenAI.",
    stack: ["PHP", "MySQL", "JavaScript", "OpenAI API", "Bootstrap", "FPDF", "jQuery"],
    github: "https://github.com/PablRios00/mini-cms",
    specialBadge: "Proyecto real · IHP Pediatría"
  },
  {
    name: "Plataforma de Cursos Online",
    badge: "Full Stack · PHP",
    category: "PHP",
    badgeTone: "bg-teal-500/15 text-teal-200 border-teal-400/30",
    description:
      "Plataforma completa de formación online con panel de administración, gestión de alumnos, contenido multimedia por cursos, sistema de acceso por roles y pasarela de pago con PayPal integrada.",
    stack: ["PHP", "MySQL", "Tailwind CSS", "JavaScript", "PayPal API", "PDO"],
    github: "https://github.com/PablRios00/curso-landing",
    specialBadge: "Proyecto real · IHP Pediatría"
  },
  {
    name: "Adopta-app (TFG)",
    badge: "Full Stack",
    category: "Web",
    badgeTone: "bg-pink-500/15 text-pink-200 border-pink-400/30",
    description:
      "Plataforma web para la gestión y adopción responsable. Integra frontend accesible, backend en PHP y React, y APIs de IA para clasificar perfiles y optimizar recomendaciones.",
    stack: ["HTML5", "CSS3", "Bootstrap", "PHP", "React", "IA API", "MySQL"],
    github: "https://github.com/PablRios00/Adopta-app",
    specialBadge: "TFG DAW"
  },
  {
    name: "BlocNotas",
    badge: "Java · Desktop",
    category: "Web",
    badgeTone: "bg-yellow-500/15 text-yellow-100 border-yellow-400/30",
    description:
      "Aplicación de escritorio de bloc de notas desarrollada en Java con interfaz gráfica, persistencia de datos y gestión de múltiples documentos.",
    stack: ["Java", "Swing", "POO"],
    github: "https://github.com/PablRios00/BlocNotas"
  }
];

export const filters = ["Todos", "Web", "IA", "Mobile", "PHP", "TypeScript"];

export const experiences = [
  {
    company: "IHP Pediatría",
    role: "Técnico en Desarrollo Web — Prácticas Formativas",
    period: "Abril 2026 — Actualidad · Sevilla, España",
    current: true,
    bullets: [
      "Gestión, mantenimiento y optimización de bases de datos corporativas",
      "Supervisión y mejora del frontend del sitio web de IHP Pediatría",
      "Desarrollo de un generador automático de sitios web CMD con IA integrada (OpenAI API)",
      "Participación en reuniones de diseño y validación de nuevas funcionalidades",
      "Documentación técnica y apoyo en pruebas y depuración"
    ],
    stack: ["PHP", "MySQL", "JavaScript", "OpenAI API", "HTML5", "CSS3"]
  },
  {
    company: "Venta Pazo",
    role: "Camarero / Apoyo Operativo",
    period: "Octubre 2024 — Actualidad · Sanlúcar la Mayor, España",
    current: false,
    description:
      "Trabajo en entorno de alta demanda desarrollando habilidades de trabajo en equipo, gestión de la presión, comunicación efectiva y coordinación con múltiples áreas (sala, barra, cocina, almacén).",
    stack: ["Soft skills", "Trabajo en equipo", "Gestión del estrés"]
  }
];

export const education = [
  "Técnico Superior DAW — Grupo Studium · Sep 2024 – Mar 2026 · Sevilla",
  "Curso Fundamentos de la IA — OpenWebinars",
  "Curso Dominio de ChatGPT con la API de OpenAI — OpenWebinars",
  "Curso Python — OpenWebinars"
];

export const skills = [
  {
    title: "Frontend",
    icon: Code2,
    items: [
      ["HTML5", "#e34f26"],
      ["CSS3", "#1572b6"],
      ["JavaScript", "#f7df1e"],
      ["TypeScript", "#3178c6"],
      ["React", "#61dafb"],
      ["Next.js", "#ffffff"],
      ["Tailwind CSS", "#06b6d4"],
      ["Bootstrap", "#7952b3"],
      ["Angular", "#dd0031"],
      ["Framer Motion", "#ff0055"]
    ]
  },
  {
    title: "Backend",
    icon: ServerCog,
    items: [
      ["Node.js", "#339933"],
      ["Express", "#ffffff"],
      ["PHP", "#777bb4"],
      ["Python", "#3776ab"],
      ["FastAPI", "#009688"],
      ["Java", "#f89820"]
    ]
  },
  {
    title: "IA e Integraciones",
    icon: BrainCircuit,
    items: [
      ["OpenAI API", "#10b981"],
      ["LangGraph", "#ff4b4b"],
      ["LangChain", "#1c3c3c"],
      ["Resend", "#ffffff"],
      ["Stripe / PayPal", "#635bff"]
    ]
  },
  {
    title: "Bases de datos",
    icon: Database,
    items: [
      ["MySQL", "#4479a1"],
      ["PostgreSQL", "#336791"],
      ["MongoDB", "#47a248"],
      ["MariaDB", "#c0765a"],
      ["pgvector", "#10b981"],
      ["Redis", "#dc382d"]
    ]
  },
  {
    title: "DevOps y Herramientas",
    icon: Wrench,
    items: [
      ["Git", "#f05032"],
      ["GitHub", "#ffffff"],
      ["Docker", "#2496ed"],
      ["Vercel", "#ffffff"],
      ["Railway", "#a855f7"],
      ["XAMPP", "#fb7a24"],
      ["VSCode", "#007acc"],
      ["Eclipse", "#2c2255"]
    ]
  },
  {
    title: "Sistemas y Otros",
    icon: TerminalSquare,
    items: [
      ["Linux", "#facc15"],
      ["Windows", "#00a4ef"],
      ["macOS", "#d1d5db"],
      ["VMware", "#607078"],
      ["VirtualBox", "#183a61"],
      ["Salesforce", "#00a1e0"]
    ]
  }
];

export const heroTech = ["TypeScript", "React", "Next.js", "Python", "PHP", "MySQL", "Docker", "Git"];

export const highlightCards = [
  { icon: Sparkles, label: "IA aplicada", value: "OpenAI API" },
  { icon: BriefcaseBusiness, label: "Prácticas", value: "IHP Pediatría" },
  { icon: GraduationCap, label: "Formación", value: "DAW" },
  { icon: Bot, label: "Automatización", value: "Agentes IA" }
];
