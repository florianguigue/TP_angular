import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../services/article.service';
import {Article} from '../models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public article: Article;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }

}
