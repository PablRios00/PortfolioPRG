# 🌐 Portfolio Personal — Pablo Ríos González

Mi portfolio profesional construido desde cero con las tecnologías más modernas de 2026. No es una plantilla — cada línea de código la he escrito (o aprendido a fondo) para demostrar que sé lo que hago más allá de los proyectos.

🔗 **[Ver en producción →](https://sweet-creponne-51557e.netlify.app)**

---

## ¿Por qué este stack?

Podría haber usado una plantilla de Webflow o un tema de WordPress. Pero si estoy buscando trabajo como desarrollador, lo mínimo es que mi propio portfolio demuestre que sé construir cosas reales.

Elegí **Next.js 15** porque es el estándar del mercado para aplicaciones React modernas, y porque me permitía tener tanto renderizado estático como rutas de API en el mismo proyecto. **Tailwind CSS v4** porque es la versión más reciente y quería trabajar con lo último. **Framer Motion** porque las animaciones bien hechas marcan la diferencia entre un portfolio que se olvida y uno que se recuerda.

---

## Stack técnico

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 15 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 |
| Animaciones | Framer Motion |
| Iconos | Lucide React |
| Emails | Resend API |
| Validación | Zod |
| Deploy | Vercel |

---

## Funcionalidades que me enorgullecen

### 🖼️ Hero con foto flotante
La sección de inicio no es un banner estático. Mi foto flota con animación suave, rodeada de 4 tarjetas con información clave que también flotan de forma independiente, cada una a su propio ritmo. El efecto está hecho puramente con Framer Motion sin librerías externas.

### 📡 GitHub en tiempo real
La sección de GitHub carga mis repositorios reales directamente desde la API pública de GitHub en cada visita, sin clave API, sin caché forzada. Lo que ves ahí es mi actividad real ordenada por última actualización.

### 📬 Formulario de contacto funcional
El formulario no es decorativo. Cuando alguien lo rellena, le llega un email de confirmación y a mí me llega la consulta en tiempo real a través de Resend. La validación en el cliente y en el servidor está hecha con Zod.

### 🎡 Carruseles de habilidades infinitos
Cuatro carruseles infinitos organizados por categoría (Frontend, Backend, Base de datos, DevOps & Cloud) con logos reales cargados desde devicons CDN. Cada carrusel alterna de dirección para dar dinamismo visual. El loop es perfecto — sin saltos ni resets visibles — porque mide el ancho real del DOM antes de animar.

### 📱 Diseño completamente responsivo
El menú móvil es un panel lateral deslizante con los enlaces de navegación, el botón de CV y los accesos directos a GitHub y LinkedIn. Cada sección ajusta su padding verticalmente según el tamaño de pantalla.

---

## Estructura del proyecto

```
PortfolioPRG/
├── app/
│   ├── api/
│   │   ├── contact/     # Endpoint que procesa el formulario con Resend
│   │   └── github/      # Endpoint que consume la GitHub REST API
│   ├── layout.tsx        # Metadata, fuentes y estructura global
│   └── page.tsx          # Composición de todas las secciones
├── components/
│   ├── sections/         # Hero, About, Projects, Skills, GitHub, Contact, Footer
│   └── ui/               # NavBar, AnimatedSection, TypewriterText, TechBadge
├── lib/
│   └── data.ts           # Datos de proyectos, navegación, skills y filtros
└── public/
    ├── pablo-rios.png    # Foto profesional
    └── projects/         # Capturas y vídeos de cada proyecto
```

---

## Cómo ejecutarlo en local

```bash
# Clonar el repositorio
git clone https://github.com/PablRios00/PortfolioPRG.git
cd PortfolioPRG

# Instalar dependencias
npm install

# Crear el archivo de variables de entorno
cp .env.local.example .env.local
# Edita .env.local y añade tu clave de Resend

# Arrancar en modo desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) y ya está.

> **Nota:** Sin la clave de Resend el formulario de contacto no enviará emails, pero el resto del portfolio funciona perfectamente.

---

## Variables de entorno

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```

Solo necesitas esta. La GitHub API se consume sin autenticación.

---

## Proyectos destacados en el portfolio

Estos son los proyectos que aparecen en la sección de proyectos. Cada uno tiene su repositorio independiente:

| Proyecto | Stack principal | Repo |
|----------|----------------|------|
| FLUJO — Sistema multiagente IA | Python, FastAPI, LangGraph, Next.js | [Ver →](https://github.com/PablRios00/FLUJO) |
| Atlas (HistoryMap) | Next.js, OpenAI GPT-4o, Leaflet | [Ver →](https://github.com/PablRios00/Atlas) |
| DevTask | React, Node.js, Socket.IO, PostgreSQL | [Ver →](https://github.com/PablRios00/DevTask) |
| Mini CMS con IA | PHP, MySQL, Mistral AI | [Ver →](https://github.com/PablRios00/mini-cms) |
| Cadera Pro Academy | PHP, MySQL, Stripe, PayPal | [Ver →](https://github.com/PablRios00/curso-landing) |
| Adopta-app (TFG) | PHP, MySQL, HTML5, CSS3 | [Ver →](https://github.com/PablRios00/Adopta-app) |

---

## Contacto

Si has llegado hasta aquí y crees que podemos trabajar juntos, escríbeme:

- 📧 [pabloriosglez@gmail.com](mailto:pabloriosglez@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/pablo-ríos-gonzález-414500332)
- 🐙 [GitHub](https://github.com/PablRios00)
- 📍 Sevilla, España — Disponible para remoto

---

*Construido con Next.js y ♥ en Sevilla · 2026*
