import axios from "axios";

export const getMenuRequest = async () => {
  /* console.log("Carga"); */
  return await axios.get("http://localhost:4000/menu");
};

export const crearMesuRequest = async (values) => {
  return await axios.post("http://localhost:4000/MenuForm", values);
};

export const updateMenuRequest = async (id, values) => {
  console.log(values);
  return await axios.put(`http://localhost:4000/MenuForm/${id}`, values);
};

export const getMenuRequestUno = async (id) => {
  return await axios.get(`http://localhost:4000/MenuForm/${id}`);
};

/* export const getMesasRequestUna = async (id) => {
  return await axios.get(`http://localhost:4000/mesasManager/${id}`);
}; */

/* export const updateMesasRequest = async (id, values) =>{
  return await axios.put(`http://localhost:4000/mesasManager/${id}`,values);
} */
