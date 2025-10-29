import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Contato() {

    const { id } = useParams()
    const [dados, setDados] = useState(null)

    useEffect(() => {
        // busca da api com id 
    })

    return (
        <>
            <h1>Página de contato do id {id}</h1>
            {dados && (
                <h1>Nome: {dados?.nome}</h1>
            )}
        </>
    )
}