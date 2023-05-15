import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [producto, setProducto] = useState({});
  const [modal, setModal] = useState(false);
  const [pedido, setPedido] = useState([]);

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

  const handleClickCategoria = (id) => {
    const categoria = categorias.find(categoria => categoria.id === id);
    setCategoriaActual(categoria);
  };

  const handleClickProducto = (producto) => {
    setProducto(producto);
  };

  const handleSetModal = () => {
    setModal(!modal);
  };

  const handleAgregarPedido = ({ categoriaId, imagen, ...producto }) => {
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
  }}>
    {children}
  </QuioscoContext.Provider>);
};

export { QuioscoProvider };
export default QuioscoContext;
