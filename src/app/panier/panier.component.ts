import { Component, OnInit } from '@angular/core';
import {SharedService} from '../services/shared.service';
import {Article} from '../models/article';
import {ArticleService} from '../services/article.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  public montantTotal = 0;
  public titre: string;
  public error: string;

  constructor(
    public sharedService: SharedService,
    private articleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.titre = 'Votre panier';
    if (this.sharedService.getPanier() !== undefined) {
      this.sharedService.getPanier().forEach(
        (article) => {
          this.montantTotal += article.prix;
        }
      );
    }
  }

  acheter(): void {
    if (this.sharedService.isConnected) {
      this.sharedService.getPanier().forEach(
        (article) => {
          this.articleService.acheter(article).subscribe(
            (achat) => {
              this.deleteArticle(article);
              if (this.sharedService.getPanier().length === 0) {
                this.router.navigate(['/myArticles']);
              }
            },
            () => {
              this.error = 'Erreur lors de la validation de votre panier.';
            }
          );
        }
      );
    } else {
      this.error = 'Il faut se connecter pour valider le panier';
      this.sharedService.setOriginalUrl('/panier');
      this.router.navigate(['/login']);
    }
  }

  deleteArticle(article: Article): void {
    this.sharedService.getPanier().splice(this.sharedService.getPanier().indexOf(article), 1);
    this.montantTotal -= article.prix;
    this.error = '';
  }

}
