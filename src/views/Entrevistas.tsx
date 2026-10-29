import Pagina from '../components/Pagina'

type Entrevista = {
  id: string      // lo que va después de ?v= en el link de YouTube
  titulo: string
}

const entrevistas: Entrevista[] = [
  { id: 'NxrA_vJx4sA', titulo: 'Entrevista con la Dra. Concepción Pérez de Celis' },
  { id: 'I7VZgMqzbvc', titulo: 'Entrevista con la Dra. Ofelia Cervantes' },
  { id: 'vSjb0aB5ghg', titulo: 'Entrevista con la Dra. Laura Cruz' },
  { id: 'Jr096eWp7y8', titulo: 'Entrevista a la Dra. Rocío Aldeco Pérez' },
  { id: 'vE8srMaGZdQ', titulo: 'Entrevista con la Dra. (nombre)' },
]

export default function Entrevistas() {
  return (
    <Pagina titulo="Entrevistas">
      <div className="flex flex-wrap justify-center gap-10">
        {entrevistas.map((e) => (
          <article
            key={e.id}
            className="flex w-full flex-col gap-4 md:w-[calc(50%-1.25rem)]"
          >
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-black shadow-lg">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${e.id}?controls=0&rel=0&modestbranding=1&playsinline=1`}
                title={e.titulo}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <h2 className="text-center text-xl text-white">{e.titulo}</h2>
          </article>
        ))}
      </div>
    </Pagina>
  )
}