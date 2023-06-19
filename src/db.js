const {Sequelize, DataTypes} = require('sequelize');
const fs = require('fs');
const path = require('path');

const sequelize = new Sequelize(`postgres://postgres:hola1234@localhost/libreriadb`,{
    logging: false,// set to console.log( to see the raw SQL queries)
    native: false // lets sequelize know we can use pg-native for 30% more speed
});

const basename = path.basename(__filename);
const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
    .filter((file) => (file.indexOf('.') !==0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, '/models', file)));
    });

// Injectamos la conexion (sequelize a todos los modelos);
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {Libros, Alumnos} = sequelize.models;

// Aca vendrian las relaciones


const Alumno_Libro = sequelize.define('Prestamo', {
    prestamo: {
        type: DataTypes.STRING,
        defaultValue: 'En curso'
    },
    fecha_inicio: {
        type: DataTypes.DATEONLY,
        defaultValue: new Date()
    },
    fecha_termino: {
        type: DataTypes.DATEONLY,
        defaultValue: null
    }
}, {timestamps: false});

Libros.belongsToMany(Alumnos, {through: Alumno_Libro});
Alumnos.belongsToMany(Libros, {through: Alumno_Libro});
console.log(sequelize.models);

// product.hasMany(Reviews);
module.exports = {
    ...sequelize.models,// para poder importar los modelos así: const {Product, User} = require('./db.js');
    conn: sequelize// para importar la coneción { conn } = require('./db.js');
}