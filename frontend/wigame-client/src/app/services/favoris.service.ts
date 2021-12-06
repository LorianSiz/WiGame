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
    console.log(this.httpClient.get<Favoris[]>(`${this.baseUrl}/trouver/${id}`))
    return this.httpClient.get<Favoris[]>(`${this.baseUrl}/trouver/${id}`);
  }

  getFavorisById(id: string): Observable<Favoris> {
    return this.httpClient.get(`${this.baseUrl}/recuperer/${id}`);
  }

  createFavoris(favoris: Favoris): Observable<Favoris> {
    console.log(this.baseUrl);
    return this.httpClient.post(`${this.baseUrl}`, favoris);
  }

  deleteFavoris(favoris: Favoris): void {
    this.httpClient.delete(`${this.baseUrl}/${favoris}`); // a tester
  }

  updateFavoris(favoris: Favoris): Observable<Favoris> {
    return this.httpClient.put(`${this.baseUrl}`, favoris);
  }
}
