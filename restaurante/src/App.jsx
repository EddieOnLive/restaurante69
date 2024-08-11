/* Default */

import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Inicio from "./pages/Inicio";
import NotFoundPage from "./pages/NotFoundPage";
import Menu from "./pages/Menu";
import MenuForm from "./pages/MenuForm";
import MesasManager from "./pages/MesasManager";
import MesasForm from "./pages/MesasForm";

function App() {
  return (
    <>
      <div className="bg-zinc-900 h-full w-full">
        <NavBar />
        <div>
          <div className="container mx-auto py-4 px-20 ">
            <Routes>
              {/* Base */}
              <Route path="/" element={<Inicio />} />
              <Route path="*" element={<NotFoundPage />} />

              {/* Menu */}
              <Route path="menu" element={<Menu />} />
              <Route path="/menuForm" element={<MenuForm />} />
              <Route path="/menuForm/:id" element={<MenuForm />} />

              {/* Mesas */}
              <Route path="/mesasManager" element={<MesasManager />} />
              <Route path="/MesasForm" element={<MesasForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
