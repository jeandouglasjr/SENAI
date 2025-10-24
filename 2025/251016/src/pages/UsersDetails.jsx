import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getUserById } from "../services/pesquisar";

export default function UserDetails() {
  const { id } = useParams();
  const [user, setuser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const data = await getUserById(id);
        setUser(data);
      } catch (error) {
        console.error("Erro ao buscar detalhes:", error);
      }
    }
    fetchUser();
  }, [id]);

  if (!user) return <p>Carregando...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">⬅ Voltar</Link>
      <div style={{ display: "flex", marginTop: "20px" }}>
        <div>
          <h2>Detalhes do Personagem</h2>
          <p><b>Nome:</b> {user.nome}</p>
          <p><b>Cargo:</b> {user.cargo}</p>
        </div>
      </div>
    </div>
  );
}
