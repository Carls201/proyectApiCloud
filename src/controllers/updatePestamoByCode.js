const {Libros, Prestamo, Alumnos} = require('../db');

const updatePrestamos = async (LibroIdLibros) =>{


    //let aux = await Prestamo.findOne({where: {LibroIdLibros: LibroIdLibros}})
    //let prestamo = aux.dataValues.prestamo;
    //let fecha_t = aux.dataValues.fecha_termino;
    
    await Libros.update({estado: true}, {where: {id_libros: LibroIdLibros}});
    //await Prestamo.update({prestamo: 'finalizado', fecha_termino: new Date()}, {where: {LibroIdLibros: LibroIdLibros}})
    await Prestamo.destroy({where:{LibroIdLibros: LibroIdLibros}})

    
    
    return 'todo bien';










}

module.exports = {updatePrestamos};