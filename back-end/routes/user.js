const express = require('express');

const userController = require('../controllers/user');

const router =express.Router();

router.get('/titles', userController.getTitles);
router.get('/title/:titleID', userController.getTitleById);
router.get('/searchtitle', userController.getSearchTitle);
router.get('/bygenre', userController.getbyGendre);
router.get('/names', userController.getNames);
router.get('/name/:nameID', userController.getNameById);
router.get('/searchname', userController.getSearchName);

module.exports = router;