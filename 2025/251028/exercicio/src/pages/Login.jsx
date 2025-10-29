import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

export default function Login() {

    const { logado, realizarLogin } = useContext(AuthContext);
    const { deslogado, realizarLogoff } = useContext(AuthContext);

    if (!logado){
        return (
            <>
                <button onClick={realizarLogin}> LOGAR </button>
                <p>{logado ? 'Usuário logado' : 'Usuário não logado'} </p>
            </>
        )
    }
    else{
        return (
            <>
                <button onClick={realizarLogoff}> SAIR </button>
                <p>{logado ? 'Usuário logado' : 'Usuário não logado'} </p>
            </>
        )
    }
}