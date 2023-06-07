import { Sequelize } from "sequelize";
import db from "../config/db.js";

/// Nos estamos conectando con la tabla de testimoniales y se le pasa un objeto de configuración
export const Testimonial = db.define('testimoniales', {
    //* Se le pasa el esquema de la tabla - EL ID no es requerido por que ya se sabe que existe
    //. La columna que no se defina aca cuando se haga la consulta no se traerá esa columna
    nombre: {
        type: Sequelize.STRING,
    },
    correo: {
        type: Sequelize.STRING,
    },
    mensaje: {
        type: Sequelize.STRING,
    }
});