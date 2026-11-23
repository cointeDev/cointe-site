import { useState } from "react";
import { Link } from "react-router-dom";

import logoSeec from "../../assets/LOGO_SEEC.png";
import logoCointe from "../../assets/LOGO_COINTE.jpg";
export function Header() {
  // Estado para abrir/fechar o menu rápido do ícone de três pontos
  const [menuOpcoesAberto, setMenuOpcoesAberto] = useState(false);

  return (
    <header className="w-full border-b border-slate-200/80 bg-white">
      <div className="flex w-full items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        {/* Lado Esquerdo - LOGO da SEEC/RN */}
        <Link
          to="/"
          aria-label="Ir para a página inicial da SEEC-RN"
          className="flex items-center transition-opacity hover:opacity-90"
        >
          <img
            src={logoSeec}
            alt="Logo RN SEEC - Secretaria de Estado da Educação, do Esporte e do Lazer"
            className="h-22 w-auto object-contain sm:h-22"
          />
        </Link>

        {/* Lado Direito: Logo COINTE, menu de opções, Ajuda e Redes Sociais */}
        <div className="flex items-center gap-4 sm:gap-7">
          {/* Logo da COINTE */}
          <Link
            to="/"
            aria-label="Página inicial COINTE"
            className="flex items-center transition-opacity hover:opacity-90"
          >
            <img
              src={logoCointe}
              alt="Logo COINTE"
              className="h-10 w-auto object-contain mix-blend-multiply sm:h-12"
            />
          </Link>

          {/* Grupo de utilidades e redes sociais */}
          <div className="relative flex items-center gap-3 text-sm text-[#64748b] sm:gap-4">
            {/* Botão de três pontos verticais (⋮) */}
            <button
              type="button"
              onClick={() => setMenuOpcoesAberto((anterior) => !anterior)}
              aria-expanded={menuOpcoesAberto}
              aria-label="Mais opções"
              className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <circle cx="12" cy="5" r="1.75" />
                <circle cx="12" cy="12" r="1.75" />
                <circle cx="12" cy="19" r="1.75" />
              </svg>
            </button>

            {/* Menu suspenso opcional ao clicar nos três pontos */}
            {menuOpcoesAberto && (
              <div className="absolute top-10 right-24 z-50 w-48 rounded-xl border border-slate-200/80 bg-white p-1.5 shadow-lg">
                <a
                  href="https://www.educacao.rn.gov.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpcoesAberto(false)}
                  className="block rounded-lg px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100"
                >
                  Portal Oficial SEEC-RN
                </a>
                <Link
                  to="/equipe"
                  onClick={() => setMenuOpcoesAberto(false)}
                  className="block rounded-lg px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100"
                >
                  Fale com a Equipe
                </Link>
              </div>
            )}

            {/* Linha divisória vertical sutil */}
            <span
              className="hidden h-4 w-px bg-slate-200 sm:inline-block"
              aria-hidden="true"
            />

            {/* Link Ajuda */}
            <Link
              to="/ajuda"
              className="font-normal text-[#64748b] transition-colors hover:text-[#2b6692]"
            >
              Ajuda
            </Link>

            {/* Ícones das Redes Sociais (Instagram e YouTube) */}
            <div className="ml-1 flex items-center gap-3.5 sm:ml-2">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da COINTE"
                className="text-[#64748b] transition-colors hover:text-[#2b6692]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Canal do YouTube TV COINTE"
                className="text-[#64748b] transition-colors hover:text-[#2b6692]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
