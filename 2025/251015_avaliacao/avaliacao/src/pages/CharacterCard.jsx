import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "10px",
        background: "#fff",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={character.image}
        alt={character.name}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <h3>{character.name}</h3>
      <p>
        {character.status} - {character.species}
      </p>
      <Link to={`/character/${character.id}`} style={{ color: "#007bff" }}>
        Ver detalhes
      </Link>
    </div>
  );
}
