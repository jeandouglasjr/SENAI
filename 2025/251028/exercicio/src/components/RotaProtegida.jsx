import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function RotaProtegida({ elemento }) {
    const { logado } = useContext(AuthContext)

    if(!logado) {
        return <Navigate to="/login" />
    }

    return elemento
}