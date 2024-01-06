const express = require('express');

const uploadController = require('../controllers/upload');

const router =express.Router();

router.post('/titlebasics', uploadController.postTitlebasics);
router.post('/titleakas', uploadController.postTitleakas);
router.post('/titlecrew', uploadController.postTitlecrew);
router.post('/titleepisode', uploadController.postTitleepisode);
router.post('/titleprincipals', uploadController.postTitleprincipals);
router.post('/titleratings', uploadController.postTitleratings);

module.exports = router;