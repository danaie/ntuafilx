const { pool } = require('../utils/database');

exports.getall = (req, res, next) => {
    res.status(200).json({ message: 'Hello World!' });
}

exports.postMovie = (req, res, next) => {
    const userid = req.userID;
    const titleid = req.params.titleID;
    console.log(userid,titleid)
    const query = `insert into watchlist (userID, titleID) values (?,?)`
    pool.getConnection((err,connection) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ error: err});
        }
        else {
            connection.query(query, [userid,titleid],(error,result) => {
                connection.release();
                if (error) {
                    if (error.code = 'ER_DUP_ENTRY')
                        return res.status(400).json({error: 'Movie already in watchlist'})
                    console.log(error)
                    return res.status(500).json({ error: error});
                };
                console.log(result)
                return res.status(200).json({status:"OK", message:"Movie added succesfuly"});
            });
        }
    });
}

exports.deleteMovie = (req, res, next) => {
    const userid = req.userID;
    const titleid = req.params.titleID;
    console.log(userid,titleid)
    const query = 'delete from watchlist where userID = ? and titleID = ?'
    pool.getConnection((err,connection) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ error: err});
        }
        else {
            connection.query(query, [userid,titleid],(error,result) => {
                connection.release();
                if (error) {
                    console.log(error)
                    return res.status(500).json({ error: error});
                };
                console.log(result)
                if (result.affectedRows == 0)
                    return res.status(400).json({error:"Movie is not in the user's watchlist"});
                return res.status(200).json({status:"OK", message:"Movie removed succesfuly"});
            });
        }
    });
}