import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Sb_imagen from "./pages/subir_imagen";
import Service from "./pages/service";
import Contact from "./pages/contacto";
export default function App() {

  return (
    <Router>
      <Routes basename="/Validador-Imagen">
        <Route path="/Validador-Imagen/" element={<Layout />}>
          <Route index element={<Sb_imagen />} />
          <Route path="/Validador-Imagen/services" element={<Service />} />
          <Route path="/Validador-Imagen/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
