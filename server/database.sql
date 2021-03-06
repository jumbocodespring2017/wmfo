/*DROP TABLE IF EXISTS show CASCADE;*/

CREATE TABLE show(
    name TEXT,
    description TEXT,
    showID INTEGER PRIMARY KEY,
    semestersActive INTEGER,
    day INTEGER,
    hour INTEGER,
    length INTEGER,
    alternating BOOLEAN);

/*DROP TABLE IF EXISTS dj CASCADE;*/

CREATE TABLE dj(
    firstName TEXT,
    lastName TEXT,
    djName TEXT,
    tuftsID INTEGER,
        email VARCHAR(100) PRIMARY KEY,
    volunteerHours INTEGER,
        passwordHash: TEXT,
    active BOOLEAN,
    eboard BOOLEAN);

/*DROP TABLE IF EXISTS djShow CASCADE;*/

CREATE TABLE djShow(
    tuftsID INTEGER,
    showID INTEGER);

CREATE TABLE volunteerLog(
  tuftsID INTEGER,
  date DATE,
  length INTEGER,
  approved BOOLEAN,
  task TEXT);

CREATE TABLE showRequest(
       tuftsID INTEGER, -- primary key (1 tufts ID)
       otherIDs INTEGER ARRAY, -- all other tufts IDs
       numDJs INTEGER,
       name TEXT,
       description TEXT,
       possibleShowdays INTEGER ARRAY[15],
       posssibleShowtimes INTEGER ARRAY[15],
       alternating BOOLEAN,
       length INTEGER);

CREATE TABLE showRenewal(
       renewalDate DATE,
       showID INTEGER);

ALTER TABLE showRequest
 ADD FOREIGN KEY (tuftsID)
 REFERENCES dj(tuftsID);

ALTER TABLE showRenewal
 ADD FOREIGN KEY (showID)
 REFERENCES show(showID);

ALTER TABLE djShow
 ADD FOREIGN KEY (tuftsID)
 REFERENCES dj(tuftsID);

ALTER TABLE djShow
 ADD FOREIGN KEY (showID)
 REFERENCES show(showID);

ALTER TABLE volunteerLog
 ADD FOREIGN KEY (tuftsID)
 REFERENCES dj(tuftsID);



