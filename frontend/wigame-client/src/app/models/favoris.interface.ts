import {Utilisateur} from "./utilisateur.interface";
import {Fiche} from "./fiche.interface";

export interface Favoris {
  id?: number;
  fich_conserne?: Fiche;
  util_conserne?: Utilisateur;
}
