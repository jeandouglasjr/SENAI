import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MapsDetails from "../pages/MapsDetails";
import "./app.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:code" element={<MapsDetails />} /> {/* ✅ rota dinâmica */}
      </Routes>
    </BrowserRouter>
  );
}
