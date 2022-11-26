
import { createSlice } from '@reduxjs/toolkit'

const contadorSlice = createSlice({
  name: 'contador',
  initialState: {
    numero: 0,
    numero2: 0,
    numero3: 0,
    numero4: 0,
    numeroSessaoStorage: 0,
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
    },
    decrementarPorQuantia: (state, action) => {
      state.numero -= action.payload
    },
    definirNumero2: (state, action) => {
      state.numero2 = action.payload
    },
    definirNumero3: (state, action) => {
      state.numero3 = action.payload
    },
    definirNumero4: (state, action) => {
      state.numero4 = action.payload
    }
  }
})

export const { incrementar, decrementar, incrementarPorQuantia, decrementarPorQuantia, definirNumero2, definirNumero3, definirNumero4 } = contadorSlice.actions
export default contadorSlice.reducer
