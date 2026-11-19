import type { Habilidade, NivelHabilidade } from '../types/portfolio'

type ListaHabilidadesProps = {
  habilidades: Habilidade[]
}

const ESTILO_NIVEL: Record<NivelHabilidade, string> = {
  Básico: 'bg-sky-100 text-sky-800',
  Intermediário: 'bg-amber-100 text-amber-800',
  Avançado: 'bg-emerald-100 text-emerald-800',
}

export function ListaHabilidades({ habilidades }: ListaHabilidadesProps) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {habilidades.map((h) => (
        <li
          key={h.id}
          className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3.5 transition hover:border-emerald-300 hover:bg-white"
        >
          <div>
            <p className="font-semibold text-slate-800">{h.nome}</p>
            <p className="text-xs text-slate-500">{h.categoria}</p>
          </div>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${ESTILO_NIVEL[h.nivel]}`}
          >
            {h.nivel}
          </span>
        </li>
      ))}
    </ul>
  )
}