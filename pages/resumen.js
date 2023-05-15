import Layout from "@/layout/Layout";
import useQuiosco from "@/hooks/useQuiosco";
import { ResumenProducto } from "@/components/ResumenProducto";

export default function Resumen() {

    const { pedido } = useQuiosco();

    return (
        <Layout pagina='Resumen'>
            <h1 className="text-3xl font-black">
                Resumen
            </h1>
            <p>
                Revisa tu pedido
            </p>

            {
                pedido.length === 0 ? (
                    <p className="mt-5 text-center text-2xl">
                        No hay productos en el pedido.
                    </p>
                ) : (
                    pedido.map(producto => (
                        <ResumenProducto key={producto.id} producto={producto} />
                    ))
                )
            }
        </Layout>
    )
}