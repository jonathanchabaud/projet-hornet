import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

export interface PermisFVMAttributes extends HornetSequelizeAttributes {
  idPermis: number;
  numPermis: string;
  idCopiePermis: number;
  dateDeDelivrance: Date;
  idPersonne: number;
  idDossier: number;
  idPrefectureDelivrance: number;
}

export let PermisFVMModel: Sequelize.DefineAttributes = {
  "idPermis": {
    type: Sequelize.INTEGER,
    field: "ID_PERMIS_FVM",
    primaryKey: true,
    allowNull: false,
    unique: "permis_pkey"
  },
  "numPermis": {
    type: Sequelize.STRING,
    field: "num_permis",
    allowNull: false,
  },
  "idCopiePermis": {
    type: Sequelize.INTEGER,
    field: "ID_COPIE_PERMIS_FVM",
    allowNull: false
  },
  "dateDeDelivrance": {
    type: Sequelize.DATE,
    field: "DATE_DE_DELIVRANCE",
    allowNull: false
  },
  "idPersonne": {
    type: Sequelize.INTEGER,
    field: "ID_PERSONNE_FVM",
    allowNull: false,
    references: {
      model: "PersonneModelFVM",
      key: "ID_PERSONNE_FVM"
    }
  },
  "idDossier": {
    type: Sequelize.INTEGER,
    field: "ID_DOSSIER_FVM",
    allowNull: false,
    references: {
      model: "DossierModelFVM",
      key: "ID_DOSSIER_FVM"
    }
  },
  "idPrefectureDelivrance": {
    type: Sequelize.INTEGER,
    field: "ID_PREFECTURE_DELIVRANCE",
    allowNull: false,
    references: {
      model: "PrefectureModel",
      key: "idPrefecture"
    }
  }
};
