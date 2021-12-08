import { Component, OnInit } from '@angular/core';
import { WikiService } from "../services/wiki.service";
import {Fiche} from "../models/fiche.interface";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../core/guards/auth.service";

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {
  titre?: string;
  categorie?: string;
  createur?: string;
  listeFiche?: Fiche[];
  wikiId: string;

  constructor(private wikiService : WikiService,
              private authService: AuthService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.wikiId = this.route.snapshot.params['id'];
    this.loadWiki();
  }

  loadWiki(): void {
    this.wikiService.getWikiById(this.wikiId).subscribe((data) => {
      this.titre = data.titre;
      this.categorie = data.categorie;
      this.createur = data.createur!.pseudo;
      this.listeFiche = data.listeFiche;
    });
  }

  isConnecte() {
    return this.authService.isConnecte();
  }

}
