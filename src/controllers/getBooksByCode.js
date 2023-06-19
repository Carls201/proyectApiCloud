const {Libros} = require('../db');

const getBooksByCode = async (id)=>{
    // console.log(id);
    const aux = await Libros.findOne({where: {codigo_libros: id}})
    return aux;
}

module.exports = {getBooksByCode};