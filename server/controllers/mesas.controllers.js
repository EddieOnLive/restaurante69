import { pool } from "../db.js";

export const obtenerMesas = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM mesas ORDER BY idMesa ASC"
    );
    /* console.log(result) */
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateMesasRequest = async (req, res) => {
  try {
    const { reservado } = 0;
    const result = await pool.query(
      "UPDATE mesas SET reservadoMesas=?  WHERE idMesa = ?",
      [reservado, req.params.id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const crearMesas = async (req, res) => {
  try {
    const { sillas } = req.body;
    let reservado = 0;
    const [result] = await pool.query(
      "INSERT INTO mesas (sillasMesas, reservadoMesas) VALUES (?, ?)",
      [sillas, reservado]
    );
    res.json({ id: result.insertId, sillas, reservado });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const borrarMesa = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM mesas WHERE idMesa = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Mesa no Encontrada" });
    }

    return res.sendStatus(204);
  } catch (error) {
    /* return res.error(500).json({ message: error.message }); */
    console.log(error);
  }
};

/* 
export const obtenerUnClub = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM clubs WHERE id = ?", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res.status(404).json({ message: "Club no encontrado" });
    }
    res.json(result[0]);
  } catch (error) {
    return res.error(500).json({ message: error.message });
  }
};

export const crearClub = async (req, res) => {
  try {
    const { descripcion, ubicacion } = req.body;
    const [result] = await pool.query(
      "INSERT INTO clubs (descripcion, ubicacion) VALUES (?, ?)",
      [descripcion, ubicacion]
    );
    res.json({ id: result.insertId, descripcion, ubicacion });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  //! No descomentar
  //console.log(result);
  //res.send("Creando Reglas");
};

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
