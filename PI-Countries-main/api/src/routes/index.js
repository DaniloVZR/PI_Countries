const { Router } = require('express');
const router = Router();
// Importar todos los routers;
const countryRouter = require('./Country.routes.js');
const activityRouter = require('./Activity.routes.js');

// Configurar los routers
router.use('/countries', countryRouter);
router.use('/activity', activityRouter);

module.exports = router;
