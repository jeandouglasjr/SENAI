import { useState, useEffect } from "react";
import { searchTimes } from "../services/omdbApi";
import TimeCard from "../components/TimeCard";

export default function Home() {
  const [query, setQuery] = useState("");
  const [times, setTimes] = useState([]);

  const valorTimes = async () => {
    const data = await searchTimes();   
    console.log(data);
  }

  // const handleSearch = async (e) => {
  //   e.preventDefault();
  //   if (!query.trim()) return;
  //   const data = await searchTimes(query);
  //   setTimes(data.Search || []);
  // };

  useEffect(() => {
    const data = searchTimes();  
    const arr = Object.values(data ?? {});
    setTimes(Array.isArray(arr) ? arr : []);
    valorTimes();
  }, []);


    // useEffect(() => {
    //   getMovieDetails(id).then(setMovie);
    // }, [id]);
  
    if (!times) return <p>Carregando...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎬 Busca de Times</h1>

      {/* <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}> */}
        <input
          type="text"
          placeholder="Digite o nome do filme..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: "10px", width: "300px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "10px 20px" }}>
          Buscar
        </button>
      {/* </form> */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {times.map((time) => (
          <TimeCard key={1} time={time} />
        ))}
      </div>
    </div>
  );
}

