import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


export default function MapsDetails() {
  const { code } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    async function fetchCountry() {
      try {
        const res = await axios.get(
          `https://restcountries.com/v3.1/alpha/${code}?fields=name,cca3,flags,region,capital,population,languages`
        );
        setCountry(res.data); // ✅ aqui é um objeto único, não array
      } catch (error) {
        console.error("Erro ao buscar país:", error);
      }
    }
    fetchCountry();
  }, [code]);

  if (!country) return <p>Carregando...</p>;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <Link to="/">← Voltar</Link>
      <h1>{country.name.common}</h1>
      <img src={country.flags.png} alt={country.name.common} width="300" />
      <p>Capital: {country.capital?.[0]}</p>
      <p>Região: {country.region}</p>
      <p>População: {country.population.toLocaleString("pt-BR")}</p>
      <p>
        Línguas: {country.languages && Object.values(country.languages).join(", ")}
      </p>
    </div>
  );
}
