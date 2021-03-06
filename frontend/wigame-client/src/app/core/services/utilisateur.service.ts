import { Injectable } from '@angular/core';
import {HttpBackend, HttpClient, HttpHeaders,  HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur.interface';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private baseUrl = 'api/utilisateur';
  private tokenUrl = 'api/oauth/token';
  private http;

  constructor(private handler: HttpBackend) {
    this.http = new HttpClient(handler);
  }

  getUtilisateurById(id: string): Observable<Utilisateur> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.put(`${this.baseUrl}/modifier`, utilisateur);
  }

  connexion(pseudo: string, mdp: string): Observable<Utilisateur> {
    return this.http.post(`${this.baseUrl}/connexion`, { pseudo, mdp });
  }

  tokenSecurity(pseudo: string, mdp: string): Observable<any> {
    const headers = {
      Authorization: 'Basic ' + btoa('client:123'),
      'Content-type': 'application/x-www-form-urlencoded',
    };

    const body = new HttpParams().set('username', pseudo).set('password', mdp).set('grant_type', 'password');

    return this.http.post(this.tokenUrl, body, { headers });
  }

  creerUtilisateur(utilisateur: Utilisateur): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/creer`, utilisateur);
  }

  isExistsByPseudo(pseudo: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}/verifier/${pseudo}`);
  }

  findByPseudo(pseudo: string): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.baseUrl}/recuperer/${pseudo}`);
  }

}
