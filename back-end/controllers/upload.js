const upload_csv = require('../middlewares/upload_csv')

exports.postTitlebasics = (req, res, next) => {
    //const query = "insert into ... "
    upload_csv(__dirname + '../upload/titlebasics' + req.file.filename, query)
    res.status(200).json({ message: 'POST Title basics' });
}

exports.postTitleakas = (req, res, next) => {
    const query = "insert into ... "
    upload_csv(__dirname + '../upload/titleakas' + req.file.filename,query)
    res.status(200).json({ message: 'POST Title akas' });
}

exports.postTitlecrew = (req, res, next) => {
    const query = "insert into ... "
    upload_csv(__dirname + '../upload/titlecrew' + req.file.filename,query)
    res.status(200).json({ message: 'POST Title crew' });
}

exports.postTitleepisode = (req, res, next) => {
    const query = "insert into ... "
    upload_csv(__dirname + '../uploadtitleepisode' + req.file.filename,query)
    res.status(200).json({ message: 'POST Title episode' });
}

exports.postTitleprincipals = (req, res, next) => {
    const query = "insert into ... "
    upload_csv(__dirname + '../uploadtitleprincipals' + req.file.filename,query)
    res.status(200).json({ message: 'POST Title principals' });
}

exports.postTitleratings = (req, res, next) => {
    const query = "insert into ... "
    upload_csv(__dirname + '../uploadtitleratings' + req.file.filename,query)
    res.status(200).json({ message: 'POST Title ratings' });
}

