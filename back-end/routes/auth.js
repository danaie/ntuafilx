const express = require('express');

const auth = require('../controllers/auth');

const router =express.Router();

router.post('/usermod/:username/:password', auth.createUser);
router.post('/login',auth.login);
router.post('/admin/usermod/:username/:password',auth.createAdmin);

module.exports = router;
