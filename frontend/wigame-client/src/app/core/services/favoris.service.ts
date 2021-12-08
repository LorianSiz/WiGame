import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Favoris} from "../models/favoris.interface";

@Injectable({
  providedIn: 'root',
})
export class FavorisService {
  private baseUrl = 'api/favoris';

  constructor(private httpClient: HttpClient) {}

  findByUserId(id: string): Observable<Favoris[]> {
    return this.httpClient.get<Favoris[]>(`${this.baseUrl}/trouveruser/${id}`);
  }

  findByIdFichAndIdUser(id_fiche : string, id_util : string): Observable<Favoris[]> {
    return this.httpClient.get<Favoris[]>(`${this.baseUrl}/trouveruserfiche/${id_fiche}/${id_util}`);
  }

  getFavorisById(id: string): Observable<Favoris> {
    return this.httpClient.get(`${this.baseUrl}/recuperer/${id}`);
  }

  createFavoris(favoris: Favoris): Observable<Favoris> {
    return this.httpClient.post(`${this.baseUrl}`, favoris);
  }

  deleteFavoris(id: number): Observable<object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  updateFavoris(favoris: Favoris): Observable<Favoris> {
    return this.httpClient.put(`${this.baseUrl}`, favoris);
  }
}
