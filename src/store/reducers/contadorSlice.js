
import { createSlice } from '@reduxjs/toolkit'

const contadorSlice = createSlice({
  name: 'contador',
  initialState: {
    numero: 0
  },
  reducers: {
    incrementar: state => {
      state.numero += 1
    },
    decrementar: state => {
      state.numero -= 1
    },
    incrementarPorQuantia: (state, action) => {
      state.numero += action.payload
    }
  }
})

export const { incrementar, decrementar, incrementarPorQuantia } = contadorSlice.actions
export default contadorSlice.reducer