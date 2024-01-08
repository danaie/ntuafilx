exports.getHealthcheck = (req, res, next) => {
    res.status(200).json({ message: 'GET Health check!' });
}

exports.postResetall =  (req, res, next) => {
    res.status(200).json({ message: 'POST reset all'});
}
