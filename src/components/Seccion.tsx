
import type { ReactNode } from 'react'

type SeccionProps = {
  titulo: string
  children: ReactNode
}

export default function Seccion({ titulo, children }: SeccionProps) {
  return (
    <section className="mt-12 rounded-3xl bg-lila-claro px-6 py-10 text-center shadow-sm">

      <h2 className="mb-4 text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold leading-normal text-primario">
        {titulo}
      </h2>

      <div
        className="mx-auto mb-6 h-1 w-24 rounded-full"
        style={{
          background: 'linear-gradient(90deg, #854CE6, #F18CD1)'
        }}
      />

      <p className="mx-auto max-w-[800px] text-xl leading-[1.7] text-[#654B7B] [&_a]:font-semibold [&_a]:text-secundario [&_a]:underline">
        {children}
      </p>

    </section>
  )
}
