import { Router } from "express";
import {
  crearMenu,
  obtenerMenu,
  updateMenuRequest,
} from "../controllers/menu.controllers.js";

const router = Router();

router.get("/menu", obtenerMenu);
router.put("/menu/:id", updateMenuRequest);
router.post("/MenuForm/", crearMenu)
/* 
router.get("/clubes/:id", obtenerUnClub);

router.post("/clubes", crearClub);

router.put("/clubes/:id", actualizarClub);

router.delete("/clubes/:id", borrarClub); */

export default router;
