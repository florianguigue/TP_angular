import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private netArticlesUrl = 'http://localhost:8081/NetArticlesRest/webresources/webservice/';

  constructor(private httpClient: HttpClient) { }

  public getUser(login: string): Observable<any> {
    const url: string = this.netArticlesUrl + 'connecter/' + login;
    return this.httpClient.get(url);
  }
}
