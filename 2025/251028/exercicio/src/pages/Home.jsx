import { useState } from "react";
import { getPersonagens } from "../services/pesquisar";
import PersonagensCard from "./PersonagensCard";

export default function Home() {
  const [query, setQuery] = useState("");
  const [personagens, setPersonagens] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    //if (!query.trim()) return;

    setLoading(true);
    setNotFound(false);

    try {
      const data = await getPersonagens(query);

      if (data.results && data.results.length > 0) {
        setPersonagens(data.results);
        setNotFound(false);
      } else {
        setPersonagens([]);
        setNotFound(true);
      }
    } catch (error) {
      console.error("Erro ao buscar personagem:", error);
      setPersonagens([]);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Busca de Personagens</h1>

      <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Digite um nome..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: "10px", width: "300px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "10px 20px" }}>
          Pesquisar
        </button>
      </form>

      {loading && <p>Carregando...</p>}

      {notFound && !loading && (
        <p style={{ color: "red", fontWeight: "bold" }}>Resultado não encontrado.</p>
      )}

      {!loading && !notFound && personagens.length > 0 && (
        <center><div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {personagens.map((char) => (
            <PersonagensCard key={char.id} personagens={char} />
          ))}
        </div></center>
      )}
    </div>
  );
}
