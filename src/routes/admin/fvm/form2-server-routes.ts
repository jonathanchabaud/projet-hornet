import { DataRouteInfos, PUBLIC_ROUTE } from "hornet-js-core/src/routes/abstract-routes";
// Classes d'action à effectuer
import {InserDemandeAuthentification, InserValise, ListValise} from "src/actions/admin/fvm/fvm-action";
// Classe du service utilisé par la Classe d'action
import { FormServiceImplData } from "src/services/data/admin/fvm/form-service-impl-data";
// Classe de routes client parente de la Classe de routes serveur
import FormulaireDemandeAuthentificationRoutesClient from "src/routes/admin/fvm/form2-client-routes";
// Classes permettant de mettre en place l'authentification
import {Roles} from "src/utils/roles";
import {Injector} from "hornet-js-core/src/inject/injector";

/**
 * Classe définissant les sous-routes Serveur de la lazy route "/fvmform2server"
 * @extends {FormulaireDemandeAuthentificationRoutesClient}
 */
export default class FormulaireDemandeAuthentificationRoutesServer extends FormulaireDemandeAuthentificationRoutesClient {

  /**
   * @constructor
   */
  constructor() {
    super();

    // Route effectuant une action d'insertion d'une demande d'authentification
    // L'action prend un service de type FormService en entrée
    this.addDataRoute("/",
      () => new DataRouteInfos(InserDemandeAuthentification, null, FormServiceImplData),
      Roles.ADMIN,
      "post"
    );

    // Route effectuant une action d'insertion d'une valise
    // L'action prend un service de type FormService en entrée
    this.addDataRoute("/insertValise",
      () => new DataRouteInfos(InserValise, null, FormServiceImplData),
      Roles.ADMIN,
      "post"
    );

    // Route effectuant une action de listage des valises stockées dans la base
    // L'action prend un service de type FormService en entrée
    this.addDataRoute("/listValises",
      () => new DataRouteInfos(ListValise, null, FormServiceImplData),
      PUBLIC_ROUTE,
      "post"
    );
  }
}