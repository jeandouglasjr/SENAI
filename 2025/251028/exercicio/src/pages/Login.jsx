import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

export default function Login() {

    const { logado, realizarLogin, realizarLogoff } = useContext(AuthContext);
    //const { deslogado, realizarLogoff } = useContext(AuthContext);

    if (!logado){
        return (
            <>
                <button onClick={realizarLogin}> ENTRAR </button>
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