
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/global.css"
import { router } from "./Routes";
import { RouterProvider } from "react-router-dom";
import { useEffect } from 'react';

function App() {



  return <RouterProvider router={router} />;
}

export default App;