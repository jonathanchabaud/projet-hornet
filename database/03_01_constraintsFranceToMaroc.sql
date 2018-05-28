ALTER TABLE PERMIS_FVM ADD UNIQUE (ID_PERSONNE_FVM, NUM_PERMIS);
ALTER TABLE PERMIS_FVM ADD CONSTRAINT PERSONNE_PERMIS_FK FOREIGN KEY (ID_PERSONNE_FVM)
 REFERENCES PERSONNE_FVM (ID_PERSONNE_FVM);
ALTER TABLE PERMIS_FVM ADD CONSTRAINT DOSSIER_PERMIS_FK FOREIGN KEY (ID_DOSSIER_FVM)
 REFERENCES DOSSIER_FVM (ID_DOSSIER_FVM);
ALTER TABLE PERMIS_FVM ADD CONSTRAINT PREFECTURE_PERMIS_FK FOREIGN KEY (ID_PREFECTURE_DELIVRANCE)
 REFERENCES PREFECTURE (ID_PREFECTURE);
ALTER TABLE PERMIS_FVM ADD CONSTRAINT COPIEPERMIS_PERMIS_FK FOREIGN KEY (ID_COPIE_PERMIS_FVM)
 REFERENCES COPIE_PERMIS_FVM (ID_COPIE_PERMIS_FVM);

--ALTER TABLE COPIE_PERMIS_FVM ADD CONSTRAINT PERMIS_COPIEPERMIS_FK FOREIGN KEY (ID_PERMIS_FVM)
-- REFERENCES PERMIS_FVM (ID_PERMIS_FVM) DEFERRABLE INITIALLY DEFERRED;

ALTER TABLE PERSONNE_FVM ADD CONSTRAINT PERMIS_PERSONNE_FK FOREIGN KEY (ID_PERMIS_FVM)
 REFERENCES PERMIS_FVM (ID_PERMIS_FVM) DEFERRABLE INITIALLY DEFERRED;

ALTER TABLE DOSSIER_FVM ADD CONSTRAINT PERMIS_DOSSIER_FK FOREIGN KEY (ID_PERMIS_FVM)
 REFERENCES PERMIS_FVM (ID_PERMIS_FVM) DEFERRABLE INITIALLY DEFERRED;
ALTER TABLE DOSSIER_FVM ADD CONSTRAINT COPIENOTE_DOSSIER_FK FOREIGN KEY (ID_COPIE_NOTE_VERBALE_MAECI_FVM)
 REFERENCES COPIE_NOTE_VERBALE_MAECI_FVM (ID_COPIE_NOTE_VERBALE_MAECI_FVM);

ALTER TABLE COPIE_NOTE_VERBALE_MAECI_FVM ADD CONSTRAINT DOSSIER_COPIENOTE FOREIGN KEY (ID_DOSSIER_FVM)
 REFERENCES DOSSIER_FVM (ID_DOSSIER_FVM) DEFERRABLE INITIALLY DEFERRED;

ALTER TABLE DEMANDE_AUTHENTIFICATION_FVM ADD CONSTRAINT PERMIS_DEMANDE_FK FOREIGN KEY (ID_PERMIS_FVM)
 REFERENCES PERMIS_FVM (ID_PERMIS_FVM);
ALTER TABLE DEMANDE_AUTHENTIFICATION_FVM ADD CONSTRAINT VALISE_DEMANDE_FK FOREIGN KEY (NUM_VALISE)
 REFERENCES VALISE (NUM_VALISE);

ALTER TABLE RELEVE_FVM ADD CONSTRAINT PERMIS_RELEVE_FK FOREIGN KEY (ID_RELEVE_FVM)
 REFERENCES PERMIS_FVM (ID_PERMIS_FVM);
ALTER TABLE RELEVE_FVM ADD CONSTRAINT COPIERELEVE_RELEVE_FK FOREIGN KEY (ID_COPIE_RELEVE_FVM)
 REFERENCES COPIE_RELEVE_FVM (ID_COPIE_RELEVE_FVM);
ALTER TABLE RELEVE_FVM ADD CONSTRAINT COPIECOURRIER_RELEVE_FK FOREIGN KEY (ID_COPIE_COURRIER_PREFECTURE_FVM)
 REFERENCES COPIE_COURRIER_PREFECTURE_FVM (ID_COPIE_COURRIER_PREFECTURE_FVM);

ALTER TABLE COPIE_RELEVE_FVM ADD CONSTRAINT RELEVE_COPIERELEVE_FK FOREIGN KEY (ID_RELEVE_FVM)
 REFERENCES RELEVE_FVM (ID_RELEVE_FVM) DEFERRABLE INITIALLY DEFERRED;

ALTER TABLE COPIE_COURRIER_PREFECTURE_FVM ADD CONSTRAINT RELEVER_COPIECOURRIER FOREIGN KEY (ID_RELEVE_FVM)
 REFERENCES RELEVE_FVM (ID_RELEVE_FVM);

ALTER TABLE NOTE_VERBALE_RELEVE_FVM ADD UNIQUE (ID_RELEVE_FVM, ID_NOTE_VERBALE_FVM);
ALTER TABLE NOTE_VERBALE_RELEVE_FVM ADD CONSTRAINT RELEVE_NOTE_RELEVE_FK FOREIGN KEY (ID_RELEVE_FVM)
 REFERENCES RELEVE_FVM (ID_RELEVE_FVM);
ALTER TABLE NOTE_VERBALE_RELEVE_FVM ADD CONSTRAINT NOTE_NOTE_RELEVE_FK FOREIGN KEY (ID_NOTE_VERBALE_FVM)
 REFERENCES NOTE_VERBALE_FVM (ID_NOTE_VERBALE_FVM);

COMMIT;
