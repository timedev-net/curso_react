import "./styles/global.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

import { router } from "./Routes";
import { RouterProvider } from "react-router-dom";

export default function App() {
  return <RouterProvider router={router} />;
}