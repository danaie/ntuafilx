const { pool } = require('../utils/database');
const { genSaltSync, hashSync } = require("bcrypt");

exports.createUser = (data, callBack) => {
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
};

exports.createUserHandler = (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    exports.createUser(body, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: "Database connection error"
            })
        }
        return res.status(200).json({
            success: 1,
            data: results
        });
    });
};
