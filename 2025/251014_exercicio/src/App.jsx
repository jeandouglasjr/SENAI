import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TimeDetails from "./pages/TimeDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/time/:id" element={<TimeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
