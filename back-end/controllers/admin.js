const { pool } = require('../utils/database');

exports.getHealthcheck = (req, res, next) => {
    res.status(200).json({ message: 'GET Health check!' });
}

exports.postResetall =  (req, res, next) => {
    pool.getConnection((error,connection) =>{
        if (error) {
            console.log(error)
            res.send(500).json({status:"failed",reason:error})
        }
        else {
            connection.query('call ClearAllTables()', (error, result) => {
                if (error) {
                    console.log(error)
                    res.send(500).json({status:"failed",reason:error}) 
                };
                    console.log(result)
                    res.status(200).json({status: "OK"});
                });
              }
            });
}
