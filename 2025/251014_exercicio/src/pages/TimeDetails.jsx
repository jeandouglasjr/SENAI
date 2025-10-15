import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getTimeDetails } from "../services/omdbApi";

export default function TimeDetails() {
  const { id } = useParams();
  const [time, setTime] = useState(null);

  useEffect(() => {
    getTimeDetails(id).then(setTime);
  }, [id]);

  if (!time) return <p>Carregando...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">⬅ Voltar</Link>
      <div style={{ display: "flex", marginTop: "20px" }}>
        <img
          src={time.Poster !== "N/A" ? time.Poster : "https://via.placeholder.com/300x450"}
          alt={time.Title}
          style={{ width: "300px", marginRight: "20px" }}
        />
        <div>
          <h2>{time.Title}</h2>
          <p><b>Ano:</b> {time.Year}</p>
          <p><b>Gênero:</b> {time.Genre}</p>
          <p><b>Diretor:</b> {time.Director}</p>
          <p><b>Elenco:</b> {time.Actors}</p>
          <p><b>Enredo:</b> {time.Plot}</p>
        </div>
      </div>
    </div>
  );
}
