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
    return this.httpClient.get(`${this.baseUrl}/recuperer/${id}`);
  }

  createWiki(wiki: Wiki): Observable<Wiki> {
    return this.httpClient.post(`${this.baseUrl}`, wiki);
  }

  updateWiki(wiki: Wiki): Observable<Wiki> {
    return this.httpClient.put(`${this.baseUrl}`, wiki);
  }

  findAllWiki(): Observable<Wiki[]> {
    return this.httpClient.get<Wiki[]>(`${this.baseUrl}/recuperer/tout`);
  }

}
