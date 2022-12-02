import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/userSlice";
import contador from "./slices/contadorSlice";

export const store = configureStore({
  reducer: {
    user,
    contador,
  },
});
