export type NivelHabilidade = 'Básico' | 'Intermediário' | 'Avançado'

export type Habilidade = {
  id: number
  nome: string
  nivel: NivelHabilidade
  categoria: 'Front-end' | 'Back-end & Dados' | 'Ferramentas'
}

export type Projeto = {
  id: number
  titulo: string
  descricao: string
  tecnologias: string[]
  emAndamento: boolean
  repoUrl?: string
  demoUrl?: string
}