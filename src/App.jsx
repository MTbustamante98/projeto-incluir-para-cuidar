import { BrowserRouter, Routes, Route } from "react-router";
import { Suspense, lazy } from "react";
import "./App.css";
import { UserStorage } from "./UserContext";

const Home = lazy(() => import("./Componentes/Home"));
const Header = lazy(() => import("./Componentes/Header"));
const BancoDeImagens = lazy(() =>
  import("./Componentes/BancoDeImagens/BancoDeImagens")
);
const RotinaMao = lazy(() => import("./Componentes/Rotinas/RotinaMao"));
const RotinaCranio = lazy(() => import("./Componentes/Rotinas/RotinaCranio"));
const RotinaAbdome = lazy(() => import("./Componentes/Rotinas/RotinaAbdome"));
const RotinaTorax = lazy(() => import("./Componentes/Rotinas/RotinaTorax"));
const Sugestoes = lazy(() => import("./Componentes/Sugestoes/Sugestoes"));

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main>
            <Suspense fallback={<div className="spinner"></div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/banco-de-imagens" element={<BancoDeImagens />} />
                <Route path="/rotina-mao" element={<RotinaMao />} />
                <Route path="/rotina-cranio" element={<RotinaCranio />} />
                <Route path="/rotina-abdome" element={<RotinaAbdome />} />
                <Route path="/rotina-torax" element={<RotinaTorax />} />
                <Route path="/sugestoes" element={<Sugestoes />} />
              </Routes>
            </Suspense>
          </main>
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
