import { Component, OnInit } from '@angular/core';
import {FicheService} from "../services/fiche.service";

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css'],
})
export class FicheComponent implements OnInit {
  titre: string;
  categorie: string;
  redacteur: string;
  contenu: string;
  url: string;
  note: number;
  fiabilite: number;
  idFiche = "1";

  constructor(private ficheservice : FicheService) {  }

  ngOnInit(): void {
    this.loadFiche();
  }

  loadFiche() : void {
    this.ficheservice.getFicheById(this.idFiche).subscribe((data)=> {
      this.titre = data.titre!;
      this.categorie = data.categorie!;
      this.redacteur = data.utilisateur!.pseudo!;
      this.contenu = data.contenu!;
      this.url = data.url!;
      this.note = data.note!;
      this.fiabilite = data.fiabilite!;
    });
  }

}
