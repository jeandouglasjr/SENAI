import { useContext } from 'react'
import { AuthContext  } from '../contexts/AuthContext'

export default function Login() {

    const { logado, realizarLogin } = useContext(AuthContext);

    return (
        <>
            <button onClick={realizarLogin()}> Logar </button>
            <p>{logado ? 'Usuário logado' : 'Usuário deslogado'} </p>
        </>

    )
}