import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Filmes() {
  const [filmes, setFilmes] = useState([])
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState(null)
  const [busca, setBusca] = useState('')
  const [termoPesquisado, setTermoPesquisado] = useState('')

  useEffect(() => {
    const delay = setTimeout(() => {
      if (busca.trim() !== '') {
        buscarFilmes(busca)
      } else {
        setFilmes([])
        setErro(null)
        setTermoPesquisado('')
      }
    }, 800)

    return () => clearTimeout(delay)
  }, [busca])

  async function buscarFilmes(nomeFilme) {
    setCarregando(true)
    setErro(null)
    setTermoPesquisado(nomeFilme)
    try {
      const resposta = await axios.get(
        `https://www.omdbapi.com/?apikey=28d0dee8&s=${encodeURIComponent(nomeFilme)}`
      )

      if (resposta.data.Response === 'True') {
        setFilmes(resposta.data.Search)
      } else {
        setFilmes([])
        setErro('Nenhum filme encontrado com esse título.')
      }
    } catch (err) {
      setErro('Erro ao buscar filmes. Tente novamente.')
      setFilmes([])
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Links de navegação */}
      <div style={{ marginBottom: '20px' }}>
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
      </div>

      <h1>Busca de Filmes</h1>

      <input
        type="text"
        value={busca}
        onChange={e => setBusca(e.target.value)}
        placeholder="Digite o nome do filme..."
        style={{
          padding: '8px',
          width: '300px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          marginBottom: '20px',
          display: 'block'
        }}
      />

      {!busca && <p style={{ color: '#555' }}>Digite algo para começar a buscar.</p>}
      {termoPesquisado && !carregando && <h2>Resultados para: {termoPesquisado}</h2>}
      {carregando && <p>Carregando...</p>}
      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      {!carregando && filmes.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {filmes.map(filme => (
            <div
              key={filme.imdbID}
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                width: '180px',
                borderRadius: '8px',
                textAlign: 'center'
              }}
            >
              <img
                src={filme.Poster !== 'N/A' ? filme.Poster : 'https://via.placeholder.com/150'}
                alt={`Poster do filme ${filme.Title}`}
                style={{ width: '150px', height: '225px', objectFit: 'cover' }}
              />
              <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{filme.Title}</p>
              <p>Ano: {filme.Year}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
