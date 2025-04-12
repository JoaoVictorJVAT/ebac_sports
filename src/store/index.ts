import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'
import favoritarReducer from './reducers/favoritar'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritar: favoritarReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
