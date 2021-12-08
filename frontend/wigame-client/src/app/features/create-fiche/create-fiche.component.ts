import { Component, OnInit } from "@angular/core";
import {FicheService} from "../../core/services/fiche.service";
import {AuthService} from "../../core/guards/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Fiche} from "../../core/models/fiche.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {UtilisateurService} from "../../core/services/utilisateur.service";

@Component({
  selector: 'app-create-fiche',
  templateUrl: './create-fiche.component.html',
  styleUrls: ['./create-fiche.component.css']
})

export class CreateFicheComponent implements OnInit {
  submitTest = false;
  wikiId: string;

  constructor(private authService: AuthService,
              private ficheService: FicheService,
              private utilisateurService: UtilisateurService,
              private router: Router,
              private route: ActivatedRoute) {}

  formCreationFiche : FormGroup;

  ngOnInit(): void {
    if(!this.authService.isConnecte()) {
      this.router.navigate(['connexion']);
    }
    this.wikiId = this.route.snapshot.params['wikiId'];
    this.formCreationFiche = new FormGroup({
      titre: new FormControl('', [Validators.required]),
      categorie: new FormControl('', [Validators.required]),
      contenu: new FormControl('', [Validators.required]),
      url: new FormControl(''),
    });
  }

  OnSubmit() {
    if (this.formCreationFiche.valid) {
      this.submitTest = true
      const fiche = this.getObjectFromForm();
      if (fiche != null && this.authService.isConnecte()) {
        this.utilisateurService.findByPseudo(this.authService.getUserName()).subscribe((data) => {
          fiche.redacteur = data;
          fiche.wikiId = this.wikiId;
          this.ficheService.createFiche(fiche).subscribe((data) => {
            this.router.navigate(['fiche/' + data.id]);
          });
        });
      }
    }
  }

  getObjectFromForm() : Fiche {
    return {
      titre : this.formCreationFiche.value.titre,
      categorie : this.formCreationFiche.value.categorie,
      contenu : this.formCreationFiche.value.contenu,
      url : this.formCreationFiche.value.url,
    }
  }

  testTitre() {
    return ((!this.formCreationFiche.controls["titre"].valid && this.formCreationFiche.controls["titre"].touched) ||
      (this.submitTest && !this.formCreationFiche.controls["titre"].valid));
  }

  testCategorie() {
    return ((!this.formCreationFiche.controls["categorie"].valid && this.formCreationFiche.controls["categorie"].touched) ||
      (this.submitTest && !this.formCreationFiche.controls["categorie"].valid));
  }

  testContenu() {
    return ((!this.formCreationFiche.controls["contenu"].valid && this.formCreationFiche.controls["contenu"].touched) ||
      (this.submitTest && !this.formCreationFiche.controls["contenu"].valid));
  }
}
