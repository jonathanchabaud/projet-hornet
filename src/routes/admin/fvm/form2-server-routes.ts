import {InserDemandeAuthentification, InserValise, ListValise} from "src/actions/admin/fvm/fvm-action";
import { DataRouteInfos, PUBLIC_ROUTE } from "hornet-js-core/src/routes/abstract-routes";
import { ServerFormServiceImpl } from "src/services/data/admin/fvm/server-form-service-impl-data";
import Form1RoutesClient from "src/routes/admin/fvm/form1-client-routes";
import {ListPrefecture} from "../../../actions/admin/fvm/fvm-action";
import Form2RoutesClient from "./form2-client-routes";
import {Roles} from "../../../utils/roles";
import {Injector} from "hornet-js-core/src/inject/injector";

export default class Form2RoutesServer extends Form2RoutesClient {
  constructor() {
    super();

    this.addDataRoute("/",
      () => new DataRouteInfos(InserDemandeAuthentification, null, ServerFormServiceImpl),
      Roles.ADMIN,
      "post"
    );


    this.addDataRoute("/insertValise",
      () => new DataRouteInfos(InserValise, null, ServerFormServiceImpl),
      Roles.ADMIN,
      "post"
    );

    this.addDataRoute("/listValises",
      () => new DataRouteInfos(ListValise, null, ServerFormServiceImpl),
      PUBLIC_ROUTE,
      "post"
    );
  }
}