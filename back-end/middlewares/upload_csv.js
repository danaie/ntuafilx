const fs = require('fs');
const { pool } = require('../utils/database');

function upload_csv(path,query){
    let stream = fs.createReadStream(path)
    let csvDataColl = []
    let fileStream = csv
        .parse()
        .on('data',(data) =>{
            csvDataColl.push(data)
        })
        .on('end',() => {
            console.log(csvDataColl)
            /*
            csvDataColl.shift();
            pool.getConnection((error,connection) =>{
                if (error) {
                    console.log(error)
                }
                else {
                    connection.query(query,[csvDataColl],(error,res) =>{
                        console.log(error || res)
                    });
                }
            });
            */
            fs.unlink(path)
        });
        stream.pipe(fileStream);
}

module.exports = upload_csv;