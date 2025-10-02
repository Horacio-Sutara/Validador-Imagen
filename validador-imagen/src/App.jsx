import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Sb_imagen from "./pages/subir_imagen";
import Service from "./pages/service";
import Contact from "./pages/contacto";
export default function App() {

  return (
    <Router basename="/Validador-Imagen/">
      <Routes >
        <Route path='/' element={<Layout />}>
          <Route index element={<Sb_imagen />} />
          <Route path='services' element={<Service />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}