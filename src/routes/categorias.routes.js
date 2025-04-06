import {Router} from "express";
import {methodHTTP as categoriaController } from "../controllers/categoria.controllers.js";

const router = Router();

/* configuramos respuesta desde server  metodo http get */
router.get("/", categoriaController.getCategorias)



/*Hacemos disponible el router en toda la app */
export default router; 