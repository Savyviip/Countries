const { Activities, Country } = require('../db');


const postActivity = async (req, res) => {
    try {
        const { name, difficulty, duration, season, countries } = req.body
        
        const [activity, created] = await Activities.findOrCreate({
            where: { name },
            defaults: {
                name: name,
                difficulty: difficulty,
                duration: duration,
                season: season
            }
        });
        // si ya esta creado sale mensaje en error, created funciona como buleano.
        if (!created) {
            return res.status(401).json({ error: "la actividad ya existe" })
        }
        if (countries) {
           
                console.log(countries)
                countries.forEach(async (c) => {
                    const pais = await Country.findOne({ where: { name: c } })
                    await activity.addCountry(pais)
                });
                return res.status(200).json({ ...activity.dataValues, countries })
            
        }
    } catch (error) {
        res.status(500).json({ error: error.message })

    }

}

module.exports = postActivity;



// //! CREE UNA ARRAY VACIA DONDE SE VAN A PUSHEAR LAS NUEVAS ACTIVIDADES para el post.
// * Dsps en postactivities tenes que agregar una actividad y al mismo momento hacer la relación con los paises