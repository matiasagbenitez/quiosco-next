import Head from "next/head";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import useQuiosco from "@/hooks/useQuiosco";
import { ModalProducto } from "@/components/ModalProducto";
import { Sidebar } from "@/components/Sidebar";

import "react-toastify/dist/ReactToastify.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    width: "50%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#__next");

export default function Home({ children, pagina }) {
  const { modal } = useQuiosco();
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

      {modal && (
        <Modal isOpen={modal} style={customStyles}>
          <ModalProducto />
        </Modal>
      )}

      <ToastContainer />
    </>
  );
}
