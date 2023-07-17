import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Sport } from '../../App'

type CarrinhoState = {
  itens: Sport[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Sport>) => {
      const modalidade = action.payload

      if (state.itens.find((sport) => sport.id === modalidade.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(modalidade)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
