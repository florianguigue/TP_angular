import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../models/article';
import {ArticleService} from '../services/article.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../services/shared.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  public article: Article;

  public idArticle: number;

  public error: string;

  constructor(public articleService: ArticleService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.idArticle = +this.activatedRoute.snapshot.paramMap.get('idArticle');
    if (this.idArticle !== 0) {
      this.articleService.getArticle(this.idArticle).subscribe(
        (article) => {
          this.article = article;
        }, (error) => {
          this.error = error.message;
        }
      );
    }
  }

  isHomePage(): boolean {
    return this.router.url === '/home' || this.router.url === '';
  }

  addToBasket(article: Article): void {
    if (this.sharedService.addToBasket(article)) {
      this.router.navigate(['/panier']);
    } else {
      this.error = 'Article déjà présent dans le panier';
    }
  }

  cancel() {
    this.router.navigate([this.sharedService.getOriginalUrl()]);
  }

}
