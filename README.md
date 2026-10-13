# Portal Web de Mujeres en Computación e Ingeniería
**AMEXCOMP - Comisión de Mujeres en Ciencias de la Computación**

## Descripción General

Sistema web para el portal oficial de **Mujeres en Computación e Ingeniería (AMEXCOMP)**. 

El proyecto tiene como objetivo la migración y rediseño de la plataforma actual (anteriormente alojada en Google Sites: [Sitio Original](https://sites.google.com/view/amexcompmujeres/inicio)) hacia una arquitectura web moderna utilizando **Vue 3** y **Vite**, logrando:

- **Mejorar la mantenibilidad:** Código limpio, tipado estático con TypeScript y arquitectura modular.
- **Optimizar la experiencia de usuario (UX/UI):** Interfaz fluida, accesible y completamente responsiva.
- **Escalabilidad y colaboración:** Estructura preparada para el trabajo en equipo y contribuciones futuras.
- **Continuidad técnica:** Documentación clara e integración de pruebas automatizadas.

---

## Tecnologías Utilizadas

- **Core:** [Vue 3](https://vuejs.org/) (Composition API con `<script setup>`)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Herramienta de Construcción:** [Vite](https://vitejs.dev/)
- **Enrutamiento:** [Vue Router](https://router.vuejs.org/)
- **Gestión de Estado Global:** [Pinia](https://pinia.vuejs.org/)
- **Calidad de Código:** ESLint + Prettier
- **Testing:**
  - Pruebas Unitarias / Componentes: [Vitest](https://vitest.dev/)
  - Pruebas End-to-End (E2E): [Cypress](https://www.cypress.io/)

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
git clone https://github.com/tu-usuario/Mujeres_en_Ingenieria.git
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

---

## Visualización en Dispositivos Móviles

Para realizar pruebas de diseño responsivo directamente en teléfonos o tabletas dentro de la misma red local:

1. Asegúrate de que el dispositivo esté conectado a la misma red Wi-Fi que el equipo de desarrollo.
2. Ejecuta:
   ```bash
   npm run dev -- --host
   ```
3. Accede desde el navegador del dispositivo móvil a la dirección IP local mostrada en la terminal (ejemplo: `http://192.168.1.X:5173`).

---

## Scripts Disponibles

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo local. |
| `npm run build` | Compila la aplicación para producción en la carpeta `dist/`. |
| `npm run preview` | Previsualiza localmente el build de producción. |
| `npm run test:unit` | Ejecuta las pruebas unitarias con Vitest. |
| `npm run test:e2e` | Inicia la suite de pruebas E2E con Cypress. |
| `npm run lint` | Analiza el código en busca de errores sintácticos con ESLint. |
| `npm run format` | Formatea automáticamente el código siguiendo las reglas de Prettier. |

---

## Estructura del Proyecto

```text
Mujeres_en_Ingenieria/
├── .vscode/               # Configuración recomendada para VS Code
├── cypress/               # Pruebas End-to-End (E2E)
├── public/                # Archivos estáticos (favicon, imágenes públicas)
├── src/
│   ├── assets/            # Estilos globales, imágenes y fuentes
│   ├── components/        # Componentes Vue reutilizables (UI)
│   ├── router/            # Configuración de rutas (Vue Router)
│   ├── stores/            # Módulos de estado global (Pinia)
│   ├── types/             # Definiciones e interfaces de TypeScript
│   ├── views/             # Vistas/Páginas principales
│   ├── App.vue            # Componente raíz
│   └── main.ts            # Punto de entrada de la aplicación
├── eslint.config.ts       # Configuración de linter
├── index.html             # HTML principal de la SPA
├── package.json           # Dependencias y scripts
└── vite.config.ts         # Configuración de Vite
```

---

## Buenas Prácticas y Lineamientos de Colaboración

Para mantener la calidad y continuidad del código entre todos los colaboradores:

### 1. Organización del Código
- Utilizar **Composition API** con la sintaxis `<script setup lang="ts">`.
- Mantener los componentes enfocados en una sola responsabilidad (principio de responsabilidad única).
- Separar la lógica pesada o reutilizable en **Composables** (`src/composables/`).

### 2. Convenciones
- **Componentes:** Nombres en *PascalCase* (ejemplo: `NavbarMenu.vue`, `EventCard.vue`).
- **Variables y Funciones:** Nombres en *camelCase* y descriptivos en español o inglés (mantener consistencia).
- Tipar explícitamente las `props` y `emits` de cada componente con TypeScript.

### 3. Control de Versiones (Git)
- **Ramas:** No hacer commits directo en la rama `main`. Crear ramas descriptivas para cada funcionalidad o corrección:
  - `feature/nombre-funcionalidad`
  - `fix/descripcion-error`
- **Commits:** Usar la convención de [Conventional Commits](https://www.conventionalcommits.org/):
  - `feat: add mobile navigation drawer`
  - `fix: correct layout overflow in event gallery`
  - `docs: update setup steps in README`

### 4. Responsividad y Calidad
- Probar siempre los componentes en tamaño de pantalla **Escritorio**, **Tablet** y **Móvil**.
- Ejecutar `npm run lint` y `npm run format` antes de abrir un Pull Request (PR) para garantizar el formato del estándar de código.