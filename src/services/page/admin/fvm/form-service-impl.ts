import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { ServicePage } from "hornet-js-core/src/services/service-page";
import { FormService } from "src/services/page/admin/fvm/form-service";
import {HornetRequest} from "hornet-js-core/src/services/hornet-superagent-request";

const logger: Logger = Utils.getLogger("projet-hornet.services.page.admin.admin-service-impl");

export class FormServiceImpl extends ServicePage implements FormService {

  insererDonnee(data: any): Promise<any> {
    logger.trace("SERVICES - insert : ", data);

    let request: HornetRequest = {
      method: "post",
      url: this.buildUrl("/fvmform1server"),
      data: data,
    };

    request.attach = [];
    request.attach.push({field: "copie_permis", file: data.copie_permis, fileName: data.copie_permis.name});
    request.attach.push({field: "copie_note_verbale_maeci", file: data.copie_note_verbale_maeci, fileName: data.copie_note_verbale_maeci.name});

    return this.fetch(request);
  }

  insererDemandeAuthentification(data: any): Promise<any> {
    logger.trace("SERVICES - insert : ", data);

    let request: HornetRequest = {
      method: "post",
      url: this.buildUrl("/fvmform2server"),
      data: data
    };

    return this.fetch(request);
  }


  insererValise(data: any): Promise<any> {
    logger.trace("SERVICES - insert : ", data);

    let request: HornetRequest = {
      method: "post",
      url: this.buildUrl("/fvmform2server/insertValise"),
      data: data
    };

    return this.fetch(request);
  }

  getListePrefectures(): Promise<any> {
    logger.trace("SERVICES - list");

    let request: HornetRequest = {
      method: "post",
      url: this.buildUrl("/fvmform1server/listPrefectures")
    };

    return this.fetch(request);
  }

  getListeValises(): Promise<any> {
    logger.trace("SERVICES - list");

    let request: HornetRequest = {
      method: "post",
      url: this.buildUrl("/fvmform2server/listValises")
    };

    return this.fetch(request);
  }
}
