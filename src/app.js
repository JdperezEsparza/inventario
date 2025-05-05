import express from "express"; 
import cors from "cors"
import categoriaRoutes from "./routes/categorias.routes.js"
/*asignamos a app toda la funcionalidad para mi server web */
const app = express();

/*setear un puerto a mi web servr */
app.set("port",5000)

/*middleware */
app.use(express.json());
app.use(cors());
/*routes*/
app.use("/api/categorias",categoriaRoutes)

app.get('/',(req,res)=>{

    res.send('REST API EN RENDER WITHOUT DATABASE ENDPOINTS')
})

/*hacemos disponible a mi server app para toda la aplicacion */
export default app;