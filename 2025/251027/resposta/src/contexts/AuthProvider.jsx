import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export default function AuthProvider({ children }) {

    const [logado, setLogado] = useState(false)
    const [carregando, setCarregando] = useState(true)

    function realizarLogin() {
        setLogado(true)
        localStorage.setItem('logado', true)
        localStorage.setItem('userInfo', { email, id })
    }

    useEffect(() => {
        console.log('Use effect', logado)
        const logadoStorage = localStorage.getItem('logado')

        if(logadoStorage) {
            setLogado(true)
        }

        setCarregando(false)
        console.log('Use effect', logado)
    }, [])

    if(carregando) {
        return (
            <h1>Carregando...</h1>
        )
    }

    return (
        <AuthContext value={{ logado, realizarLogin }}>
            {children}
        </AuthContext>
    )
}