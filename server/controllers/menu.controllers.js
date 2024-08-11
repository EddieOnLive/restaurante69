import { pool } from "../db.js";

export const obtenerMenu = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM menu ORDER BY idMenu ASC");
    /* console.log(result) */
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateMenuRequest = async (req, res) => {
  try {
    const { titulo, descripcion, costo, imagen } = req.body;
    const result = await pool.query(
      "UPDATE menu SET tituloMenu=?, descripcionMenu=?, costoMenu=?, imagenMenu=? WHERE idMenu=?",
      [titulo, descripcion, costo, imagen, req.params.id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const crearMenu = async (req, res) => {
  try {
    const { titulo, descripcion, costo, imagen } = req.body;
    const [result] = await pool.query(
      "INSERT INTO menu (tituloMenu, descripcionMenu, costoMenu, imagenMenu) VALUES (?, ?, ?, ?)",
      [titulo, descripcion, costo, imagen]
    );
    res.json({ id: result.insertId, titulo, descripcion, costo, imagen });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const obtenerMenuUno = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM menu WHERE idMenu = ?", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res.status(404).json({ message: "Menu no encontrado" });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* 
export const actualizarClub = async (req, res) => {
  try {
    const { descripcion, ubicacion } = req.body;
    const result = await pool.query("UPDATE clubs SET descripcion=?, ubicacion=?  WHERE id = ?", [
      descripcion,ubicacion,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const borrarClub = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM clubs WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Club no Encontrado" });
    }

    return res.sendStatus(204);
  } catch (error) {
    return res.error(500).json({ message: error.message });
  }
};


 */
