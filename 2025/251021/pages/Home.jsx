import { useState, useEffect } from "react";
import { searchMaps, getAllCountries } from "../services/pesquisar";
import MapsCard from "../pages/MapsCard";
import "../src/index.css";

export default function Home() {
  const [query, setQuery] = useState("");
  const [maps, setMaps] = useState([]);
  const [filteredMaps, setFilteredMaps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    async function loadCountries() {
      setLoading(true);
      const data = await getAllCountries();
      setMaps(data);
      setFilteredMaps(data);
      setLoading(false);
    }
    loadCountries();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setNotFound(false);

    let data = [];

    if (!query.trim()) {
      // Input vazio → retorna todos os países
      data = await getAllCountries();
    } else {
      data = await searchMaps(query);
    }

    if (data && data.length > 0) {
      setMaps(data);
      setFilteredMaps(data);
      setNotFound(false);
      setSelectedRegion("all"); // reseta filtro
    } else {
      setMaps([]);
      setFilteredMaps([]);
      setNotFound(true);
    }

    setLoading(false);
  };

  const handleFilterRegion = (region) => {
    setSelectedRegion(region);
    if (region === "all") {
      setFilteredMaps(maps);
    } else {
      const filtered = maps.filter(
        (country) => country.region?.toLowerCase() === region.toLowerCase()
      );
      setFilteredMaps(filtered);
    }
  };

  const handleSort = () => {
    const sorted = [...filteredMaps].sort((a, b) => {
      const nameA = a.name.common.toLowerCase();
      const nameB = b.name.common.toLowerCase();
      return sortOrder === "asc"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });

    setFilteredMaps(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Explorador de Países</h1>

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Digite o nome ou código do país..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          🔍 Pesquisar
        </button>
      </form>

      <div className="filter-bar">
        <select
          value={selectedRegion}
          onChange={(e) => handleFilterRegion(e.target.value)}
          className="filter-select"
        >
          <option value="all">🌎 Todos os Continentes</option>
          <option value="Africa">África</option>
          <option value="Americas">Américas</option>
          <option value="Asia">Ásia</option>
          <option value="Europe">Europa</option>
          <option value="Oceania">Oceania</option>
          <option value="Antarctic">Antártida</option>
        </select>

        <button type="button" onClick={handleSort} className="sort-button">
          {sortOrder === "asc" ? "🔤 Ordem A → Z" : "🔡 Ordem Z → A"}
        </button>
      </div>

      {loading && <p className="loading-text">Carregando países...</p>}
      {notFound && !loading && (
        <p className="error-text">Nenhum país encontrado.</p>
      )}

      {!loading && !notFound && filteredMaps.length > 0 && (
        <div className="countries-grid">
          {filteredMaps.map((country) => (
            <MapsCard key={country.cca3} maps={country} />
          ))}
        </div>
      )}
    </div>
  );
}
