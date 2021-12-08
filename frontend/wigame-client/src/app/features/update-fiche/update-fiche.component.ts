import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../core/guards/auth.service";
import {FicheService} from "../../core/services/fiche.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Fiche} from "../../core/models/fiche.interface";
import {ActivatedRoute, Router} from "@angular/router";

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
  ficheId: string;
  invalidModif = false;
  errorMessage: string;

  constructor(private authService: AuthService,
              private ficheService : FicheService,
              private router: Router,
              private route: ActivatedRoute) { }

  formUpdateFiche : FormGroup;

  ngOnInit(): void {
    if(!this.authService.isConnecte()) {
      this.router.navigate(['connexion']);
    } else {
      this.ficheId = this.route.snapshot.params['ficheId'];
      this.ficheService.getFicheById(this.ficheId).subscribe((data)=> {
        this.formUpdateFiche = new FormGroup({
          titre: new FormControl('', [Validators.required]),
          contenu: new FormControl('', [Validators.required]),
          url: new FormControl(''),
        });
        this.fiche = data;
        this.formUpdateFiche.patchValue({
          titre: this.fiche.titre,
          contenu: this.fiche.contenu,
          url: this.fiche.url,
        });
      });
    }
  }

  OnSubmit() {
    if(this.formUpdateFiche.valid) {
      this.submitTest = true
      this.invalidModif = false;
      this.updateThisFiche();
      this.ficheService.updateFiche(this.fiche).subscribe((data)=> {
        this.invalidModif = true;
        this.router.navigate(['fiche/'+data.id]);
      },
        () => {
          this.invalidModif = true;
          this.errorMessage = 'Erreur serveur';
        });
    } else {
      this.invalidModif = true;
      this.errorMessage = 'Veuillez rensignez tout les champs';
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
