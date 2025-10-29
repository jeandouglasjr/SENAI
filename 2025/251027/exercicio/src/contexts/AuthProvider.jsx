import { useState } from 'react';
import { AuthContext } from "./AuthContext.jsx";

export default function AuthProvider({ children }) {
    const [logado, setLogado] = useState(false)

    function realizarLogin() {
        setLogado(true)
    }

    return (
        <>
            <AuthContext value={{logado, realizarLogin}}>
                {children}
            </AuthContext>
        </>
    )
}