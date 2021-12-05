import { Component, OnInit } from '@angular/core';
import { WikiService } from "../services/wiki.service";
import {Fiche} from "../models/fiche.interface";
import {FicheService} from "../services/fiche.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {
  id?: number;
  titre?: string;
  categorie?: string;
  createur?: string;
  listeFiche?: Fiche[];
  idWiki: string;

  constructor(private wikiService : WikiService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idWiki = this.route.snapshot.params['id'];
    this.loadWiki();
  }

  loadWiki(): void {
    this.wikiService.getWikiById(this.idWiki).subscribe((data) => {
      this.titre = data.titre;
      this.categorie = data.categorie;
      this.createur = data.createur!.pseudo;
      this.listeFiche = data.listeFiche;
    });
  }

}
