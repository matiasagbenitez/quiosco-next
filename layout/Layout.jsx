import { Sidebar } from "@/components/Sidebar";
import Head from "next/head";

export default function Home({ children, pagina }) {
  return (
    <>
      <Head>
        <title>FreshCoffee - {pagina}</title>
        <meta name="description" content="Quiosco de Café" />
      </Head>

      <div className="md:flex">
        <aside className="md:w-2/12">
          <Sidebar />
        </aside>
        <main className="md:w-10/12 h-screen overflow-y-scroll">
          <div className="p-5">{children}</div>
        </main>
      </div>
    </>
  );
}
