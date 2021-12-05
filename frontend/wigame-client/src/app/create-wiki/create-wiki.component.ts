import { Component, OnInit } from '@angular/core';
import {Fiche} from "../models/fiche.interface";
import {AuthService} from "../core/guards/auth.service";
import {WikiService} from "../services/wiki.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Wiki} from "../models/wiki.interface";
import {Router} from "@angular/router";
import {UtilisateurService} from "../services/utilisateur.service";

@Component({
  selector: 'app-create-wiki',
  templateUrl: './create-wiki.component.html',
  styleUrls: ['./create-wiki.component.css']
})
export class CreateWikiComponent implements OnInit {
  submitTest = false;

  titre: string;
  categorie: string;
  listeFiche : Fiche[];

  constructor(private authService: AuthService,
              private wikiService: WikiService,
              private utilisateurService: UtilisateurService,
              private router: Router) { }

  formCreationWiki : FormGroup;

  ngOnInit(): void {
    if(!this.authService.isConnecte()) {
      this.router.navigate(['connexion']);
    }
    this.formCreationWiki = new FormGroup({
      titre: new FormControl('', [Validators.required]),
      categorie: new FormControl('', [Validators.required])
    });
  }

  OnSubmit() {
    if (this.formCreationWiki.valid) {
      this.submitTest = true
      const wiki = this.getObjectFromForm();
      if (wiki != null && this.authService.isConnecte()) {
        this.utilisateurService.findByPseudo(this.authService.getUserName()).subscribe((data) => {
          wiki.createur = data;
          this.wikiService.createWiki(wiki).subscribe((data) => {
            this.router.navigate(['wiki/' + data.id])
          });
        });
      }
    }
  }

  getObjectFromForm() : Wiki {
    return {
      titre : this.formCreationWiki.value.titre,
      categorie : this.formCreationWiki.value.categorie,
      listeFiche : this.listeFiche,
    }
  }

  testTitre() {
    return ((!this.formCreationWiki.controls["titre"].valid && this.formCreationWiki.controls["titre"].touched) ||
      (this.submitTest && !this.formCreationWiki.controls["titre"].valid));
  }

  testCategorie() {
    return ((!this.formCreationWiki.controls["categorie"].valid && this.formCreationWiki.controls["categorie"].touched) ||
      (this.submitTest && !this.formCreationWiki.controls["categorie"].valid));
  }

}
