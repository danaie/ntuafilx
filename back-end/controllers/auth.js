const { pool } = require('../utils/database');
const bcrypt = require('bcryptjs');
const {max_age_in_sec, createjwt } = require('../middlewares/createjwt');

exports.createUser = (req,res,next) => {
    const username = req.params.username;
    var password = req.params.password;
    if (!username || !password) 
        return res.status(400).json({ error: 'Username and password params are required'});
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            if (err)
                return res.status(500).json({ error: 'error while hashing'})
            const query = 'insert into user (username, password) values (?,?)';
            pool.getConnection((err,connection) => {
                if (err) {
                    console.log(error)
                    return res.status(500).json({ error: err});
                }
                else {
                    connection.query(query,[username,hash], (error,result) => {
                        connection.release();
                        if (error) {
                            console.log(error)
                            if (error.code = 'ER_DUP_ENTRY')
                                return res.status(400).json({error: 'Username already used'})
                            return res.status(500).json({ error: error});
                        };
                        console.log(result.insertId)
                        return res.status(200).json({status:"OK", message:"User added succesfuly"});
                    });
                }
            });
        });
    });
}

exports.createAdmin = (req,res,next) => {
    const username = req.params.username;
    var password = req.params.password;
    if (!username || !password) 
        return res.status(400).json({ error: 'Username and password params are required'});
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            if (err)
                return res.status(500).json({ error: 'error while hashing'})
            const query = 'insert into user (username, password, isAdmin) values (?,?,true)';
            pool.getConnection((err,connection) => {
                if (err) {
                    console.log(err)
                    return res.status(500).json({ error: err});
                }
                else {
                    connection.query(query,[username,hash], (error,result) => {
                        connection.release();
                        if (error) {
                            console.log(error)
                            if (error.code = 'ER_DUP_ENTRY')
                                return res.status(400).json({error: 'Username already used'})
                            return res.status(500).json({ error: error});
                        };
                        console.log(result)
                        return res.status(200).json({status:"OK", message:"User added succesfuly"});
                    });
                }
            });
        });
    });
}

exports.login = (req,res,next) => {
    const req_username = req.body.username;
    const req_password = req.body.password;
    if (!req_password || !req_username)
        return res.status(400).json({ error: 'Username and password are required'});
    const query = 'select * from user where username = ?';
    pool.getConnection((err,connection) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ error: err});
        }
        else {
            connection.query(query, req_username, (error,result) => {
                connection.release();
                //console.log(result);
                if (error) {
                    console.log(error)
                    return res.status(500).json({ error: error});
                };
                if (result.length == 0)
                    return res.status(404).json({error:"Invalid username"})
                else {
                    const { userID, password, isAdmin } = result[0]
                    bcrypt.compare(req_password, password, function(err, res_bcrypt) {
                        if (!res_bcrypt)
                        return res.status(400).json({error:"Invalid username or password"})
                        else {
                            const token = createjwt(userID, isAdmin);
                            res.cookie('X-OBSERVATORY-AUTH',token, {httpOnly:true, maxAge: max_age_in_sec*1000});
                            return res.status(200).json({token:token});
                        }
                    });
                }
            });
        }
    });
};

exports.logout = (req,res,next) => {
    res.cookie('X-OBSERVATORY-AUTH','', {maxAge: 1});
    res.status(200).json({status:'OK',message:'Logout successful'})
}

exports.viewUser = (req,res,next) => {
    const username = req.params.username;
    const query = 'select * from user where username = ?';
    pool.getConnection((err,connection) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ error: err});
        }
        else {
            connection.query(query, username, (error,result) => {
                connection.release();
                //console.log(result);
                if (error) {
                    console.log(error)
                    return res.status(500).json({ error: error});
                };
                if (result.length == 0)
                    return res.status(400).json({error:"No user with this username"})
                else
                    return res.status(200).json(result[0]);
                });
        }
    });
}

exports.profile = (req,res,next) => {
    const userid = req.userID;
    const query = 'select * from user where userID = ?';
    pool.getConnection((err,connection) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ error: err});
        }
        else {
            connection.query(query, userid, (error,result) => {
                connection.release();
                //console.log(result);
                if (error) {
                    console.log(error)
                    return res.status(500).json({ error: error});
                };
                return res.status(200).json(result[0]);
                });
        }
    });
}