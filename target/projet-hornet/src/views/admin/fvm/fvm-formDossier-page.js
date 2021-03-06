"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var React = require("react");
var hornet_page_1 = require("hornet-js-react-components/src/widget/component/hornet-page");
var form_1 = require("hornet-js-react-components/src/widget/form/form");
var row_1 = require("hornet-js-react-components/src/widget/form/row");
var input_field_1 = require("hornet-js-react-components/src/widget/form/input-field");
var calendar_field_1 = require("hornet-js-react-components/src/widget/form/calendar-field");
var button_1 = require("hornet-js-react-components/src/widget/button/button");
var buttons_area_1 = require("hornet-js-react-components/src/widget/form/buttons-area");
var upload_file_field_1 = require("hornet-js-react-components/src/widget/form/upload-file-field");
var datasource_1 = require("hornet-js-core/src/component/datasource/datasource");
var notification_1 = require("hornet-js-react-components/src/widget/notification/notification");
var schema = require("src/resources/admin/fvm/validation-form1.json");
var select_field_1 = require("hornet-js-react-components/src/widget/form/select-field");
var notification_manager_1 = require("hornet-js-core/src/notification/notification-manager");
var datasource_config_page_1 = require("hornet-js-core/src/component/datasource/config/service/datasource-config-page");
var icon_1 = require("hornet-js-react-components/src/widget/icon/icon");
var picto_1 = require("hornet-js-react-components/src/img/picto");
var radios_field_1 = require("hornet-js-react-components/src/widget/form/radios-field");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.views.admin.fvm.fvm-formDossier-page");
/* HornetPage :
    Classe générique : <Interface de la Classe de service, Props de la page, Context>
*/
/**
 * Page de formulaire permettant de créer un dossier
 * @extends {HornetPage<FormService, HornetComponentProps, any>}
 */
var FormulaireDossierPage = /** @class */ (function (_super) {
    tslib_1.__extends(FormulaireDossierPage, _super);
    /**
     * @constructor
     * @param {HornetComponentProps} props
     * @param context
     */
    function FormulaireDossierPage(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.listePrefectureDataSource = new datasource_1.DataSource(new datasource_config_page_1.DataSourceConfigPage(_this, _this.getService().getListePrefecture), { "value": "idPrefecture", "label": "prefecture" });
        _this.errors = new notification_manager_1.Notifications();
        _this.SequelizeErrors = new notification_manager_1.NotificationType();
        _this.SequelizeErrors.id = "SequelizeError";
        _this.errors.addNotification(_this.SequelizeErrors);
        _this.success = new notification_manager_1.Notifications();
        _this.SequelizeSuccess = new notification_manager_1.NotificationType();
        _this.SequelizeSuccess.id = "SequelizeSuccess";
        _this.SequelizeSuccess.text = "Opération réussie";
        _this.success.addNotification(_this.SequelizeSuccess);
        return _this;
    }
    /**
     * Méthode permettant d'effectuer les appels d'API. Elle est appelée au moment où la Page est montée.
     */
    FormulaireDossierPage.prototype.prepareClient = function () {
        this.listePrefectureDataSource.fetch(true);
    };
    /**
     * Méthode appelée à la soumission du formulaire d'insertion d'un nouveau dossier
     * @param data - données de formulaire
     */
    FormulaireDossierPage.prototype.onSubmit = function (data) {
        var _this = this;
        this.getService().insererDossier(data).then(function (result) {
            // Si le résultat contient une erreur
            if (result.error != null) {
                console.error(result.reason);
                console.error(result.error);
                // Afficher un message d'erreur
                _this.SequelizeErrors.text = result.reason;
                notification_manager_1.NotificationManager.notify("SequelizeError", "errors", _this.errors, null, null, null, null);
            }
            else {
                // Afficher un message d'information
                notification_manager_1.NotificationManager.notify("SequelizeSuccess", "notif", null, _this.success, null, null, null);
            }
        }).catch(function (error) {
            _this.SequelizeErrors.text = error.toString();
            notification_manager_1.NotificationManager.notify("SequelizeError", "errors", _this.errors, null, null, null, null);
        });
    };
    /**
     * Méthode effectuant le rendu de la vue
     * @returns {JSX.Element}
     */
    FormulaireDossierPage.prototype.render = function () {
        // Objet Json contenant le format des champs (label, title,etc..)
        var format = this.i18n("forms");
        var radioData = new datasource_1.DataSource([
            { "value": 0, "label": "M" },
            { "value": 1, "label": "F" }
        ]);
        return (React.createElement("div", null,
            React.createElement(icon_1.Icon, { src: picto_1.Picto.blue.previous, alt: "Retourner \u00E0 la page de s\u00E9lection", title: "Retourner \u00E0 la page de s\u00E9lection", action: this.retourPage }),
            React.createElement("h2", null, "Formulaire d'entr\u00E9e d'un dossier"),
            React.createElement(notification_1.Notification, { id: "errors" }),
            React.createElement(notification_1.Notification, { id: "notif" }),
            React.createElement(form_1.Form, { id: "form1", schema: schema, onSubmit: this.onSubmit, formMessages: format },
                React.createElement(row_1.Row, null,
                    React.createElement(radios_field_1.RadiosField, { name: "id_sexe", label: "Sexe", dataSource: radioData, defaultValue: { "value": 0 } })),
                React.createElement(row_1.Row, null,
                    React.createElement(input_field_1.InputField, { name: "nom", label: format.fields.nom.label, required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(input_field_1.InputField, { name: "prenom", label: format.fields.prenom.label, required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(calendar_field_1.CalendarField, { name: "date_de_naissance", label: format.fields.date_de_naissance.label, title: format.fields.date_de_naissance.title, required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(input_field_1.InputField, { name: "pays_de_naissance", label: format.fields.pays_de_naissance.label, required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(input_field_1.InputField, { name: "ville_de_naissance", label: format.fields.ville_de_naissance.label, required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(input_field_1.InputField, { name: "num_permis", label: format.fields.num_permis.label, required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(upload_file_field_1.UploadFileField, { name: "copie_permis", label: format.fields.copie_permis.label, buttonLabel: format.fields.copie_permis.buttonLabel, fileSelectedLabel: format.fields.copie_permis.fileSelectedLabel, required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(calendar_field_1.CalendarField, { name: "date_de_delivrance", label: format.fields.date_de_delivrance.label, title: format.fields.date_de_delivrance.title, required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(select_field_1.SelectField, { dataSource: this.listePrefectureDataSource, label: format.fields.id_prefecture.label, name: "id_prefecture", required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(upload_file_field_1.UploadFileField, { name: "copie_note_verbale_maeci", label: format.fields.copie_note_verbale_maeci.label, buttonLabel: format.fields.copie_note_verbale_maeci.buttonLabel, fileSelectedLabel: format.fields.copie_note_verbale_maeci.fileSelectedLabel, required: true })),
                React.createElement(buttons_area_1.ButtonsArea, null,
                    React.createElement(button_1.Button, { type: "submit", value: "Valider", className: "hornet-button", label: "valider", title: "valider" })))));
    };
    /**
     * Méthode permettant de naviguer jusqu'à la page de sélection d'un dossier
     */
    FormulaireDossierPage.prototype.retourPage = function () {
        this.navigateTo("/fvmrecord", {}, function () { });
    };
    return FormulaireDossierPage;
}(hornet_page_1.HornetPage));
exports.FormulaireDossierPage = FormulaireDossierPage;

//# sourceMappingURL=fvm-formDossier-page.js.map
