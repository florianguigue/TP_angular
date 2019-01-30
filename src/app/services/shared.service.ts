import { Injectable } from '@angular/core';
import {Article} from '../models/article';
import {Client} from '../models/client';
import {Auteur} from '../models/auteur';
import {element} from 'protractor';

/**
 * SharedService permet de partager des données entre tous les composants, tels que l'URL précédente, la connexion du client ou le panier.
 */
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public isConnected: boolean;
  private panier: Array<Article> = [];
  private originalUrl: string;
  /**
   * 1 - Client
   * 2 - Auteur
   */
  private typeCompte: number;
  private _client: Client = new Client();
  private _auteur: Auteur = new Auteur();
  private _articleAcheter: Array<Article> = [];

  constructor() {

  }

  public addToBasket(article: Article): boolean {
    const found = this.panier.findIndex(element => element.idArticle === article.idArticle);
    if (found === -1) {
      this.panier.push(article);
      return true;
    } else {
      return false;
    }
  }

  public getPanier(): Array<Article> {
    return this.panier;
  }

  public setClient(client: Client): void {
    this._client = client;
  }

  public setAuteur(auteur: Auteur): void {
    this._auteur = auteur;
  }

  public getClient(): Client {
    return this._client;
  }

  public getAuteur(): Auteur {
    return this._auteur;
  }

  public setOriginalUrl(url: string): void {
    this.originalUrl = url;
  }

  public getOriginalUrl() {
    const url: string = this.originalUrl;
    if (url === '') {
      this.originalUrl = '/home';
    }
    this.originalUrl = '';
    return url;
  }

  public setTypeCompte(type: number): void {
    this.typeCompte = type;
  }

  public getTypeCompte() {
    return this.typeCompte;
  }

  public getArticleAcheter(): Array<Article> {
    return this._articleAcheter;
  }

  public setArticleAcheter(array: Array<Article>): void {
    this._articleAcheter = array;
  }

  public addArticleAcheter(value: Article) {
    if (!this._articleAcheter.includes(value)) {
      this._articleAcheter.push(value);
    }
  }
}
