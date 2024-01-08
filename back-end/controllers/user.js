exports.getTitles = (req, res, next) => {
    res.status(200).json({ message: 'Hello World!' });
}

exports.getTitle = (req, res, next) => {
    res.status(200).json({ message: 'Hello World!' });
}

exports.getSearchTitle =  (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({ message: `Hello World! ${id}` });
}

exports.getbyGendre =  (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({ message: `Hello World! ${id}` });
}

exports.getNames =  (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({ message: `Hello World! ${id}` });
}

exports.getName =  (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({ message: `Hello World! ${id}` });
}

exports.getSearchName =  (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({ message: `Hello World! ${id}` });
}
