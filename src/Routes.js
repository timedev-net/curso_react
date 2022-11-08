import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./layout/Main";
import Empresas from "./pages/Empresas";
import Home from "./pages/Home";
import Profissionais from "./pages/Profissionais";

export default function() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main Page={Home} />} />
        <Route path="/profissionais" element={<Main Page={Profissionais} />} />
        <Route path="/empresas" element={<Main Page={Empresas} />} /> 
      </Routes>
    </BrowserRouter>
  );
}
