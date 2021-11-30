import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Fiche} from "../models/fiche.interface";

@Injectable({
  providedIn: 'root',
})
export class FicheService {
  private baseUrl = 'api/fiche';

  constructor(private httpClient: HttpClient) {}
/*
  getAllOrganizations(): Observable<Organization[]> {
    return this.httpClient.get<Organization[]>(`${this.baseUrl}`);
  }
*/
  getFicheById(id: string): Observable<Fiche> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  createOrganization(fiche: Fiche): Observable<Fiche> {
    return this.httpClient.post(`${this.baseUrl}`, fiche);
  }
/*
  updateOrganization(organization: Organization): Observable<Organization> {
    return this.httpClient.put(`${this.baseUrl}`, organization);
  }
  */
}
