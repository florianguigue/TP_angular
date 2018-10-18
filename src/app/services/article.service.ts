import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private netArticlesUrl = 'http://134.214.118.45:8080/NetArticlesRest/webresources/webservice/';

  constructor(private httpClient: HttpClient) { }

  public getArticle(id: number): Observable<any> {
    const url: string = this.netArticlesUrl + 'article/' + id;
    return this.httpClient.get(url);
  }
}
