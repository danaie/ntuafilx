const express = require('express');

const auth = require('../controllers/auth');
const authMiddleware = require('../middlewares/auth');


const router =express.Router();

router.post('/usermod/:username/:password', auth.createUser);
router.post('/login',auth.login);
router.get('/logout',auth.logout);
router.post('/admin/usermod/:username/:password',authMiddleware.authAdmin,auth.createAdmin);
router.post('/admin/usermod/:username',authMiddleware.authAdmin,auth.createAdmin);
router.get('/admin/users/:username',authMiddleware.authAdmin,auth.viewUser);
router.delete('/admin/userdel/:username',authMiddleware.authAdmin,auth.deleteAdmin);
router.get('/profile', authMiddleware.authUser,auth.profile);


module.exports = router;
