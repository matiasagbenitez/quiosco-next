import { formatearDinero } from "@/helpers";
import Image from "next/image";
export const Orden = ({ orden }) => {
  const { id, nombre, total, pedido } = orden;

  const completarOrden = () => {
    console.log("Completando orden");
  };

  return (
    <div className="border p-5 space-y-3">
      <h3 className="text-xl font-black">Orden #{id}</h3>
      <p className="font-semibold">Cliente: {nombre}</p>

      <div>
        {pedido.map((platillo) => (
          <div
            key={platillo.id}
            className="py-2 flex border-b last-of-type:border-0 items-center"
          >
            <div className="w-32">
              <Image
                src={`/assets/img/${platillo.imagen}.jpg`}
                alt={`Imagen platillo {platillo.nombre}`}
                width={100}
                height={100}
              />
            </div>

            <div className="p-3 space-y-2">
              <h4 className="text-xl font-bold text-amber-500">
                {platillo.nombre}
              </h4>
              <p className="font-semibold">Cantidad: {platillo.cantidad}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="md:flex md:items-center md:justify-between my-5">
        <p className="mt-5 font-black text-3xl text-amber-500">
          Total a pagar: {formatearDinero(total)}
        </p>
        <button
          className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:mt-0 px-5 py-2 uppercase font-bold rounded-md"
          type="button"
          onClick={completarOrden}
        >
          Completar orden
        </button>
      </div>
    </div>
  );
};
