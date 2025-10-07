import { useState, useEffect } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const [nome, setNome] = useState('')
  const [filme, setFilme] = useState(null)
  
  // Forma 1: useEffect(funaoASerExecutada, [dependencias])
  // A cada mudança em qualquer uma das dependências a funcaoASerExecutada é acionada
  useEffect(() => {
    console.log('UseEffect 1 foi executado quando uma das dependências é alterada.')
  }, [count, nome])

  // Forma 2: useEffect(funaoASerExecutada, [dependencias])
  // A funcaoASerExecutada é acionada no carregamento da página (evento mount)
  useEffect(() => {
    chamarApi()
  }, [])

  // Forma 3: useEffect(funaoASerExecutada, [dependencias])
  // A funcaoASerExecutada é acionada no carregamento da página (evento mount)
  useEffect(() => {
    console.log('UseEffect 3 foi executado olhando para qualquer estado.')
  })

  async function chamarApi(){
    const resultado = await axios.get('https://omdbapi.com/?apikey=28d0dee8&t=batman')
    console.log(resultado)
  }

  return (
    <>
      <h1>Aula 3</h1>
      <div className="card">
      <Link to='/inicio'>Início</Link>
      <Link to='/contatos'>Contatos</Link>
      <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {JSON.stringify(filme)}
        <p> Diretor: {filme?.Director}</p>
        <p> Writer: {filme?.Writer}</p>
      </div>
    </>
  )
}

export default App

// pacotes utilizados para comunicação com API´s:
// - fetch: nativo do JavaScript, mais imperativo (precisa de mais código para fazer as ações)
// - axios: não é nativo, mas tem mais funcionalidades prontas (para instalar/rodar 'npm i axios')