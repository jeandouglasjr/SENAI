import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Filmes() {
  const { nome } = useParams() // pega o parâmetro da URL
  const [filmes, setFilmes] = useState([]) // lista de filmes retornados
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState(null)

  useEffect(() => {
    if (nome) {
      buscarFilmes(nome)
    }
  }, [nome])

  async function buscarFilmes(nomeFilme) {
    setCarregando(true)
    setErro(null)
    try {
      // Busca pela API OMDb usando o parâmetro "s" para múltiplos resultados
      const resposta = await axios.get(
        `https://www.omdbapi.com/?apikey=28d0dee8&s=${encodeURIComponent(nomeFilme)}`
      )

      if (resposta.data.Response === "True") {
        setFilmes(resposta.data.Search)
      } else {
        // Caso não encontre nenhum filme
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
      <h2>Resultados para: {nome}</h2>

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
                textAlign: 'center',
              }}
            >
              <img
                src={filme.Poster !== 'N/A' ? filme.Poster : 'https://via.placeholder.com/150'}
                alt={`Poster do filme ${filme.Title}`}
                style={{ width: '150px', height: '225px', objectFit: 'cover' }}
              />
              <p style={{ marginTop: '10px' }}>{filme.Title}</p>
              <p>Ano: {filme.Year}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
