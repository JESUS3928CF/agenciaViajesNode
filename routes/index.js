import express from 'express';
import {
    paginaInicio,
    nosotros,
    viajes,
    testimoniales,
    paginaDetalleViaje,
} from '../controllers/paginasController.js';

/// Se importa el controlador que se crea para guardar la info del formulario 
import { guardarTestimonial } from '../controllers/testimonialController.js';

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', nosotros);

router.get('/viajes', viajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', testimoniales);

/// Se crea el verbo PARA ENVIAR INFO
router.post('/testimoniales', guardarTestimonial); //- Carga la función para guardar testimoniales


export default router;
