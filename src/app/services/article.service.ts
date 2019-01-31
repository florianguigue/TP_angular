import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Article} from '../models/article';
import {Achete} from '../models/achete';
import {SharedService} from './shared.service';
import {AchetePK} from '../models/achete-pk';
import {RedigePK} from '../models/redige-pk';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private netArticlesUrl = 'http://localhost:8080/NetArticlesRest/webresources/webservice/';

  constructor(
    private httpClient: HttpClient,
    private sharedService: SharedService
    ) { }

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

  public getAcheteByClient(idClient: number): Observable<any> {
    const url: string = this.netArticlesUrl + 'achat/client/' + idClient;
    return this.httpClient.get(url);
  }

  public acheter(article: Article): Observable<any> {
    const url: string = this.netArticlesUrl + 'acheter';
    const achat = new AchetePK();
    achat.idArticle = article.idArticle;
    achat.idClient = this.sharedService.getClient().idClient;
    return this.httpClient.post(url, achat);
  }

  public getSoldArticlesByAuteur(idAuteur: number): Observable<any> {
    const url: string = this.netArticlesUrl + 'achat/auteur/' + idAuteur;
    return this.httpClient.get(url);
  }

  public getRedigeByAuteur(idAuteur: number): Observable<any> {
    const url: string = this.netArticlesUrl + 'redige/' + idAuteur;
    return this.httpClient.get(url);
  }

  public addArticle(article: Article): Observable<any> {
    const url: string = this.netArticlesUrl + 'auteur/addArticle';
    return this.httpClient.post(url, article);
  }

  public addRedige(idArticle: number, idAuteur: number): Observable<any> {
    const url: string = this.netArticlesUrl + 'auteur/addRedige';
    const redige = new RedigePK();
    redige.idArticle = idArticle;
    redige.idAuteur = idAuteur;
    return this.httpClient.post(url, redige);
  }
}
