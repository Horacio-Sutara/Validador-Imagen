import sprite from '../assets/sprite.svg';
import { NavLink } from 'react-router-dom';

function ButtonHeader({ icon_name, titulo, descripcion, ruta }) {
  const baseStyles = "flex flex-col items-center font-semibold min-w-50 p-2 rounded-lg gap-0.5";
  const activeStyles = "bg-[#5ac7aa] hover:bg-[#5ac7aa]/80";
  const inactiveStyles = "hover:bg-[#5ac7aa]/50";

  return (
    <NavLink 
      to={ruta} 
      end
      className={({ isActive }) => `${baseStyles} ${isActive ? activeStyles : inactiveStyles}`}
    >
      <h1 className="min-w-full flex gap-2 items-center">
        <svg className="size-5">
          <use href={`${sprite}#${icon_name}`} />
        </svg>
        {titulo}
      </h1>
      <p className="font-light text-xs">{descripcion}</p>
    </NavLink>
  );
}

export default ButtonHeader;
