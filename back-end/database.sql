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
    titleType varchar(20) not null,
    primaryTitle varchar(100) not null,
    originalTitle varchar(100) not null,
    isAdult bool not null,
    startYear year not null,
    endYear year,
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

create table tilteAKA (
	titleID varchar(10),
    ordering int not null,
    title varchar(20) not null,
    region varchar(20) ,
    language varchar(20) ,
    atributes varchar(100),
    isOriginal bool not null
);

create table episode (
	episodeID varchar(10) primary key,
    titleID varchar(10),
    season int ,
    episodeNumber int ,
    foreign key (titleID)
		references title (titleID)
);

create table nameBasics (
	basicsID varchar(10) primary key,
    primaryName varchar(20) not null,
    birthYear year not null,
    deathYear year,
    primaryProfession varchar(100),
    knowForTitles varchar(100),
    image varchar(100)
);

create table principals (
	titleID varchar(10),
    ordering int not null,
    basicsID varchar(10),
    category varchar(20) not null,
    job varchar(20),
    characters varchar(100),
    foreign key (titleID)
		references title (titleID),
	foreign key (basicsID)
		references nameBasics (basicsID),
        constraint unique (titleID, basicsID) 
);

create table crew (
	titleID varchar(10),
    directors varchar(10),
    writers varchar(10),
    foreign key (titleID)
		references title (titleID),
	foreign key (directors)
		references nameBasics (basicsID),
        constraint unique (titleID, directors),
        foreign key (writers)
		references nameBasics (basicsID),
        constraint unique (titleID, writers) 
);