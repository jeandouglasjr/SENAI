import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetails } from "../services/omdbApi";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <p>Carregando...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">⬅ Voltar</Link>
      <div style={{ display: "flex", marginTop: "20px" }}>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"}
          alt={movie.Title}
          style={{ width: "300px", marginRight: "20px" }}
        />
        <div>
          <h2>{movie.Title}</h2>
          <p><b>Ano:</b> {movie.Year}</p>
          <p><b>Gênero:</b> {movie.Genre}</p>
          <p><b>Diretor:</b> {movie.Director}</p>
          <p><b>Elenco:</b> {movie.Actors}</p>
          <p><b>Enredo:</b> {movie.Plot}</p>
        </div>
      </div>
    </div>
  );
}
