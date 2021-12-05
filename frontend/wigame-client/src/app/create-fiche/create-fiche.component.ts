import { Component, OnInit } from "@angular/core";
import {FicheService} from "../services/fiche.service";
import {AuthService} from "../core/guards/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Fiche} from "../models/fiche.interface";

@Component({
  selector: 'app-create-fiche',
  templateUrl: './create-fiche.component.html',
  styleUrls: ['./create-fiche.component.css']
})

export class CreateFicheComponent implements OnInit {
  submitTest = false;
  titre: string;
  contenu: string;
  url: string;

  constructor(private authService: AuthService,
              private ficheService: FicheService) {}

  formCreationFiche : FormGroup;

  ngOnInit(): void {
    this.formCreationFiche = new FormGroup({
      titre: new FormControl('', [Validators.required]),
      contenu: new FormControl('', [Validators.required]),
      url: new FormControl(''),
    });
  }

  OnSubmit() {
    if (this.formCreationFiche.valid) {
      this.submitTest = true
      const fiche = this.getObjectFromForm();
      if (fiche != null) {
        this.ficheService.createFiche(fiche);
      }
    }
  }

  getObjectFromForm() : Fiche {
    return {
      titre : this.formCreationFiche.value.titre,
      contenu : this.formCreationFiche.value.contenu,
      url : this.formCreationFiche.value.contenu,
    }
  }

  testTitre() {
    return ((!this.formCreationFiche.controls["titre"].valid && this.formCreationFiche.controls["titre"].touched) ||
      (this.submitTest && !this.formCreationFiche.controls["titre"].valid));
  }

  testContenu() {
    return ((!this.formCreationFiche.controls["contenu"].valid && this.formCreationFiche.controls["contenu"].touched) ||
      (this.submitTest && !this.formCreationFiche.controls["contenu"].valid));
  }
}
