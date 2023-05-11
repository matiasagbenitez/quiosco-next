import Image from "next/image";
import { formatearDinero } from "@/helpers";
import useQuiosco from "@/hooks/useQuiosco";

export const Producto = ({ producto }) => {
  const { handleClickProducto, handleSetModal } = useQuiosco();
  const { nombre, precio, imagen } = producto;
  return (
    <div className="border p-2">
      <Image
        src={`/assets/img/${imagen}.jpg`}
        width={300}
        height={300}
        alt={`Imagen de ${nombre}`}
      />

      <div className="p-3">
        <h3 className="text-xl font-bold">{nombre}</h3>
        <p className="mt-2 font-black text-3xl text-amber-500">
          {formatearDinero(precio)}
        </p>

        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-3 p-2 uppercase font-bold"
          onClick={() => {
            handleSetModal();
            handleClickProducto(producto);
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
