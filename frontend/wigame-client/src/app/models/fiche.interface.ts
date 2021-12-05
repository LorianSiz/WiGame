import {Utilisateur} from "./utilisateur.interface";

export interface Fiche {
  id?: number;
  titre?: string;
  categorie?:string;
  contenu?: string;
  note?: number;
  fiabilite?: number;
  redacteur?: Utilisateur;
  wikiId?: string;
  url?: string;
}
