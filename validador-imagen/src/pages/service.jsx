import img1 from "../assets/habitacion_1.jpg";
import img2 from "../assets/habitacion_2.jpg";
import img3 from "../assets/habitacion_3.jpg";
import img4 from "../assets/habitacion_4.jpg";

export default function App() {
  const habitaciones =[
    {
      id: 1,
      nombre: "WhiteRoom",
      tipo: "Standard",
      descripcion: "Habitacion para parejas",
      capacidad: 2,
      precio: 30,
      img: img1
    },
    {
      id: 2,
      nombre: "TropicalRoom",
      tipo: "Standard",
      descripcion: "Habitacion Familiar",
      capacidad: 4,
      precio: 55,
      img: img2
    },
    {
      id: 3,
      nombre: "GlassRoom",
      tipo: "Suite",
      descripcion: "Habitacion para para parejas",
      capacidad: 2,
      precio: 45,
      img: img3
    },
    {
      id: 4,
      nombre: "SmallRoom",
      tipo: "Economic",
      descripcion: "Habitacion para parejas",
      capacidad: 2,
      precio: 20,
      img: img4
    }
  ];
  return (
    <>
        <h1 className="flex justify-center min-w-full font-bold text-5xl p-3">
            Nuestros Servicios
        </h1>
        <section className="grid grid-cols-2  gap-10 p-10 m-10 place-items-center">
            {habitaciones.map((hab)=>(
              <div key={hab.id} className="border-emerald-500 border-4 w-md rounded-xl p-4 shadow bg-[#efeba9] ">
                <img src={hab.img} alt={hab.nombre} className="w-full h-48 object-cover rounded-md" loading="lazy" />
                <h2 className="text-xl font-bold mt-2">{hab.nombre}</h2>
                <p>{hab.descripcion}</p>

                <p className="font-semibold mt-1">${hab.precio} USD / noche</p>
                <p className="font-semibold mt-1">Tipo: {hab.tipo}</p>

              </div>
              )
            )
            }
        </section>
    </>
  );
}
