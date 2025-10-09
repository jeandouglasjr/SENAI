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
      <div className="card">
      <Link
          to="/"
          style={{
            marginRight: '15px',
            textDecoration: 'none',
            backgroundColor: '#28a745',
            color: 'white',
            padding: '8px 15px',
            borderRadius: '4px'
          }}
        >
          Início
        </Link>

        <Link
          to="/filmes"
          style={{
            textDecoration: 'none',
            backgroundColor: '#007bff',
            color: 'white',
            padding: '8px 15px',
            borderRadius: '4px'
          }}
        >
          Filmes
        </Link>
        <h1>SENAI - Desenvolvimento de Sistemas</h1>
        <h2>Exercício Lista de Filmes</h2>
        </div>
    </>
  )
}

export default App
