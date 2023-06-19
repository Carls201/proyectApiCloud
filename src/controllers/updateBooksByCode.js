const {Libros} = require('../db');

const updateBooksByCode = async (id) =>{
    let aux = await Libros.findOne({where: {codigo_libros: id}})
    let estado = aux.dataValues.estado 
    
    if(estado){

        estado = false;
        await Libros.update({estado: estado}, {where: {codigo_libros: id}})
    }else{
        estado = true;
        await Libros.update({estado: estado}, {where: {codigo_libros: id}})

    }
    return await Libros.findOne({where: {codigo_libros: id}})
    
    
            

}

module.exports = {updateBooksByCode};