const upload_csv = require('../middlewares/upload_csv')


exports.postTitlebasics = (req, res, next) => {
    const uploadedFile = req.file;
    if (!uploadedFile) {
        return res.status(400).send('No file uploaded.');
    }
    const query = "insert into title (titleID, titleType, primaryTitle, originalTitle, isAdult, startYear, endYear, runtimeMinutes,genres, image) values ?"
    upload_csv(__dirname+'/../uploads/titlebasics/' + req.file.filename,query)
    res.status(200).json({ message: 'POST Title basics file reseved' });
}

exports.postTitleakas = (req, res, next) => {
    const uploadedFile = req.file;
    if (!uploadedFile) {
        return res.status(400).send('No file uploaded.');
    }
    const query ="insert into tilteAKA (titleID, ordering, title, region, language, atributes, isOriginal) values ?"
    upload_csv(__dirname + '/../uploads/titleakas/' + req.file.filename,query)
    res.status(200).json({ message: 'POST Title akas' });
}

exports.postTitlecrew = (req, res, next) => {
    const uploadedFile = req.file;
    if (!uploadedFile) {
        return res.status(400).send('No file uploaded.');
    }
    const query ="insert into crew (titleID, directors, writers) values ?"
    upload_csv(__dirname + '/../uploads/titlecrew/' + req.file.filename,query)
    res.status(200).json({ message: 'POST Title crew' });
}

exports.postTitleepisode = (req, res, next) => {
    const uploadedFile = req.file;
    if (!uploadedFile) {
        return res.status(400).send('No file uploaded.');
    }
    const query ="insert into episode (episodeID, titleID, season, episodeNumber) values ?"
    upload_csv(__dirname + '/../uploads/titleepisode/' + req.file.filename,query)
    res.status(200).json({ message: 'POST Title episode' });
}

exports.postTitleprincipals = (req, res, next) => {
    const uploadedFile = req.file;
    if (!uploadedFile) {
        return res.status(400).send('No file uploaded.');
    }
    const query = "insert into principals (titleID, ordering, basicsID, category, job, characters) values ?"
    upload_csv(__dirname + '/../uploads/titleprincipals/' + req.file.filename,query)
    res.status(200).json({ message: 'POST Title principals' });
}

exports.postTitleratings = (req, res, next) => {
    const uploadedFile = req.file;
    if (!uploadedFile) {
        return res.status(400).send('No file uploaded.');
    }
    const query = "insert into ratings (titleID, averageRating, numVotes) values ?"
    upload_csv(__dirname + '/../uploads/titleratings/' + req.file.filename,query)
    res.status(200).json({ message: 'POST Title ratings' });
}

exports.postNamebasics  = (req, res, next) => {
    const query = "insert into nameBasics (basicsID, primaryName, birthYear, deathYear, primaryProfession, knowForTitles, image) values ?"
    upload_csv(__dirname + '/../uploads/namebasics/' + req.file.filename,query)
    res.status(200).json({ message: 'POST Name basics' });
}

