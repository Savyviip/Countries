// const { Country } = require('../db');
// const { Op } = require('sequelize');

// const getCountriesByName = async (name) => await Country.findAll({
//     where: { name: { [Op.iLike]: `%${name}%` } }
// });

// module.exports = getCountriesByName;

//*operador "op.ilike" hace que sea insensible a las mayusculas y minusculas, lo ignora buscandolo igual
//*`%${name}%` hace que cuando tenga una busqueda, busque %Arg% "BosARGe"