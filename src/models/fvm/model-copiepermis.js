"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.CopiePermisFVMModel = {
    "idCopiePermis": {
        type: Sequelize.INTEGER,
        field: "ID_COPIE_PERMIS_FVM",
        primaryKey: true,
        allowNull: false,
        unique: "copiepermis_pkey"
    },
    "nom": {
        type: Sequelize.STRING,
        field: "NOM",
        allowNull: false
    },
    "mimetype": {
        type: Sequelize.STRING,
        field: "MIMETYPE",
        allowNull: false
    },
    "encoding": {
        type: Sequelize.STRING,
        field: "ENCODING",
        allowNull: false
    },
    "size": {
        type: Sequelize.INTEGER,
        field: "SIZE",
        allowNull: false
    },
    "data": {
        type: Sequelize.BLOB,
        field: "DATA",
        allowNull: false
    },
    "idPermis": {
        type: Sequelize.INTEGER,
        field: "ID_PERMIS_FVM",
        allowNull: false,
        references: {
            model: "PermisFVMModel",
            key: "idPermis"
        }
    }
};

//# sourceMappingURL=model-copiepermis.js.map
