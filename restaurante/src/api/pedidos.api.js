import axios from "axios";

export const getPedidosRequest = async () => {
  /* console.log("Hola"); */
  return await axios.get("http://localhost:4000/pedidospage");
};
