import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./styles/global.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import MyRoutes from "./routes/MyRoutes";
import { CookiesProvider } from 'react-cookie';

import { store } from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <CookiesProvider>
          <ToastContainer theme="colored" />
          <BrowserRouter>
            <MyRoutes />
          </BrowserRouter>
        </CookiesProvider>
      </Provider>
    </>
  );
}

export default App;
