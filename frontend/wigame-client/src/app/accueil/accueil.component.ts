import { Component, OnInit } from '@angular/core';
import {WikiComponent} from "../wiki/wiki.component";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  listWiki: WikiComponent[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }


  changementDePage() {

  }
}
