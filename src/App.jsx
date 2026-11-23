// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/common/Header";
import { Navbar } from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";

import { HomePage } from "./pages/HomePage";
import { CoordinationsPage } from "./pages/CoordinationsPage";
import { MediaPage } from "./pages/MediaPage";
import { NewsEventsPage } from "./pages/NewsEventsPage";
import { TeamPage } from "./pages/TeamPage";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* 1. Barra institucional superior (Logos SEEC e COINTE, Ajuda e Redes) */}
      <Header />

      {/* 2. Barra de navegação arredondada e campo de busca */}
      <Navbar />

      {/* 3. Conteúdo dinâmico das páginas */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coordenacoes" element={<CoordinationsPage />} />
          <Route path="/midia" element={<MediaPage />} />
          <Route path="/noticias-eventos" element={<NewsEventsPage />} />
          <Route path="/equipe" element={<TeamPage />} />
          <Route
            path="*"
            element={
              <h1 className="p-8 text-center">404 - Página não encontrada</h1>
            }
          />
        </Routes>
      </main>

      {/* 4. Rodapé institucional */}
      <Footer />
    </div>
  );
}
