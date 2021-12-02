export interface Wiki {
import {Fiche} from "./fiche.interface";

  id?: number;
  name?: string;
  categorie?: string;
  createur?: string;
  listFiche?: Fiche[];
}
