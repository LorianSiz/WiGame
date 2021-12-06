import { Component, OnInit } from '@angular/core';
import {AuthService} from "../core/guards/auth.service";
import {Fiche} from "../models/fiche.interface";
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

  pseudo : string;
  mdp : string;
  mail : string;
  submitModif = false;
  submitTest = false;
  errorMessage: string;
  invalidModification = false;
  favoris: Favoris[];

  Favoris : Fiche[];

  constructor(private authService: AuthService,
              private utilisateurService : UtilisateurService,
              private favorisService : FavorisService,
              private ficheService : FicheService,
              private route: ActivatedRoute) { }

  formModificationUtilisateur : FormGroup;

  ngOnInit(): void {

    this.utilisateurService.findByPseudo(this.authService.getUserName()).subscribe((data) => {
      this.utilisateur = data!;
      this.favorisService.findByUserId(this.utilisateur!.id!.toString()).subscribe((data1) => {
        this.favoris = data1;
        this.LoadFavoris();
      });
    });

    this.formModificationUtilisateur = new FormGroup({
      pseudo: new FormControl('', [Validators.required]),
      mdp: new FormControl('', [Validators.required]),
      mail: new FormControl(''),
    });

  }

  LoadFavoris() {
    this.favoris.forEach(function (fav){
      this.Favoris.add(fav.fich_conserne);
      console.log(fav.id);
    });
  }

  OnSubmitModif() {
    if(this.formModificationUtilisateur.valid) {
      this.submitTest = false;
      this.utilisateurService.isExistsByPseudo(this.formModificationUtilisateur.value.pseudo).subscribe((result) => {
          if(result) {
            this.invalidModification = true;
            this.errorMessage = 'Pseudo déjà utilisé';
          } else {
            const utilisateur = this.getObjectFromForm();
            if (utilisateur != null) {
              this.utilisateurService.updateUtilisateur(utilisateur).subscribe((result) => {
                  if (!result) {
                    this.invalidModification = true;
                    this.errorMessage = 'Utilisateur déjà existant';
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
                          window.location.href = '/accueil';
                        }
                      },
                      () => {
                        this.invalidModification = true;
                      });
                  }
                },
                () => {
                  this.invalidModification = true;
                  this.errorMessage = 'Erreur de modification';
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
    return {
      pseudo: this.formModificationUtilisateur.value.pseudo,
      mail: this.formModificationUtilisateur.value.mail,
      mdp: this.formModificationUtilisateur.value.mdp
    };
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


}
