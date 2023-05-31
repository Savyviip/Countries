const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getCountries, getCountriesById, getCountriesByName } = require("../controllers/index");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/countries", getCountries);  //!ACA LLAMAR AL HANDLER, BORRAR EL GETCOUNTRIES
router.get("/countries/:id", getCountriesById);
// router.get("/countries/name", getCountriesByName);
// router.get("/activities", getActivities);
// router.post("/post", postActivities);

// router.get('/', (req, res) => {
//     res.send('soy la ruta get!');
// });
module.exports = router;
