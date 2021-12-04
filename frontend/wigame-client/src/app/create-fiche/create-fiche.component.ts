import { Component, OnInit } from "@angular/core";
import {FicheService} from "../services/fiche.service";
import {AuthService} from "../core/guards/auth.service";
import {UtilisateurService} from "../services/utilisateur.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-fiche',
  templateUrl: './create-fiche.component.html',
  styleUrls: ['./create-fiche.component.css']
})

export class CreateFicheComponent implements OnInit {
  titre: string;
  contenu: string;
  url: string;

  constructor(private authService: AuthService,
              private ficheService: FicheService,
              private route: ActivatedRoute) {}

  formCreationFiche : FormGroup;

  ngOnInit(): void {
    this.formCreationFiche = new FormGroup({
      titre: new FormControl('', [Validators.required]),
      contenu: new FormControl('', [Validators.required]),
      url: new FormControl(''),
    });
  }

  OnSubmit() {

  }
}
