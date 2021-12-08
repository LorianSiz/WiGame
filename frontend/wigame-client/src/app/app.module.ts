import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WikiComponent } from './features/wiki/wiki.component';
import { FicheComponent } from './features/fiche/fiche.component';
import { AppRoutingModule } from './app-routing.module';
import { ConnexionComponent } from './features/connexion/connexion.component';
import { AuthService } from './core/guards/auth.service';
import { AccessGuard } from './core/guards/access-guard.service';
import { TokenInterceptor } from './core/interceptor/token.interceptor';
import { AccueilComponent } from './features/accueil/accueil.component';
import { CreateFicheComponent } from './features/create-fiche/create-fiche.component';
import { UpdateFicheComponent } from './features/update-fiche/update-fiche.component';
import {InscriptionComponent} from "./features/inscription/inscription.component";
import { CreateWikiComponent } from './features/create-wiki/create-wiki.component';
import { GestionProfilComponent } from './features/gestion-profil/gestion-profil.component';

@NgModule({
  declarations: [
    AppComponent,
    WikiComponent,
    FicheComponent,
    ConnexionComponent,
    AccueilComponent,
    InscriptionComponent,
    CreateFicheComponent,
    UpdateFicheComponent,
    CreateWikiComponent,
    GestionProfilComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    FormBuilder,
    AuthService,
    AccessGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
