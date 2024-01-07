const fs = require('fs');
const tsv = require('fast-csv');
const { pool } = require('../utils/database');

function upload_tsv(path,query){
    let stream = fs.createReadStream(path)
    let tsvDataColl = []
    let fileStream = tsv
        .parse({ delimiter: '\t' })
        .on('data',function (data) {
            const row = data.map(value => (value.startsWith('\\') ? null : value));
            tsvDataColl.push(row)
        })
        .on('end',function () {
            tsvDataColl.shift();
            pool.getConnection((error,connection) =>{
                if (error) {
                    console.log(error)
                }
                else {
                    connection.query(query,[tsvDataColl],(error,res) =>{
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

module.exports = upload_tsv;