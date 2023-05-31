// LLAMO A TODOS LOS PAISES Y TAMBIEN POR NOMBRE

const { Activities, Country } = require('../db');
const { Op } = require("sequelize");

const getCountries = async (req, res) => {
    let name = req.query.name;
    //el name lo compara con todos los paises
    if (name) {
        name = name.toLowerCase()

        try {
            let country = await Country.findAll(
                // [Op.iLike]: `%${name}%` // Utilizamos Op.iLike para realizar una búsqueda case-insensitive y parcial
            );
            country = country.filter((c) => c.name.toLowerCase().includes(name))
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
            // include: [{model: Activities, attributes:["name"],
            // through: {attributes: []}}]
        });
        res.status(200).json(DataCountries);
    }
}
module.exports = getCountries;