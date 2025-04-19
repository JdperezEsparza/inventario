import {Router} from "express";
import {methodHTTP as categoriaController } from "../controllers/categoria.controllers.js";

const router = Router();

/* configuramos respuesta desde server  metodo http get */
router.get("/", categoriaController.getCategorias);
router.post("/", categoriaController.postCategorias);

/*ruta que recibe un parametro */
router.get("/:id", categoriaController.getCategory); /*read*/

/*ruta que recibe parametro id de categoria a borrar */
router.delete("/:id", categoriaController.deleteCategory); 



/*Hacemos disponible el router en toda la app */
export default router; 