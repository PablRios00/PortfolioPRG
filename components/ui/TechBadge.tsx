type TechBadgeProps = {
  name: string;
  color?: string;
};

const deviconSlugs: Record<string, string> = {
  HTML5: "html5/html5-original.svg",
  CSS3: "css3/css3-original.svg",
  JavaScript: "javascript/javascript-original.svg",
  TypeScript: "typescript/typescript-original.svg",
  React: "react/react-original.svg",
  "Next.js": "nextjs/nextjs-original.svg",
  "Tailwind CSS": "tailwindcss/tailwindcss-original.svg",
  Bootstrap: "bootstrap/bootstrap-original.svg",
  Angular: "angularjs/angularjs-original.svg",
  "Node.js": "nodejs/nodejs-original.svg",
  Express: "express/express-original.svg",
  PHP: "php/php-original.svg",
  Python: "python/python-original.svg",
  FastAPI: "fastapi/fastapi-original.svg",
  Java: "java/java-original.svg",
  MySQL: "mysql/mysql-original.svg",
  PostgreSQL: "postgresql/postgresql-original.svg",
  MongoDB: "mongodb/mongodb-original.svg",
  Redis: "redis/redis-original.svg",
  Git: "git/git-original.svg",
  GitHub: "github/github-original.svg",
  Docker: "docker/docker-original.svg",
  Vercel: "vercel/vercel-original.svg",
  VSCode: "vscode/vscode-original.svg",
  Eclipse: "eclipse/eclipse-original.svg",
  Linux: "linux/linux-original.svg",
  Windows: "windows8/windows8-original.svg",
  macOS: "apple/apple-original.svg",
  Salesforce: "salesforce/salesforce-original.svg"
};

export function TechBadge({ name, color = "#3b82f6" }: TechBadgeProps) {
  const bgColor = `${color}22`;
  const borderColor = `${color}66`;
  const slug = deviconSlugs[name];

  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[0.72rem] font-semibold text-slate-100"
      style={{ backgroundColor: bgColor, borderColor }}
    >
      {slug ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}`}
          alt=""
          className="h-4 w-4"
          loading="lazy"
        />
      ) : (
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
      )}
      {name}
    </span>
  );
}
