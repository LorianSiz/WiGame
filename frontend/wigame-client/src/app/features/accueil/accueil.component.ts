import { Component, OnInit } from '@angular/core';
import {Wiki} from "../../core/models/wiki.interface";
import {WikiService} from "../../core/services/wiki.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  listeWiki?: Wiki[];

  constructor(private wikiService : WikiService) { }

  ngOnInit(): void {
    this.wikiService.findAllWiki().subscribe((data) => {
      this.listeWiki = data;
    });
  }

}
