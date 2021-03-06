"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
/**
 * Objet Sequelize définissant le modèle de la table personne_fvm
 * @type {Sequelize.DefineAttributes}
 */
exports.PersonneFVMModel = {
    "idPersonne": {
        type: Sequelize.INTEGER,
        field: "id_personne_fvm",
        primaryKey: true,
        allowNull: false,
        unique: "personne_pkey"
    },
    "nom": {
        type: Sequelize.STRING,
        field: "nom",
        allowNull: false
    },
    "prenom": {
        type: Sequelize.STRING,
        field: "prenom",
        allowNull: false
    },
    "titre": {
        type: Sequelize.STRING,
        field: "titre",
        allowNull: false
    },
    "dateDeNaissance": {
        type: Sequelize.DATE,
        field: "date_de_naissance",
        allowNull: false
    },
    "villeDeNaissance": {
        type: Sequelize.STRING,
        field: "ville_de_naissance",
        allowNull: false
    },
    "paysDeNaissance": {
        type: Sequelize.STRING,
        field: "pays_de_naissance",
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

//# sourceMappingURL=model-personne.js.map
