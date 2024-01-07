const upload_csv = require('../middlewares/upload_csv')

exports.postTitlebasics = (req, res, next) => {
    // query = "insert into title (titleID, titleType, primaryTitle, originalTitle, isAdult, startYear, endYear, runtimeMinutes, image) values ?"
    const uploadedFile = req.file;
    if (!uploadedFile) {
        return res.status(400).send('No file uploaded.');
    }
    upload_csv(__dirname+'/../uploads/titlebasics/' + req.file.filename)
    res.status(200).json({ message: 'POST Title basics file reseved' });
}

exports.postTitleakas = (req, res, next) => {
    const query = "insert into ... "
    upload_csv(__dirname + '/../uploads/titleakas' + req.file.filename,query)
    res.status(200).json({ message: 'POST Title akas' });
}

exports.postTitlecrew = (req, res, next) => {
    const query = "insert into ... "
    upload_csv(__dirname + '/../uploads/titlecrew' + req.file.filename,query)
    res.status(200).json({ message: 'POST Title crew' });
}

exports.postTitleepisode = (req, res, next) => {
    const query = "insert into ... "
    upload_csv(__dirname + '/../uploads/titleepisode' + req.file.filename,query)
    res.status(200).json({ message: 'POST Title episode' });
}

exports.postTitleprincipals = (req, res, next) => {
    const query = "insert into ... "
    upload_csv(__dirname + '/../uploads/titleprincipals' + req.file.filename,query)
    res.status(200).json({ message: 'POST Title principals' });
}

exports.postTitleratings = (req, res, next) => {
    const query = "insert into ... "
    upload_csv(__dirname + '/../uploads/titleratings' + req.file.filename,query)
    res.status(200).json({ message: 'POST Title ratings' });
}

