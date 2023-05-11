import { useState, useEffect, createContext } from "react";
import axios from "axios";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});

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

  const handleClickCategoria  = (id) => {
    const categoria = categorias.find(categoria => categoria.id === id);
    setCategoriaActual(categoria);
  };

  return (<QuioscoContext.Provider value={{
    categorias,
    categoriaActual,
    handleClickCategoria
  }}>
    {children}
  </QuioscoContext.Provider>);
};

export { QuioscoProvider };
export default QuioscoContext;
