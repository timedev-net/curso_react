import { configureStore } from "@reduxjs/toolkit";
import user from "./reducers/usersSlice";
import contador from "./reducers/contadorSlice";

export const store = configureStore({
  reducer: {
    user,
    contador,
  },
});
