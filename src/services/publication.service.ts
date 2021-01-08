import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Publication } from '../models/publication.model';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  private path = `${environment.gatewayEndpoint}/publication-service/api/publications`;

  constructor(private httpClient: HttpClient,
  ) { }
  getAllPublication(): Promise<Publication[]> {
    return this.httpClient.get<Publication[]>(`${this.path}`).toPromise();
  }
  getPublicationsPaginator(itemPage: number): Promise<Publication[]> {

    const options = new HttpParams()
      .set('page', String(itemPage))
    return this.httpClient.get<Publication[]>(`${this.path}/all`, { params: options }).toPromise();
  }
  getPublicationById(id: number): Promise<Publication> {
    return this.httpClient.get<Publication>(`${this.path}/${id}`).toPromise();
  }
  savePublication(publication: any): Promise<Publication> {
    if (!!publication.id) {
      return this.updatePublication(publication.id, publication);
    } else {
      return this.createPublication(publication);
    }
  }
  createPublication(publication: any): Promise<Publication> {
    return this.httpClient.post<Publication>(`${this.path}`, publication).toPromise();
  }

  updatePublication(id: string, publication: any): Promise<Publication> {
    return this.httpClient.put<Publication>(`${this.path}`, publication).toPromise();
  }
  removePublicationById(id: string): Promise<Publication> {
    return this.httpClient.delete<Publication>(`${this.path}/${id}`).toPromise();

  }
  getAllPublications(): Promise<Publication[]> {
    return this.httpClient.get<Publication[]>(`${this.path}`).toPromise();
  }
  getPublicationCount(): Promise<Number> {
    return this.httpClient.get<Number>(`${this.path}/count`).toPromise();
  }
}
