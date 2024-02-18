const { pool } = require('../utils/database');

exports.getHealthcheck = (req, res, next) => {
    pool.getConnection((error,connection) => {
        const connectionString = `mysql://${connection.config.user}:${connection.config.password}@${connection.config.host}/${connection.config.database}`;
        connection.release();
        if (error) {
            //console.log("Database Connection failed", err);
            res.status(500).json({status:'failed', dataconnection:`${connectionString}`});
        }
        else {
            res.status(200).json({status:"OK",dataconnection:`${connectionString}`});
        }
    });
}

exports.postResetall =  (req, res, next) => {
    pool.getConnection((error,connection) =>{
        if (error) {
            //console.log(error)
            res.send(500).json({status:"failed",eroor:error})
        }
        else {
            connection.query('call ClearAllTables()', (error, result) => {
                connection.release();
                if (error) {
                    //console.log(error)
                    res.send(500).json({status:"failed",error:error}) 
                };
                    //console.log(result)
                    res.status(200).json({status: "OK"});
                });
              }
            });
}
