const express = require('express');
const path = require('path');

const uploadController = require('../controllers/upload');

const router =express.Router();
const multer = require('multer');

let storage = multer.diskStorage({
    destination:(req,res,callback) =>{
        const destination = __dirname+'/../uploads'; 
        callback(null, destination);
    },
    filename:(req,file,callback) =>{
        callback(null, Date.now() + '-' + file.originalname);
    }
})
const upload = multer({storage:storage});

router.post('/titlebasics',upload.single('file'), uploadController.postTitlebasics);
router.post('/titleakas',upload.single('file'), uploadController.postTitleakas);
router.post('/titlecrew',upload.single('file'), uploadController.postTitlecrew);
router.post('/titleepisode',upload.single('file'), uploadController.postTitleepisode);
router.post('/titleprincipals',upload.single('file'), uploadController.postTitleprincipals);
router.post('/titleratings',upload.single('file'), uploadController.postTitleratings);
router.post('/namebasics',upload.single('file'), uploadController.postNamebasics);

module.exports = router;