/* Tables spécifiques à la partie FVM */

DROP TABLE IF EXISTS PERMIS_FVM CASCADE;
DROP TABLE IF EXISTS PERSONNE_FVM CASCADE;
DROP TABLE IF EXISTS DOSSIER_FVM CASCADE;
DROP TABLE IF EXISTS DEMANDE_AUTHENTIFICATION_FVM CASCADE;
DROP TABLE IF EXISTS RELEVE_FVM CASCADE;
DROP TABLE IF EXISTS NOTE_VERBALE_RELEVE_FVM CASCADE;
DROP TABLE IF EXISTS NOTE_VERBALE_FVM CASCADE;

CREATE TABLE PERMIS_FVM (
  ID_PERMIS_FVM INTEGER PRIMARY KEY
  , NUM_PERMIS TEXT NOT NULL
  , ID_COPIE_PERMIS_FVM INTEGER UNIQUE NOT NULL
  , DATE_DE_DELIVRANCE DATE NOT NULL
  , ID_PERSONNE_FVM INTEGER UNIQUE
  , ID_DOSSIER_FVM INTEGER UNIQUE
  , ID_PREFECTURE_DELIVRANCE INTEGER
);

CREATE TABLE PERSONNE_FVM (
  ID_PERSONNE_FVM INTEGER PRIMARY KEY
  , NOM TEXT NOT NULL
  , PRENOM TEXT NOT NULL
  , TITRE TEXT NOT NULL
  , DATE_DE_NAISSANCE DATE NOT NULL
  , VILLE_DE_NAISSANCE TEXT NOT NULL
  , PAYS_DE_NAISSANCE TEXT NOT NULL
  , ID_PERMIS_FVM INTEGER UNIQUE
);

CREATE TABLE DOSSIER_FVM (
  ID_DOSSIER_FVM INTEGER PRIMARY KEY
  , ID_COPIE_NOTE_VERBALE_MAECI_FVM INTEGER UNIQUE NOT NULL
  , DATE_RECEPTION_DOSSIER DATE NOT NULL
  , ID_PERMIS_FVM INTEGER UNIQUE
);

CREATE TABLE DEMANDE_AUTHENTIFICATION_FVM (
  ID_DEMANDE_AUTHENTIFICATION_FVM INTEGER PRIMARY KEY
  , NUM_DEMANDE_AUTHENTIFICATION TEXT UNIQUE NOT NULL
  , DATE_DE_CREATION DATE NOT NULL
  , DATE_DU_TRAITEMENT DATE NOT NULL
  , ID_PERMIS_FVM INTEGER UNIQUE
  , NUM_VALISE INTEGER NOT NULL
);

CREATE TABLE RELEVE_FVM (
  ID_RELEVE_FVM INTEGER PRIMARY KEY
  , ID_COPIE_RELEVE_FVM INTEGER UNIQUE NOT NULL
  , ID_COPIE_COURRIER_PREFECTURE_FVM INTEGER UNIQUE NOT NULL
  , DATE_RECEPTION_RELEVE DATE NOT NULL
  , ID_PERMIS_FVM INTEGER UNIQUE
);

CREATE TABLE NOTE_VERBALE_RELEVE_FVM (
  ID_NOTE_VERBALE_RELEVE_FVM INTEGER PRIMARY KEY
  , ID_RELEVE_FVM INTEGER
  , ID_NOTE_VERBALE_FVM INTEGER UNIQUE
);

CREATE TABLE NOTE_VERBALE_FVM (
  ID_NOTE_VERBALE_FVM INTEGER PRIMARY KEY
  , NUM_NOTE_VERBALE TEXT UNIQUE NOT NULL
  , DATE_ENVOI_DE_LA_REPONSE_AU_MAECI DATE NOT NULL
);

DROP TABLE IF EXISTS COPIE_PERMIS_FVM CASCADE;
DROP TABLE IF EXISTS COPIE_NOTE_VERBALE_MAECI_FVM CASCADE;
DROP TABLE IF EXISTS COPIE_RELEVE_FVM CASCADE;
DROP TABLE IF EXISTS COPIE_COURRIER_PREFECTURE_FVM CASCADE;

CREATE TABLE COPIE_PERMIS_FVM (
  ID_COPIE_PERMIS_FVM INTEGER PRIMARY KEY
  , NOM TEXT UNIQUE NOT NULL
  , MIMETYPE TEXT NOT NULL
  , ENCODING TEXT NOT NULL
  , SIZE INTEGER NOT NULL
  , DATA BYTEA NOT NULL
  , ID_PERMIS_FVM INTEGER UNIQUE
);

CREATE TABLE COPIE_NOTE_VERBALE_MAECI_FVM (
  ID_COPIE_NOTE_VERBALE_MAECI_FVM INTEGER PRIMARY KEY
  , NOM TEXT UNIQUE NOT NULL
  , MIMETYPE TEXT NOT NULL
  , ENCODING TEXT NOT NULL
  , SIZE INTEGER NOT NULL
  , DATA BYTEA NOT NULL
  , ID_DOSSIER_FVM INTEGER UNIQUE
);

CREATE TABLE COPIE_RELEVE_FVM (
  ID_COPIE_RELEVE_FVM INTEGER PRIMARY KEY
  , NOM TEXT UNIQUE NOT NULL
  , MIMETYPE TEXT NOT NULL
  , ENCODING TEXT NOT NULL
  , SIZE INTEGER NOT NULL
  , DATA BYTEA NOT NULL
  , ID_RELEVE_FVM INTEGER UNIQUE
);

CREATE TABLE COPIE_COURRIER_PREFECTURE_FVM (
  ID_COPIE_COURRIER_PREFECTURE_FVM INTEGER PRIMARY KEY
  , NOM TEXT UNIQUE NOT NULL
  , MIMETYPE TEXT NOT NULL
  , ENCODING TEXT NOT NULL
  , SIZE INTEGER NOT NULL
  , DATA BYTEA NOT NULL
  , ID_RELEVE_FVM INTEGER UNIQUE
);

COMMIT;
