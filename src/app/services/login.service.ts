import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private netArticlesUrl = 'http://localhost/EmployeesSrv/';

  constructor(private httpClient: HttpClient) { }

  public getUser(login: string): Observable<any> {
    const url: string = this.netArticlesUrl + 'getUser';
    return this.httpClient.post(url, JSON.stringify(login));
  }
}