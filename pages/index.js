import Layout from "../layout/Layout";
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
    </Layout >
  )
}