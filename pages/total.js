import { useEffect, useCallback } from "react";
import Layout from "@/layout/Layout";
import useQuiosco from "@/hooks/useQuiosco";
import { formatearDinero } from "@/helpers";

export default function Total() {

    const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco();

    const comprobarPedido = useCallback(() => {
        return pedido.length === 0 || nombre.trim() === '' || nombre.length < 3;
    }, [pedido, nombre]);

    useEffect(() => {
        comprobarPedido();
    }, [pedido, comprobarPedido]);

    return (
        <Layout pagina='Total' >
            <h1 className="text-3xl font-black">
                Total y confirmar pedido
            </h1>
            <p>
                Confirma tu pedido a continuación
            </p>

            <form onSubmit={colocarOrden}>
                <div className="mt-5">
                    <label htmlFor="nombre" className="block uppercase text-slate-800 font-bold">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        placeholder="Ingresa tu nombre"
                        className="bg-gray-200 w-full lg:w-1/3 p-2 rounded-md mt-3"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>

                <div className="mt-10">
                    <p className="text-2xl">Total a pagar: {''}
                        <span className="font-bold">
                            {formatearDinero(total)}
                        </span>
                    </p>
                </div>

                <div className="mt-5">
                    <input
                        type="submit"
                        value="Confirmar pedido"
                        className=
                        {` ${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-900'} w-full lg:w-auto px-5 py-2 rounded-md text-white uppercase font-bold cursor-pointer
                        `}
                        disabled={comprobarPedido()}
                    />
                </div>
            </form>
        </Layout>
    )
}