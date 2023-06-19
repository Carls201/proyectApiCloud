const {DataTypes} = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('Alumnos', {
        id_alumno: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }, 
        run:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        matricula: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        nombre_alumno:{
            type: DataTypes.STRING,
            allowNull: false
        },
        carrera:{
            type: DataTypes.STRING,
            allowNull: false
        },
    },{
        timestamps: false
    })
}