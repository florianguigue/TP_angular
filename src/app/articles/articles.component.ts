import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  public title: String;
  public articles: any;
  public error: String;
  public domaine_id: number;
  constructor(public articleService: ArticleService, public router: Router, public activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.domaine_id = +this.activatedRoute.snapshot.paramMap.get('domaine_id');
    if ( this.domaine_id > 0) {
      this.getArticlesByDomaine(this.domaine_id);
    } else {
      this.getArticles();
    }
  }

  getArticlesByDomaine(id_domaine: number): void {
    this.title = 'Liste des employés d\'un Domaine';
    this.articleService.getArticleByDomaine(this.domaine_id).subscribe(
      (articles) => { this.articles = articles; },
      (error) => { this.error = error.message; }
    );
  }

  getArticles():  void {
    this.title = 'Liste des articles';
    this.articleService.getArticles().subscribe(
      (articles) => {
        this.articles = articles;
      },
      (error) => {
        this.error = error.message;
      }
    );
  }

}
