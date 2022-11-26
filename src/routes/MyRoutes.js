
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layout/Main";
import VagasAbertas from "../pages/VagasAbertas";
import Home from "../pages/Home";
import Profissionais from "../pages/Profissionais";
import ProcessoSeletivo from "../pages/ProcessoSeletivo";
import Contadores from "../pages/Contadores";

export default () => {
  return (
    <Routes>
      <Route element={<MainLayout Page={Home} />} path="/" />
      <Route element={<MainLayout Page={Profissionais} />} path="/profissionais" />
      <Route element={<MainLayout Page={VagasAbertas} />} path="/vagas_abertas" />
      <Route element={<MainLayout Page={ProcessoSeletivo} />} path="/processo_seletivo" />
      <Route element={<MainLayout Page={Contadores} />} path="/contadores" />
      <Route path="*" element={<Navigate to="/" replace />}/>
    </Routes>
  )
}