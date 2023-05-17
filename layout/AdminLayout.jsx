import Head from "next/head";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLayout({ children, pagina }) {
  return (
    <>
      <Head>
        <title>Café - {pagina}</title>
        <meta name="description" content="Quiosco de Café" />
      </Head>

      <div className="md:flex">
            <aside className="md:w-2/12">
                <div className="flex items-center justify-center mt-3">
                <Image
                    width={200}
                    height={50}
                    src="/assets/img/logo.svg"
                    alt="imagen logotipo"
                />
                </div>
            </aside>

            <main className="md:w-10/12 h-screen overflow-y-scroll">
                <div className="p-5">
                    {children}
                </div>
            </main>
      </div>
      <ToastContainer />
    </>
  );
}