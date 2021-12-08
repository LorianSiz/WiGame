import { Component, OnInit } from '@angular/core';
import { WikiService } from "../../core/services/wiki.service";
import {Fiche} from "../../core/models/fiche.interface";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../core/guards/auth.service";

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {
  titre?: string;
  categorie?: string;
  createur?: string;
  wikiId: string;
  wikiCateg: string;

  listeFiche?: Fiche[];
  listeFicheDescription?: Fiche[] = new Array();
  listeFicheFiche?: Fiche[] = new Array();
  listeFicheActualite?: Fiche[] = new Array();
  listeFicheGuide?: Fiche[] = new Array();

  constructor(private wikiService : WikiService,
              private authService: AuthService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.wikiId = this.route.snapshot.params['id'];
    this.wikiCateg = this.route.snapshot.params['wikiCateg'];
    this.loadWiki();
  }

  loadWiki(): void {
    this.wikiService.getWikiById(this.wikiId).subscribe((data) => {
      this.titre = data.titre;
      this.categorie = data.categorie;
      this.createur = data.createur!.pseudo;
      this.listeFiche = data.listeFiche;

      this.listeFiche!.forEach(fiche => {
        if(fiche.categorie === "DESCRIPTION")
          this.listeFicheDescription!.push(fiche);
        else if(fiche.categorie === "FICHE")
          this.listeFicheFiche!.push(fiche);
        else if(fiche.categorie === "ACTUALITE")
          this.listeFicheActualite!.push(fiche);
        else if(fiche.categorie === "GUIDE")
          this.listeFicheGuide!.push(fiche);
      });
    });
  }

  isConnecte() {
    return this.authService.isConnecte();
  }

  testDescription() {
    if(this.listeFicheDescription!.length > 0 && this.wikiCateg === "description")
      return true;
    else
      return false;
  }

  testFiches() {
    if(this.listeFicheFiche!.length > 0 && this.wikiCateg === "fiches")
      return true;
    else
      return false;
  }

  testActualites() {
    if(this.listeFicheActualite!.length > 0 && this.wikiCateg === "actualites")
      return true;
    else
      return false;
  }

  testGuides() {
    if(this.listeFicheGuide!.length > 0 && this.wikiCateg === "guides")
      return true;
    else
      return false;
  }

  OnSubmitDescription() {
    this.wikiCateg = "description";
  }

  OnSubmitFiches() {
    this.wikiCateg = "fiches";
  }

  OnSubmitActualites() {
    this.wikiCateg = "actualites";
  }

  OnSubmitGuides() {
    this.wikiCateg = "guides";
  }

}
