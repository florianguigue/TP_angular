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
    this.articleService.getArticle(this.idArticle).subscribe(
      (article) => {
        this.article = article;
      }, (error) => {
        this.error = error.message;
      }
    );
  }

}
