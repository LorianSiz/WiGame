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
  /*
    getAllOrganizations(): Observable<Organization[]> {
      return this.httpClient.get<Organization[]>(`${this.baseUrl}`);
    }
  */

  findByUserName(userName: string): Observable<Favoris[]> {
    return this.httpClient.get<Favoris[]>(`${this.baseUrl}/trouver/${userName}`);
  }

  getFavorisById(id: string): Observable<Favoris> {
    return this.httpClient.get(`${this.baseUrl}/recuperer/${id}`);
  }

  createFavoris(favoris: Favoris): Observable<Favoris> {
    return this.httpClient.post(`${this.baseUrl}`, favoris);
  }

  deleteFavoris(favoris: Favoris): void {
    this.httpClient.delete(`${this.baseUrl}/${favoris}`); // a tester
  }

  updateFavoris(favoris: Favoris): Observable<Favoris> {
    return this.httpClient.put(`${this.baseUrl}`, favoris);
  }
}
