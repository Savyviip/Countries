// LLAMO A TODOS LOS PAISES Y TAMBIEN POR NOMBRE

const { Activity, Country } = require('../db');
const { Op } = require("sequelize");

const getCountries = async (req, res) => {
    const name = req.query.name;
    if (name) {

        try {
            const country = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%` // Utilizamos Op.iLike para realizar una búsqueda case-insensitive y parcial
                    }
                }
            });

            if (country.length === 0) {
                return res.status(404).json({ message: 'No se encontraron países.' });
            }

            return res.json(country);
        } catch (error) {
            console.error('Error al buscar países:', error);
            return res.status(500).json({ message: 'Ocurrió un error al buscar países.' });
        }

    } else {

        const DataCountries = await Country.findAll({
            // include: [{model: Activity, attributes:["name"],
            // through: {attributes: []}}]
        });
        res.status(200).json(DataCountries);
    }
}
module.exports = getCountries;