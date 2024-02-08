const { pool } = require('../utils/database');

exports.getSearchTitleSimple = (req, res) => {
    const { titlePart } = req.query;
    console.log(titlePart);
    const q = 'SELECT titleID, originalTitle, image FROM title WHERE originalTitle LIKE ?';
    pool.query(q, [`%${titlePart}%`], (error, searchresults, fields) => {
        if (error) {
            console.error('Error executing query', error);
            return res.status(500).json({
                success: 0,
                message: 'Database error'
            });
        }
        if (searchresults.length === 0) {
            return res.status(404).json({
                success: 0,
                message: 'Movie not found'
            });
        }
        return res.status(200).json({success:1, data:searchresults})
    });
};

exports.getbyGendreSimple =  (req, res, next) => {
    const { qgenre } = req.query;
    const { minrating } = req.query;
    const { yrFrom } = req.query;
    const { yrTo } = req.query;
    q = "SELECT titleID, originalTitle,image FROM (title INNER JOIN ratings USING (titleID)) WHERE genres LIKE ? AND averageRating >= ?";
    if (yrFrom != null && yrTo != null) { q = q + "AND startYear BETWEEN ? AND ?" }
    pool.query(q, [`%${qgenre}%`, minrating, yrFrom, yrTo], (error, searchresults, fields) => {
        if (error) {
            console.error('Error executing query', error);
            return res.status(500).json({
                success: 0,
                message: 'Database error'
            });
        }
        if (searchresults.length === 0) {
            return res.status(404).json({
                success: 0,
                message: 'Movie not found'
            });
        }
        res.status(200).json({success:1,data:searchresults})
    });

}

exports.getSearchNameSimple = (req, res) => {
    const { namePart } = req.query;
    const q = 'SELECT basicsID, primaryName, image FROM nameBasics WHERE primaryName LIKE ?';

    pool.query(q, [`%${namePart}%`], (error, searchresults, fields) => {
        if (error) {
            console.error('Error executing query', error);
            return res.status(500).json({
                success: 0,
                message: 'Database error'
            });
        }

        if (searchresults.length === 0) {
            return res.status(404).json({
                success: 0,
                message: 'Names not found'
            });
        }
        return res.status(200).json({success:1, data:searchresults})
    });
}


exports.getTopRated = (req,res,next) => {
    const query = 'select t.titleID, t.image, t.originalTitle, r.averageRating from title t join ratings r ON t.titleID = r.titleID order by r.averageRating desc limit 10';
    pool.getConnection((err,connection) => {
        if (err)
            return res.status(500).json({error:err});
        connection.query(query,(error, result) => {
            if (error) 
                return res.status(500).json({error:error});
            return res.status(200).json({data:result});
        })
    })
}

exports.getKnownFor = (req, res, next) => {
    const id = req.params.nameID;
    console.log(id);
    const query = 'select t.titleID, t.image ,t.primaryTitle from nameBasics n join title t on FIND_IN_SET(t.titleID, n.knowForTitles) > 0 where n.basicsID = ?';
    pool.getConnection((err,connection) => {
        if (err)
            return res.status(500).json({error:err});
        connection.query(query,id,(error, result) => {
            if (error) 
                return res.status(500).json({error:error});
            return res.status(200).json({data:result});
        })
    })
}
