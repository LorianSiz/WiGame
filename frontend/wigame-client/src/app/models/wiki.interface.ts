import {Fiche} from "./fiche.interface";
import {Utilisateur} from "./utilisateur.interface";

export interface Wiki {
  id?: number;
  titre?: string;
  categorie?: string;
  createur?: Utilisateur;
  listeFiche?: Fiche[];
}
