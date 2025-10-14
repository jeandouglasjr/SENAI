import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
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
      <Link to={`/movie/${movie.imdbID}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300"}
          alt={movie.Title}
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
        />
        <div style={{ padding: "10px" }}>
          <h4>{movie.Title}</h4>
          <small>{movie.Year}</small>
        </div>
      </Link>
    </div>
  );
}
