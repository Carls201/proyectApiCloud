const { Router } = require('express');
// Importar todos los routers;

const bookRouter = require('./bookRouter');


const router = Router();

router.use('/books', bookRouter);



// Ruta por defecto
// app.get('/', (req, res) => {
//     res.send('¡Hola, mundo!');
//   });
// router.use('/books', bookRouter);

module.exports = router;
