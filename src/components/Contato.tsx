type ContatoProps = {
  email: string
  cidade: string
  githubUsuario: string
}

export function Contato({ email, cidade, githubUsuario }: ContatoProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm text-slate-600">
          Aberto a oportunidades de estágio, projetos de extensão e colaboração em desenvolvimento web.
        </p>
        <p className="mt-1 text-sm font-medium text-slate-800">
          📍 {cidade}
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href={`mailto:${email}`}
          className="rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 active:scale-95"
        >
          {email}
        </a>
        <a
          href={`https://github.com/${githubUsuario}`}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          @{githubUsuario}
        </a>
      </div>
    </div>
  )
}