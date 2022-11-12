import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/global.css"
import { routes } from "./routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
