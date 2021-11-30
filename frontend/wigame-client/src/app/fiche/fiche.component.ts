import { Component, OnInit } from '@angular/core';
import {fiche} from '../models/fiche.interface';
import {FicheService} from "../services/fiche.service";

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css'],
})
export class FicheComponent implements OnInit {
  fiche! : fiche;
  idFiche = "1";

  constructor(private ficheservice : FicheService) {  }

  ngOnInit(): void {
  }

  loadFiche() : void {
    this.ficheservice.getFicheById(this.idFiche).subscribe((data)=> {
      this.fiche = data;
    });
  }

}
