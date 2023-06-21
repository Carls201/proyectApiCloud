const {Libros} = require('../db.js');

const getBooks = async () =>{
    
    const book = await Libros.findAll();
    return book;
}

module.exports = {getBooks};