import {Fiche} from "./fiche.interface";

export interface Wiki {
  id?: number;
  name?: string;
  categorie?: string;
  createur?: string;
  listFiche?: Fiche[];
}
