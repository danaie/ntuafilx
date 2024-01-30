const jwt = require('jsonwebtoken');
const {secret_key} = require('./createjwt');

exports.authAdmin = (req,res,next) => {
    const token = req.cookies['X-OBSERVATORY-AUTH'];
    if (token) {
        jwt.verify(token,secret_key, (err,decoded) => {
            if (err || decoded.isAdmin == 0)
                return res.status(401).json({ error: 'Unauthorized' });
            else {
                console.log(decoded);
                next();
            }
        })
    }
    else 
        return res.status(401).json({ error: 'Unauthorized' });
}
