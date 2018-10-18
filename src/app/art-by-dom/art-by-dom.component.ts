import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../models/article';
import {ArticleService} from '../services/article.service';

@Component({
  selector: 'app-art-by-dom',
  templateUrl: './art-by-dom.component.html',
  styleUrls: ['./art-by-dom.component.css']
})
export class ArtByDomComponent implements OnInit {

  public title: String;
  public domaine_id: number;
  public articles: any;
  @Input() public error: String;
  constructor(public router: Router, public articleService: ArticleService) { }

  ngOnInit() {
    this.title = 'Rechercher un article par Domaine';
  }

  getArticlesByDomaine(id_domaine: number): void {
    this.title = 'Liste des articles d\'un Domaine';
    this.articleService.getArticleByDomaine(this.domaine_id).subscribe(
      (articles) => { this.articles = articles; },
      (error) => { this.error = error.message; }
    );
  }

  domaineSelected(domaine_id: number): void {
    this.domaine_id = domaine_id;
    this.getArticlesByDomaine(this.domaine_id);
  }

}
