const { Router } = require('express');
const router = Router();
// Importar todos los routers;
const countryRouter = require('./Country.routes.js');

// Configurar los routers
router.use('/countries', countryRouter);

module.exports = router;
