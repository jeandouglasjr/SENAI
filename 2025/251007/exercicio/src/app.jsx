import { useState, useEffect } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [filme, setFilme] = useState(null)
  
  useEffect(() => {
    chamarApi()
  }, [])

  return (
    <>
      <h1>Filmes</h1>
      <div className="card">
      <Link to='/inicio'>Início</Link>
      <Link to='/filmes'>Filmes</Link>
      </div>
    </>
  )
}

export default App
