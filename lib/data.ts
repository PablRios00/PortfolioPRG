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

export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
};

export type StackSegmented = {
  frontend?: string[];
  backend?: string[];
  database?: string[];
};

export type Project = {
  name: string;
  badge: string;
  category: string;
  badgeTone: string;
  description: string;
  stack: string[];
  stackSegmented?: StackSegmented;
  github: string;
  demo?: string;
  featured?: boolean;
  specialBadge?: string;
  media?: ProjectMedia;
};

export const navItems = [
  { label: "Sobre mí", href: "#sobre-mi", id: "sobre-mi" },
  { label: "Proyectos", href: "#proyectos", id: "proyectos" },
  { label: "GitHub", href: "#github", id: "github" },
  { label: "Habilidades", href: "#habilidades", id: "habilidades" },
  { label: "Contacto", href: "#contacto", id: "contacto" }
];

export const projects: Project[] = [
  {
    name: "Adopta-app (TFG)",
    badge: "Full Stack",
    category: "Web",
    badgeTone: "bg-pink-500/15 text-pink-200 border-pink-400/30",
    description:
      "Plataforma web para adopción responsable con chat en tiempo real, favoritos, galería múltiple, geolocalización por zonas y panel de administración.",
    stack: ["HTML5", "CSS3", "JavaScript", "PHP 8", "PDO", "MySQL", "Bootstrap"],
    stackSegmented: {
      frontend: ["HTML5", "CSS3", "JavaScript ES6+", "Bootstrap 5"],
      backend: ["PHP 8", "PDO"],
      database: ["MySQL"],
    },
    github: "https://github.com/PablRios00/Adopta-app",
    demo: "https://adopta.pablorios.eu",
    specialBadge: "TFG DAW",
    media: {
      type: "video",
      src: "/projects/adopta-demo.mp4",
      alt: "Demo en vídeo de Adopta-app"
    }
  }
];

// ─────────────────────────────────────────────────────────────────────────
// PROYECTOS OCULTOS TEMPORALMENTE (a petición expresa, todos menos Adopta).
// FLUJO está pendiente de un rediseño antes de volver a mostrarse.
// Para restaurar cualquiera de estos, corta el objeto correspondiente y
// pégalo de nuevo dentro del array `projects` de arriba (antes del `];`).
// ─────────────────────────────────────────────────────────────────────────
/*
  {
    name: "FLUJO",
    badge: "IA · Automatización",
    category: "IA",
    badgeTone: "bg-purple-500/15 text-purple-200 border-purple-400/30",
    description:
      "Sistema multiagente de automatización inteligente de procesos de negocio. Cuatro agentes especializados clasifican, extraen datos, deciden acciones y ejecutan workflows en tiempo real.",
    stack: ["Python", "FastAPI", "LangGraph", "OpenAI API", "PostgreSQL", "pgvector", "Next.js", "TypeScript", "Docker", "Redis", "Celery", "n8n"],
    stackSegmented: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Socket.io-client"],
      backend: ["Python 3.12", "FastAPI", "LangGraph", "OpenAI GPT-4o", "Celery", "n8n", "Resend", "Slack API"],
      database: ["PostgreSQL", "pgvector", "Redis", "Docker Compose"],
    },
    github: "https://github.com/PablRios00/FLUJO",
    featured: true,
    specialBadge: "Proyecto estrella",
    media: {
      type: "image",
      src: "/projects/flujo.png",
      alt: "Vista de FLUJO, sistema multiagente de automatización"
    }
  },
  {
    name: "Atlas (HistoryMap)",
    badge: "IA · Historia",
    category: "IA",
    badgeTone: "bg-orange-500/15 text-orange-200 border-orange-400/30",
    description:
      "Atlas histórico mundial interactivo. El usuario elige un año, hace clic en el mapa y recibe una narración histórica generada por IA en streaming.",
    stack: ["Next.js", "TypeScript", "Leaflet", "OpenAI GPT-4o", "PostgreSQL", "Prisma", "Framer Motion"],
    stackSegmented: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Leaflet", "Framer Motion"],
      backend: ["Next.js API Routes", "OpenAI GPT-4o", "Prisma ORM"],
      database: ["PostgreSQL"],
    },
    github: "https://github.com/PablRios00/Atlas",
    featured: true,
    media: {
      type: "image",
      src: "/projects/atlas.png",
      alt: "Mapa interactivo de HistoryMap con narración histórica"
    }
  },
  {
    name: "DevTask",
    badge: "Full Stack",
    category: "TypeScript",
    badgeTone: "bg-blue-500/15 text-blue-200 border-blue-400/30",
    description:
      "Aplicación de gestión de tareas en tiempo real con tablero Kanban colaborativo, invitaciones por enlace, autenticación JWT y actualizaciones mediante Socket.IO.",
    stack: ["TypeScript", "React", "Node.js", "Express", "PostgreSQL", "Socket.io", "JWT", "Docker"],
    stackSegmented: {
      frontend: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Socket.io-client"],
      backend: ["Node.js", "Express", "JWT", "bcrypt", "Socket.io"],
      database: ["PostgreSQL", "Docker Compose"],
    },
    github: "https://github.com/PablRios00/DevTask",
    media: {
      type: "image",
      src: "/projects/devtask.png",
      alt: "Tablero Kanban de DevTask"
    }
  },
  {
    name: "Mini CMS con IA",
    badge: "IA · PHP",
    category: "PHP",
    badgeTone: "bg-emerald-500/15 text-emerald-200 border-emerald-400/30",
    description:
      "CMS en PHP con roles, editor visual, subida de imágenes, exportación ZIP/PDF y generación automática de sitios web asistida por Mistral AI.",
    stack: ["PHP 8", "MySQL", "JavaScript", "Mistral AI API", "Bootstrap", "FPDF", "ZipArchive"],
    stackSegmented: {
      frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"],
      backend: ["PHP 8", "Mistral AI API", "FPDF", "ZipArchive"],
      database: ["MySQL"],
    },
    github: "https://github.com/PablRios00/mini-cms",
    specialBadge: "Proyecto real · IHP Pediatría",
    media: {
      type: "image",
      src: "/projects/mini-cms.png",
      alt: "Editor visual del Mini CMS con IA"
    }
  },
  {
    name: "Cadera Pro Academy",
    badge: "Full Stack · PHP",
    category: "PHP",
    badgeTone: "bg-teal-500/15 text-teal-200 border-teal-400/30",
    description:
      "Plataforma de cursos médicos online con landing pública, panel de administración, gestión de alumnos por código y pasarelas externas de pago.",
    stack: ["PHP 8", "PDO", "MySQL", "Tailwind CSS", "Bootstrap", "Stripe", "Hotmart", "PayPal"],
    stackSegmented: {
      frontend: ["HTML5", "CSS3", "Tailwind CSS", "Bootstrap 5"],
      backend: ["PHP 8", "PDO", "Stripe", "Hotmart", "PayPal"],
      database: ["MySQL"],
    },
    github: "https://github.com/PablRios00/curso-landing",
    specialBadge: "Proyecto real · IHP Pediatría",
    media: {
      type: "image",
      src: "/projects/courses-platform.png",
      alt: "Landing de Cadera Pro Academy"
    }
  },
*/

