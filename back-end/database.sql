-- ---------------
-- Create database
-- ---------------
create database imbd;
use imbd;
 
-- drop database imbd;

-- --------------
-- Create Tables
-- --------------
create table user (
	userID varchar(10) primary key,
    username varchar(15) not null unique,
    password varchar(20) not null,
    isAdmin bool
);

create table title (
	titleID varchar(10) primary key,
    titleType varchar(100) not null,
    primaryTitle varchar(100) not null,
    originalTitle varchar(100) not null,
    isAdult bool not null,
    startYear int not null,
    endYear int,
    runtimeMinutes int,
    genres varchar(100),
    image varchar(100)
);

create table watchlist (
	userID varchar(10),
    titleID varchar(10),
    foreign key (userID)
		references user (userID),
	foreign key (titleID)
		references title (titleID),
        constraint unique (userID, titleID)
);


create table ratings (
	titleID varchar(10),
    averageRating float not null,
    numVotes int not null,
    foreign key (titleID)
		references title (titleID)
);

create table titleAKA (
	titleID varchar(10),
    ordering int not null,
    title varchar(150) not null,
    region varchar(100) ,
    language varchar(100) ,
    types varchar(100) ,
    atributes varchar(100),
    isOriginal bool not null
);

create table episode (
	episodeID varchar(10) primary key,
    titleID varchar(10),
    season int ,
    episodeNumber int 
);

create table nameBasics (
	basicsID varchar(10) primary key,
    primaryName varchar(100) not null,
    birthYear int ,
    deathYear int,
    primaryProfession varchar(100),
    knowForTitles varchar(100),
    image varchar(100)
);

create table principals (
	titleID varchar(10),
    ordering int not null,
    basicsID varchar(10),
    category varchar(100) not null,
    job varchar(100),
    characters varchar(100),
    image varchar(100),
    foreign key (titleID)
		references title (titleID),
	foreign key (basicsID)
		references nameBasics (basicsID),
        constraint unique (titleID, basicsID) 
);

create table crew (
	titleID varchar(10) primary key,
    directors varchar(100),
    writers varchar(100)
);

-- -----------------------------
-- stored procedure 
-- -----------------------------

DELIMITER //
CREATE PROCEDURE ClearAllTables()
BEGIN
    DECLARE done INT DEFAULT 0;
    DECLARE tableName VARCHAR(255);

    -- Cursor to iterate through tables
    DECLARE tableCursor CURSOR FOR
        SELECT table_name
        FROM information_schema.tables
        WHERE table_schema = 'imbd';

    -- Declare continue handler to exit loop when no more tables are found
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

    -- Open the cursor
    OPEN tableCursor;
    SET FOREIGN_KEY_CHECKS = 0;

    -- Loop through all tables and truncate each one
    tableLoop: LOOP
        FETCH tableCursor INTO tableName;

        IF done THEN
            LEAVE tableLoop;
        END IF;

        SET @truncateQuery = CONCAT('TRUNCATE TABLE ', tableName);
        PREPARE truncateStatement FROM @truncateQuery;
        EXECUTE truncateStatement;
        DEALLOCATE PREPARE truncateStatement;
    END LOOP;
	
    SET FOREIGN_KEY_CHECKS = 1;
    -- Close the cursor
    CLOSE tableCursor;
END //
DELIMITER ;
