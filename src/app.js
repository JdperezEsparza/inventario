import express from "express"; 
import categoriaRoutes from "./routes/categorias.routes.js"



const app = express();

app.set("port",5000)

/*routes*/
app.use("/api/categorias",categoriaRoutes)

/*hacemos disponible a mi server app para toda la aplicacion */
export default app;