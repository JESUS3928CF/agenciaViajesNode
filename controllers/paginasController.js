/// Lo primero que hay que hacer es importar el modelo dado a que hay vamos a tener acceso a los métodos y tenemos registrados todos los campos

import { Testimonial } from '../models/Testimoniales.js';
import { Viaje } from '../models/Viaje.js';

//! el controlador se hace asíncrono y se usa el try
const paginaInicio = async (req, res) => {
    /// Consultar 3 viajes del modelo Viaje y 4 testimoniales 
    //* Como una consulta no depende de otra el no hay que poner a esperar que se realice una consulta antes que otra 

    /// Lo podemos hacer por medio de un promise
    const promiseDB = [];
    promiseDB.push( Viaje.findAll({ limit: 3 }) );
    promiseDB.push( Testimonial.findAll({ limit: 4 }) );


    try {
        const result = await Promise.all( promiseDB); /// Hace que ambas consultas arranquen al mismo tiempo 

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            //- Pasando las consultas a la vista
            viajes: result[0],
            testimoniales: result[1],
        });
    } catch (error) {
        console.log(error);
    }
};

const nosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros',
    });
};

const viajes = async (req, res) => {
    const viajes = await Viaje.findAll();

    // console.log(viajes);

    res.render('viajes', {
        pagina: 'próximos viajes',
        //- Pasando la info a la vista
        viajes,
    });
};

/// Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    console.log(req.params);
    console.log(req.params.slug);

    const { slug } = req.params;

    //. El try es necesario en caso de algún error ( Ejemplo: Si no se hace la consulta a la db nuestra app no va a fallar)
    try {
        const viaje = await Viaje.findOne({ where: { slug } }); //* Traer uno el que tenga el slug correspondiente

        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje,
        });
    } catch (error) {
        console.log(error);
    }
};

/// Consultando
const testimoniales = async (req, res) => {
    const testimoniales = await Testimonial.findAll();

    res.render('testimoniales', {
        pagina: 'Testimoniales',
        /// Pasando el elemento a la vista
        testimoniales,
    });
};

export {
    paginaInicio,
    nosotros,
    viajes,
    testimoniales,
    /// Exportando el controlador
    paginaDetalleViaje,
};
