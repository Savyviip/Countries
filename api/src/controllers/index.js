const getActivities = require('./getActivities');
const getCountries = require("./getCountries");
const getCountriesById = require("./getCountriesById");
// const getCountriesByName = require("./getCountriesByName)
// const obtainCountriesActivities = require("./obtainCountriesActivities");
const postActivities = require("./postActivities");
const createCountries = require('./createCountries');

// const getCountriesByName = require('./getCountriesByName');

module.exports = {
    // getCountriesByName,
    getCountries,
    createCountries,
    getCountriesById,
    postActivities,
    getActivities

    // obtainCountriesActivities,
};