const fs = require('fs');
const tsv = require('fast-csv');
const { pool } = require('../utils/database');
function upload_tsv(path, query, callback) {
    let stream = fs.createReadStream(path);
    let tsvDataColl = [];

    let fileStream = tsv
        .parse({ delimiter: '\t' })
        .on('data', function (data) {
            const row = data.map(value => (value.startsWith('\\') ? null : value));
            tsvDataColl.push(row);
        })
        .on('end', function () {
            tsvDataColl.shift();
            pool.getConnection((error, connection) => {
                if (error) {
                    callback(error); 
                } else {
                    connection.query(query, [tsvDataColl], (error, res) => {
                        connection.release();
                        if (error) {
                            callback(error); 
                            fs.unlink(path, (err) => {
                                if (err) {
                                    console.error(err);
                                }
                            });
                        } else {
                            console.log(res||error)
                            fs.unlink(path, (err) => {
                                if (err) {
                                    callback(err); 
                                } else {
                                    callback(null, res); // Signal successful completion
                                }
                            });
                        }
                    });
                }
            });
        });

    stream.pipe(fileStream);
}
module.exports = upload_tsv;