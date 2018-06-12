import {
  DeleteDemandeAuthentification, DeleteDossier,
  GetCopieNoteVerbaleMAECI,
  GetCopiePermis,
  GetDemandeAuthentification, GetDossier,
  GetPDFDemandeAuthentification,
  ListDossier
} from "src/actions/admin/fvm/fvm-action";
import { DataRouteInfos, PUBLIC_ROUTE } from "hornet-js-core/src/routes/abstract-routes";
import RecordRoutesClient from "./record-client-routes";
import {ClientListServiceImpl} from "../../../services/data/admin/fvm/client-list-service-impl-data";
import {Injector} from "hornet-js-core/src/inject/injector";
import {Roles} from '../../../utils/roles';

export default class RecordListRoutesServer extends RecordRoutesClient {
  constructor() {
    super();

    this.addDataRoute("/",
      () => new DataRouteInfos(ListDossier, null, ClientListServiceImpl),
      PUBLIC_ROUTE,
      "post"
    );

    this.addDataRoute("/delete",
      () => new DataRouteInfos(DeleteDossier, null, ClientListServiceImpl),
      Roles.ADMIN,
      "delete"
    );

    this.addDataRoute("/detailsDossiers/dossier",
      (id) => new DataRouteInfos(GetDossier, null, ClientListServiceImpl),
      PUBLIC_ROUTE,
      "post"
    );

    this.addDataRoute("/detailsDossiers/demandeauthentification",
      (id) => new DataRouteInfos(GetDemandeAuthentification, null, ClientListServiceImpl),
      PUBLIC_ROUTE,
      "post"
    );

    this.addDataRoute("/detailsDossiers/demandeauthentification/delete",
      () => new DataRouteInfos(DeleteDemandeAuthentification, null, ClientListServiceImpl),
      Roles.ADMIN,
      "delete"
    );

    /* TODO
    this.addDataRoute("/detailsDossiers/releve",
      (id) => new DataRouteInfos(GetReleve, null, PageServiceImpl),
      PUBLIC_ROUTE,
      "post"
    );

    this.addDataRoute("/detailsDossiers/noteverbale",
      (id) => new DataRouteInfos(GetNoteVerbale, null, PageServiceImpl),
      PUBLIC_ROUTE,
      "post"
    );
    */

    this.addDataRoute("/copiePermis/(\\d+)",
      (idCopiePermis) => new DataRouteInfos(GetCopiePermis, {"idCopiePermis": idCopiePermis}, ClientListServiceImpl),
      PUBLIC_ROUTE,
      "get"
    );

    this.addDataRoute("/copieNoteVerbaleMAECI/(\\d+)",
      (idCopieNoteVerbaleMAECI) => new DataRouteInfos(GetCopieNoteVerbaleMAECI, {"idCopieNoteVerbaleMAECI": idCopieNoteVerbaleMAECI}, ClientListServiceImpl),
      PUBLIC_ROUTE,
      "get"
    );

    this.addDataRoute("/pdfMake/demandeAuthentification/(\\d+)/((\\S+|\\s+)+)",
      (idPermis, data) => new DataRouteInfos(GetPDFDemandeAuthentification, {"idPermis": idPermis, "data": data}, ClientListServiceImpl),
      PUBLIC_ROUTE,
      "get"
    );
  }
}
