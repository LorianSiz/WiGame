import {Fiche} from "./fiche.interface";

export interface Wiki {
  id?: number;
  titre?: string;
  categorie?: string;
  createur?: string;
  listFiche?: Fiche[];
}
