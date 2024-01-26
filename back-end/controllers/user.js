exports.getTitles = (req, res, next) => {
    res.status(200).json({ message: 'Hello World!' });
}

exports.getTitle =  (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({ message: `Hello World! ${id}` });
}

exports.getSearchTitle = (req, res, next) => {
    res.status(200).json({ message: 'Hello World!' });
}


exports.getbyGendre =  (req, res, next) => {
    res.status(200).json({ message: 'Hello World!'  });
}

exports.getNames =  (req, res, next) => {
    res.status(200).json({ message: 'Hello World!' });
}

exports.getName =  (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({ message: `Hello World! ${id}` });
}

exports.getSearchName =  (req, res, next) => {
    res.status(200).json({ message: 'Hello World!'  });
}
