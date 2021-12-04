import { Component, OnInit } from '@angular/core';
import {AuthService} from "../core/guards/auth.service";
import {FicheService} from "../services/fiche.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Fiche} from "../models/fiche.interface";

@Component({
  selector: 'app-update-fiche',
  templateUrl: './update-fiche.component.html',
  styleUrls: ['./update-fiche.component.css']
})

export class UpdateFicheComponent implements OnInit {
  fiche : Fiche;
  titre: string;
  contenu: string;
  url: string;

  constructor(private authService: AuthService,
              private ficheService: FicheService,
              private route: ActivatedRoute) { }

  formUpdateFiche : FormGroup;

  ngOnInit(): void {
    this.formUpdateFiche = new FormGroup({
      titre: new FormControl('', [Validators.required]),
      contenu: new FormControl('', [Validators.required]),
      url: new FormControl(''),
    });
  }

  OnSubmit() {
    if(this.formUpdateFiche.valid) {
      this.fiche.titre = this.formUpdateFiche.controls["titre"].value;
      this.fiche.contenu = this.formUpdateFiche.controls["contenu"].value;
      this.fiche.url = this.formUpdateFiche.controls["url"].value;
      this.ficheService.updateFiche(this.fiche)
    }
  }

}
