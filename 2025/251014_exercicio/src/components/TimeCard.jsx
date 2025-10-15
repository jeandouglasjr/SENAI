import { Link } from "react-router-dom";

export default function TimeCard({ time }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        overflow: "hidden",
        textAlign: "center",
        width: "200px",
        background: "#fff",
      }}
    >
      <Link to={`/time/${time.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        {/* <img
          src={time.id !== "N/A" ? time.nome_fantasia : ""}
          alt={time.Title}
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
        /> */}
        <div style={{ padding: "10px" }}>
          <h4>{time.nome_fantasia}</h4>
          {/* <small>{time.Year}</small> */}
        </div>
      </Link>
    </div>
  );
}