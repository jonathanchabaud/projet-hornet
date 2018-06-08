DROP TABLE IF EXISTS PERMIS_MVF CASCADE;
DROP TABLE IF EXISTS PERSONNE_MVF CASCADE;
DROP TABLE IF EXISTS DOSSIER_MVF CASCADE;
DROP TABLE IF EXISTS NOTE_VERBALE_PERMIS_MVF CASCADE;
DROP TABLE IF EXISTS NOTE_VERBALE_MVF CASCADE;
DROP TABLE IF EXISTS ATTESTATION_MVF CASCADE;
DROP TABLE IF EXISTS BORDEREAU_ATTESTATION_MVF CASCADE;
DROP TABLE IF EXISTS BORDEREAU_MVF CASCADE;

CREATE TABLE PERMIS_MVF (
  ID_PERMIS_MVF INTEGER PRIMARY KEY
  , NUM_PERMIS TEXT NOT NULL
  , ID_COPIE_PERMIS_MVF INTEGER UNIQUE NOT NULL
  , ID_PERSONNE_MVF INTEGER UNIQUE
  , ID_DOSSIER_MVF INTEGER UNIQUE
);

CREATE TABLE PERSONNE_MVF (
  ID_PERSONNE_MVF INTEGER PRIMARY KEY
  , NOM TEXT NOT NULL
  , PRENOM TEXT NOT NULL
  , DATE_DE_NAISSANCE DATE NOT NULL
  , SEXE TEXT NOT NULL
  , ID_PERMIS_MVF INTEGER UNIQUE
);

CREATE TABLE DOSSIER_MVF (
  ID_DOSSIER_MVF INTEGER PRIMARY KEY
  , ID_COPIE_DEMANDE_PREFECTURE_MVF INTEGER UNIQUE NOT NULL
  , DATE_RECEPTION_DOSSIER DATE NOT NULL
  , ID_PERMIS_MVF INTEGER UNIQUE
  , ID_PREFECTURE_ENVOI INTEGER
);

CREATE TABLE NOTE_VERBALE_PERMIS_MVF (
  ID_NOTE_VERBALE_PERMIS_MVF INTEGER PRIMARY KEY
  , ID_PERMIS_MVF INTEGER UNIQUE
  , ID_NOTE_VERBALE_MVF INTEGER UNIQUE
);

CREATE TABLE NOTE_VERBALE_MVF (
  ID_NOTE_VERBALE_MVF INTEGER PRIMARY KEY
  , NUM_NOTE_VERBALE TEXT UNIQUE NOT NULL
  , DATE_DU_TRAITEMENT DATE NOT NULL
);

CREATE TABLE ATTESTATION_MVF (
  ID_ATTESTATION_MVF INTEGER PRIMARY KEY
  , ID_COPIE_ATTESTATION_MVF INTEGER UNIQUE NOT NULL
  , ID_COPIE_NOTE_VERBALE_MAECI_MVF INTEGER UNIQUE NOT NULL
  , DATE_RECEPTION_ATTESTATION DATE NOT NULL
  , ID_PERMIS_MVF INTEGER UNIQUE
);

CREATE TABLE BORDEREAU_ATTESTATION_MVF (
  ID_BORDEREAU_ATTESTATION_MVF INTEGER PRIMARY KEY
  , ID_ATTESTATION_MVF INTEGER
  , ID_BORDEREAU_MVF INTEGER UNIQUE
);

CREATE TABLE BORDEREAU_MVF (
  ID_BORDEREAU_MVF INTEGER PRIMARY KEY
  , NUM_BORDEREAU TEXT UNIQUE NOT NULL
  , DATE_ENVOI_DE_LA_REPONSE_PREFECTURE DATE NOT NULL
  , NUM_VALISE INTEGER NOT NULL
);

DROP TABLE IF EXISTS COPIE_PERMIS_MVF CASCADE;
DROP TABLE IF EXISTS COPIE_DEMANDE_PREFECTURE_MVF CASCADE;
DROP TABLE IF EXISTS COPIE_ATTESTATION_MVF CASCADE;
DROP TABLE IF EXISTS COPIE_NOTE_VERBALE_MAECI_MVF CASCADE;

CREATE TABLE COPIE_PERMIS_MVF (
  ID_COPIE_PERMIS_MVF INTEGER PRIMARY KEY
  , NOM TEXT UNIQUE NOT NULL
  , MIMETYPE TEXT NOT NULL
  , ENCODING TEXT NOT NULL
  , SIZE INTEGER NOT NULL
  , DATA BYTEA NOT NULL
  , ID_PERMIS_MVF INTEGER UNIQUE
);

CREATE TABLE COPIE_DEMANDE_PREFECTURE_MVF (
  ID_COPIE_DEMANDE_PREFECTURE_MVF INTEGER PRIMARY KEY
  , NOM TEXT UNIQUE NOT NULL
  , MIMETYPE TEXT NOT NULL
  , ENCODING TEXT NOT NULL
  , SIZE INTEGER NOT NULL
  , DATA BYTEA NOT NULL
  , ID_DOSSIER_MVF INTEGER UNIQUE
);

CREATE TABLE COPIE_ATTESTATION_MVF (
  ID_COPIE_ATTESTATION_MVF INTEGER PRIMARY KEY
  , NOM TEXT UNIQUE NOT NULL
  , MIMETYPE TEXT NOT NULL
  , ENCODING TEXT NOT NULL
  , SIZE INTEGER NOT NULL
  , DATA BYTEA NOT NULL
  , ID_ATTESTATION_MVF INTEGER UNIQUE
);

CREATE TABLE COPIE_NOTE_VERBALE_MAECI_MVF (
  ID_COPIE_NOTE_VERBALE_MAECI_MVF INTEGER PRIMARY KEY
  , NOM TEXT UNIQUE NOT NULL
  , MIMETYPE TEXT NOT NULL
  , ENCODING TEXT NOT NULL
  , SIZE INTEGER NOT NULL
  , DATA BYTEA NOT NULL
  , ID_ATTESTATION_MVF INTEGER UNIQUE
);

COMMIT;
