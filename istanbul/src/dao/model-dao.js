"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// Classes métiers et Classes modèles des tables de la base de données
var model_prefecture_1 = require("./../models/model-prefecture");
var model_valise_1 = require("./../models/model-valise");
var model_permis_1 = require("./../models/fvm/model-permis");
var model_personne_1 = require("./../models/fvm/model-personne");
var model_dossier_1 = require("./../models/fvm/model-dossier");
var model_demandeauthentification_1 = require("./../models/fvm/model-demandeauthentification");
var model_releve_1 = require("./../models/fvm/model-releve");
var model_noteverbale_releve_1 = require("./../models/fvm/model-noteverbale-releve");
var model_noteverbale_1 = require("./../models/fvm/model-noteverbale");
var model_copiepermis_1 = require("./../models/fvm/model-copiepermis");
var model_copienoteverbaleMAECI_1 = require("./../models/fvm/model-copienoteverbaleMAECI");
var model_copiereleve_1 = require("./../models/fvm/model-copiereleve");
var model_copiecourrierprefecture_1 = require("./../models/fvm/model-copiecourrierprefecture");
var model_permis_2 = require("./../models/mvf/model-permis");
var model_personne_2 = require("./../models/mvf/model-personne");
var model_dossier_2 = require("./../models/mvf/model-dossier");
var model_noteverbale_permis_1 = require("./../models/mvf/model-noteverbale-permis");
var model_noteverbale_2 = require("./../models/mvf/model-noteverbale");
var model_attestation_1 = require("./../models/mvf/model-attestation");
var model_bordereau_attestation_1 = require("./../models/mvf/model-bordereau-attestation");
var model_bordereau_1 = require("./../models/mvf/model-bordereau");
var model_copiepermis_2 = require("./../models/mvf/model-copiepermis");
var model_copiedemandeprefecture_1 = require("./../models/mvf/model-copiedemandeprefecture");
var model_copieattestation_1 = require("./../models/mvf/model-copieattestation");
var model_copienoteverbaleMAECI_2 = require("./../models/mvf/model-copienoteverbaleMAECI");
var model_role_1 = require("./../models/auth/model-role");
var seq_user_mod_1 = require("./../models/auth/seq-user-mod");
var model_role_utilisateur_1 = require("./../models/auth/model-role_utilisateur");
// Décorateur définissant une entité de la base de données
var dec_seq_entity_1 = require("hornet-js-database/src/decorators/dec-seq-entity");
// Décorateur permettant la connexion à la base de données
var injectable_1 = require("hornet-js-core/src/inject/injectable");
var inject_1 = require("hornet-js-core/src/inject/inject");
// Classe parente des Classes définissant les entités de la DAO
var hornet_sequelize_model_1 = require("hornet-js-database/src/sequelize/hornet-sequelize-model");
// Classe permettant d'initialiser des relations entre des tables de la base
var sequelize_utils_1 = require("hornet-js-database/src/sequelize/sequelize-utils");
/**
 * Classe définissant les entités (tables) de la DAO
 * @extends {HornetSequelizeModel}
 */
