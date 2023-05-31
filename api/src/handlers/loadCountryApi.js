// EXTRAEMOS LOS PAISES DE LA API

const axios = require("axios")
require("dotenv").config()
const { createCountries } = require('../controllers/index');

const { ENDPOINT } = process.env // extraemos la api de .env

module.exports = async () => {
    const { data } = await axios.get(ENDPOINT)
    const CountriesAPI = data.map((Country) => { // extraemos los paises de nuestra api

        const { name, cca3, capital, subregion, area, population, continents, flags } = Country;
        const { common } = name;

        if (!capital) return {
            id: cca3,
            name: common,
            flag: flags[1],
            continent: continents[0],
            capital: ["It doesn't have"],
            subregion: subregion,
            area,
            population
        };

        return {
            id: cca3,
            name: common,
            flag: flags[0],
            continent: continents[0],
            capital,
            subregion: subregion,
            area,
            population
        }
    })

    createCountries(CountriesAPI);

    return CountriesAPI;
};
