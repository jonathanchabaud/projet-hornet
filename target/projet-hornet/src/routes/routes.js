"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
// Classes de Page des pages principales
var gen_hom_page_1 = require("src/views/gen/gen-hom-page");
/**
 * Classe définissant les routes Client et Serveur de l'application
 * @extends {AbstractRoutes}
 */
var Routes = /** @class */ (function (_super) {
    tslib_1.__extends(Routes, _super);
    /**
     * @constructor
     */
    function Routes() {
        var _this = _super.call(this) || this;
        if (hornet_js_utils_1.Utils.isServer) {
            _this.addClientRoutes();
            _this.addServerRoutes();
        }
        else {
            _this.addClientRoutes();
        }
        return _this;
    }
    /**
     * Méthode ajoutant les routes Client de l'application
     */
    Routes.prototype.addClientRoutes = function () {
        // Route menant à la page d'accueil
        this.addPageRoute("/accueil", function () { return new abstract_routes_1.PageRouteInfos(gen_hom_page_1.HomePage); }, abstract_routes_1.PUBLIC_ROUTE);
        // Lazy routes Client
        // Formulaire d'insertion d'un dossier
        this.addLazyRoutes("/fvmform1", "admin/fvm/form1-client-routes");
        // Formulaire d'insertion d'une demande d'authentification
        this.addLazyRoutes("/fvmform2", "admin/fvm/form2-client-routes");
        // Pages permettant de consulter les entrées de la base
        this.addLazyRoutes("/fvmrecord", "admin/fvm/record-client-routes");
    };
    /**
     * Méthode ajoutant les routes Serveur de l'application
     */
    Routes.prototype.addServerRoutes = function () {
        // Lazy routes serveur
        // Formulaire d'insertion d'un dossier
        this.addLazyRoutes("/fvmform1server", "admin/fvm/form1-server-routes");
        // Formulaire d'insertion d'une demande d'authentification
        this.addLazyRoutes("/fvmform2server", "admin/fvm/form2-server-routes");
        // Pages permettant de consulter les entrées de la base
        this.addLazyRoutes("/fvmrecordserver", "admin/fvm/record-server-routes");
    };
    return Routes;
}(abstract_routes_1.AbstractRoutes));
exports.Routes = Routes;

//# sourceMappingURL=routes.js.map
