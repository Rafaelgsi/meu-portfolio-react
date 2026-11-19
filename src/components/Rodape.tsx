type RodapeProps = {
  autor: string
  ano: number
  disciplina: string
}

export function Rodape({ autor, ano, disciplina }: RodapeProps) {
  return (
    <footer className="py-6 text-center text-sm text-slate-500">
      <p>
        © {ano} {autor} • Desenvolvido para {disciplina} (IFTM)
      </p>
    </footer>
  )
}