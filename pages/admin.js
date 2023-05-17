import useSWR from "swr";
import axios from "axios";
import AdminLayout from "@/layout/AdminLayout";
import { Orden } from "@/components/Orden";

export default function Admin() {

    const url = '/api/ordenes';
    const fetcher = (url) => axios.get(url).then((res) => res.data);
    const { data, error, isLoading } = useSWR(url, fetcher);

    return (
        <AdminLayout pagina={'Admin'}>
            <h1 className="text-3xl font-black">
                Panel de Administración
            </h1>
            <p>Administra las órdenes</p>

            {data && data.length ?
                data.map((orden) => (
                    <Orden key={orden.id} orden={orden} />
                ))
                :
                <p>No hay órdenes</p>
            }
        </AdminLayout>
    )
}