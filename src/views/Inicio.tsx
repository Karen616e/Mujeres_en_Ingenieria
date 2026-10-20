import Pagina from '../components/Pagina'
import Seccion from '../components/Seccion'

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
    </Pagina>
  )
}
