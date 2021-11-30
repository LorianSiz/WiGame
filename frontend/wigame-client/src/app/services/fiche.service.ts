import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {fiche} from "../models/fiche.interface";

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
  getFicheById(id: string): Observable<fiche> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  createOrganization(organization: fiche): Observable<fiche> {
    return this.httpClient.post(`${this.baseUrl}`, organization);
  }
/*
  updateOrganization(organization: Organization): Observable<Organization> {
    return this.httpClient.put(`${this.baseUrl}`, organization);
  }
  */
}
