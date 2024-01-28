const { pool } = require('../utils/database');

exports.getTitleById = (req, res) => {
    const titleID = req.params.id; 
    const q1 = 'SELECT * FROM title WHERE titleID = ?';
    pool.query(q1, [titleID], (error, results, fields) => {
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
        const title = results[0];
        return res.status(200).json({
            success: 1,
            data: title
        });
    });
};

exports.searchTitleByPart = (req, res) => {
    const titlePart = req.params.titlePart; 
    const q2 = 'SELECT * FROM title WHERE originalTitle LIKE ?;';
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

exports.getTitleByGenre = (req, res) => {
    const qgenre = req.params.qgenre;
    const minrating = req.params.minrating;
    const yrFrom = req.params.yrFrom || null;
    const yrTo = req.params.yrTo || null;
    let q;
    let queryParams;
    const q3 = 'SELECT * FROM title WHERE genres = ? AND title.titleID IN (SELECT ratings.titleID FROM ratings WHERE ratings.averageRating >= ?)';
    const q4 = 'SELECT * FROM title WHERE genres = ? AND title.titleID IN (SELECT ratings.titleID FROM ratings WHERE ratings.averageRating >= ?) AND startYear BETWEEN ? AND ?'
    if (yrFrom != null && yrTo != null) {
        q = q4;
        queryParams = [qgenre, minrating, yrFrom, yrTo];
    } else {
        q = q3;
        queryParams = [qgenre, minrating];
    }

    pool.query(q, queryParams, (error, results, fields) => {
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
};

exports.getNameById = (req, res) => {
    const titleID = req.params.id; 
    const q1 = 'SELECT * FROM title WHERE titleID = ?';
    pool.query(q1, [titleID], (error, results, fields) => {
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
        const title = results[0];
        return res.status(200).json({
            success: 1,
            data: title
        });
    });
};