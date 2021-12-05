import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FicheService} from "../services/fiche.service";
import {AuthService} from "../core/guards/auth.service";

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
  idFiche: string;
  wikiId: string;

  constructor(private ficheservice : FicheService,
              private authService: AuthService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idFiche = this.route.snapshot.params['id'];
    this.loadFiche();

  }

  loadFiche() : void {
    this.ficheservice.getFicheById(this.idFiche).subscribe((data)=> {
      this.titre = data.titre!;
      this.categorie = data.categorie!;
      this.redacteur = data.redacteur!.pseudo!;
      this.contenu = data.contenu!;
      this.url = data.url!;
      this.note = data.note!;
      this.fiabilite = data.fiabilite!;
      this.wikiId = data.wikiId!;
    });
  }

  isUrlNull() : boolean {
    return ((this.url == null) || (this.url.trim() === ""));
  }

  isTheUser() {
    if (this.authService.isConnecte()) {
      return (this.redacteur == this.authService.getUserName());
    };
    return false;
  }
}
