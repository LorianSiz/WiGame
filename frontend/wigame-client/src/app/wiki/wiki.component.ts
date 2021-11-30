import { Component, OnInit } from '@angular/core';
import {FicheComponent} from "../fiche/fiche.component";

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {
  id: number = 0;
  name: String = "";
  categorie: String = "";
  createur : String = "";
  lstFiche: FicheComponent[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
