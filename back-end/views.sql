-- ------------------------
-- -- VIEWS FOR titleObject
-- ------------------------

-- drop view titleObject;
-- drop view titleAKAlist;
-- drop view titleObject;


CREATE VIEW titleObject AS
SELECT title.titleID, title.titleType, title.originalTitle, title.image, title.startYear, title.endYear, title.genres, CONCAT(ratings.averageRating, ', ' , ratings.numVotes) AS ratingsObject
FROM title
JOIN ratings ON title.titleID = ratings.titleID;

CREATE VIEW titleAKAlist AS
SELECT titleID, title, region
FROM titleAKA;

CREATE VIEW principalsList AS
SELECT titleID, principals.basicsID, nameBasics.primaryName, principals.category
FROM principals
JOIN nameBasics ON principals.basicsID = nameBasics.basicsID;

