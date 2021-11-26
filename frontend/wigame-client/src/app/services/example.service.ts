
/*@Injectable({
  providedIn: 'root',
})
export class OrganizationService {
  private baseUrl = 'api/organizations';

  constructor(private httpClient: HttpClient) {}

  getAllOrganizations(): Observable<Organization[]> {
    return this.httpClient.get<Organization[]>(`${this.baseUrl}`);
  }

  getOrganizationById(id: string): Observable<Organization> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  createOrganization(organization: Organization): Observable<Organization> {
    return this.httpClient.post(`${this.baseUrl}`, organization);
  }

  updateOrganization(organization: Organization): Observable<Organization> {
    return this.httpClient.put(`${this.baseUrl}`, organization);
  }
}*/
