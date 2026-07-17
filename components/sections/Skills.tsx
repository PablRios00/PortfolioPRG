"use client";

import { AnimatedSection } from "../ui/AnimatedSection";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const carousels = [
  {
    title: "Frontend",
    color: "text-blue-300",
    border: "border-blue-400/20",
    bg: "bg-blue-400/5",
    techs: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    ],
  },
  {
    title: "Backend",
    color: "text-emerald-300",
    border: "border-emerald-400/20",
    bg: "bg-emerald-400/5",
    techs: [
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "ASP.NET Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
      { name: "RabbitMQ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg" },
      { name: "Apache Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
      { name: "OpenAI", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    ],
  },
  {
    title: "Base de datos",
    color: "text-violet-300",
    border: "border-violet-400/20",
    bg: "bg-violet-400/5",
    techs: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MariaDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
      { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
      { name: "Oracle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
    ],
  },
  {
    title: "DevOps & Cloud",
    color: "text-orange-300",
    border: "border-orange-400/20",
    bg: "bg-orange-400/5",
    techs: [
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" },
      { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" },
      { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    ],
  },
];

function TechChip({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-slate-700/60 bg-slate-900/60 px-5 py-3 backdrop-blur mx-1.5">
      <img
        src={icon}
        alt={name}
        width={26}
        height={26}
        className="h-[26px] w-[26px] object-contain"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
      <span className="whitespace-nowrap text-sm font-medium text-slate-200">{name}</span>
    </div>
  );
}

function InfiniteCarousel({
  techs,
  reverse = false,
}: {
  techs: { name: string; icon: string }[];
  reverse?: boolean;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    if (trackRef.current) {
      // Mide el ancho de UN set completo de chips
      setTrackWidth(trackRef.current.scrollWidth / 2);
    }
  }, []);

  // Triplicamos para garantizar que nunca se ve el hueco
  const repeated = [...techs, ...techs, ...techs];

  return (
    <div className="relative overflow-hidden">
      {/* Fade izquierda */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#0a0f1e] to-transparent" />
      {/* Fade derecha */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#0a0f1e] to-transparent" />

      <div className="overflow-hidden">
        <motion.div
          ref={trackRef}
          className="flex py-2"
          animate={
            trackWidth > 0
              ? { x: reverse ? [-trackWidth, 0] : [0, -trackWidth] }
              : {}
          }
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {repeated.map((tech, i) => (
            <TechChip key={`${tech.name}-${i}`} name={tech.name} icon={tech.icon} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <AnimatedSection id="habilidades" className="bg-[#0f172a]/55 py-10 md:py-20 overflow-hidden">
      <div className="container-shell">
        <p className="section-kicker">Tecnologías con las que trabajo</p>
        <h2 className="section-title">Stack Técnico</h2>
        <p className="section-subtitle">
          Una base full stack moderna, con especial sensibilidad por automatización e IA aplicada.
        </p>

        <div className="mt-8 space-y-8 md:mt-14 md:space-y-12">
          {carousels.map((carousel, i) => (
            <motion.div
              key={carousel.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={`mb-5 inline-flex items-center gap-2 rounded-full border ${carousel.border} ${carousel.bg} px-4 py-1.5`}>
                <span className={`text-xs font-bold uppercase tracking-widest ${carousel.color}`}>
                  {carousel.title}
                </span>
              </div>

              <InfiniteCarousel techs={carousel.techs} reverse={i % 2 !== 0} />
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
