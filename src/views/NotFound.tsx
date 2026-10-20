import { Link } from 'react-router-dom'
import Pagina from '../components/Pagina'

export default function NotFound() {
  return (
    <Pagina titulo="404">
      <p className="text-center text-xl text-white/90">¡Ups! Esta página no existe.</p>
      <div className="mt-8 text-center">
        <Link
          to="/"
          className="inline-block rounded-lg bg-primario px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-secundario"
        >
          Volver al inicio
        </Link>
      </div>
    </Pagina>
  )
}
