import { pool } from "../db.js";

export const obtenerPedidos = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT m.idMenu, m.tituloMenu, m.costoMenu, p.idPedido, p.cantidadPedido, p.estadoPedido, u.nombreUsuario FROM pedidos p INNER JOIN menu AS m ON p.idMenuEnPedido = m.idMenu INNER JOIN usuarios AS u ON p.idUsuarioEnPedido = u.idUsuario ORDER BY p.estadoPedido DESC"
    );
    /* console.log(result) */
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
