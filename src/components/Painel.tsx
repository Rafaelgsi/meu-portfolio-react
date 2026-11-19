import type { ReactNode } from 'react'

type PainelProps = {
  id?: string
  titulo: string
  children: ReactNode
}

export function Painel({ id, titulo, children }: PainelProps) {
  return (
    <section
      id={id}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <h2 className="mb-4 border-b border-slate-100 pb-2 text-xl font-bold text-slate-900">
        {titulo}
      </h2>
      {children}
    </section>
  )
}