var ModelDAO = /** @class */ (function (_super) {
    tslib_1.__extends(ModelDAO, _super);
    /**
     * @constructor
     * @param {string} conf - chaîne de caractères permettant la connexion à la base
     */
    function ModelDAO(conf) {
        var _this = _super.call(this, conf) || this;
        // Initialise les relations entre les tables role et utilisateur
        _this.initUtilisateurEntity();
        _this.initRoleEntity();
        return _this;
    }
    ModelDAO_1 = ModelDAO;
    /**
     * Méthode créant une relation One to Many entre la table utilisateur et la table role, au travers de la table role_utilisateur
     */
    ModelDAO.prototype.initUtilisateurEntity = function () {
        sequelize_utils_1.SequelizeUtils.initRelationBelongsToMany({ fromEntity: this.utilisateurEntity, toEntity: this.roleEntity, alias: "listeRole", foreignKey: "id_utilisateur", throughTable: "role_utilisateur" });
    };
    /**
     * Méthode créant une relation One to Many entre la table role et la table utilisateur, au travers de la table role_utilisateur
     */
    ModelDAO.prototype.initRoleEntity = function () {
        sequelize_utils_1.SequelizeUtils.initRelationBelongsToMany({ fromEntity: this.roleEntity, toEntity: this.utilisateurEntity, alias: "listeUser", foreignKey: "id_role", throughTable: "role_utilisateur" });
    };
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("prefecture", model_prefecture_1.PrefectureModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "prefectureEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("valise", model_valise_1.ValiseModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "valiseEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("permis_fvm", model_permis_1.PermisFVMModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "permisFVMEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("permis_mvf", model_permis_2.PermisMVFModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "permisMVFEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("personne_fvm", model_personne_1.PersonneFVMModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "personneFVMEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("personne_mvf", model_personne_2.PersonneMVFModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "personneMVFEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("dossier_fvm", model_dossier_1.DossierFVMModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "dossierFVMEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("dossier_mvf", model_dossier_2.DossierMVFModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "dossierMVFEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("demande_authentification_fvm", model_demandeauthentification_1.DemandeAuthentificationFVMModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "demandeAuthenthificationFVMEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("releve_fvm", model_releve_1.ReleveFVMModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "releveFVMEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("note_verbale_releve_fvm", model_noteverbale_releve_1.NoteVerbaleReleveFVMModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "noteVerbaleReleveFVMEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("note_verbale_fvm", model_noteverbale_1.NoteVerbaleFVMModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "noteVerbaleFVMEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("note_verbale_permismvf", model_noteverbale_permis_1.NoteVerbalePermisMVFModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "noteVerbalePermisMVFEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("note_verbale_mvf", model_noteverbale_2.NoteVerbaleMVFModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "noteVerbaleMVFEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("attestation_mvf", model_attestation_1.AttestationMVFModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "attestationMVFEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("bordereau_attestation_mvf", model_bordereau_attestation_1.BordereauAttestationMVFModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "bordereauAttestationMVFEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("bordereau_mvf", model_bordereau_1.BordereauMVFModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "bordereauMVFEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("copie_permis_fvm", model_copiepermis_1.CopiePermisFVMModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "copiePermisFVMEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("copie_note_verbale_maeci_fvm", model_copienoteverbaleMAECI_1.CopieNoteVerbaleMAECIFVMModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "copieNoteVerbaleMAECIFVMEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("copie_releve_fvm", model_copiereleve_1.CopieReleveFVMModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "copieReleveFVMEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("copie_courrier_prefecture_fvm", model_copiecourrierprefecture_1.CopieCourrierPrefectureFVMModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "copieCourrierPrefectureFVMEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("copie_permis_mvf", model_copiepermis_2.CopiePermisMVFModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "copiePermisMVFEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("copie_attestation_mvf", model_copieattestation_1.CopieAttestationMVFModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "copieAttestationMVFEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("copie_note_verbale_maeci_mvf", model_copienoteverbaleMAECI_2.CopieNoteVerbaleMAECIMVFModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "copieNoteVerbaleMAECIMVFEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("copie_demande_prefecture_mvf", model_copiedemandeprefecture_1.CopieDemandePrefectureMVFModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "copieDemandePrefectureMVFEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("utilisateur", seq_user_mod_1.UtilisateurModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "utilisateurEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("role", model_role_1.RoleModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "roleEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("role_utilisateur", model_role_utilisateur_1.RoleUtilisateurModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "roleUtilisateurEntity", void 0);
    ModelDAO = ModelDAO_1 = tslib_1.__decorate([
        injectable_1.injectable(ModelDAO_1, injectable_1.Scope.SINGLETON, injectable_1.Side.SERVER),
        tslib_1.__param(0, inject_1.inject("databaseConfigName")),
        tslib_1.__metadata("design:paramtypes", [String])
    ], ModelDAO);
    return ModelDAO;
    var ModelDAO_1;
}(hornet_sequelize_model_1.HornetSequelizeModel));
exports.ModelDAO = ModelDAO;

//# sourceMappingURL=model-dao.js.map
