import type { ReactNode } from 'react'

type SeccionProps = {
  titulo: string
  children: ReactNode
}

/** Bloque de texto centrado con subtítulo (equivale a la clase .seccion del proyecto en Vue). */
export default function Seccion({ titulo, children }: SeccionProps) {
  return (
    <section className="mt-12 text-center">
      <h2 className="mb-4 leading-normal text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold text-white">
        {titulo}
      </h2>
      <p className="mx-auto max-w-[800px] text-xl leading-[1.7] text-white/90 [&_a]:font-semibold [&_a]:text-secundario [&_a]:underline">
        {children}
      </p>
    </section>
  )
}
