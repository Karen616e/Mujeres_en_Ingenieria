
import { useState } from 'react'
import Pagina from '../components/Pagina'

const materiales = [
  {
    nombre: 'Mujeres en Computación',
    descripcion: 'Presentación de la 2a Reunión Anual, 2017.',
    url: 'https://drive.google.com/file/d/0B_jbIi2mtkKlVV9xSXozWmlWT3M/view?usp=sharing'
  },
  {
    nombre: 'Komputer SAPIENS',
    descripcion: 'Año X, Volumen 2: Mujeres en la Computación.',
    url: 'https://smia.mx/komputersapiens/publicaciones.html#KSX-II'
  }
]

const redes = [
  {
    nombre: 'Facebook',
    descripcion: 'Página de Facebook de la comunidad.',
    url: 'https://www.facebook.com/mujerescomputacion/'
  },
  {
    nombre: 'YouTube',
    descripcion: 'Canal de YouTube de la comunidad.',
    url: 'https://www.youtube.com/channel/UC58sHMVn_7qNU79bLjYBjpg'
  }
]

export default function Recursos() {
  const [pestana, setPestana] = useState('materiales')

  const recursos = pestana === 'materiales' ? materiales : redes

  return (
    <Pagina titulo="Recursos">
      <section className="mx-auto max-w-4xl px-4 py-8">

        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-[#4b1c71]">
            Centro de recursos
          </h2>

          <p className="mt-2 text-sm text-[#654675]">
            Explora publicaciones y espacios de nuestra comunidad.
          </p>
        </div>

        {/* Pestañas */}
        <div className="mb-6 flex gap-3">

          <button
            type="button"
            onClick={() => setPestana('materiales')}
            className={`flex-1 rounded-xl px-4 py-3 font-semibold transition ${
              pestana === 'materiales'
                ? 'bg-[#4b1c71] text-white'
                : 'bg-[#eee3f5] text-[#654675] hover:bg-[#dfc9ed]'
            }`}
          >
            Publicaciones
          </button>

          <button
            type="button"
            onClick={() => setPestana('redes')}
            className={`flex-1 rounded-xl px-4 py-3 font-semibold transition ${
              pestana === 'redes'
                ? 'bg-[#4b1c71] text-white'
                : 'bg-[#eee3f5] text-[#654675] hover:bg-[#dfc9ed]'
            }`}
          >
            Redes sociales
          </button>

        </div>

        {/* Lista de recursos */}
        <div className="overflow-hidden rounded-2xl border border-purple-200 bg-white shadow-md">

          {recursos.map((recurso) => (
            <div
              key={recurso.nombre}
              className="flex items-start gap-4 border-b border-purple-100 p-5 transition hover:bg-[#faf5fd] last:border-b-0"
            >

              {/* Logos e iconos */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f0e1f8]">

                {pestana === 'redes' ? (
                  <img
                    src={
                      recurso.nombre === 'Facebook'
                        ? 'https://cdn.simpleicons.org/facebook/1877F2'
                        : 'https://cdn.simpleicons.org/youtube/FF0033'
                    }
                    alt={`Logo de ${recurso.nombre}`}
                    className="h-7 w-7"
                  />
                ) : (
                  <span className="text-2xl">
                    {recurso.nombre === 'Mujeres en Computación'
                      ? '📄'
                      : '📚'}
                  </span>
                )}

              </div>

              {/* Información del recurso */}
              <div className="min-w-0 flex-1">

                <h3 className="text-lg font-bold text-[#4b1c71]">
                  {recurso.nombre}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  {recurso.descripcion}
                </p>

                <a
                  href={recurso.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-[#8545ab] hover:text-[#4b1c71] hover:underline"
                >
                  Explorar recurso ↗
                </a>

              </div>

            </div>
          ))}

        </div>

      </section>
    </Pagina>
  )
}
