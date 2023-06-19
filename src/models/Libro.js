const { DataTypes} = require('sequelize');
//Exportamos una funcion que define el modelo
//Luego le inyectamos la conexion a sequelize.


module.exports = (sequelize) => {
    sequelize.define('Libros', {
        id_libros: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }, 
        codigo_libros:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        titulo_libro: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        colaboradores:{
            type: DataTypes.STRING,
            allowNull: false
        },
        editores:{
            type: DataTypes.STRING,
            allowNull: false
        },
        estado:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull:false
        }
    },{
        timestamps: false
    })
}