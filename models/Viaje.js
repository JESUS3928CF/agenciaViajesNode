import { Sequelize } from "sequelize";
import db from "../config/db.js";

/// Nos estamos conectando con la tabla de viajes y se le pasa un objeto de configuración
export const Viaje = db.define('viajes', {
    //* Se le pasa el esquema de la tabla - EL ID no es requerido por que ya se sabe que existe
    //. La columna que no se defina aca cuando se haga la consulta no se traerá esa columna
    titulo: {
        type: Sequelize.STRING,
    },
    precio: {
        type: Sequelize.STRING,
    },
    fecha_ida: {
        type: Sequelize.DATE,
    },
    fecha_vuelta: {
        type: Sequelize.DATE,
    },
    imagen: {
        type: Sequelize.STRING,
    },
    descripcion: {
        type: Sequelize.STRING,
    },
    disponibles: {
        type: Sequelize.STRING,
    },
    slug: {
        type: Sequelize.STRING,
    },
});