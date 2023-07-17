import { Sport } from '../App'
import Produto from '../components/Produto'
import { useGetSportQuery } from '../services/api'

import * as S from './styles'

type Props = {
  sport: Sport[]
}

const ProdutosComponent = () => {
  const { data: modalidades, isLoading } = useGetSportQuery()

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {modalidades?.map((sport) => (
          <Produto key={sport.id} sport={sport} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
