import { NgModule } from '@angular/core';
import {AccueilComponent} from "./features/accueil/accueil.component";
import {ConnexionComponent} from "./features/connexion/connexion.component";
import {WikiComponent} from "./features/wiki/wiki.component";
import {FicheComponent} from "./features/fiche/fiche.component";
import {RouterModule, Routes} from "@angular/router";
import {InscriptionComponent} from "./features/inscription/inscription.component";
import { CreateFicheComponent } from "./features/create-fiche/create-fiche.component";
import { UpdateFicheComponent } from "./features/update-fiche/update-fiche.component";
import {CreateWikiComponent} from "./features/create-wiki/create-wiki.component";
import {GestionProfilComponent} from "./features/gestion-profil/gestion-profil.component";


const routes: Routes = [
  { path: '',  redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil',  component: AccueilComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'wiki/:id', redirectTo: 'wiki/:id/description' },
  { path: 'wiki/:id/:wikiCateg', component: WikiComponent },
  { path: 'fiche/:id', component: FicheComponent },
  { path: 'creer/fiche/:wikiId', component: CreateFicheComponent },
  { path: 'update/fiche/:ficheId', component: UpdateFicheComponent },
  { path: 'creer/wiki', component: CreateWikiComponent },
  { path: 'profil', component: GestionProfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
