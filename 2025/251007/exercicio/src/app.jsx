import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [filme, setFilme] = useState(null)
  
  useEffect(() => {
    chamarApi()
  }, [])

  async function chamarApi(){
    const resultado = await axios.get('https://omdbapi.com/?apikey=28d0dee8&t=batman')
    console.log(resultado)
  }

  return (
    <>
      <h1>Exercício</h1>
      <div className="card">
      <Link to='/'>Início</Link>
      <Link to='/filmes'>Filmes</Link>
      </div>
    </>
  )
}

export default App
