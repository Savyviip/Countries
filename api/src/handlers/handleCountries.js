const { STATUS_ERROR, STATUS_OK, SERVER_ERROR } = require("../utilities/statusCodes");
const { getCountriesByName, getCountries, obtainCountriesActivities } = require("../controllers/index");

async function getAllCountries(req, res) {
    try {
        const countries = await getCountries();

        if (!countries)
            return res.status(Number(STATUS_ERROR)).JSON({ error: "Countries weren't found" });

        let pass = countries.map(country => {
            return {
                id: country.id,
                flag: country.flag,
                name: country.name,
                continent: country.continent,
                population: country.population,
                activities: country.activities
            }
        });
        return res.status(Number(STATUS_OK)).json(pass);
    } catch (error) { res.status(Number(SERVER_ERROR)).json({ error: error.message }) };
};

async function getCountryQuery(req, res) {
    try {
        const { name } = req.query;
        if (!name)
            return res.status(number(STATUS_ERROR)).json({ error: "The require information is missing" });
        const countries = await getCountriesByName(name);
        return res.status(Number(STATUS_OK)).json(countries);

    } catch (error) { res.status(Number(SERVER_ERROR)).json({ error: error.message }) };
};

async function getCountriesById(req, res) {
    try {
        const { idPais } = req.params;
        if (!idPais)
            return res.status(Number(STATUS_ERROR)).json({ error: "The require information is missing" });
        const country = await obtainCountriesActivities(idPais);
        return res.status(Number(STATUS_OK)).json(country[0]);
    } catch (error) { res.status(Number(SERVER_ERROR)).json({ error: error.message }) };
};

module.exports = {
    getAllCountries,
    getCountryQuery,
    getCountriesById,
};