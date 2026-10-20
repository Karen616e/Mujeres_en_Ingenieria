import type { ReactNode } from 'react'

type PaginaProps = {
  titulo: string
  children?: ReactNode
}

/** Contenedor de cada página con su título principal (equivale a .pagina + h1 del proyecto en Vue). */
export default function Pagina({ titulo, children }: PaginaProps) {
  return (
    <div className="mx-auto max-w-[1000px] px-6 pb-16">
      <h1 className="mb-4 mt-16 text-center leading-normal text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold text-white">
        {titulo}
      </h1>
      {children}
    </div>
  )
}
