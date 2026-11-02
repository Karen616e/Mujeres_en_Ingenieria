
import Pagina from '../components/Pagina'

import reunion1 from '../assets/1raReunion.jpg'
import reunion2 from '../assets/2daRunion.jpg'
import reunion3 from '../assets/3raReunion.jpg'
import reunion4 from '../assets/4taReunion.jpg'
import reunion5 from '../assets/5taReunion.png'
import reunion6 from '../assets/6taReunion.jpg'
import reunion7 from '../assets/7maReunion.jpg'
import reunion8 from '../assets/8vaReunion.png'
import reunion9 from '../assets/9naReunion.jpg'
import reunion10 from '../assets/10maReunion.jpg'
import reunionExtra from '../assets/rExtra.jpg'

type Reunion = {
  anio: number
  titulo: string
  descripcion: string
  imagen: string
  informe?: string
  video?: string
}

const reuniones: Reunion[] = [
  {
    anio: 2016,
    titulo: '1ª Reunión',
    descripcion:
      'Primera reunión que se realiza como parte de la agenda de actividades de la Academia Mexicana de Computación (AMEXCOMP). Esta tiene como propósito analizar la situación de la participación femenina en la Computación en México desde diferentes perspectivas: en la industria, la investigación, en estudios de licenciatura y posgrado, entre otros.',
    imagen: reunion1,
    video: 'https://youtu.be/lZQxFyw_NAo',
  },
  {
    anio: 2017,
    titulo: '2ª Reunión',
    descripcion:
      'Segunda reunión que se realizó dentro de la reunión anual de la  Academia Mexicana de Computación. En esta se acordaron acciones en común para incrementar la visibilidad de este grupo y sus integrantes como posibles modelos a seguir de niñas y mujeres en Computación. ',
    imagen: reunion2,
    video: 'https://youtu.be/_J2goIOCkRY',
  },
  {
    anio: 2018,
    titulo: '3ª Reunión',
    descripcion:
      'Tercera reunión que se realizó dentro de la reunión anual de la  Academia Mexicana de Computación. En esta se mostraron los resultados de los acuerdos previos y se acordaron acciones concretas para incrementar el número de niñas y mujeres en Computación.',
    imagen: reunion3,
    informe:
      'https://drive.google.com/file/d/1R4ZvPTHArX2k1ychwEdD6r_epJCvZGJw/view',
  },
  {
    anio: 2019,
    titulo: '4ª Reunión',
    descripcion:
      'Cuarta reunión que se realizó dentro de la reunión anual de la  Academia Mexicana de Computación. En esta se mostraron resultados concretos de los acuerdos previos y se definieron nuevas acciones para fortalecer aún más estos resultados. ',
    imagen: reunion4,
    informe:
      'https://drive.google.com/file/d/1slHtUhGdvHmFcG6B__R6UgR9_P9gu1qK/view',
  },
  {
    anio: 2020,
    titulo: '5ª Reunión',
    descripcion:
      'Quinta reunión virtual que se realizó dentro de la reunión anual de la  Academia Mexicana de Computación. En esta se mostraron resultados en las áreas de producción científica, promoción de la computación entre las y los jóvenes, difusión del trabajo del grupo, participación en eventos de difusión, organización de eventos académicos, científicos y tecnológicos además de los reconocimientos obtenidos por algunas integrantes. Finalmente, se presentó el Plan de Trabajo para el siguiente año (Octubre 2020- Octubre 2021).',
    imagen: reunion5,
    informe:
      'https://drive.google.com/file/d/1QMPGokH4nybk08AwOSEh-AToKJyTAf-i/view',
    video: 'https://youtu.be/eXxeVlgKQqo',
  },
  {
    anio: 2021,
    titulo: '6ª Reunión',
    descripcion:
      'Sexta reunión que se realizó dentro de la reunión anual de la  Academia Mexicana de Computación. Se mostraron resultados en las áreas de producción científica, promoción de la computación entre las y los jóvenes, difusión del trabajo del grupo, participación en eventos de difusión, organización de eventos académicos, científicos y tecnológicos además de los reconocimientos obtenidos por algunas integrantes. Finalmente, se presentó el Plan de Trabajo para el siguiente año.',
    imagen: reunion6,
    informe:
      'https://drive.google.com/file/d/1ffI06920a5i8c0QjIj2Gv_sTm072uwel/view',
  },
  {
    anio: 2022,
    titulo: '7ª Reunión',
    descripcion:
      'Séptima reunión virtual que se realizó dentro de la reunión anual de la  Academia Mexicana de Computación. En esta se establecieron acciones y actividades para coordinar los esfuerzos de promoción, divulgación y motivación de diversos temas de la computación, en diferentes eventos y foros que motiven a las nuevas generaciones de mujeres a estudiar computación.',
    imagen: reunion7,
    informe:
      'https://drive.google.com/file/d/1GTCGll6Y0N-6xgMC51k1kwNH5F-3qFxW/view',
  },
  {
    anio: 2023,
    titulo: '8ª Reunión',
    descripcion:
      'Octava reunión virtual que se realizó dentro de la reunión anual de la  Academia Mexicana de Computación.',
    imagen: reunion8,
  },
  {
    anio: 2024,
    titulo: '9ª Reunión',
    descripcion:
      'Novena reunión virtual que se realizó dentro de la reunión anual de la  Academia Mexicana de Computación.',
    imagen: reunion9,
  },
  {
    anio: 2025,
    titulo: 'Reunión Extraordinaria',
    descripcion:
      'Reunión extraordinaria presencial que se realizó previo a la reunión anual de la  Academia Mexicana de Computación.',
    imagen: reunionExtra,
  },
  {
    anio: 2026,
    titulo: '10ª Reunión',
    descripcion:
      'Décima reunión virtual que se realizó dentro de la reunión anual de la  Academia Mexicana de Computación.',
    imagen: reunion10,
  },
]

