import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UtilisateurService } from "../services/utilisateur.service";
import { Utilisateur } from "../models/utilisateur.interface";
import {AuthService} from "../core/guards/auth.service";
import { forkJoin } from "rxjs";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  submitTest = false;
  errorMessage: string;
  invalidInscription = false;

  constructor(private authService: AuthService,
              private utilisateurService: UtilisateurService,
              private route: ActivatedRoute) {
  }

  formInscriptionUtilisateur: FormGroup;

  ngOnInit(): void {
    this.formInscriptionUtilisateur = new FormGroup({
      pseudo: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      mdp: new FormControl('', [Validators.required]),
      confirmation: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if(this.formInscriptionUtilisateur.valid) {
      this.submitTest = false;
      this.utilisateurService.isExistsByPseudo(this.formInscriptionUtilisateur.value.pseudo).subscribe((result) => {
        if(result) {
          this.invalidInscription = true;
          this.errorMessage = 'Pseudo déjà pris';
        } else {
          const utilisateur = this.getObjectFromForm();
          if (utilisateur != null) {
            this.utilisateurService.creerUtilisateur(utilisateur).subscribe((result) => {
                if (!result) {
                  this.invalidInscription = true;
                  this.errorMessage = 'Utilisateur déjà existant';
                } else {
                  forkJoin(
                    this.utilisateurService.tokenSecurity(this.formInscriptionUtilisateur.controls["pseudo"].value, this.formInscriptionUtilisateur.controls["mdp"].value),
                    this.utilisateurService.connexion(this.formInscriptionUtilisateur.controls["pseudo"].value, this.formInscriptionUtilisateur.controls["mdp"].value)
                  ).subscribe(
                    (data) => {
                      if (data[1] === null) {
                        this.invalidInscription = true;
                        return;
                      }
                      this.invalidInscription = false;

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
                      this.invalidInscription = true;
                    });
                }
              },
              () => {
                this.invalidInscription = true;
                this.errorMessage = 'Erreur inscription';
              });
          } else {
            this.invalidInscription = true;
            this.errorMessage = 'Erreur de mot de passe';
          }
        }
      },
        () => {
          this.invalidInscription = true;
          this.errorMessage = 'Erreur serveur';
     });
    } else {
      this.submitTest = true;
      this.invalidInscription = true;
      this.errorMessage = 'Erreur inscription';
    }
  }

  getObjectFromForm(): Utilisateur {
    if (this.formInscriptionUtilisateur.value.mdp === this.formInscriptionUtilisateur.value.confirmation) {
      return {
        pseudo: this.formInscriptionUtilisateur.value.pseudo,
        mail: this.formInscriptionUtilisateur.value.mail,
        mdp: this.formInscriptionUtilisateur.value.mdp
      };
    } else {
      // @ts-ignore
      return null;
    }
  }

  testPseudo() {
    return ((!this.formInscriptionUtilisateur.controls["pseudo"].valid && this.formInscriptionUtilisateur.controls["pseudo"].touched) ||
      (this.submitTest && !this.formInscriptionUtilisateur.controls["pseudo"].valid));
  }

  testMail() {
    return ((!this.formInscriptionUtilisateur.controls["mail"].valid && this.formInscriptionUtilisateur.controls["mail"].touched) ||
      (this.submitTest && !this.formInscriptionUtilisateur.controls["mail"].valid));
  }

  testMdp() {
    return ((!this.formInscriptionUtilisateur.controls["mdp"].valid && this.formInscriptionUtilisateur.controls["mdp"].touched) ||
      (this.submitTest && !this.formInscriptionUtilisateur.controls["mdp"].valid));
  }

  testConfirmation() {
    return ((this.submitTest && !this.formInscriptionUtilisateur.controls["confirmation"].valid) ||
      ((this.formInscriptionUtilisateur.controls["mdp"].value !== this.formInscriptionUtilisateur.controls["confirmation"].value) &&
        this.formInscriptionUtilisateur.controls["confirmation"].touched));
  }
}
