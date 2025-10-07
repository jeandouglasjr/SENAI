import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Produto(){

    const { nome } = useParams()

    useEffect(() => {
        chamarApi(nome)
    })

    async function chamarApi(nomeRecebido) {
        const resultado = await axios.get('https://omdbapi.com/?apikey=28d0dee8&t=' + nomeRecebido)
        console.log(resultado)
    }

    return (
        <h1>Essa é a página {nome.endsWith('a')?'da':'do'} {nome}</h1>
    )
}