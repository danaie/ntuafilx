const express = require('express');

const app = express();

const adminControler = require('../controllers/admin');
//const uploadRoutes = require('./upload');

const router = express.Router();

router.get('/healthcheck', adminControler.getHealthcheck);
router.post('/resetall', adminControler.postResetall);
//app.use('/upload',uploadRoutes);

module.exports = router;