import { NgModule } from '@angular/core';
import {AccueilComponent} from "./accueil/accueil.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import {WikiComponent} from "./wiki/wiki.component";
import {FicheComponent} from "./fiche/fiche.component";
import {RouterModule, Routes} from "@angular/router";
import {InscriptionComponent} from "./inscription/inscription.component";


const routes: Routes = [
  { path: '',  redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil',  component: AccueilComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'wiki/:id', component: WikiComponent },
  { path: 'fiche/:id', component: FicheComponent },
  { path: 'wiki', component: WikiComponent },
  { path: 'fiche', component: FicheComponent },
  { path: 'ficheCreation', component: CreateFicheComponent },
  { path: 'ficheUpdate', component: UpdateFicheComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
