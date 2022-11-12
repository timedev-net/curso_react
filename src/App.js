
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/global.css"
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return <RouterProvider router={router} />;
}

export default App;