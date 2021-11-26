import { Component, OnInit } from '@angular/core';
import { fiche } from './fiche';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css'],
})
export class FicheComponent implements OnInit {
  id: number = 0;
  titre : string = "";
  contenu : string = "";
  user : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  NoteFicheAuto() : void {

  }

  NoteFiche() : void {

  }

}
