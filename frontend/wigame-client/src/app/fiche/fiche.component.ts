import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FicheService} from "../services/fiche.service";
import {AuthService} from "../core/guards/auth.service";
import {Favoris} from "../models/favoris.interface";
import {Observable} from "rxjs";
import {FavorisService} from "../services/favoris.service";
import {UtilisateurService} from "../services/utilisateur.service";
import {Utilisateur} from "../models/utilisateur.interface";
import {Fiche} from "../models/fiche.interface";
import {waitForAsync} from "@angular/core/testing";

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css'],
})
export class FicheComponent implements OnInit {
  titre: string;
  categorie: string;
  redacteur: string;
  contenu: string;
  url: string;
  note: number;
  fiabilite: number;
  idFiche: string;
  wikiId: string;

  utilisateur: Utilisateur;
  fiche: Fiche;
  isfavoris: boolean = false;
  favoris?: Favoris;

  constructor(private ficheservice : FicheService,
              private favorisservice : FavorisService,
              private utilisateurService : UtilisateurService,
              private authService: AuthService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idFiche = this.route.snapshot.params['id'];
    this.loadFiche();


    this.utilisateurService.findByPseudo(this.authService.getUserName()).subscribe((data) => {
      this.utilisateur = data;
      this.ficheservice.getFicheById(this.idFiche).subscribe((data1)=> {
        this.fiche = data1;
        if(this.authService.isConnecte())
          this.SetFav();
      });
    });
  }

  loadFiche() : void {
    this.ficheservice.getFicheById(this.idFiche).subscribe((data)=> {
      this.titre = data.titre!;
      this.categorie = data.categorie!;
      this.redacteur = data.redacteur!.pseudo!;
      this.contenu = data.contenu!;
      this.url = data.url!;
      this.note = data.note!;
      this.fiabilite = data.fiabilite!;
      this.wikiId = data.wikiId!;
    });
  }

  isUrlNull() : boolean {
    return ((this.url == null) || (this.url.trim() === ""));
  }

  isFiabiliteNull() : boolean {
    return ((this.fiabilite == null) || (this.fiabilite === -1));
  }

  isTheUser() {
    if (this.authService.isConnecte()) {
      return (this.redacteur == this.authService.getUserName());
    };
    return false;
  }

    TestIsConnected() : boolean {
      return this.authService.isConnecte();
    }


    SetFav() : void {
      this.favorisservice.findByIdFichAndIdUser(this.fiche.id!.toString(), this.utilisateur.id!.toString()).subscribe((data) => {
        data.forEach(value => {
          this.isfavoris = (value != null);
          this.favoris = value;
        });
      });
    }


    OnSubmitFav() {
      this.favorisservice.createFavoris({
        util_conserne : this.utilisateur,
        fich_conserne : this.fiche,
      }).subscribe(data => {
        this.SetFav();
      });
      this.isfavoris = true;
    }

    OnSubmitSupprFav() {
      this.favorisservice.deleteFavoris(this.favoris!.id!).subscribe(data => {
        this.SetFav();
      });
      this.isfavoris = false;
    }
  }
