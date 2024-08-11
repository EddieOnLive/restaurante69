import { Router } from "express";
import {
  obtenerMesas,
  updateMesasRequest,
} from "../controllers/mesas.controllers.js";

const router = Router();

router.get("/mesasManager", obtenerMesas);
router.put("/mesasManager/:id", updateMesasRequest)
/* 
router.get("/clubes/:id", obtenerUnClub);

router.post("/clubes", crearClub);

router.put("/clubes/:id", actualizarClub);

router.delete("/clubes/:id", borrarClub); */

export default router;
