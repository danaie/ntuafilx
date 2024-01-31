const jsoncsv = require('json-csv');

// Convert JSON to CSV middleware
const jsonToCsvMiddleware = async (req, res, next) => {
    if (req.query.format === 'csv') {
        const originalJsonFunction = res.json;

        // Override res.json() to intercept the JSON response
        res.json = function(data) {
            originalJsonFunction.call(this, data);
            const options = {
                fields: []
            };
            console.log(data);
            jsoncsv.buffered(data, options, (err, csv) => {
                if (err) {
                    return res.status(500).json({ error: 'Error while converting to CSV' });
                }
                res.send(csv);
            });
        };
    }
    next();
};

module.exports = jsonToCsvMiddleware;
