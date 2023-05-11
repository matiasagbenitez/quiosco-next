import Layout from "../layout/Layout";
import { Producto } from "@/components/Producto";
import useQuiosco from "@/hooks/useQuiosco";

export default function Home() {
  const { categoriaActual } = useQuiosco();
  return (
    <Layout pagina={categoriaActual?.nombre}>
      <h1 className="text-3xl font-black">
        {categoriaActual?.nombre}
      </h1>
      <p>
        Elige y personaliza tu pedido a continuación
      </p>

      <div className="grid gap-2 grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
      {categoriaActual?.productos?.map(producto => (
        <Producto key={producto.id} producto={producto} />
      ))}
      </div>
    </Layout >
  )
}