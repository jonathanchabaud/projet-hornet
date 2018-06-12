"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
/**
 * Objet Sequelize définissant le modèle de la table copie_permis_fvm
 * @type {Sequelize.DefineAttributes}
 */
exports.CopiePermisFVMModel = {
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
//# sourceMappingURL=model-copiepermis.js.map