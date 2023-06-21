const bookRouter = require('express').Router();
const {getBooks} = require('../controllers/getBooks');
const {getBooksByCode} = require('../controllers/getBooksByCode');
const {updateBooksByCode} = require('../controllers/updateBooksByCode');
const {postPrestamos} = require('../controllers/postPrestamo');
const {updatePrestamos} = require('../controllers/updatePestamoByCode');


bookRouter.get('/', async(req, res) => {
    try{
        const response = await getBooks();
        
        return res.status(200).json(response);
       
    }catch(error){
        return res.status(400).json(error);
    }
});


bookRouter.get('/:id', async (req, res)=>{
    try{
        const {id} = req.params;
        const aux = Number(id);
        const info = await getBooksByCode(aux);
        return res.status(200).json(info);
    } catch(error){
        return res.status(400).send(error.message);
    }
});

// bookRouter.put('/:id', async (req, res)=>{
//     try{
//         const {id} = req.params;
//         const info = await updateBooksByCode(Number(id));
//         return res.status(200).json(info);
//     }catch(error){
//         return res.status(400).send(error.message);
//     }
// })

bookRouter.post('/', (req, res)=>{
    try{
        const body = req.body;
        const postPrestamo = postPrestamos(body);
        return res.status(200).send(postPrestamo);
        
    }catch(error){
        return res.status(400).send(error.message);
    }
})

bookRouter.put('/:id', async (req, res) =>{
    try {
        const {id} = req.params;
        const info = await updatePrestamos(Number(id));
        return res.status(400).send(info);
    } catch (error) {
        return res.status(400).send(error.message)
    }
})


module.exports = bookRouter;