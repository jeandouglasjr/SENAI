import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCharacterById } from "../services/pesquisar";

export default function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    async function fetchCharacter() {
      try {
        const data = await getCharacterById(id);
        setCharacter(data);
      } catch (error) {
        console.error("Erro ao buscar detalhes:", error);
      }
    }
    fetchCharacter();
  }, [id]);

  if (!character) return <p>Carregando...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">⬅ Voltar</Link>
      <div style={{ display: "flex", marginTop: "20px" }}>
        <img
          src={character.image}
          alt={character.name}
          style={{ width: "300px", marginRight: "20px", borderRadius: "10px" }}
        />
        <div>
          <h2>Detalhes do Personagem</h2>
          <p><b>Nome:</b> {character.name}</p>
          <p><b>Status:</b> {character.status}</p>
          <p><b>Espécie:</b> {character.species}</p>

          <h3>Episódios:</h3>
          <ul>
            {character.episode.map((ep, i) => (
              <li key={i}>{ep}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
