const jwt = require('jsonwebtoken');
const { pool } = require('../utils/database');
const {secret_key} = require('./createjwt');

exports.authAdmin = (req,res,next) => { 
    const token = req.header('X-OBSERVATORY-AUTH');
    console.log(token);
    if (token) {
        jwt.verify(token,secret_key, (err,decoded) => {
            if (err || decoded.isAdmin == 0){
                return res.status(401).json({ error: 'Unauthorized' });
            }
            else {
                console.log(decoded);
                next();
            }
        })
    }
    else {
        return res.status(401).json({ error: 'Unauthorized' });
    }
}

exports.authRightUser = (req,res,next) =>{
    const token = req.header('X-OBSERVATORY-AUTH');
    if (token) {
        jwt.verify(token,secret_key, (err,decoded) => {
            if (err){
                return res.status(401).json({ error: 'Unauthorized' });
            }
            else {
                const username = req.params.username;
                const query = 'select * from user where userID = ?';
                pool.getConnection((err,connection) => {
                    if (err) {
                        console.log(err)
                        return res.status(500).json({ error: err});
                    }
                    else {
                        connection.query(query, decoded.id, (error,result) => {
                            connection.release();
                            //console.log(result);
                            if (error) {
                                console.log(error)
                                return res.status(500).json({ error: error});
                            };
                            if (result.length == 0)
                                return res.status(401).json({ error: 'Unauthorized' });
                            else
                                if (username == result[0].username)
                                    next();
                                else {
                                    return res.status(401).json({ error: 'Unauthorized' });
                                }
                            });
                    }
                });
            }
        })
    }
    else {
        return res.status(401).json({ error: 'Unauthorized' });
    }
}


exports.authUser = (req,res,next) => { 
    const token = req.header('X-OBSERVATORY-AUTH');
    if (token) {
        jwt.verify(token,secret_key, (err,decoded) => {
            if (err){
                return res.status(401).json({ error: 'Unauthorized' });
            }
            else {
                //console.log(decoded);
                req.userID = decoded.id;
                next();
            }
        })
    }
    else {
        return res.status(401).json({ error: 'Unauthorized' });
    }
}