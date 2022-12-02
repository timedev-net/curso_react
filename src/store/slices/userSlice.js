import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
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

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
