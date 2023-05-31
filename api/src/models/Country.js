const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false, // si o si un valor
      validation: {
        isUrl: true, // una direccion url valida
      }
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.ARRAY(DataTypes.STRING), //  Esto permite almacenar múltiples valores de capital en forma de arreglo para cada actividad, lo que puede ser útil para representar casos en los que una actividad puede estar asociada con varias capitales.
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.INTEGER, // area de numero entero
      allowNull: false,
    },
    population: {
      type: DataTypes.INTEGER, // poblacion de numero entero
      allowNull: false,
    }
  });
};
