import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private netArticlesUrl = 'http://localhost:8081/NetArticlesRest/webresources/webservice/';

  constructor(private httpClient: HttpClient) { }

  public getArticle(id: number): Observable<any> {
    const url: string = this.netArticlesUrl + 'article/' + id;
    return this.httpClient.get(url);
  }

  public getDomaines() {
    const url: string = this.netArticlesUrl + 'domaines';
    return this.httpClient.get(url);
  }

  public getLastArticle(): Observable<any> {
    const url: string = this.netArticlesUrl + 'article/last/';
    return this.httpClient.get(url);
  }

  public getArticles() {
    const url: string = this.netArticlesUrl + 'articles';
    return this.httpClient.get(url);
  }

  public getArticleByDomaine(id_domaine: number) {
    const url: string = this.netArticlesUrl + 'article/domaine/' + id_domaine;
    return this.httpClient.get(url);
  }
}
