type CabecalhoProps = {
  nome: string
  curso: string
  periodo: number
  instituicao: string
  avatarUrl?: string
  githubUrl: string
}

export function Cabecalho({
  nome,
  curso,
  periodo,
  instituicao,
  avatarUrl,
  githubUrl,
}: CabecalhoProps) {
  return (
    <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
          <img
            src={avatarUrl ?? 'https://placehold.co/96x96/059669/ffffff?text=RG'}
            alt={`Foto de perfil de ${nome}`}
            className="size-24 rounded-full border-2 border-emerald-600 object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              {nome}
            </h1>
            <p className="mt-1 font-medium text-emerald-700">
              {curso} • {periodo}º período
            </p>
            <p className="text-sm text-slate-500">{instituicao}</p>
          </div>
        </div>

        <nav aria-label="Navegação principal" className="flex flex-wrap justify-center gap-2">
          <a
            href="#sobre"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Sobre
          </a>
          <a
            href="#habilidades"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Habilidades
          </a>
          <a
            href="#projetos"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Projetos
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 active:scale-95"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}