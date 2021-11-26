import { Component, OnInit } from '@angular/core';
import { fiche } from './fiche';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css'],
})
export class FicheComponent implements OnInit {
  constructor(private id : number, private titre : string, private contenu : string, private user : string) { }

  ngOnInit(): void {
  }

  NoteFicheAuto() : void {

  }

  NoteFiche() : void {

  }

}
