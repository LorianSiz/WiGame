import { Component, OnInit } from '@angular/core';
import {AuthService} from "../core/guards/auth.service";
import {UtilisateurService} from "../services/utilisateur.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Utilisateur} from "../models/utilisateur.interface";
import {forkJoin} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {FavorisService} from "../services/favoris.service";
import {Favoris} from "../models/favoris.interface";
import {FicheService} from "../services/fiche.service";

@Component({
  selector: 'app-gestion-profil',
  templateUrl: './gestion-profil.component.html',
  styleUrls: ['./gestion-profil.component.css']
})
export class GestionProfilComponent implements OnInit {
  utilisateur : Utilisateur;
  pseudo: string;
  mail:string;
  submitModif = false;
  submitTest = false;
  errorMessage: string;
  invalidModification = false;
  favoris: Favoris[];

  constructor(private authService: AuthService,
              private utilisateurService : UtilisateurService,
              private favorisService : FavorisService,
              private ficheService : FicheService,
              private route: ActivatedRoute) { }

  formModificationUtilisateur : FormGroup;

  ngOnInit(): void {
    this.utilisateurService.findByPseudo(this.authService.getUserName()).subscribe((data) => {
      this.formModificationUtilisateur = new FormGroup({
        pseudo: new FormControl('', [Validators.required]),
        mail: new FormControl('', [Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
        mdp: new FormControl('', [Validators.required]),
        confirmation: new FormControl('', [Validators.required])
      });
      this.utilisateur = data!;
      this.pseudo = data.pseudo!;
      this.mail = data.mail!;
      this.formModificationUtilisateur.patchValue({
        pseudo: this.utilisateur.pseudo,
        mail: this.utilisateur.mail,
      });
      this.favorisService.findByUserId(this.utilisateur!.id!.toString()).subscribe((data1) => {
        this.favoris = data1;
      });
    });

  }

  deleteFavoris(fav : number): void {
    this.favorisService.deleteFavoris(fav).subscribe();
    this.favorisService.findByUserId(this.utilisateur!.id!.toString()).subscribe((data1) => {
      this.favoris = data1;
    });
  }

  OnSubmitModif() {
    if(this.formModificationUtilisateur.valid) {
      this.submitTest = false;
      this.utilisateurService.isExistsByPseudo(this.formModificationUtilisateur.value.pseudo).subscribe((result) => {
          if(result && this.formModificationUtilisateur.value.pseudo != this.utilisateur.pseudo) {
            this.invalidModification = true;
            this.errorMessage = 'Pseudo déjà utilisé';
          } else {
            const utilisateur = this.getObjectFromForm();
            if (utilisateur != null) {
              this.utilisateurService.updateUtilisateur(utilisateur).subscribe((result) => {
                  if (!result) {
                    this.invalidModification = true;
                    this.errorMessage = 'Problème de mise à jour utilisateur';
                  } else {
                    forkJoin(
                      this.utilisateurService.tokenSecurity(this.formModificationUtilisateur.controls["pseudo"].value, this.formModificationUtilisateur.controls["mdp"].value),
                      this.utilisateurService.connexion(this.formModificationUtilisateur.controls["pseudo"].value, this.formModificationUtilisateur.controls["mdp"].value)
                    ).subscribe(
                      (data) => {
                        if (data[1] === null) {
                          this.invalidModification = true;
                          return;
                        }
                        this.invalidModification = false;

                        this.authService.setAccessToken(data[0].access_token);
                        this.authService.setUserName(<string>data[1].pseudo);

                        let redirectURL = this.route.snapshot.queryParamMap.get('redirectURL');
                        if (redirectURL != null) {
                          window.location.href = redirectURL;
                        } else {
                          window.location.href = '/profil';
                        }
                      },
                      () => {
                        this.invalidModification = true;
                      });
                  }
                },
                () => {
                  this.invalidModification = true;
                  this.errorMessage = 'Erreur de modification serveur';
                });
            } else {
              this.invalidModification = true;
              this.errorMessage = 'Erreur de mot de passe';
            }
          }
        },
        () => {
          this.invalidModification = true;
          this.errorMessage = 'Erreur serveur';
        });
    } else {
      this.submitTest = true;
      this.invalidModification = true;
      this.errorMessage = 'Erreur de modification';
    }
  }

  OnSubmit() {
    if (this.submitModif == false)
      this.submitModif = true;
    else this.submitModif = false;
  }

  getObjectFromForm(): Utilisateur {
    if (this.formModificationUtilisateur.value.mdp === this.formModificationUtilisateur.value.confirmation) {
      return {
        id: this.utilisateur.id,
        pseudo: this.formModificationUtilisateur.value.pseudo,
        mail: this.formModificationUtilisateur.value.mail,
        mdp: this.formModificationUtilisateur.value.mdp
      };
    } else {
      // @ts-ignore
      return null;
    }
  }

  testAffichageFormModif() {
    return this.submitModif;
  }

  testPseudo() {
    return ((!this.formModificationUtilisateur.controls["pseudo"].valid && this.formModificationUtilisateur.controls["pseudo"].touched) ||
      (this.submitTest && !this.formModificationUtilisateur.controls["pseudo"].valid));
  }

  testMail() {
    return ((!this.formModificationUtilisateur.controls["mail"].valid && this.formModificationUtilisateur.controls["mail"].touched) ||
      (this.submitTest && !this.formModificationUtilisateur.controls["mail"].valid));
  }

  testMdp() {
    return ((!this.formModificationUtilisateur.controls["mdp"].valid && this.formModificationUtilisateur.controls["mdp"].touched) ||
      (this.submitTest && !this.formModificationUtilisateur.controls["mdp"].valid));
  }

  testConfirmation() {
    return ((this.submitTest && !this.formModificationUtilisateur.controls["confirmation"].valid) ||
      ((this.formModificationUtilisateur.controls["mdp"].value !== this.formModificationUtilisateur.controls["confirmation"].value) &&
        this.formModificationUtilisateur.controls["confirmation"].touched));
  }

}
