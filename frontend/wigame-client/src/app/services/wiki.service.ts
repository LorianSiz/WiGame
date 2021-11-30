import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Wiki} from "../models/wiki.interface";

@Injectable({
  providedIn: 'root',
})
export class WikiService {
  private baseUrl = 'api/wiki';

  constructor(private httpClient: HttpClient) {}


  getWikiById(id: string): Observable<Wiki> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  /*
  getAllOrganizations(): Observable<Organization[]> {
    return this.httpClient.get<Organization[]>(`${this.baseUrl}`);
  }

  createOrganization(organization: Organization): Observable<Organization> {
    return this.httpClient.post(`${this.baseUrl}`, organization);
  }

  updateOrganization(organization: Organization): Observable<Organization> {
    return this.httpClient.put(`${this.baseUrl}`, organization);
  }
  */
}
