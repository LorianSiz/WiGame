import { Component, OnInit } from '@angular/core';
import {AuthService} from "../core/guards/auth.service";
import {FicheService} from "../services/fiche.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Fiche} from "../models/fiche.interface";

@Component({
  selector: 'app-update-fiche',
  templateUrl: './update-fiche.component.html',
  styleUrls: ['./update-fiche.component.css']
})

export class UpdateFicheComponent implements OnInit {
  submitTest = false;
  fiche : Fiche;
  titre: string;
  contenu: string;
  url: string;

  errorMessage: string;

  constructor(private authService: AuthService,
              private ficheService: FicheService) { }

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
      this.submitTest = true
      this.updateThisFiche();
      this.ficheService.updateFiche(this.fiche)
    } else {
      this.errorMessage = 'veuillez rensignez tout les champs';
    }
  }

  updateThisFiche() : void {
    this.fiche.titre = this.formUpdateFiche.controls["titre"].value;
    this.fiche.contenu = this.formUpdateFiche.controls["contenu"].value;
    this.fiche.url = this.formUpdateFiche.controls["url"].value;
  }
  testTitre() {
    return ((!this.formUpdateFiche.controls["titre"].valid && this.formUpdateFiche.controls["titre"].touched) ||
      (this.submitTest && !this.formUpdateFiche.controls["titre"].valid));
  }

  testContenu() {
    return ((!this.formUpdateFiche.controls["contenu"].valid && this.formUpdateFiche.controls["contenu"].touched) ||
      (this.submitTest && !this.formUpdateFiche.controls["contenu"].valid));
  }
}
