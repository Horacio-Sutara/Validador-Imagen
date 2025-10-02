import { Link } from "react-router-dom";
import ButtonHeader from "../components/button_header";

function Header() {


  return (
    <header className="min-w-3xs bg-[#332e1d] border-r border-green-700 text-white">
      <div className="flex flex-col items-center m-5">
        
        {/* Logo o título */}
        <Link to="/" className="text-2xl font-bold">
          Trabajos_Lenguaje
        </Link>
        <p className="min-w-full"> Horacio Sutara</p>

        {/* Menú de navegación */}
        <nav className="flex flex-col 
        min-w-full 
        items-center mt-4 gap-10">
          <ButtonHeader 
            icon_name="upload" 
            titulo="Validar imagen" 
            descripcion="Agregue nuevas imagenes" 
            ruta="/" 
          />
          <ButtonHeader 
            icon_name="bed" 
            titulo="Servicios" 
            descripcion="Mostrar servicios existentes" 
            ruta="/services" 
          />
          
          <ButtonHeader 
            icon_name="phone" 
            titulo="Contacto" 
            descripcion="Descubra como encontrarnos" 
            ruta="/contact" 
          />
          <ButtonHeader 
            icon_name="money" 
            titulo="API Cotización" 
            descripcion="Conversion de su moneda local" 
            ruta="/api" 
          />
        </nav>
      </div>
    </header>
  );
}

export default Header;
