import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WikiComponent } from './wiki/wiki.component';
import { FicheComponent } from './fiche/fiche.component';
import { AppRoutingModule } from './app-routing.module';
import { ConnexionComponent } from './connexion/connexion.component';
import { AuthService } from './core/guards/auth.service';
import { AccessGuard } from './core/guards/access-guard.service';
import { TokenInterceptor } from './core/interceptor/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    WikiComponent,
    FicheComponent,
    ConnexionComponent
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
