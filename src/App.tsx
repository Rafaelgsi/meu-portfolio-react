import { Cabecalho } from './components/Cabecalho'
import { Painel } from './components/Painel'
import { ListaHabilidades } from './components/ListaHabilidades'
import { CardProjeto } from './components/CardProjeto'
import { Contato } from './components/Contato'
import { Rodape } from './components/Rodape'
import type { Habilidade, Projeto } from './types/portfolio'

const habilidades: Habilidade[] = [
  { id: 1, nome: 'HTML5 & CSS3', nivel: 'Avançado', categoria: 'Front-end' },
  { id: 2, nome: 'TypeScript', nivel: 'Intermediário', categoria: 'Front-end' },
  { id: 3, nome: 'React & Tailwind CSS', nivel: 'Básico', categoria: 'Front-end' },
  { id: 4, nome: 'Bootstrap 5', nivel: 'Intermediário', categoria: 'Front-end' },
  { id: 5, nome: 'SQL & Modelagem Relacional', nivel: 'Intermediário', categoria: 'Back-end & Dados' },
  { id: 6, nome: 'Java (POO) & Estrutura de Dados em C', nivel: 'Intermediário', categoria: 'Back-end & Dados' },
]

const projetos: Projeto[] = [
  {
    id: 1,
    titulo: 'BiblioHub',
    descricao:
      'Plataforma acadêmica de extensão voltada ao mapeamento de bibliografias curriculares e empréstimo digital temporário de livros didáticos.',
    tecnologias: ['React', 'TypeScript', 'Banco de Dados'],
    emAndamento: true,
    repoUrl: 'https://github.com/rafaelgalvao-dev/bibliohub',
  },
  {
    id: 2,
    titulo: 'Pit Stop Car Brasil',
    descricao:
      'Vitrine web e acervo digital responsivo dedicado a carros clássicos e raros, construído com foco em grid e hierarquia visual.',
    tecnologias: ['HTML5', 'CSS3', 'Bootstrap 5'],
    emAndamento: false,
    repoUrl: 'https://github.com/rafaelgalvao-dev/pit-stop-car-brasil',
  },
  {
    id: 3,
    titulo: 'Unidos pela Criação',
    descricao:
      'Projeto de extensão educacional introduzindo desenvolvimento de jogos com Unity e modelagem 3D no Blender para estudantes do ensino médio técnico.',
    tecnologias: ['Unity', 'C#', 'Blender'],
    emAndamento: false,
  },
]

export function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-8">
        <Cabecalho
          nome="Rafael Galvão da Silva"
          curso="Análise e Desenvolvimento de Sistemas"
          periodo={3}
          instituicao="IFTM — Campus Uberaba Parque Tecnológico"
          githubUrl="https://github.com/rafaelgalvao-dev"
        />

        <main className="space-y-6">
          <Painel id="sobre" titulo="Sobre mim">
            <p className="leading-relaxed text-slate-600">
              Sou estudante do 3º período de Análise e Desenvolvimento de Sistemas no IFTM Campus Uberaba Parque Tecnológico e técnico em Computação Gráfica. Tenho interesse em desenvolvimento front-end, arquitetura de banco de dados e criação de interfaces web responsivas e acessíveis.
            </p>
          </Painel>

          <Painel id="habilidades" titulo="Habilidades Técnicas">
            <ListaHabilidades habilidades={habilidades} />
          </Painel>

          <Painel id="projetos" titulo="Projetos">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projetos.map((projeto) => (
                <CardProjeto key={projeto.id} projeto={projeto} />
              ))}
            </div>
          </Painel>

          <Painel id="contato" titulo="Contato">
            <Contato
              email="rafael.gs@estudante.iftm.edu.br"
              cidade="Uberaba, MG"
              githubUsuario="rafaelgalvao-dev"
            />
          </Painel>
        </main>

        <Rodape
          autor="Rafael Galvão da Silva"
          ano={2026}
          disciplina="Tecnologias para Interfaces de Aplicações Web"
        />
      </div>
    </div>
  )
}

export default App