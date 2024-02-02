const express = require('express');

const adminControler = require('../controllers/admin');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.get('/healthcheck', authMiddleware.authAdmin, adminControler.getHealthcheck);
router.post('/resetall', authMiddleware.authAdmin, adminControler.postResetall);

module.exports = router;