import { Link } from "react-router-dom";

import logoCointe from "../../assets/LOGO_COINTE.jpg";

// Links internos ligados às rotas do React Router
const LINKS_NAVEGACAO = [
  { texto: "Início & Institucional", rota: "/" },
  { texto: "Robótica & Cultura Maker", rota: "/coordenacoes" },
  { texto: "Formação de Professores", rota: "/coordenacoes" },
  { texto: "Rede RIEH / NTEs", rota: "/midia" },
  { texto: "Acervo TV COINTE", rota: "/midia" },
];

// Links externos do Governo do RN (depois substituir '#' pelas URLs oficiais)
const SERVICOS_GOVERNAMENTAIS = [
  { texto: "Portal do Servidor RN", url: "#" },
  { texto: "SIGEduc RN", url: "#" },
  { texto: "Portal da Transparência SEEC", url: "#" },
  { texto: "Ouvidoria Geral do Estado", url: "#" },
  { texto: "Legislação & Diretrizes", url: "#" },
];

const LINKS_LEGAIS = [
  { texto: "Privacidade de Dados", rota: "#" },
  { texto: "Termos de Uso", rota: "#" },
  { texto: "Acessibilidade", rota: "#" },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-200/70 bg-[#f8f6f7] text-[#4a5568]">
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-10 lg:px-8">
        {/* Parte Superior - Grade com 4 colunas */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Coluna 1: Logo, descrição institucional e selo */}
          <div className="flex flex-col items-start">
            <img
              src={logoCointe}
              alt="Logo COINTE"
              className="mb-4 h-14 w-auto object-contain mix-blend-multiply"
            />

            <p className="text-sm leading-relaxed text-[#4a5568]">
              Coordenadoria de Inovação e Tecnologias Educacionais da Secretaria
              de Estado da Educação, do Esporte e do Lazer do Rio Grande do
              Norte.
            </p>

            {/* Indicador inferior com ponto azul */}
            <div className="mt-6 flex items-center gap-2 text-xs font-bold tracking-wider text-[#1d6396] uppercase">
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#1d6396]"
                aria-hidden="true"
              />
              <span>GOVERNO DO RN • TRANSFORMAÇÃO DIGITAL</span>
            </div>
          </div>

          {/* Coluna 2: Navegação interna */}
          <div>
            <h2 className="mb-4 text-xs font-bold tracking-wider text-[#1a202c] uppercase">
              NAVEGAÇÃO
            </h2>
            <ul className="space-y-2.5 text-sm">
              {LINKS_NAVEGACAO.map((item) => (
                <li key={item.texto}>
                  <Link
                    to={item.rota}
                    className="transition-colors hover:text-[#1d6396]"
                  >
                    {item.texto}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Serviços Governamentais */}
          <div>
            <h2 className="mb-4 text-xs font-bold tracking-wider text-[#1a202c] uppercase">
              SERVIÇOS GOVERNAMENTAIS
            </h2>
            <ul className="space-y-2.5 text-sm">
              {SERVICOS_GOVERNAMENTAIS.map((servico) => (
                <li key={servico.texto}>
                  <a
                    href={servico.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[#1d6396]"
                  >
                    {servico.texto}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Sede & Contato */}
          <div>
            <h2 className="mb-4 text-xs font-bold tracking-wider text-[#1a202c] uppercase">
              SEDE &amp; CONTATO
            </h2>
            <address className="not-italic text-sm leading-relaxed">
              <p>Centro Administrativo do Estado do RN</p>
              <p>BR-101, Km 0 - Lagoa Nova</p>
              <p>Natal/RN - CEP: 59064-901</p>

              <p className="mt-4">Atendimento: Seg a Sex, das 8h às 17h</p>
              <a
                href="mailto:cointe@rn.gov.br"
                className="font-medium text-[#1d6396] transition-colors hover:underline"
              >
                cointe@rn.gov.br
              </a>
            </address>
          </div>
        </div>

        {/* Parte inferior - Direitos autorais e links legais */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-200/60 pt-6 text-xs text-[#4a5568] sm:flex-row">
          <p className="text-center sm:text-left">
            © 2025 COINTE / SEEC-RN. Governo do Estado do Rio Grande do Norte.
            Todos os direitos reservados.
          </p>

          <nav
            aria-label="Links legais"
            className="flex flex-wrap justify-center gap-6"
          >
            {LINKS_LEGAIS.map((link) => (
              <Link
                key={link.texto}
                to={link.rota}
                className="transition-colors hover:text-[#1d6396]"
              >
                {link.texto}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
