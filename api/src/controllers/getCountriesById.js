const { Country, Activity } = require("../db");

const getCountryById = async (req, res) => {
    const { id } = req.params;

    try {
        const IdPais = id.toUpperCase();
        const country = await Country.findOne({
            where: { id: IdPais },
            include: Activity,
        });
        if (country) return res.status(200).json(country);
        else return res.status(400).send("Pais inexistente");

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// const getCountryById = async (id) => await country.findAll({ where: { id: id } });

module.exports = getCountryById;

//* estamos importando country del modulo "db" donde ahi lo que estamos haciendo la relacion. estmaos buscanod un pais por su ID.