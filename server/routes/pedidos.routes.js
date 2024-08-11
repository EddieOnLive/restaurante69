import { Router } from "express";
import { obtenerPedidos } from "../controllers/pedidos.controllers.js";

const router = Router();

router.get("/pedidospage", obtenerPedidos)

export default router;