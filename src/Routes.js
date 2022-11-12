
import { createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import VagasAbertas from "./pages/VagasAbertas";
import Home from "./pages/Home";
import Profissionais from "./pages/Profissionais";


export const router = createBrowserRouter([
  { path: "/", element: <Main Page={Home} /> },
  { path: "profissionais", element: <Main Page={Profissionais} /> },
  { path: "vagas_abertas", element: <Main Page={VagasAbertas} /> },
],
//  {basename: '/curso_react'}
 );