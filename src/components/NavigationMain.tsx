
import { Link, NavLink } from 'react-router-dom'
import logo from '@/assets/logo.jpg'

const enlaces = [
  { to: '/', label: 'Inicio' },
  { to: '/entrevistas', label: 'Entrevistas' },
  { to: '/reuniones', label: 'Reuniones' },
  { to: '/integrantes', label: 'Integrantes' },
  { to: '/recursos', label: 'Recursos' },
  { to: '/informacion-interes', label: 'Información de Interés' },
]

export default function NavigationMain() {
  return (
    <nav className="flex flex-wrap items-center justify-center gap-6 bg-gradient-to-r from-primario via-[#71378f] to-[#a46cc8] px-6 py-5 shadow-lg lg:justify-between">

      {/* Logo y nombre */}
      <Link
        to="/"
        aria-label="Ir al inicio"
        className="group flex items-center gap-4"
      >
        <img
          src={logo}
          alt="Logo Mujeres en Computación"
          className="h-20 rounded-xl bg-white p-1 shadow-md transition-transform duration-300 hover:scale-105"
        />

        <div className="relative flex flex-col">

          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-extrabold tracking-tight text-white">
              Mujeres
            </span>

            <span className="text-lg font-light italic text-[#f9d6ff]">
              en
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="bg-gradient-to-r from-white via-[#f8c8ff] to-[#ef9dff] bg-clip-text text-2xl font-extrabold tracking-tight text-transparent">
              Computación
            </span>

            <span className="text-lg text-[#f8c8ff] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125">
              ✦
            </span>
          </div>

          <div className="mt-2 flex items-center gap-1">
            <div className="h-[2px] w-12 rounded-full bg-white" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#f8c8ff]" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#f8c8ff]" />
          </div>

        </div>
      </Link>

      {/* Botones originales */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {enlaces.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) =>
              `rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? 'border-white bg-white text-primario shadow-md'
                  : 'border-white/30 bg-white/10 text-white hover:bg-white/25 hover:shadow-md'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

    </nav>
  )
}
