import { useNavigate } from "react-router-dom";

export default function MapsCard({ maps }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/details/${maps.cca3}`)}
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        cursor: "pointer",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={maps.flags?.png || "https://via.placeholder.com/300x200?text=Sem+Bandeira"}
        alt={maps.name?.common || "Sem nome"}
        style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }}
      />
      <h3>{maps.name?.common || "Sem nome"}</h3>
      <p>Região: {maps.region || "—"}</p>
      <p>Capital: {maps.capital?.[0] || "—"}</p>
      <p>População: {maps.population?.toLocaleString("pt-BR") || "—"}</p>
    </div>
  );
}
