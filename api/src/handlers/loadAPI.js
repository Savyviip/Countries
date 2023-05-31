// const axios = require('axios');
// const {createCountries} = require('../controllers/index');

// module.exports = async () => {

//     const {data} = await axios(`https://restcountries.com/v3/all`);

//     const correctCountries = data.map(country => {
        
//         const {name, cca3, capital, subregion, area, population, continents, flags} = country;
//         const {common} = name;

//         if(!capital) return {id: cca3, name: common, flag: flags[1], continent: continents[0],
//             capital: ["It doesn't have"], sub_region: subregion, area, population};
//         return {id: cca3, name: common, flag: flags[1], continent: continents[0], capital,
//             sub_region: subregion, area, population};
//     });

//     createCountries(correctCountries);
//     return correctCountries;
// };