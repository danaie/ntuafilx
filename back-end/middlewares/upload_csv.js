const fs = require('fs');
const csv = require('fast-csv');
const { pool } = require('../utils/database');

function upload_csv(path){
    let stream = fs.createReadStream(path)
    let csvDataColl = []
    let fileStream = csv
        .parse()
        .on('data',function (data) {
            const row = data.map(value => (value.startsWith('\\') ? null : value));
            csvDataColl.push(row)
        })
        .on('end',function () {
            //console.log(csvDataColl)
            csvDataColl.shift();
            pool.getConnection((error,connection) =>{
                if (error) {
                    console.log(error)
                }
                else {
                    query = "insert into title (titleID, titleType, primaryTitle, originalTitle, isAdult, startYear, endYear, runtimeMinutes, image) values ?"
                    connection.query(query,[csvDataColl],(error,res) =>{
                        console.log(error || res)
                        connection.release();
                    });
                }
            });
            fs.unlink(path, (err) => {
                if (err) {
                    console.error(err);
                }
            });
        });
        stream.pipe(fileStream);
}

module.exports = upload_csv;