import axios from "axios";

export const getInicioRequestUno = async (usuario, password) => {
  return await axios.get(`http://localhost:4000/inicio/${usuario}/${password}`);
};
