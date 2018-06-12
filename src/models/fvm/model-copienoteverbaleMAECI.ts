import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

/**
 * Interface définissant les attributs de la table copie_note_verbale_maeci_fvm
 * @extends {HornetSequelizeAttributes}
 */
export interface CopieNoteVerbaleMAECIFVMAttributes extends HornetSequelizeAttributes {
  idCopieNoteVerbaleMAECI: number;
  nom: string;
  mimetype: string;
  encoding: string;
  size: number;
  data: Buffer;
  idDossier: number;
}

/**
 * Objet Sequelize définissant le modèle de la table copie_note_verbale_maeci_fvm
 * @type {Sequelize.DefineAttributes}
 */
export let CopieNoteVerbaleMAECIFVMModel: Sequelize.DefineAttributes = {
  "idCopieNoteVerbaleMAECI": {
    type: Sequelize.INTEGER,
    field: "id_copie_note_verbale_maeci_fvm",
    primaryKey: true,
    allowNull: false,
    unique: "copienote_pkey"
  },
  "nom": {
    type: Sequelize.STRING,
    field: "nom",
    allowNull: false
  },
  "mimetype": {
    type: Sequelize.STRING,
    field: "mimetype",
    allowNull: false
  },
  "encoding": {
    type: Sequelize.STRING,
    field: "encoding",
    allowNull: false
  },
  "size": {
    type: Sequelize.INTEGER,
    field: "size",
    allowNull: false
  },
  "data": {
    type: Sequelize.BLOB,
    field: "data",
    allowNull: false
  },
  "idDossier": {
    type: Sequelize.INTEGER,
    field: "id_dossier_fvm",
    allowNull: true,
    references: {
      model: "DossierFVMModel",
      key: "idDossier",
      deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
    }
  }
};