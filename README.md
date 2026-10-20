# Portal Web de Mujeres en Computación e Ingeniería
**AMEXCOMP - Comisión de Mujeres en Ciencias de la Computación**

## Descripción General

Sistema web para el portal oficial de **Mujeres en Computación e Ingeniería (AMEXCOMP)**. 

## Tecnologías Utilizadas

- **Core:** [React 19](https://react.dev/) (componentes funcionales en `.tsx`)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Herramienta de Construcción:** [Vite](https://vitejs.dev/)
- **Enrutamiento:** [React Router](https://reactrouter.com/) (`HashRouter`)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) (la paleta está en `src/index.css`)
- **Calidad de Código:** ESLint + Prettier

---

## Requisitos del Entorno

Para ejecutar el proyecto es necesario contar con:

- **Node.js** (Versión 18.x LTS o superior recomendada)
- **npm** (Versión 9.x o superior)

Verifica la instalación en tu terminal:

```bash
node -v
npm -v
```

---

## Clonación del Repositorio

```bash
git clone https://github.com/Karen616e/Mujeres_en_Ingenieria.git
cd Mujeres_en_Ingenieria
```

---

## Ejecución en Entorno Local (Desarrollo)

### 1. Instalar dependencias

```bash
npm install
```

> **Nota:** Si experimentas problemas de resolución de paquetes durante la instalación inicial, ejecuta:
> ```bash
> npm install --legacy-peer-deps
> ```

### 2. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Por defecto, Vite ejecutará la aplicación en:
`http://localhost:5173/`

## Estructura del Proyecto

```text
Mujeres_en_Ingenieria/
├── public/                # Archivos estáticos (favicon)
├── src/
│   ├── assets/            # Imágenes (logo)
│   ├── components/        # Componentes reutilizables (NavigationMain, Pagina, Seccion)
│   ├── layouts/           # Layouts con <Outlet /> (MainLayout)
│   ├── views/             # Páginas principales (Inicio, Entrevistas, ...)
│   ├── index.css          # Tailwind + paleta de colores (@theme)
│   └── main.tsx           # Punto de entrada y definición de rutas
├── eslint.config.js       # Configuración de linter
├── index.html             # HTML principal de la SPA
├── package.json           # Dependencias y scripts
└── vite.config.ts         # Configuración de Vite
```
