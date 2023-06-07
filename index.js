import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';




const app = express();

db.authenticate()  //* Esto nos retorna un promise
    .then( () => {console.log("Base de datos conectada");})
    .catch( error => console.error(error));
    
const port = process.env.PORT || 4000;

app.set('view engine', 'pug');

app.use(express.static('public'));

app.use((req, res, next) => {

    const year = new Date();
    res.locals.actualyear = year.getFullYear();
    res.locals.nombresitio = "Agencia de viajes";

    // console.log(res.locals);
    return next(); 
});


/// Agregar body parser para leer los datos del formulario
//- habilitando el body parser
app.use(express.urlencoded({extended: true})); //* Utilizando el body parser de express hay otro pero utilizamos este


app.use('/', router);

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});
