import { Component, OnInit } from '@angular/core';
import { fiche } from './fiche';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css'],
})
export class FicheComponent implements OnInit {
  id : number | undefined;
  titre : string | undefined;
  contenu : string |undefined;
  user : string | undefined;

  constructor() { }

  ngOnInit(): void {

  }

  NoteFicheAuto() : void {

  }

  NoteFiche() : void {

  }

}
