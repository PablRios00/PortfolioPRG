// Next.js con `output: "standalone"` genera una carpeta `.next/standalone` con un
// servidor mínimo autocontenido, pero por diseño NO copia dentro `public/` ni
// `.next/static/` (los CSS, JS y fuentes de la web). Hay que copiarlos a mano tras
// cada build o el servidor standalone sirve el HTML pero da 404 en todos los
// assets estáticos. Este script lo hace automáticamente (se ejecuta solo, como
// "postbuild", justo después de `next build`).
//
// Usa la API nativa fs.cpSync de Node (>=16.7) para que funcione igual en
// Windows (desarrollo local) y en Linux (servidor de despliegue), sin depender
// de comandos de shell tipo `cp -r` que no existen en PowerShell/CMD.

const fs = require("fs");
const path = require("path");

const root = process.cwd();
const standaloneDir = path.join(root, ".next", "standalone");

if (!fs.existsSync(standaloneDir)) {
  console.log(
    "[postbuild] No existe .next/standalone (¿output distinto de \"standalone\"?). Se omite la copia."
  );
  process.exit(0);
}

function copyIfExists(src, dest, label) {
  if (fs.existsSync(src)) {
    fs.cpSync(src, dest, { recursive: true });
    console.log(`[postbuild] ✓ Copiado ${label}`);
  } else {
    console.log(`[postbuild] ⚠ No se encontró ${src}, se omite.`);
  }
}

copyIfExists(
  path.join(root, "public"),
  path.join(standaloneDir, "public"),
  "public/ -> .next/standalone/public"
);

copyIfExists(
  path.join(root, ".next", "static"),
  path.join(standaloneDir, ".next", "static"),
  ".next/static -> .next/standalone/.next/static"
);
