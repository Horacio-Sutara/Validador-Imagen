import { Link, NavLink } from "react-router-dom";
import sprite from '../assets/sprite.svg';
import ButtonHeader from "../components/button_header";

function Header() {
  const baseStyles = "flex flex-col items-center font-semibold min-w-50 p-2 rounded-lg gap-0.5";
  const activeStyles = "text-white bg-green-700 hover:bg-green-700/90";
  const inactiveStyles = "hover:bg-green-700/80 hover:text-white";


  return (
    <header className="min-w-3xs bg-white border-r border-green-700 ">
      <div className="flex flex-col items-center">
        
        {/* Logo o título */}
        <Link to="/Validador-Imagen/" className="text-2xl font-bold">
          Trabajos_Lenguaje
        </Link>
        <p className="min-w-full"> Horacio Sutara</p>

        {/* Menú de navegación */}
        <nav className="flex flex-col 
        min-h-screen min-w-full 
        items-center mt-4 gap-10">
          <ButtonHeader 
            icon_name="upload" 
            titulo="Validar imagen" 
            descripcion="Agregue nuevas imagenes" 
            ruta="/validador-imagen/" 
          />
          <NavLink 
            to="/Validador-Imagen/services" 
            className={({ isActive }) => {
              return `${baseStyles} ${isActive ? activeStyles : inactiveStyles}`;
            }}
          >
            <h1 className="min-w-full flex gap-2 items-center">
                <svg className="size-5">
                  <use href={`${sprite}#image`} />
                </svg>

              Servicios
            </h1>
            <p className="font-light text-xs"> Agregue nuevas imagenes</p>
          </NavLink>
          
          <NavLink 
            to="/Validador-Imagen/contact" 
            className={({ isActive }) => {
              return `${baseStyles} ${isActive ? activeStyles : inactiveStyles}`;
            }}
          >
            <h1 className="min-w-full flex gap-2 items-center">
                <svg className="size-5">
                  <use href={`${sprite}#phone`} />
                </svg>

              Contacto
            </h1>
            <p className="font-light text-xs"> Agregue nuevas imagenes</p>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
