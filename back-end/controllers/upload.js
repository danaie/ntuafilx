const fs = require('fs');
const path = require('path')

const upload_csv = require('../middlewares/upload_csv')

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
    const query = "insert into title (titleID, titleType, primaryTitle, originalTitle, isAdult, startYear, endYear, runtimeMinutes,genres, image) values ?"
    upload_csv(__dirname+'/../uploads/' + req.file.filename,query)
    res.status(200).json({ message: 'POST Title basics file reseved' });
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
    const query ="insert into titleAKA (titleID, ordering, title, region, language, types, atributes, isOriginal) values ?"
    upload_csv(__dirname + '/../uploads/' + req.file.filename,query)
    res.status(200).json({ message: 'POST Title akas' });
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
    const query ="insert into crew (titleID, directors, writers) values ?"
    upload_csv(__dirname + '/../uploads/' + req.file.filename,query)
    res.status(200).json({ message: 'POST Title crew' });
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
    const query ="insert into episode (episodeID, titleID, season, episodeNumber) values ?"
    upload_csv(__dirname + '/../uploads/' + req.file.filename,query)
    res.status(200).json({ message: 'POST Title episode' });
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
    const query = "insert into principals (titleID, ordering, basicsID, category, job, characters, image) values ?"
    upload_csv(__dirname + '/../uploads/' + req.file.filename,query)
    res.status(200).json({ message: 'POST Title principals' });
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
    const query = "insert into ratings (titleID, averageRating, numVotes) values ?"
    upload_csv(__dirname + '/../uploads/' + req.file.filename,query)
    res.status(200).json({ message: 'POST Title ratings' });
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
    const query = "insert into nameBasics (basicsID, primaryName, birthYear, deathYear, primaryProfession, knowForTitles, image) values ?"
    upload_csv(__dirname + '/../uploads/' + req.file.filename,query)
    res.status(200).json({ message: 'POST Name basics' });
}

