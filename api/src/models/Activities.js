const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Activities', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false, // No se permite un valor nulo
        },
        name: {
            type: DataTypes.STRING,
            unique: true, // no se aceptan nombres duplicados
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.FLOAT, // acepta decimales
            allowNull: false,
            validate: { // se utiliza para dos validaciones, min y max
                min: 1,
                max: 5,
            }
        },
        duration: {
            type: DataTypes.INTEGER, // solo valores enteros
            allowNull: false,
            validate: {
                min: 1,
                max: 24,
            }
        },
        season: {
            type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
            allowNull: false,
        }
    });
};