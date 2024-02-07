const { pool } = require('../utils/database');

exports.getTitles = (req, res, next) => {
    const q = 'SELECT originalTitle, titleID, image FROM title';
    pool.query(q, (error, results, fields) => {
        if (error) {
            console.error('Error executing SELECT query:', error);
            return res.status(500).json({
                success: 0,
                message: 'Database error'
            });
        }
        return res.status(200).json({
            success: 1,
            data: results
        });
    });
};

exports.getTitleById = (req, res) => {
    const titleID = req.params.titleID;
    const q1 = 'SELECT titleID, titleType, originalTitle, image, startYear, endYear, genres FROM title WHERE titleID = ?';
    const q2 = 'SELECT titleID, title, region FROM titleAKA WHERE titleID = ?';
    const q3 = 'SELECT * FROM principalsList WHERE titleID = ?';
    const q4 = 'SELECT * FROM ratings WHERE titleID = ?';

    const titleInfoPromise = new Promise((resolve, reject) => {
        pool.query(q1, [titleID], (error, results) => {
            if (error) {
                console.error('Error executing SELECT query:', error);
                reject('Database error');
            } else if (results.length === 0) {
                reject(`Movie not found with ${titleID}`);
            } else {
                resolve(results[0]);
            }
        });
    });

    const titleAKAPromise = new Promise((resolve, reject) => {
        pool.query(q2, [titleID], (error, results) => {
            if (error) {
                console.error('Error executing SELECT query:', error);
                reject('Database error');
            } else {
                resolve(results);
            }
        });
    });

    const titlePrincipalsListPromise = new Promise((resolve, reject) => {
        pool.query(q3, [titleID], (error, results) => {
            if (error) {
                console.error('Error executing SELECT query:', error);
                reject('Database error');
            } else {
                resolve(results);
            }
        });
    });

    const ratingsPromise = new Promise((resolve, reject) => {
        pool.query(q4, [titleID], (error, results) => {
            if (error) {
                console.error('Error executing SELECT query:', error);
                reject('Database error');
            } else {
                resolve(results[0]);
            }
        });
    });

    Promise.all([titleInfoPromise, titleAKAPromise, titlePrincipalsListPromise, ratingsPromise])
        .then(([titleInfo, titleAKAlist, titlePrincipalsList, ratings]) => {
            return res.status(200).json({
                success: 1,
                data: { titleInfo, titleAKAlist, titlePrincipalsList, ratings }
            });
        })
        .catch((error) => {
            return res.status(500).json({
                success: 0,
                message: error
            });
        });
};

exports.getSearchTitle = (req, res) => {
    const { titlePart } = req.query;
    const q2 = 'SELECT originalTitle FROM title WHERE originalTitle LIKE ?';
    pool.query(q2, [`%${titlePart}%`], (error, results, fields) => {
        if (error) {
            console.error('Error executing SELECT query:', error);
            return res.status(500).json({
                success: 0,
                message: 'Database error'
            });
        }
        if (results.length === 0) {
            return res.status(404).json({
                success: 0,
                message: 'Movies not found'
            });
        }
        return res.status(200).json({
            success: 1,
            data: results
        });
    });
};

exports.getbyGendre =  (req, res, next) => {
    const { qgenre } = req.query;
    const { minrating } = req.query;
    const { yrFrom } = req.query;
    const { yrTo } = req.query;
    q = "SELECT originalTitle, startYear FROM (title INNER JOIN ratings USING (titleID)) WHERE genres LIKE ? AND averageRating >= ?";
    if (yrFrom != null && yrTo != null) { q = q + "AND startYear BETWEEN ? AND ?" }
    pool.query(q, [`%${qgenre}%`, minrating, yrFrom, yrTo], (error, results) => {
        if (error) {
            console.error('Error executing SELECT query:', error);
            return res.status(500).json({
                success: 0,
                message: 'Database error'
            });
        }
        if (results.length === 0) {
            return res.status(404).json({
                success: 0,
                message: 'Movie not found'
            });
        }
        return res.status(200).json({
            success: 1,
            data: results
        });
    });
}

exports.getNames =  (req, res, next) => {
    const q = 'SELECT primaryName FROM nameBasics';
    pool.query(q, (error, results, fields) => {
        if (error) {
            console.error('Error executing SELECT query:', error);
            return res.status(500).json({
                success: 0,
                message: 'Database error'
            });
        }
        return res.status(200).json({
            success: 1,
            data: results
        });
    });
}

exports.getNameById = (req, res) => {
    const nameID = req.params.nameID; 
    const q1 = 'SELECT basicsID, primaryName, image, birthYear, deathYear, primaryProfession FROM nameBasics WHERE basicsID = ?';
    const q2 = "SELECT basicsID, category, SUBSTRING_INDEX(SUBSTRING_INDEX(knowForTitles, ',', n.digit + 1), ',', -1) AS knowForTitle FROM (nameBasics INNER JOIN principals USING (basicsID)) JOIN (SELECT 0 AS digit UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3) AS n ON LENGTH(REPLACE(knowForTitles, ',' , '')) <= LENGTH(knowForTitles) - n.digit WHERE basicsID = ?";
    
    const nameInfoPromise = new Promise((resolve, reject) => {
        pool.query(q1, [nameID], (error, results) => {
            if (error) {
                console.error('Error executing SELECT query:', error);
                reject('Database error');
            } else if (results.length === 0) {
                reject(`Name not found with ${nameID}`);
            } else {
                resolve(results[0]);
            }
        });
    });
    const knownForPromise = new Promise((resolve, reject) => {
        pool.query(q2, [nameID], (error, results) => {
            if (error) {
                console.error('Error executing SELECT query:', error);
                reject('Database error');
            } else if (results.length === 0) {
                reject(`Movie not found with ${nameID}`);
            } else {
                resolve(results);
            }
        });
    });
    Promise.all([nameInfoPromise, knownForPromise,])
        .then(([nameInfo, knownFor]) => {
            return res.status(200).json({
                success: 1,
                data: { nameInfo, knownFor }
            });
        })
        .catch((error) => {
            return res.status(500).json({
                success: 0,
                message: error
            });
        });
};

exports.getSearchName =  (req, res, next) => {
    const { namePart } = req.query;
    const q2 = 'SELECT primaryName FROM nameBasics WHERE primaryName LIKE ?';
    pool.query(q2, [`%${namePart}%`], (error, results, fields) => {
        if (error) {
            console.error('Error executing SELECT query:', error);
            return res.status(500).json({
                success: 0,
                message: 'Database error'
            });
        }
        if (results.length === 0) {
            return res.status(404).json({
                success: 0,
                message: 'Names not found'
            });
        }
        return res.status(200).json({
            success: 1,
            data: results
        });
    });
}
