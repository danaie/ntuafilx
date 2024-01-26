const { pool } = require('../utils/database');

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into user(username, password) values(?,?)`,
            [
                data.username,
                data.password
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        );
    }
};