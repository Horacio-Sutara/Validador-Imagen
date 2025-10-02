import { Link } from "react-router-dom";
import ButtonHeader from "../components/button_header";

function Header() {
  const baseStyles = "flex flex-col items-center font-semibold min-w-50 p-2 rounded-lg gap-0.5";
  const activeStyles = "text-white bg-green-700 hover:bg-green-700/90";
  const inactiveStyles = "hover:bg-green-700/80 hover:text-white";


  return (
    <header className="min-w-3xs bg-[#332e1d] border-r border-green-700 text-white">
      <div className="flex flex-col items-center">
        
        {/* Logo o título */}
        <Link to="/Validador-Imagen/" className="text-2xl font-bold">
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
            ruta="/validador-imagen/" 
          />
          <ButtonHeader 
            icon_name="image" 
            titulo="Servicios" 
            descripcion="Mostrar servicios existentes" 
            ruta="/validador-imagen/services" 
          />
          
          <ButtonHeader 
            icon_name="phone" 
            titulo="Contacto" 
            descripcion="Descubra como encontrarnos" 
            ruta="/validador-imagen/contact" 
          />
        </nav>
      </div>
    </header>
  );
}

export default Header;
