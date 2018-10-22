import { Injectable } from '@angular/core';

/**
 * SharedService permet de partager des données entre tous les composants, tels que l'URL précédente, la connexion du client ou le panier.
 */
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public isConnected: boolean;
  public panier: boolean;
  private originalUrl: string;
  constructor() { }

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
}
