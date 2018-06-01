import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { EntityDAO } from "src/dao/entity-dao";

const logger: Logger = Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");

export class PersonneFVMDAO extends EntityDAO {

  constructor() {
    super();
  }

  insererPersonne(nom, prenom, dateDeNaissance, idSexe, villeDeNaissance, paysDeNaissance, idPermis): Promise<any> {
    return this.getNewIdPersonne().then(idPersonne=>{

      return this.modelDAO.personneFVMEntity.create({
        idPersonne: idPersonne,
        nom: nom,
        prenom: prenom,
        dateDeNaissance: dateDeNaissance,
        sexe: this.getSexe(idSexe),
        villeDeNaissance: villeDeNaissance,
        paysDeNaissance: paysDeNaissance,
        idPermis: idPermis
      }).then(result=>{
        return Promise.resolve(idPersonne);
      });
    });
  }

  getSexe(idSexe): string {
    if(idSexe == 0) {
      return "Monsieur";
    } else {
      return "Madame";
    }
  }

  getNewIdPersonne(): Promise<any> {
    return this.modelDAO.personneFVMEntity.count().then(count=>{
      if(count > 0) {
        return this.modelDAO.personneFVMEntity.max("idPersonne");
      } else {
        return Promise.resolve(-1);
      }
    }).then(max=>{
      return Promise.resolve(max+1);
    });
  }

  getPersonne(idPersonne): Promise<any> {
    return this.modelDAO.personneFVMEntity.findAll({
      where: {
        idPersonne: idPersonne
      }
    });
  }
}
