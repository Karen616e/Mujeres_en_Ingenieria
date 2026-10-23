
import type { ReactNode } from 'react'

type PaginaProps = {
  titulo: string
  children?: ReactNode
}

export default function Pagina({ titulo, children }: PaginaProps) {
  return (
    <div className="mx-auto max-w-[1000px] px-6 pb-16">
      <div className="mb-10 mt-16 text-center">

        <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-normal text-primario">
          {titulo}
        </h1>

        <div
          className="mx-auto mt-3 h-1.5 w-28 rounded-full"
          style={{
            background: 'linear-gradient(90deg, #854CE6, #F18CD1)'
          }}
        />

      </div>

      {children}
    </div>
  )
}
