import type { Projeto } from '../types/portfolio'

type CardProjetoProps = {
  projeto: Projeto
}

export function CardProjeto({ projeto }: CardProjetoProps) {
  return (
    <article className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div>
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold text-slate-900">{projeto.titulo}</h3>
          {projeto.emAndamento && (
            <span className="shrink-0 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
              Em andamento
            </span>
          )}
        </div>

        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {projeto.descricao}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {projeto.tecnologias.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {(projeto.repoUrl || projeto.demoUrl) && (
        <div className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-4 text-sm font-semibold">
          {projeto.repoUrl && (
            <a
              href={projeto.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-emerald-700 transition hover:text-emerald-900"
            >
              Código no GitHub →
            </a>
          )}
          {projeto.demoUrl && (
            <a
              href={projeto.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 transition hover:text-slate-900"
            >
              Ver projeto →
            </a>
          )}
        </div>
      )}
    </article>
  )
}