import { Component, OnInit } from '@angular/core';
import {Fiche} from '../models/fiche.interface';
import {FicheService} from "../services/fiche.service";

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css'],
})
export class FicheComponent implements OnInit {
  fiche : Fiche;
  idFiche = "1";

  constructor(private ficheservice : FicheService) {  }

  ngOnInit(): void {
    this.loadFiche();
  }

  loadFiche() : void {
    this.ficheservice.getFicheById(this.idFiche).subscribe((data)=> {
      this.fiche = data;
    });
  }

}
