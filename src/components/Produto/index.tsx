import { useDispatch } from 'react-redux'

import { Sport } from '../../App'
import * as S from './styles'

import { adicionar } from '../../store/reducers/carrinho'

type Props = {
  sport: Sport
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const Produto = ({ sport }: Props) => {
  const dispatch = useDispatch()

  return (
    <S.Produto>
      <S.Capa>
        <img src={sport.imagem} alt={sport.titulo} />
      </S.Capa>
      <S.Titulo>{sport.titulo}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(sport.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => dispatch(adicionar(sport))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default Produto
