import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { EntityDAO } from "src/dao/entity-dao";
import Map from "hornet-js-bean/src/decorators/Map";
import { PermisFVMMetier } from "src/models/fvm/fvm-mod";
import {where} from "sequelize";

const logger: Logger = Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");

export class CopiePermisFVMDao extends EntityDAO {

  constructor() {
    super();
  }

  insererCopiePermis(nom, mimetype, encoding, size, data, idPermis): Promise<any> {
    return this.getIdCopiePermis().then(idCopiePermis=> {

      return this.modelDAO.copiePermisFVMEntity.create({
        idCopiePermis: idCopiePermis,
        nom: nom,
        mimetype: mimetype,
        encoding: encoding,
        size: size,
        data: data,
        idPermis: idPermis
      })
    });
  }

  getIdCopiePermis(): Promise<any> {
    return this.modelDAO.copiePermisFVMEntity.count().then(count=>{
      if(count > 0) {
        return this.modelDAO.copiePermisFVMEntity.max("idCopiePermis");
      } else {
        return Promise.resolve(0);
      }
    }).then(max=>{
      return Promise.resolve(max+1);
    });
  }
}
