import Image from "next/image";
import useQuiosco from "@/hooks/useQuiosco";
export const Categoria = ({ categoria }) => {
  const { categoriaActual, handleClickCategoria } = useQuiosco();
  const { nombre, icono, id } = categoria;

  return (
    <div
      className={`${
        categoriaActual?.id === id ? "bg-amber-400" : ""
      } flex items-center gap-2 w-full p-4 border hover:bg-amber-400 hover:cursor-pointer`}
    >
      <Image
        width={45}
        height={45}
        src={`/assets/img/icono_${icono}.svg`}
        alt="Imagen icono"
      />
      <button
        type="button"
        className="text-lg font-bold"
        onClick={() => handleClickCategoria(id)}
      >
        {nombre}
      </button>
    </div>
  );
};
