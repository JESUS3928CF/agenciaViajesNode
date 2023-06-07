/// Importando el modelo y tenemos acceso a todos del métodos de siqualize 
import { Testimonial } from "../models/Testimoniales.js";

/// La funcion es asyns
const guardarTestimonial = async (req, res) => {

    const { nombre, correo, mensaje} = req.body;

    const errores = [];

    if(nombre.trim() === '') {
        errores.push({ mensaje: 'El nombre esta vació' });
    }

    if (correo.trim() === '') {
        errores.push({ mensaje: 'El correo esta vació' });
    }

    if (mensaje.trim() === '') {
        errores.push({ mensaje: 'El mensaje esta vació' });
    }

    if(errores.length > 0) {

        /// Consultar testimoniales existentes 
        const testimoniales = await Testimonial.findAll();

        res.render("testimoniales", {
            pagina: "Testimoniales",
            errores,
            nombre,
            correo,
            mensaje,
            /// PASANDO LOS TESTIMONIALES PARA QUE NO DE ERROR AL RENDERIZAR 
            testimoniales
        });
    } else {
        //! Almacenar en la base de datos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });

            //! Redireccionar en node con express
            /// Lo mandamos a la pagina de testimoniales
            res.redirect("/testimoniales");
        } catch (error) {
            console.log(error);
        }
    }
};


export {
    guardarTestimonial,
}