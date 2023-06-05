// CARGA TODA LA INFORMACION EN LA TABLA DE LA BASE DE DATOS

const { Country, Activities } = require('../db');

const createCountries = (array) => array.forEach(async (element) => // element es cada pais


    await Country.findOrCreate({  // Carga la informacion en la tabla country de la base de datos
        where: { id: element.id }, defaults: {
            name: element.name,
            flag: element.flag,
            continent: element.continent,
            capital: element.capital,
            subregion: element.subregion,
            area: element.area,
            population: element.population
        },
    })
);
module.exports = createCountries;
