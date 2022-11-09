const { Router } = require('express');
const router = Router();
// Importar todos los routers;
const countryRouter = require('./countries.routes.js');
const activityRouter = require('./activity.routes.js');

// Configurar los routers
router.use('/countries', countryRouter);
router.use('/activity', activityRouter);

module.exports = router;
