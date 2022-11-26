
import { createBrowserRouter } from "react-router-dom";

import Main from "./layout/Main";
import Minimum from "./layout/Minimum";

import Home from "./pages/Home";
import Devs from "./pages/Devs";
import Login from "./pages/Login";
import Companies from "./pages/Companies";
import Curriculum from "./pages/Curriculum";

export const router = createBrowserRouter([
  { path: "/", element: <Minimum Page={Login} /> },
  { path: "inicio", element: <Main Page={Home} /> },
  { path: "profissionais", element: <Main Page={Devs} /> },
  { path: "empresas", element: <Main Page={Companies} /> },
  { path: "perfil", element: <Main Page={Curriculum} /> },
  ],
 );