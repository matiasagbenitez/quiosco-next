import Image from "next/image";
import useQuiosco from "@/hooks/useQuiosco";
import { Categoria } from "./Categoria";

export const Sidebar = () => {
  const { categorias } = useQuiosco();
  return (
    <>
      <Image width={200} height={50} src="/assets/img/logo.svg" alt="Logo" className="mx-auto mt-3" />

      <nav className="mt-5">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>
    </>
  );
};
