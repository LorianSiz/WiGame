import {Utilisateur} from "./utilisateur.interface";

export interface Fiche {
  id?: number;
  titre?: string;
  categorie?:string;
  contenu?: string;
  note?: number;
  fiabilite?: number;
  utilisateur?: Utilisateur;
  url?: string;
}
