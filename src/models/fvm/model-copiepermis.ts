import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

/**
 * Interface définissant les attributs de la table copie_permis_fvm
 * @extends {HornetSequelizeAttributes}
 */
export interface CopiePermisFVMAttributes extends HornetSequelizeAttributes {
  idCopiePermis: number;
  nom: string;
  mimetype: string;
  encoding: string;
  size: number;
  data: Buffer;
  idPermis: number;
}

/**
 * Objet Sequelize définissant le modèle de la table copie_permis_fvm
 * @type {Sequelize.DefineAttributes}
 */
export let CopiePermisFVMModel: Sequelize.DefineAttributes = {
    "idCopiePermis": {
      type: Sequelize.INTEGER,
      field: "id_copie_permis_fvm",
      primaryKey: true,
      allowNull: false,
      unique: "copiepermis_pkey"
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
