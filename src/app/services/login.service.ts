import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Client} from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private netArticlesUrl = 'http://localhost:8080/NetArticlesRest/webresources/webservice/';

  constructor(private httpClient: HttpClient) { }

  public connectCustomer(login: string): Observable<any> {
    const url: string = this.netArticlesUrl + 'connecter/' + login;
    return this.httpClient.get(url);
  }

  public connectAuteur(login: string): Observable<any> {
    const url: string = this.netArticlesUrl + 'auteur/connecter/' + login;
    return this.httpClient.get(url);
  }

  public addCustomer(client: Client): Observable<any> {
    const url: string = this.netArticlesUrl + 'client';
    return this.httpClient.post(url, client);
  }

  public editCustomer(client: Client): Observable<any> {
    const url: string = this.netArticlesUrl + 'client';
    return this.httpClient.put(url, client);
  }
}
