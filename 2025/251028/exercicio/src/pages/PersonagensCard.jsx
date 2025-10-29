import { Link } from "react-router-dom";

export default function PersonagensCard({ personagens }) {
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
      <h3>{personagens.name}</h3>
      <p>
        {personagens.height} - {personagens.gender}
      </p>
      <Link to={`/personagens/${personagens.id}`} style={{ color: "#007bff" }}>
        Ver Detalhes
      </Link>
    </div>
  );
}
