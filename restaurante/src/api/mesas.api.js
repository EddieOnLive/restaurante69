import axios from "axios";

export const getMesasRequest = async () => {
    console.log("Carga");
  return await axios.get("http://localhost:4000/mesasManager");
};

/* export const crearMesasRequest = async (values) => {
  return await axios.post("http://localhost:4000/mesasManager", values);
}; */

export const updateMesasRequest = async (id) => {
  console.log("Update");
  return await axios.put(`http://localhost:4000/mesasManager/${id}`);
};

/* export const getMesasRequestUna = async (id) => {
  return await axios.get(`http://localhost:4000/mesasManager/${id}`);
}; */

/* export const updateMesasRequest = async (id, values) =>{
  return await axios.put(`http://localhost:4000/mesasManager/${id}`,values);
} */