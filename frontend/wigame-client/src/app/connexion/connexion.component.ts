import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../core/guards/auth.service';
import { forkJoin } from "rxjs";
import { UtilisateurService } from "../services/utilisateur.service";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  submitTest = false;
  pseudo: string;
  mdp : string;
  errorMessage = 'Erreur d\'authentifcation';
  invalidLogin = false;

  constructor(private authService: AuthService,
              private utilisateurService: UtilisateurService,
              private route: ActivatedRoute) {}

  formConnexionUtilisateur: FormGroup;

  ngOnInit(): void {
    this.formConnexionUtilisateur = new FormGroup({
      pseudo: new FormControl('', [Validators.required]),
      mdp: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if(this.formConnexionUtilisateur.valid) {
      this.submitTest = true;
      forkJoin(
        this.utilisateurService.tokenSecurity(this.formConnexionUtilisateur.controls["pseudo"].value, this.formConnexionUtilisateur.controls["mdp"].value),
        this.utilisateurService.connexion(this.formConnexionUtilisateur.controls["pseudo"].value, this.formConnexionUtilisateur.controls["mdp"].value)
      ).subscribe(
        (data) => {
          if (data[1] === null) {
            this.invalidLogin = true;
            return;
          }
          this.invalidLogin = false;

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
          this.invalidLogin = true;
        });
    } else {
      this.submitTest = true;
    }
  }

  testPseudo() {
    return ((!this.formConnexionUtilisateur.controls["pseudo"].valid && this.formConnexionUtilisateur.controls["pseudo"].touched) ||
      (this.submitTest && !this.formConnexionUtilisateur.controls["pseudo"].valid));
  }

  testMdp() {
    return ((!this.formConnexionUtilisateur.controls["mdp"].valid && this.formConnexionUtilisateur.controls["mdp"].touched) ||
      (this.submitTest && !this.formConnexionUtilisateur.controls["mdp"].valid));
  }
}
