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
    <nav className="relative flex min-h-[144px] items-center justify-center bg-primario px-6 py-3">
      <div className="relative z-10 flex gap-6">
        {enlaces.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) =>
              `rounded-lg px-[1.4rem] py-[0.8rem] text-[1.4rem] font-semibold transition-colors duration-200 ${
                isActive ? 'bg-white text-primario' : 'text-white hover:bg-secundario'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

      <Link
        to="/"
        aria-label="Ir al inicio"
        className="absolute left-6 top-1/2 block -translate-y-1/2 hover:opacity-85"
      >
        <img src={logo} alt="Logo Mujeres en Computación" className="block h-[100px] rounded-md" />
      </Link>
    </nav>
  )
}
