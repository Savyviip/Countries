const { Activities } = require('../db');

const getActivities = async (req, res) => {
    const actividades = await Activities.findAll();
    return res.status(200).json(actividades);
}

module.exports = getActivities;