import Pagina from '../components/Pagina'
import Seccion from '../components/Seccion'
import foto1 from '../assets/foto-grupo-1.jpg'
import foto2 from '../assets/foto-grupo-2.jpg'

export default function Inicio() {
  return (
    <Pagina titulo="Mujeres en Computación">
      <Seccion titulo="¿Quiénes somos?">
        Somos una sección de la{' '}
        <a href="http://amexcomp.mx/" target="_blank" rel="noopener noreferrer">
          Academia Mexicana de Computación
        </a>{' '}
        que tiene como propósito analizar y crear estrategias para incrementar la participación
        femenina en la Computación en México desde diferentes perspectivas y a diferentes niveles
        educativos.
      </Seccion>

      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/vuLwie4wHjg?start=2"
          title="¿Quiénes somos? - Mujeres en Computación AMEXCOMP"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <div className="fotos-grupo">
        <img src={foto1} alt="Integrantes de Mujeres en Computación en un jardín con escalinatas" />
        <img src={foto2} alt="Integrantes de Mujeres en Computación frente a una construcción de piedra" />
      </div>

      <Seccion titulo="¿Qué hacemos?">
        <ul className="lista-que-hacemos">
          <li>
            Analizar el estado actual de la participación femenina en el área de computación en el
            país.
          </li>
          <li>
            Generar estrategias de divulgación del trabajo de las participantes de este grupo para
            ser un referente de las mujeres en computación en México.
          </li>
          <li>
            Todo esto con el objetivo final de incrementar la participación femenina en la
            Computación en México.
          </li>
        </ul>
      </Seccion>
    </Pagina>
  )
}