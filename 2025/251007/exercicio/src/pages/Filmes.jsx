import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Filmes(){

    const { filme } = useParams()

    useEffect(() => {
        chamarApi(filme)
    })

    async function chamarApi() {
        const resultado = await axios.get('https://omdbapi.com/?apikey=28d0dee8&t=batman')
        console.log(resultado)
    }

    return (
        <h1>Nome do Filme: {filme}</h1>
    )
}

