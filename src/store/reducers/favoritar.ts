import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritarState = {
  itens: Produto[]
}

const initialState: FavoritarState = {
  itens: []
}

const favoritarSlice = createSlice({
  name: 'favoritar',
  initialState,
  reducers: {
    adicionarOuRemover: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const existe = state.itens.find((item) => item.id === produto.id)

      if (existe) {
        state.itens = state.itens.filter((item) => item.id !== produto.id)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionarOuRemover } = favoritarSlice.actions
export default favoritarSlice.reducer
