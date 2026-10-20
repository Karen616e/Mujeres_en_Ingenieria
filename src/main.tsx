import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './index.css'

// --- LAYOUTS ---
import MainLayout from './layouts/MainLayout' // Barra de navegación + contenido

// --- VISTAS (PÁGINAS) ---
import Inicio from './views/Inicio'
import Entrevistas from './views/Entrevistas'
import Reuniones from './views/Reuniones'
import Integrantes from './views/Integrantes'
import Recursos from './views/Recursos'
import InformacionInteres from './views/InformacionInteres'
import NotFound from './views/NotFound'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="entrevistas" element={<Entrevistas />} />
          <Route path="reuniones" element={<Reuniones />} />
          <Route path="integrantes" element={<Integrantes />} />
          <Route path="recursos" element={<Recursos />} />
          <Route path="informacion-interes" element={<InformacionInteres />} />

          {/* --- RUTA DE ERROR 404 (debe ir al final) --- */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