export const filters = ["Todos", "IA", "PHP", "TypeScript", "Web", "Java", "Python", "Vue", ".NET"];

export const experiences = [
  {
    company: "IHP Pediatría",
    role: "Técnico en Desarrollo Web — Prácticas Formativas",
    period: "Abril 2026 — Junio 2026 · Sevilla, España",
    current: false,
    bullets: [
      "Gestión y optimización de bases de datos MySQL, mejorando organización y tiempos de consulta",
      "Auditoría y mejora del frontend corporativo con correcciones de UX y responsive design",
      "Desarrollo de un mini-CMS con generación automática de sitios web mediante Mistral AI API",
      "Desarrollo de una plataforma de cursos online con alumnos, códigos de acceso y pagos externos",
      "Documentación técnica, pruebas, depuración y validación de funcionalidades con el equipo"
    ],
    stack: ["PHP", "MySQL", "JavaScript", "Mistral AI API", "HTML5", "CSS3", "Bootstrap"]
  },
  {
    company: "Venta Pazo",
    role: "Camarero / Apoyo Operativo",
    period: "Octubre 2024 — Actualidad · Sanlúcar la Mayor, España",
    current: false,
    description:
      "Trabajo en entorno de alta demanda desarrollando habilidades de atención al cliente, coordinación de equipo, gestión de presión, comunicación efectiva y apoyo entre sala, barra, cocina y almacén.",
    stack: ["Soft skills", "Trabajo en equipo", "Gestión del estrés"]
  }
];

export const education = [
  "Técnico Superior DAW — Grupo Studium · Sep 2024 – Mar 2026 · Sevilla",
  "Curso Fundamentos de la IA — OpenWebinars",
  "Curso Dominio de ChatGPT con la API de OpenAI — OpenWebinars",
  "Curso Python — OpenWebinars",
  "Inglés B2 certificado Aptis — British Council",
  "Permiso de conducción B"
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
      ["Framer Motion", "#ff0055"],
      ["Vite", "#646cff"]
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
      ["Java", "#f89820"],
      ["Spring Boot", "#6db33f"]
    ]
  },
  {
    title: "IA e Integraciones",
    icon: BrainCircuit,
    items: [
      ["OpenAI API", "#10b981"],
      ["Claude API", "#d97706"],
      ["Mistral AI", "#ff7000"],
      ["LangGraph", "#ff4b4b"],
      ["LangChain", "#1c3c3c"],
      ["Resend", "#ffffff"],
      ["Slack API", "#4a154b"],
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
      ["Redis", "#dc382d"],
      ["Prisma", "#2d3748"]
    ]
  },
  {
    title: "DevOps y Herramientas",
    icon: Wrench,
    items: [
      ["Git", "#f05032"],
      ["GitHub", "#ffffff"],
      ["Docker", "#2496ed"],
      ["Docker Compose", "#2496ed"],
      ["Vercel", "#ffffff"],
      ["Railway", "#a855f7"],
      ["XAMPP", "#fb7a24"],
      ["Postman", "#ff6c37"],
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
      ["Salesforce", "#00a1e0"],
      ["n8n", "#ea4b71"],
      ["WebSockets", "#3b82f6"]
    ]
  }
];

export const heroTech = ["TypeScript", "React", "Next.js", "Python", "PHP", "MySQL", "Docker", "Git"];

export const highlightCards = [
  { icon: Sparkles, label: "IA aplicada", value: "OpenAI + Mistral" },
  { icon: BriefcaseBusiness, label: "Prácticas", value: "IHP Pediatría" },
  { icon: GraduationCap, label: "Formación", value: "DAW + B2" },
  { icon: Bot, label: "Automatización", value: "Agentes IA" }
];
