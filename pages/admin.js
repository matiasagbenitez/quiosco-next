import AdminLayout from "@/layout/AdminLayout";

export default function Admin() {
    return (
        <AdminLayout pagina={'Admin'}>
            <h1 className="text-3xl font-black">
                Panel de Administración
            </h1>
            <p>Administra las órdenes</p>
        </AdminLayout>
    )
}