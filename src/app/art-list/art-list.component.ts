import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article';
import { Router } from '@angular/router';
import {SharedService} from '../services/shared.service';
import {ArticleService} from '../services/article.service';

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.css']
})
export class ArtListComponent implements OnInit {

  public error: String;
  @Input() public articles: Article[];

  constructor(
    public router: Router,
    public sharedService: SharedService,
    public articleService: ArticleService
  ) { }

  ngOnInit() {
  }

  addToBasket(article: Article): void {
    let found = false;
    const listAchats = this.sharedService.getArticleAcheter();
    for (let i = 0; i < listAchats.length; i++) {
      if (listAchats[i].idArticle === article.idArticle) {
        found = true;
      }
    }


    if (found) {
      this.error = 'Vous avez déjà acheté cet article, vous ne pouvez donc pas l\'ajouter au panier';
    } else {
      if (this.sharedService.addToBasket(article)) {
        this.router.navigate(['/panier']);
      } else {
        this.error = 'Article déjà présent dans le panier';
      }
    }

  }
}
