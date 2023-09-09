import {Router} from 'express'
import {crearAsignacion, getAsignaciones, modificarAsignacion} from '../controllers/asignaciones.controller.js'

const routerA = Router();

routerA.get('/asignaciones', getAsignaciones)
routerA.post('/asignaciones/edit', modificarAsignacion)
routerA.post('/asignaciones/new', crearAsignacion)


export default routerA;