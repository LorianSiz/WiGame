import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { WikiComponent } from './wiki/wiki.component';
import { FicheComponent } from './fiche/fiche.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    WikiComponent,
    FicheComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
