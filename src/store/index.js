import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/usersSlice";
import contador from "./slices/contadorSlice";

export const store = configureStore({
  reducer: {
    user,
    contador,
  },
});
