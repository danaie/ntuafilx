const jwt = require('jsonwebtoken');

const max_age_in_sec = 60 * 60;
const secret_key = 'mhnprospathisiskandenyparxeikamiaperiptoshnabreisautotokleidi'

const createjwt = (id, isAdmin) => {
    return jwt.sign(
        { id, isAdmin },
        secret_key,
        { expiresIn:max_age_in_sec })
}

module.exports = { max_age_in_sec, createjwt , secret_key};