"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
var result_file_1 = require("hornet-js-core/src/result/result-file");
var media_type_1 = require("hornet-js-core/src/protocol/media-type");
var result_pdf_1 = require("hornet-js-core/src/result/result-pdf");
var disposition_type_1 = require("hornet-js-core/src/result/disposition-type");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.actions.admin.permis_actions");
var InserDossier = /** @class */ (function (_super) {
    tslib_1.__extends(InserDossier, _super);
    function InserDossier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InserDossier.prototype.execute = function () {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");
        var data = this.req.body;
        if (this.req.files[0] != null) {
            data["copie_permis"] = {};
            data["copie_permis"].nom = this.req.files[0].originalname;
            data["copie_permis"].mimetype = this.req.files[0].mimetype;
            data["copie_permis"].encoding = this.req.files[0].encoding;
            data["copie_permis"].size = this.req.files[0].size;
            data["copie_permis"].data = this.req.files[0].buffer;
        }
        if (this.req.files[1] != null) {
            data["copie_note_verbale_maeci"] = {};
            data["copie_note_verbale_maeci"].nom = this.req.files[1].originalname;
            data["copie_note_verbale_maeci"].mimetype = this.req.files[1].mimetype;
            data["copie_note_verbale_maeci"].encoding = this.req.files[1].encoding;
            data["copie_note_verbale_maeci"].size = this.req.files[1].size;
            data["copie_note_verbale_maeci"].data = this.req.files[1].buffer;
        }
        return this.getService().insererDonnee(data);
    };
    return InserDossier;
}(abstract_routes_1.RouteActionService));
exports.InserDossier = InserDossier;
var InserDemandeAuthentification = /** @class */ (function (_super) {
    tslib_1.__extends(InserDemandeAuthentification, _super);
    function InserDemandeAuthentification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InserDemandeAuthentification.prototype.execute = function () {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");
        var data = this.req.body;
        return this.getService().insererDemandeAuthentification(data);
    };
    return InserDemandeAuthentification;
}(abstract_routes_1.RouteActionService));
exports.InserDemandeAuthentification = InserDemandeAuthentification;
var InserValise = /** @class */ (function (_super) {
    tslib_1.__extends(InserValise, _super);
    function InserValise() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InserValise.prototype.execute = function () {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");
        var data = this.req.body;
        return this.getService().insererValise(data);
    };
    return InserValise;
}(abstract_routes_1.RouteActionService));
exports.InserValise = InserValise;
var ListePrefecture = /** @class */ (function (_super) {
    tslib_1.__extends(ListePrefecture, _super);
    function ListePrefecture() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListePrefecture.prototype.execute = function () {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");
        return this.getService().getListePrefectures();
    };
    return ListePrefecture;
}(abstract_routes_1.RouteActionService));
exports.ListePrefecture = ListePrefecture;
var ListeValise = /** @class */ (function (_super) {
    tslib_1.__extends(ListeValise, _super);
    function ListeValise() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListeValise.prototype.execute = function () {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");
        return this.getService().getListeValises();
    };
    return ListeValise;
}(abstract_routes_1.RouteActionService));
exports.ListeValise = ListeValise;
var ListeDossiers = /** @class */ (function (_super) {
    tslib_1.__extends(ListeDossiers, _super);
    function ListeDossiers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListeDossiers.prototype.execute = function () {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");
        return this.getService().getListeDossiers();
    };
    return ListeDossiers;
}(abstract_routes_1.RouteActionService));
exports.ListeDossiers = ListeDossiers;
var GetDossier = /** @class */ (function (_super) {
    tslib_1.__extends(GetDossier, _super);
    function GetDossier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetDossier.prototype.execute = function () {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");
        var data = this.req.body;
        return this.getService().getDossier(data);
    };
    return GetDossier;
}(abstract_routes_1.RouteActionService));
exports.GetDossier = GetDossier;
var GetDemandeAuthentification = /** @class */ (function (_super) {
    tslib_1.__extends(GetDemandeAuthentification, _super);
    function GetDemandeAuthentification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetDemandeAuthentification.prototype.execute = function () {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");
        var data = this.req.body;
        return this.getService().getDemandeAuthentification(data);
    };
    return GetDemandeAuthentification;
}(abstract_routes_1.RouteActionService));
exports.GetDemandeAuthentification = GetDemandeAuthentification;
var GetReleve = /** @class */ (function (_super) {
    tslib_1.__extends(GetReleve, _super);
    function GetReleve() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetReleve.prototype.execute = function () {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");
        var data = this.req.body;
        return this.getService().getReleve(data);
    };
    return GetReleve;
}(abstract_routes_1.RouteActionService));
exports.GetReleve = GetReleve;
var GetNoteVerbale = /** @class */ (function (_super) {
    tslib_1.__extends(GetNoteVerbale, _super);
    function GetNoteVerbale() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetNoteVerbale.prototype.execute = function () {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");
        var data = this.req.body;
        return this.getService().getNoteVerbale(data);
    };
    return GetNoteVerbale;
}(abstract_routes_1.RouteActionService));
exports.GetNoteVerbale = GetNoteVerbale;
var GetCopiePermis = /** @class */ (function (_super) {
    tslib_1.__extends(GetCopiePermis, _super);
    function GetCopiePermis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetCopiePermis.prototype.execute = function () {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");
        return this.getService().getCopiePermis(this.attributes.idCopiePermis).then(function (copiePermis) {
            return new result_file_1.ResultFile({ "data": copiePermis.data,
                "filename": copiePermis.nom,
                "encoding": copiePermis.encoding,
                "size": copiePermis.size,
                "dispositionType": disposition_type_1.DispositionType.INLINE
            }, media_type_1.MediaTypes.fromMime(copiePermis.mimetype));
        });
    };
    return GetCopiePermis;
}(abstract_routes_1.RouteActionService));
exports.GetCopiePermis = GetCopiePermis;
var GetCopieNoteVerbaleMAECI = /** @class */ (function (_super) {
    tslib_1.__extends(GetCopieNoteVerbaleMAECI, _super);
    function GetCopieNoteVerbaleMAECI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetCopieNoteVerbaleMAECI.prototype.execute = function () {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");
        return this.getService().getCopieNoteVerbaleMAECI(this.attributes.idCopieNoteVerbaleMAECI).then(function (copieNoteVerbaleMAECI) {
            return new result_file_1.ResultFile({ "data": copieNoteVerbaleMAECI.data,
                "filename": copieNoteVerbaleMAECI.nom,
                "encoding": copieNoteVerbaleMAECI.encoding,
                "size": copieNoteVerbaleMAECI.size,
                "dispositionType": disposition_type_1.DispositionType.INLINE
            }, media_type_1.MediaTypes.fromMime(copieNoteVerbaleMAECI.mimetype));
        });
    };
    return GetCopieNoteVerbaleMAECI;
}(abstract_routes_1.RouteActionService));
exports.GetCopieNoteVerbaleMAECI = GetCopieNoteVerbaleMAECI;
var GetPDFDemandeAuthentification = /** @class */ (function (_super) {
    tslib_1.__extends(GetPDFDemandeAuthentification, _super);
    function GetPDFDemandeAuthentification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetPDFDemandeAuthentification.prototype.execute = function () {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");
        return this.getService().getPDFDemandeAuthentification(this.attributes.idPermis).then(function (result) {
            var dossier = result.dossier[0];
            var demandeAuthentification = result.demandeAuthentification[0];
            return Promise.resolve(new result_pdf_1.ResultPDF({
                fonts: {
                    Times_New_Roman: {
                        normal: "src/resources/fonts/Times_New_Roman_Normal.ttf",
                        bold: "src/resources/fonts/Times_New_Roman_Bold.ttf",
                        italics: "src/resources/fonts/Times_New_Roman_Italic.ttf",
                        bolditalics: "src/resources/fonts/Times_New_Roman_BoldItalic.ttf"
                    }
                },
                definition: {
                    pageSize: "A4",
                    content: [
                        {
                            columns: [
                                {
                                    width: "30%",
                                    stack: [
                                        { text: "AMBASSADE DE FRANCE AU MAROC", bold: true, fontSize: 11 },
                                        { text: "__________", margin: [0, 0, 0, 30] },
                                        { text: "SERVICE COMMUN DE GESTION", margin: [0, 0, 0, 10], bold: true, italics: true, fontSize: 9 },
                                        { text: "N°" + demandeAuthentification.numDemandeAuthentification + "/SCG", margin: [0, 0, 0, 30], fontSize: 10 },
                                    ],
                                    alignment: "center"
                                },
                                {
                                    width: "80",
                                    image: "src/resources/img/RepubliqueFrancaiseImage.png",
                                    alignment: "center"
                                }
                            ],
                            columnGap: 30
                        },
                        { text: "Service des Permis de Conduire", bold: true, italics: true, fontSize: 10 },
                        { text: "Affaire suivie par", bold: true, italics: true, fontSize: 10 },
                        { text: "MME ZITOUNI Samah", margin: [5, 0, 0, 0], bold: true, italics: true, fontSize: 10 },
                        { text: "Samah.Zitouni@diplomatie.gouv.fr", fontSize: 10 },
                        {
                            stack: [
                                { text: dossier.prefecture.toUpperCase() },
                                { text: dossier.adresse.toUpperCase() },
                                { text: (dossier.codePostal + " " + dossier.ville).toUpperCase() }
                            ],
                            margin: [150, 60, 0, 70]
                        },
                        { text: "OBJET : Demande d'authentification d'un permis de conduire", margin: [0, 0, 0, 30] },
                        {
                            stack: [
                                { text: "Madame, Monsieur,", margin: [0, 0, 0, 30] },
                                { text: "Je vous demande de bien vouloir certifier l'authenticité du titre, dont vous trouverez ci-joint copie appartenant à :", margin: [0, 0, 0, 30] },
                                {
                                    stack: [
                                        { text: "Monsieur " + dossier.nom.toUpperCase() + " " + (dossier.prenom[0].toUpperCase() + dossier.prenom.slice(1)) },
                                        { text: "Né(e) le " + new Date(dossier.dateDeNaissance).toLocaleDateString() },
                                        { text: "À " + dossier.villeDeNaissance.toUpperCase() + " / " + dossier.paysDeNaissance.toUpperCase() }
                                    ],
                                    margin: [0, 0, 0, 30]
                                },
                                {
                                    stack: [
                                        { text: "À déposé son permis de conduire" },
                                        { text: "N° " + dossier.numPermis },
                                        { text: "Délivré le " + new Date(dossier.dateDeDelivrance).toLocaleDateString() },
                                        { text: "Catégorie(s) mentionnée(s) sur le permis" }
                                    ],
                                    margin: [0, 0, 0, 30]
                                },
                                { text: "En vue d'obtenir un permis Marocain.", margin: [0, 0, 0, 30] },
                                { text: "Je vous prie d'agréer, Madame, Monsieur, l'assurance de ma considération distinguée.", margin: [0, 0, 0, 30] }
                            ],
                            margin: [50, 0, 0, 0]
                        }
                    ],
                    defaultStyle: {
                        font: "Times_New_Roman",
                        alignment: "justify",
                        fontSize: 12
                    }
                }
            }));
        });
    };
    return GetPDFDemandeAuthentification;
}(abstract_routes_1.RouteActionService));
exports.GetPDFDemandeAuthentification = GetPDFDemandeAuthentification;

//# sourceMappingURL=fvm-action.js.map