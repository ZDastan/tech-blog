const router = require('express').Router();
const apiRoutes = require ('./api');
const dashboardRoutes = require('./dashboard-routes.js');
const homeRoutes = require('./home-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);






module.exports = router;