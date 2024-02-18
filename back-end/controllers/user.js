const { pool } = require('../utils/database');

exports.getTitles = (req, res, next) => {
    const q = 'SELECT originalTitle, titleID, image FROM title';
    pool.query(q, (error, results, fields) => {
        if (error) {
            //console.log('Error executing SELECT query:', error);
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

const getTitleObjectById = (titleID) => {
    return new Promise((resolve, reject) => {
        const q1 = 'SELECT titleID, titleType, originalTitle, image, startYear, endYear, genres FROM title WHERE titleID = ?';
        const q2 = 'SELECT titleID, title, region FROM titleAKA WHERE titleID = ?';
        const q3 = 'SELECT * FROM principalsList WHERE titleID = ?';
        const q4 = 'SELECT * FROM ratings WHERE titleID = ?';

        pool.getConnection((err, connection) => {
            if (err) {
                //console.log(err);
                connection.release();
                reject({ error : err });
            } else {
                connection.query(q1, [titleID], (error, result1) => {
                    if (error) {
                        connection.release();
                        reject({ error: 'Error executing query 1' });
                    }
                    if (result1.length === 0) {
                        connection.release();
                        resolve({ message: 'Movies not found' });
                    }

                    connection.query(q2, [titleID], (error, result2) => {
                        if (error) {
                            connection.release();
                            reject({ error: 'Error executing query 2' });
                        }

                        connection.query(q3, [titleID], (error, result3) => {
                            if (error) {
                                connection.release();
                                reject({ error: 'Error executing query 3' });
                            }

                            connection.query(q4, [titleID], (error, result4) => {
                                connection.release();
                                if (error) {
                                    reject({ error: 'Error executing query 4' });
                                }

                                resolve({
                                    TitleObject: {
                                        titleID : titleID,
                                        titleInfo: result1,
                                        titleAKAlist: result2,
                                        titlePrincipalsList: result3,
                                        ratings: result4
                                    }
                                });
                            });
                        });
                    });
                });
            }
        });
    });
};

const getnameObjectById = (nameID) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT n.basicsID, n.primaryName, n.image, n.birthYear, n.deathYear, n.primaryProfession, p.titleID, p.category FROM nameBasics n INNER JOIN principals p ON n.basicsID = p.basicsID WHERE n.basicsID = ?';

        pool.query(query, [nameID], (error, results, fields) => {
            if (error) {
                reject({ error: 'Error executing query' });
            
            } else {
                const personData = {
                    basicsID: null,
                    primaryName: null,
                    image: null,
                    birthYear: null,
                    deathYear: null,
                    primaryProfession: null,
                    titles: []
                };

                if (results.length > 0) {
                    personData.basicsID = results[0].basicsID;
                    personData.primaryName = results[0].primaryName;
                    personData.image = results[0].image;
                    personData.birthYear = results[0].birthYear;
                    personData.deathYear = results[0].deathYear;
                    personData.primaryProfession = results[0].primaryProfession;

                    results.forEach((row) => {
                        personData.titles.push({
                            titleID: row.titleID,
                            category: row.category
                        });
                    });
                }
            
            resolve({ personData });
            }
            },
        );
    });
};

exports.getTitleById = (req, res) => {
    const titleID = req.params.titleID;
    getTitleObjectById(titleID)
    .then((titleObject) => {
        if (titleObject.body === 404) {
            return res.status(404).json(titleObject);
        }
        return res.status(200).json(titleObject);
    })
    .catch((error) => {
        //console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    });
};

exports.getSearchTitle = (req, res) => {
    //console.log('req.query title:', req.query);

    const { titlePart } = req.query;
    const q = 'SELECT titleID FROM title WHERE originalTitle LIKE ?';

    if (!titlePart) {
        //console.log("titlepart missing")
        return res.status(400).json({
            success: 0,
            message: 'titlepart missing'
        });
    }
    //console.log("titlepart not missing")

    pool.query(q, [`%${titlePart}%`], (error, searchresults, fields) => {
        if (error) {
            //console.error('Error executing query', error);
            return res.status(500).json({
                success: 0,
                message: 'Database error'
            });
        }
        if (searchresults.length === 0) {
            return res.status(200).json({
                success: 0,
                message: 'Movie not found'
            });
        }
        const promises = searchresults.map((result) => {
            return getTitleObjectById(result.titleID)
                .catch((error) => {
                    //console.error(error);
                    return { error: 'Error getting title object' };
                });
        });
        Promise.all(promises)
            .then((titleObjects) => {
                //console.log("Search Results:", titleObjects);
                return res.status(200).json(titleObjects);
            })
            .catch((error) => {
                //console.error(error);
                return res.status(500).json({ error: 'Internal Server Error' });
            });
    });
};

exports.getbyGendre =  (req, res, next) => {
    const { qgenre } = req.query;
    const { minrating } = req.query;
    const { yrFrom } = req.query;
    const { yrTo } = req.query;
    
    if (!qgenre || !minrating ) { 
        return res.status(400).json({
            success: 0,
            message: 'qgenre and/or minrating missing'
        });
    }

    q = "SELECT titleID FROM (title INNER JOIN ratings USING (titleID)) WHERE genres LIKE ? AND averageRating >= ?";
    if (yrFrom != null && yrTo != null) { q = q + "AND startYear BETWEEN ? AND ?" }
    pool.query(q, [`%${qgenre}%`, minrating, yrFrom, yrTo], (error, searchresults, fields) => {
        if (error) {
            //console.error('Error executing query', error);
            return res.status(500).json({
                success: 0,
                message: 'Database error'
            });
        }
        if (searchresults.length === 0) {
            return res.status(200).json({
                success: 0,
                message: 'Movie not found'
            });
        }
        
        const promises = searchresults.map((result) => {
            return getTitleObjectById(result.titleID)
                .catch((error) => {
                    //console.error(error);
                    return { error: 'Error getting title object' };
                });
            });
            Promise.all(promises)
            .then((titleObjects) => {
                //console.log("Search Results:", titleObjects);
                return res.status(200).json(titleObjects);
            })
            .catch((error) => {
                //console.error(error);
                return res.status(500).json({ error: 'Internal Server Error' });
            });
    });

}

exports.getNames =  (req, res, next) => {
    const q = 'SELECT primaryName FROM nameBasics';
    pool.query(q, (error, results, fields) => {
        if (error) {
            //console.error('Error executing SELECT query:', error);
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
    const query = 'SELECT n.basicsID, n.primaryName, n.image, n.birthYear, n.deathYear, n.primaryProfession, p.titleID, p.category FROM nameBasics n inner join principals p on n.basicsID = p.basicsID WHERE n.basicsID = ?'
    pool.query(query,nameID, (error, results, fields) => {
        if (error) throw error;
        const personData = results.map(row => ({
            basicsID: row.basicsID,
            primaryName: row.primaryName,
            image: row.image,
            birthYear: row.birthYear,
            deathYear: row.deathYear,
            primaryProfession: row.primaryProfession,
            titles: results.map(title => ({
                titleID: title.titleID,
                category: title.category
          }))
        }));
        if (personData[0] === undefined) {return res.status(200).json({ "message" : "Name not found"}); }
        else {
        res.status(200).json({success: 1, nameObject:personData[0]})
        }
      });    
};

exports.getSearchName = (req, res) => {
    //console.log('req.query:', req.query);

    const { namePart } =  req.query;

    if (!namePart) {
        //console.log("namepart missing")
        return res.status(400).json({
            success: 0,
            message: 'namepart missing'
        });
    }
    ////console.log("namepart not missing")

    const q = 'SELECT basicsID FROM nameBasics WHERE primaryName LIKE ?';

    pool.query(q, [`%${namePart}%`], (error, searchresults, fields) => {
        if (error) {
            //console.error('Error executing query', error);
            return res.status(500).json({
                success: 0,
                message: 'Database error'
            });
        }

        if (searchresults.length === 0) {
            return res.status(200).json({
                success: 0,
                message: 'Names not found'
            });
        }

        const promises = searchresults.map((result) => {
            return getnameObjectById(result.basicsID)  // Ensure basicsID matches the column name
                .catch((error) => {
                    //console.error(error);
                    return { error: 'Error getting name object' };
                });
        });

        Promise.all(promises)
            .then((nameObjects) => {
                //console.log("Search Results:", nameObjects);
                return res.status(200).json(nameObjects);
            })
            .catch((error) => {
                //console.error(error);
                return res.status(500).json({ error: 'Internal Server Error' });
            });
    });
}
