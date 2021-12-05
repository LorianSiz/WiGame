import { Component, OnInit } from '@angular/core';
import {Fiche} from "../models/fiche.interface";
import {AuthService} from "../core/guards/auth.service";
import {WikiService} from "../services/wiki.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Wiki} from "../models/wiki.interface";

@Component({
  selector: 'app-create-wiki',
  templateUrl: './create-wiki.component.html',
  styleUrls: ['./create-wiki.component.css']
})
export class CreateWikiComponent implements OnInit {
  submitTest = false;

  titre: string;
  categorie: string;
  listFiche : Fiche[];

  constructor(private authService: AuthService,
              private wikiService: WikiService) { }

  formCreationWiki : FormGroup;

  ngOnInit(): void {
    this.formCreationWiki = new FormGroup({
      titre: new FormControl('', [Validators.required]),
      categorie: new FormControl('', [Validators.required])
    })
  }

  OnSubmit() {
    if (this.formCreationWiki.valid) {
      this.submitTest = true
      const wiki = this.getObjectFromForm();
      if (wiki != null) {
        this.wikiService.createWiki(wiki);
      }
    }
  }

  getObjectFromForm() : Wiki {
    return {
      titre : this.formCreationWiki.value.titre,
      categorie : this.formCreationWiki.value.categorie,
      listFiche : this.listFiche,
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
