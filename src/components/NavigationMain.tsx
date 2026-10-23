
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

      <Link to="/" aria-label="Ir al inicio">
        <img
          src={logo}
          alt="Logo Mujeres en Computación"
          className="h-20 rounded-xl bg-white p-1 shadow-md transition-transform duration-300 hover:scale-105"
        />
      </Link>

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