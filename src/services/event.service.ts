import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Evenement } from '../models/event.model';
@Injectable({
    providedIn: 'root'
})
export class EventService {
    private path = `${environment.gatewayEndpoint}/event-service/api/events`;


    constructor(
        private httpClient: HttpClient,
    ) {
    }
    getAllEvents(): Promise<Evenement[]> {
        return this.httpClient.get<Evenement[]>(`${this.path}`).toPromise();
    }

    saveEvent(event: any): Promise<Evenement> {
        if (!!event.id) {
            return this.updateEvent(event.id, event);
        } else {
            return this.createEvent(event);
        }
    }
    createEvent(event: any): Promise<Evenement> {
        return this.httpClient.post<Evenement>(`${this.path}`,event).toPromise();
    }

    updateEvent(id: string,event: any): Promise<Evenement> {
        return this.httpClient.put<Evenement>(`${this.path}`,event).toPromise();
    }
    removeEventById(id: string): Promise<Evenement> {
        return this.httpClient.delete<Evenement>(`${this.path}/${id}`).toPromise();

    }
    getEventById(id: number): Promise<Evenement> {
        return this.httpClient.get<Evenement>(`${this.path}/${id}`).toPromise();
    }
    getEventsPaginator(itemPage: number): Promise<Evenement[]> {

        const options = new HttpParams()
          .set('page', String(itemPage))
        return this.httpClient.get<Evenement[]>(`${this.path}/all`, { params: options }).toPromise();
      }
      getEventCount(): Promise<Number> {
        return this.httpClient.get<Number>(`${this.path}/count`).toPromise();
      }
}
