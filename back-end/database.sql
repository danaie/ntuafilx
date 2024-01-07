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
    runtimeMinutes int not null,
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

create table genres (
	genresID varchar(10) primary key,
    gernreName varchar(20) not null
);

create table title_gernes (
	titleID varchar(10),
    genresID varchar(10),
    foreign key (titleID)
		references title (titleID),
	foreign key (genresID)
		references genres (genresID),
        constraint unique (titleID, genresID)
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
    region varchar(20) not null,
    language varchar(20) not null,
    isOriginal bool not null
);

create table episode (
	episodeID varchar(10) primary key,
    titleID varchar(10),
    season int not null,
    episodeNumber int not null,
    foreign key (titleID)
		references title (titleID)
);

create table nameBasics (
	basicsID varchar(10) primary key,
    primaryName varchar(20) not null,
    birthYear year not null,
    deathYear year,
    primaryProfession varchar(20)
);

create table writers (
	titleID varchar(10),
    basicsID varchar(10),
    foreign key (titleID)
		references title (titleID),
	foreign key (basicsID)
		references nameBasics (basicsID),
        constraint unique (titleID, basicsID) 
);

create table Directors (
	titleID varchar(10),
    basicsID varchar(10),
    foreign key (titleID)
		references title (titleID),
	foreign key (basicsID)
		references nameBasics (basicsID),
        constraint unique (titleID, basicsID) 
);

create table KnownFor (
	titleID varchar(10),
    basicsID varchar(10),
    foreign key (titleID)
		references title (titleID),
	foreign key (basicsID)
		references nameBasics (basicsID),
        constraint unique (titleID, basicsID) 
);

create table principals (
	titleID varchar(10),
    ordering int not null,
    basicsID varchar(10),
    category varchar(20) not null,
    job varchar(20),
    characters varchar(20),
    foreign key (titleID)
		references title (titleID),
	foreign key (basicsID)
		references nameBasics (basicsID),
        constraint unique (titleID, basicsID) 
);