export default function Reuniones() {
  return (
    <Pagina titulo="Reuniones Anuales">
      <div className="w-full px-0 py-8">

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {reuniones.map((reunion) => (
            <article
              key={`${reunion.anio}-${reunion.titulo}`}
              className="flex h-full flex-col overflow-hidden rounded-2xl
                         border border-[#dbb6ee] bg-white
                         shadow-lg transition duration-300
                         hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="bg-gradient-to-r from-[#4b1c71] to-[#a36bc5] p-5 text-center">

                <h3 className="text-2xl font-bold text-white">
                  {reunion.titulo}
                </h3>

                <p className="mt-2 text-lg text-white">
                  {reunion.anio}
                </p>

              </div>

              <div className="flex flex-1 flex-col gap-5 p-5 md:p-6">

                <p className="text-justify leading-relaxed text-[#35145F]">
                  {reunion.descripcion}
                </p>

                <div className="mt-auto flex flex-col items-center gap-5">

                  <img
                    src={reunion.imagen}
                    alt={`Fotografía de ${reunion.titulo} (${reunion.anio})`}
                    loading="lazy"
                    className="h-72 w-full rounded-xl object-contain"
                  />

                  <div className="flex flex-wrap justify-center gap-4">

                    {reunion.informe && (
                      <a
                        href={reunion.informe}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-[#4b1c71]
                                   px-5 py-2 text-white
                                   transition hover:bg-[#7b2cbf]"
                      >
                        Informe de resultados
                      </a>
                    )}

                    {reunion.video && (
                      <a
                        href={reunion.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-[#7b2cbf]
                                   px-5 py-2 text-white
                                   transition hover:bg-[#4b1c71]"
                      >
                        Video de Reunión
                      </a>
                    )}

                  </div>

                </div>
              </div>

            </article>
          ))}

        </div>
      </div>
    </Pagina>
  )
}
