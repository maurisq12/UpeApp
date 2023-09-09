import express from "express";
import config from './config.js'
import estudiantesRoutes from './routes/estudiantes.routes.js'
import cubiculosRoutes from './routes/cubiculos.routes.js'
import asignacionesRoutes from './routes/asignaciones.routes.js'
import correosRoutes from './routes/correos.routes.js'
import loginRoutes from './routes/login.routes.js'


const app = express()


// configuración 
app.set('port', config.port)

//midddlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))



app.use(estudiantesRoutes)
app.use(cubiculosRoutes)
app.use(asignacionesRoutes)
app.use(correosRoutes)
app.use(loginRoutes)

export default app