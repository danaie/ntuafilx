const express = require('express');
const path = require('path');
const fs = require('fs');

const uploadController = require('../controllers/upload');

const router =express.Router();
const multer = require('multer');

const createUploadsFolderIfNotExists = (req, res, next) => {
    const uploadsFolderPath = __dirname + '/../uploads';
    if (!fs.existsSync(uploadsFolderPath)) {
        fs.mkdirSync(uploadsFolderPath, { recursive: true });
    }
    next();
};

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

router.post('/titlebasics',createUploadsFolderIfNotExists,upload.single('file'), uploadController.postTitlebasics);
router.post('/titleakas',createUploadsFolderIfNotExists,upload.single('file'), uploadController.postTitleakas);
router.post('/titlecrew',createUploadsFolderIfNotExists,upload.single('file'), uploadController.postTitlecrew);
router.post('/titleepisode',createUploadsFolderIfNotExists,upload.single('file'), uploadController.postTitleepisode);
router.post('/titleprincipals',createUploadsFolderIfNotExists,upload.single('file'), uploadController.postTitleprincipals);
router.post('/titleratings',createUploadsFolderIfNotExists,upload.single('file'), uploadController.postTitleratings);
router.post('/namebasics',createUploadsFolderIfNotExists,upload.single('file'), uploadController.postNamebasics);

module.exports = router;