import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="toolbar">
        <ul className="secciones"> 
            <p><Link to="/Validador-Imagen/">Inicio</Link></p>
             { /* Apartado de "Sobre Nosotros" deshabilitado temporalmente
             <p><Link to="/Validador-Imagen/about">Sobre Nosotros</Link></p>
             */
             }
            <p><Link to="/Validador-Imagen/contact">Contacto</Link></p>
        </ul>
    </nav>
  );
}

export default Header;
