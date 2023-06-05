const { Activities, Country } = require('../db');

const getActivities = async (req, res) => {
    const actividades = await Activities.findAll({
        attributes: ["name"],
        include: {
            model: Country,
            attributes: ["name"],
            through: {
                attributes: [],
            }
        }
    });
    const mapExtraerCountry = actividades.map(e => {
        return {
            name: e.name,
            countries: e.Countries.map(element => element.name)
        }
    })



    return res.status(200).json(mapExtraerCountry);
}

module.exports = getActivities;