import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    isLogged: false,
    user: null,
  },
  reducers: {
    login(state, action) {
      state.isLogged = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isLogged = false;
      state.user = null;
    },
  },
});

export const { login, logout } = usersSlice.actions;
export default usersSlice.reducer;
