import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

/**
 * Interface définissant les attributs de la table dossier_fvm
 * @extends {HornetSequelizeAttributes}
 */
export interface DossierFVMAttributes extends HornetSequelizeAttributes {
  idDossier: number;
  idCopieNoteVerbaleMAECI: number;
  dateReceptionDossier: Date;
  idPermis: number;
}

/**
 * Objet Sequelize définissant le modèle de la table dossier_fvm
 * @type {Sequelize.DefineAttributes}
 */
export let DossierFVMModel: Sequelize.DefineAttributes = {
  "idDossier": {
    type: Sequelize.INTEGER,
    field: "id_dossier_fvm",
    primaryKey: true,
    allowNull: false,
    unique: "dossier_pkey"
  },
  "idCopieNoteVerbaleMAECI": {
    type: Sequelize.INTEGER,
    field: "id_copie_note_verbale_maeci_fvm",
    allowNull: false,
    // references: {
    //   model: "CopieNoteVerbaleMAECIFVMModel",
    //   key: "idCopieNoteVerbaleMAECI",
    //   deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
    // }
  },
  "dateReceptionDossier": {
    type: Sequelize.DATE,
    field: "date_reception_dossier",
    allowNull: false
  },
  "idPermis": {
    type: Sequelize.INTEGER,
    field: "id_permis_fvm",
    allowNull: true,
    references: {
      model: "PermisFVMModel",
      key: "idPermis",
      deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
    }
  }
};
