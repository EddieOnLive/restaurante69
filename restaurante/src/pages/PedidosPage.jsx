import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPedidosRequest } from "../api/pedidos.api";

function PedidosPage() {
  /* navigate = useNavigate(); */
  const [pedidos, setPedidos] = useState([]);

  const cargarPedidos = async () => {
    try {
      const resp = await getPedidosRequest();
      setPedidos(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cargarPedidos();
  }, []);
  return (
    <>
      <div className="columns-2 mt-4 flex">
        {pedidos.map((pedido) => (
          <div
            className="bg-zinc-700 rounded-md mx-4 my-4 py-4 px-4 col-2 w-44"
            key={pedido.idPedido}
            >
            <h2 className="text-xl font-bold text-white">{pedido.tituloMenu}, {pedido.cantidadPedido}</h2>
            <h2 className="font-bold text-white">{pedido.nombreUsuario}</h2>
            <h2 className="font-bold text-white">{pedido.costoMenu}</h2>
            <div className="flex gap-1 mt-5 justify-center">
              <button
                className="bg-red-500 px-2 py-1 text-white rounded-md"
                onClick={() => {
                  borrarCategoria(categoria.id);
                }}
              >
                Entregar
              </button>
            </div>
          </div>
        ))}
        </div>
    </>
  );
}

export default PedidosPage;
