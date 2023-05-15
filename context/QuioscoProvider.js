import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [producto, setProducto] = useState({});
  const [modal, setModal] = useState(false);
  const [pedido, setPedido] = useState([]);
  const [total, setTotal] = useState(0);
  const [nombre, setNombre] = useState("");

  const router = useRouter();

  const obtenerCategorias = async () => {
    const { data } = await axios("/api/categorias");
    setCategorias(data);
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  useEffect(() => {
    if (categorias.length > 0) {
      setCategoriaActual(categorias[0]);
    }
  }, [categorias]);

  useEffect(() => {
    const calcularTotal = () => {
      const total = pedido.reduce((total, producto) => {
        return total + (producto.precio * producto.cantidad);
      }, 0);
      setTotal(total);
    };
    calcularTotal();
  }, [pedido]);

  const handleClickCategoria = (id) => {
    const categoria = categorias.find(categoria => categoria.id === id);
    setCategoriaActual(categoria);
    router.push('/');
  };

  const handleClickProducto = (producto) => {
    setProducto(producto);
  };

  const handleSetModal = () => {
    setModal(!modal);
  };

  const handleAgregarPedido = ({ categoriaId, ...producto }) => {
    if (pedido.some(productoState => productoState.id === producto.id)) {
      const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState);
      setPedido(pedidoActualizado);
      toast.success("¡Pedido actualizado!");
    } else {
      setPedido([...pedido, producto]);
      toast.success("¡Producto agregado!");
    }

    setModal(false);
  }

  const handleEditarCantidades = (id) => {
    const productoActualizar = pedido.filter(producto => producto.id === id)[0];
    setProducto(productoActualizar);
    setModal(!modal);
  }

  const handleEliminarProducto = (id) => {
    const pedidoActualizado = pedido.filter(producto => producto.id !== id);
    setPedido(pedidoActualizado);
    toast.success("¡Producto eliminado!");
  }

  const colocarOrden = async (e) => {
    e.preventDefault();
    console.log('colocando orden');
}

  return (<QuioscoContext.Provider value={{
    categorias,
    categoriaActual,
    handleClickCategoria,
    producto,
    handleClickProducto,
    modal,
    handleSetModal,
    handleAgregarPedido,
    pedido,
    handleEditarCantidades,
    handleEliminarProducto,
    nombre,
    setNombre,
    colocarOrden,
    total
  }}>
    {children}
  </QuioscoContext.Provider>);
};

export { QuioscoProvider };
export default QuioscoContext;
