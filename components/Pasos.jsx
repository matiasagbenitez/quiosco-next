import { useRouter } from "next/router";

const pasos = [
  { paso: 1, nombre: "Menú", url: "/" },
  { paso: 2, nombre: "Resumen", url: "/resumen" },
  { paso: 3, nombre: "Confirmar pedido", url: "/total" },
];
export const Pasos = () => {
  const router = useRouter();

  const calcularProgreso = () => {
    let valor = 0;
    switch (router.pathname) {
        case "/":
            valor = 2.5;
            break;
        case "/resumen":
            valor = 50;
            break;
        case "/total":
            valor = 100;
            break;
        default:
            valor = 0;
            break;
    }
    return `${valor}%`;
  };

  return (
    <>
      <div className="flex justify-between p-5">
        {pasos.map((paso) => {
          return (
            <button
              onClick={() => {
                router.push(paso.url);
              }}
              className="text-xl font-bold"
              key={paso.paso}
            >
              {paso.nombre}
            </button>
          );
        })}
      </div>

      <div className="bg-gray-100 mb-5 mx-5">
        <div
          className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white"
          style={{
            width: calcularProgreso(),
          }}
        ></div>
      </div>
    </>
  );
};
