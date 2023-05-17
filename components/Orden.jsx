import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";
import { formatearDinero } from "@/helpers";

export const Orden = ({ orden }) => {
  const { id, nombre, total, pedido } = orden;

  const completarOrden = async () => {
    try {
      await axios.post(`api/ordenes/${id}`);
      toast.success("¡Orden completada!");
    } catch (error) {
      toast.error("¡Hubo un error!");
    }
  };

  return (
    <div className="border px-5 py-3 space-y-3">
      <h3 className="text-xl font-black uppercase">Orden #{id}</h3>
      <p className="font-semibold">Cliente: {nombre}</p>

      <div>
        {pedido.map((platillo) => (
          <div
            key={platillo.id}
            className="py-2 flex border-b last-of-type:border-0 items-center"
          >
            <div className="w-24">
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

      <div className="md:flex md:items-center justify-center md:justify-between">
        <p className="font-black text-2xl text-amber-500 uppercase">
          Total: {""}
          <span className="text-3xl">{formatearDinero(total)}</span>
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
