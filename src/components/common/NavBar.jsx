import { useState } from "react";
import { NavLink } from "react-router-dom";

// Lista centralizada com os textos do menu e as rotas configuradas no App.jsx
const LINKS_NAVEGACAO = [
  { texto: "Página Inicial", rota: "/" },
  { texto: "Ecossistema COINTE", rota: "/coordenacoes" },
  { texto: "RIEH & TV COINTE", rota: "/midia" },
  { texto: "Notícias & Eventos", rota: "/noticias-eventos" },
  { texto: "Equipe", rota: "/equipe" },
];

export function Navbar() {
  const [termoBusca, setTermoBusca] = useState("");
  const [menuAberto, setMenuAberto] = useState(false);

  // Define o visual de cada link conforme a rota atual (usado no desktop e no mobile)
  const obterClassesLink = ({ isActive }) => {
    const classesBase =
      "block rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 whitespace-nowrap";

    if (isActive) {
      return `${classesBase} bg-[#2b6692] text-white shadow-xs`;
    }

    return `${classesBase} text-[#2d3748] hover:bg-slate-200/60 hover:text-slate-900`;
  };

  function lidarComBusca(evento) {
    evento.preventDefault();
    if (!termoBusca.trim()) return;

    console.log("Pesquisando por:", termoBusca);
  }

  return (
    <header className="w-full px-4 py-5 sm:px-6 lg:px-8">
      {/* =========================================================
          1. VERSÃO MOBILE E TABLET (visível em telas menores que 1024px)
          ========================================================= */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between gap-3">
          {/* Botão Hambúrguer */}
          <button
            type="button"
            onClick={() => setMenuAberto((estadoAnterior) => !estadoAnterior)}
            aria-expanded={menuAberto}
            aria-controls="menu-mobile"
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/80 bg-[#f8f9fc] text-[#2d3748] shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition hover:bg-slate-200/60"
          >
            {menuAberto ? (
              /* Ícone X (Fechar) */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              /* Ícone Hambúrguer (3 linhas) */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>

          {/* Barra de pesquisa no mobile (alinhada à direita) */}
          <form
            onSubmit={lidarComBusca}
            className="flex flex-1 items-center gap-2.5 rounded-full bg-[#eceef4] px-4 py-2.5 transition focus-within:ring-2 focus-within:ring-[#2b6692]/30 sm:max-w-xs"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 shrink-0 text-[#64748b]"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>

            <input
              type="search"
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
              placeholder="Pesquisar projetos, notícias..."
              aria-label="Pesquisar projetos, notícias"
              className="w-full bg-transparent text-sm text-[#2d3748] placeholder:text-[#718096] focus:outline-none"
            />
          </form>
        </div>

        {/* Painel suspenso com os links no mobile */}
        {menuAberto && (
          <nav
            id="menu-mobile"
            aria-label="Navegação principal móvel"
            className="mt-3 flex flex-col gap-1.5 rounded-3xl border border-white/80 bg-[#f8f9fc] p-3 shadow-md"
          >
            {LINKS_NAVEGACAO.map((item) => (
              <NavLink
                key={item.rota}
                to={item.rota}
                className={obterClassesLink}
                onClick={() => setMenuAberto(false)}
              >
                {item.texto}
              </NavLink>
            ))}
          </nav>
        )}
      </div>

      {/* =========================================================
          2. VERSÃO DESKTOP (visível a partir de 1024px)
          Ocupa toda a largura para deixar o input quase no fim da tela à direita
          ========================================================= */}
      <div className="hidden w-full items-center justify-between gap-4 lg:flex xl:grid xl:grid-cols-[1fr_auto_1fr]">
        {/* Coluna 1: Espaço reservado à esquerda para centralizar o menu em monitores largos */}
        <div className="hidden xl:block" />

        {/* Coluna 2: Cápsula central de navegação */}
        <nav
          aria-label="Navegação principal"
          className="flex items-center gap-1.5 justify-self-center rounded-full border border-white/80 bg-[#f8f9fc] p-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
        >
          {LINKS_NAVEGACAO.map((item) => (
            <NavLink
              key={item.rota}
              to={item.rota}
              className={obterClassesLink}
            >
              {item.texto}
            </NavLink>
          ))}
        </nav>

        {/* Coluna 3: Cápsula da barra de pesquisa quase no fim da tela à direita */}
        <form
          onSubmit={lidarComBusca}
          className="flex items-center gap-2.5 justify-self-end rounded-full bg-[#eceef4] px-4 py-2.5 transition focus-within:ring-2 focus-within:ring-[#2b6692]/30"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 shrink-0 text-[#64748b]"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>

          <input
            type="search"
            value={termoBusca}
            onChange={(e) => setTermoBusca(e.target.value)}
            placeholder="Pesquisar projetos, notícias..."
            aria-label="Pesquisar projetos, notícias"
            className="w-56 bg-transparent text-sm text-[#2d3748] placeholder:text-[#718096] focus:outline-none 2xl:w-64"
          />
        </form>
      </div>
    </header>
  );
}
