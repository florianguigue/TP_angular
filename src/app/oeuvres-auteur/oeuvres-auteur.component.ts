import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../services/article.service';
import {SharedService} from '../services/shared.service';
import {Article} from '../models/article';

@Component({
  selector: 'app-oeuvres-auteur',
  templateUrl: './oeuvres-auteur.component.html',
  styleUrls: ['./oeuvres-auteur.component.css']
})
export class OeuvresAuteurComponent implements OnInit {

  public oeuvres: Array<Article> = [];

  public title = 'Mes oeuvres';
  public error: string;

  constructor(
    private articleService: ArticleService,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.sharedService.setOriginalUrl('/myBooks');
    this.articleService.getRedigeByAuteur(this.sharedService.getAuteur().idAuteur).subscribe(
      (articles) => {
        this.oeuvres = articles;
      },
      (error) => {
        this.error = error;
      }
    );
  }

}
