
import Pagina from '../components/Pagina'

const enlaces = [
  {
    nombre: 'ACM´s Women in Computing (ACM-W)',
    descripcion: 'Supporting, celebrating and advocating for Women in Computing.',
    url: 'https://women.acm.org/'
  },
  {
    nombre: 'IEEE Women in Engineering (WIE)',
    descripcion: 'A global network of IEEE members and volunteers dedicated to promoting women engineers and scientists.',
    url: 'https://wie.ieee.org/'
  },
  {
    nombre: 'Grace Hopper Celebration',
    descripcion: 'Learn more about the work we’re doing to help women in tech succeed.',
    url: 'https://ghc.anitab.org/'
  },
  {
    nombre: 'Red Mexicana de Ciencia, Tecnología y Género',
    descripcion: 'Tiene como objetivo estimular el intercambio y sistematización de experiencias previas de distintos grupos académicos y de investigación del país que han trabajado y planteado iniciativas desde hace 30 años. ',
    url: 'https://redmexciteg.wixsite.com/redmexciteg'
  },
  {
    nombre: 'Mujeres Líderes en STEAM',
    descripcion: 'Es un programa único de mentoría / asesoría en áreas de Ciencia, Tecnología, Ingeniería y Matemáticas (STEM por sus siglas en Inglés) para Mujeres Latinas.',
    url: 'https://mujeressteam.com/'
  },
  {
    nombre: 'Programa Delfín',
    descripcion: 'Fortalecer la cultura de colaboración entre las Instituciones de Educación Superior y Centros de Investigación integrantes del Programa.',
    url: 'https://www.programadelfin.org.mx/'
  },
  {
    nombre: 'Verano de la Investigación Científica',
    descripcion: 'El programa consiste en promover y facilitar que los estudiantes realicen estancias de investigación de 7 semanas de duración en los más prestigiados centros e instituciones de investigación del país, bajo la supervisión y guía de investigadores en activo, quienes los introducen en el apasionante mundo de la ciencia al permitirles participar en algún proyecto de investigación.',
    url: 'https://amc.edu.mx/'
  },
  {
    nombre: 'Technovation Girls México',
    descripcion: 'Es un concurso internacional más grande de emprendimiento tecnológico para chicas de 10 a 18 años.  El programa ofrece a las chicas la oportunidad de adquirir las habilidades necesarias para desarrollarse como emprendedoras tecnológicas y líderes. Durante el programa, se les capacitará para diseñar, desarrollar y presentar una aplicación móvil que resuelva una problemática de su comunidad.',
    url: 'https://www.mentoralia.org/'
  },
  {
    nombre: 'Coder Bloom',
    descripcion: 'Organización sin fines de lucro que busca atraer a más mujeres al área de la tecnología y la programación, mediante talleres, conferencias, concursos de programación y mucho más.',
    url: 'https://coderbloom.org/'
  }
]



export default function InformacionInteres() {
  return (
    <Pagina titulo="Información de Interés">
      <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6">

        <div className="mb-8 border-l-4 border-[#9252b5] pl-4">
          <h2 className="text-2xl font-bold text-[#4b1c71]">
            Explora nuevas oportunidades
          </h2>

          <p className="mt-2 text-sm text-[#654675]">
            Conoce organizaciones y programas que impulsan
            a las mujeres en la ciencia y la tecnología.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-purple-200 bg-white shadow-md">

          {enlaces.map((enlace, index) => (
            <article
              key={enlace.nombre}
              className="flex gap-4 border-b border-purple-100 px-5 py-5 transition-colors last:border-b-0 hover:bg-[#faf5fd] sm:px-7"
            >

              <span className="pt-1 text-sm font-bold text-[#aa80c1]">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="min-w-0 flex-1">

                <h3 className="mb-2 text-lg font-bold text-[#4b1c71]">
                  {enlace.nombre}
                </h3>

                <p className="mb-3 text-sm leading-6 text-gray-700">
                  {enlace.descripcion}
                </p>

                <a
                  href={enlace.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#8545ab] transition hover:text-[#4b1c71] hover:underline"
                >
                  Visitar sitio ↗
                </a>

              </div>
            </article>
          ))}

        </div>
      </section>
    </Pagina>
  )
}
