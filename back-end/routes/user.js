const express = require('express');

const userController = require('../controllers/user');

const router =express.Router();

router.get('/titles', userController.getTitles);
router.get('/title/:titleID', userController.getTitle);
router.get('/searchtitle', userController.getSearchTitle);
router.get('/bygenre', userController.getbyGendre);
router.get('/names', userController.getNames);
router.get('/name/:nameID', userController.getName);
router.get('/searchname', userController.getSearchName);

module.exports = router;