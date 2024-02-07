const fs = require('fs');
const path = require('path');

const upload_tsv = require('../middlewares/upload_tsv')

exports.postTitlebasics = (req, res, next) => {
    const uploadedFile = req.file;
    if (!uploadedFile) {
        return res.status(400).send('No file uploaded.');
    }
    if (path.extname(req.file.filename) != '.tsv') {
        fs.unlink(__dirname+'/../uploads/' + req.file.filename, (err) => {
            if (err) {
                console.error(err);
            }
        });
        return res.status(400).send('File must be a tsv');
    }
    const query = "insert ignore into title (titleID, titleType, primaryTitle, originalTitle, isAdult, startYear, endYear, runtimeMinutes,genres, image) values ?"
    upload_tsv(__dirname+'/../uploads/' + req.file.filename,query,(error,result) =>{
        if (error) res.status(500).json({status:"failed", error:error});
        else res.status(200).json({status:"OK", result : result, message:"Title Basics updated"});
    }); 
}

exports.postTitleakas = (req, res, next) => {
    const uploadedFile = req.file;
    if (!uploadedFile) {
        return res.status(400).send('No file uploaded.');
    }
    if (path.extname(req.file.filename) != '.tsv') {
        fs.unlink(__dirname+'/../uploads/' + req.file.filename, (err) => {
            if (err) {
                console.error(err);
            }
        });
        return res.status(400).send('File must be a tsv');
    }
    const query ="insert ignore into titleAKA (titleID, ordering, title, region, language, types, atributes, isOriginal) values ?"
    upload_tsv(__dirname+'/../uploads/' + req.file.filename,query,(error,result) =>{
        if (error) res.status(500).json({status:"failed", error:error});
        else res.status(200).json({status:"OK",result : result, message:"Title AKA updated"});
    });
}

exports.postTitlecrew = (req, res, next) => {
    const uploadedFile = req.file;
    if (!uploadedFile) {
        return res.status(400).send('No file uploaded.');
    }
    if (path.extname(req.file.filename) != '.tsv') {
        fs.unlink(__dirname+'/../uploads/' + req.file.filename, (err) => {
            if (err) {
                console.error(err);
            }
        });
        return res.status(400).send('File must be a tsv');
    }
    const query ="insert ignore into crew (titleID, directors, writers) values ?"
    upload_tsv(__dirname+'/../uploads/' + req.file.filename,query,(error,result) =>{
        if (error) res.status(500).json({status:"failed", error:error});
        else res.status(200).json({status:"OK",result : result, message:"Title Crew updated"});
    });
}

exports.postTitleepisode = (req, res, next) => {
    const uploadedFile = req.file;
    if (!uploadedFile) {
        return res.status(400).send('No file uploaded.');
    }
    if (path.extname(req.file.filename) != '.tsv') {
        fs.unlink(__dirname+'/../uploads/' + req.file.filename, (err) => {
            if (err) {
                console.error(err);
            }
        });
        return res.status(400).send('File must be a tsv');
    }
    const query ="insert ignore into episode (episodeID, titleID, season, episodeNumber) values ?"
    upload_tsv(__dirname+'/../uploads/' + req.file.filename,query,(error,result) =>{
        if (error) res.status(500).json({status:"failed", error:error});
        else res.status(200).json({status:"OK",result : result, message:"Title Episode updated"});
    });
}

exports.postTitleprincipals = (req, res, next) => {
    const uploadedFile = req.file;
    if (!uploadedFile) {
        return res.status(400).send('No file uploaded.');
    }
    if (path.extname(req.file.filename) != '.tsv') {
        fs.unlink(__dirname+'/../uploads/' + req.file.filename, (err) => {
            if (err) {
                console.error(err);
            }
        });
        return res.status(400).send('File must be a tsv');
    }
    const query = "insert ignore into principals (titleID, ordering, basicsID, category, job, characters, image) values ?"
    upload_tsv(__dirname+'/../uploads/' + req.file.filename,query,(error,result) =>{
        if (error) res.status(500).json({status:"failed", error:error});
        else res.status(200).json({status:"OK",result : result, message:"Title Principals updated"});
    });
}

exports.postTitleratings = (req, res, next) => {
    const uploadedFile = req.file;
    if (!uploadedFile) {
        return res.status(400).send('No file uploaded.');
    }
    if (path.extname(req.file.filename) != '.tsv') {
        fs.unlink(__dirname+'/../uploads/' + req.file.filename, (err) => {
            if (err) {
                console.error(err);
            }
        });
        return res.status(400).send('File must be a tsv');
    }
    const query = "insert ignore into ratings (titleID, averageRating, numVotes) values ?"
    upload_tsv(__dirname+'/../uploads/' + req.file.filename,query,(error,result) =>{
        if (error) res.status(500).json({status:"failed", error:error});
        else res.status(200).json({status:"OK",result : result, message:"Title Ratings updated"});
    });
}

exports.postNamebasics  = (req, res, next) => {
    const uploadedFile = req.file;
    if (!uploadedFile) {
        return res.status(400).send('No file uploaded.');
    }
    if (path.extname(req.file.filename) != '.tsv') {
        fs.unlink(__dirname+'/../uploads/' + req.file.filename, (err) => {
            if (err) {
                console.error(err);
            }
        });
        return res.status(400).send('File must be a tsv');
    }
    const query = "insert ignore into nameBasics (basicsID, primaryName, birthYear, deathYear, primaryProfession, knowForTitles, image) values ?"
    upload_tsv(__dirname+'/../uploads/' + req.file.filename,query,(error,result) =>{
        if (error) res.status(500).json({status:"failed", error:error});
        else res.status(200).json({status:"OK",result : result, message:"Name Basics updated"});
    });
}

