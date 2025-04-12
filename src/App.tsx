import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

const Conteudo = () => {
  const [produtos, setProdutos] = useState<Produto[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => setProdutos(res))
  }, [])

  return (
    <div className="container">
      <Header />
      <Produtos produtos={produtos} />
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Conteudo />
    </Provider>
  )
}

export default App
