const path = require("path")

const csv_check = (allowedExtArray) => {
    return (req, res, next) => {
        const files = req.files
        if (path.extname(files) != 'csv') {
            const message = `Upload failed. Only csv files allowed.`;
            return res.status(422).json({ status: "error", message });
        }

        next()
    }
}

module.exports = csv_check