const {Libros, Prestamo, Alumnos} = require('../db');

const postPrestamos = async ({LibroIdLibros, AlumnoIdAlumno}) =>{


    let aux = await Libros.findOne({where: {id_libros: LibroIdLibros}})
    let estado = aux.dataValues.estado 
    
    if(estado){

        estado = false;
        await Libros.update({estado: estado}, {where: {id_libros: LibroIdLibros}})
    }else{
        estado = true;
        await Libros.update({estado: estado}, {where: {id_libros: LibroIdLibros}})

    }
    
    
    const newPres = {LibroIdLibros, AlumnoIdAlumno};
    await Prestamo.create(newPres);
    
    
    
    return console.log(LibroIdLibros);










}

module.exports = {postPrestamos};