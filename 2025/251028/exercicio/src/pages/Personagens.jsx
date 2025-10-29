import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPersonagensById } from "../services/pesquisar";

export default function Pergonagens() {
    const { id } = useParams();
    const [personagens, setPersonagens] = useState(null);
  
    useEffect(() => {
      async function fetchPersonagens() {
        try {
          const data = await getPersonagensById(id);
          setPersonagens(data);
        } catch (error) {
          console.error("Erro ao buscar detalhes:", error);
        }
      }
      fetchPersonagens();
    }, [id]);
  
    if (!personagens) return <p>Carregando...</p>;
  
    return (
        <div style={{ padding: "20px" }}>
          <Link to="/">⬅ Voltar</Link>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <div>
              <h2>Detalhes do Personagem</h2>
              <p><b>Nome:</b> {personagens.name}</p>
              <p><b>Altura:</b> {personagens.height}</p>
              <p><b>Gênero:</b> {personagens.gender}</p>
            </div>
          </div>
        </div>
      );
    }
