import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.css']
})
export class ArtListComponent implements OnInit {

  public error: String;
  @Input() public articles: Article[];
  constructor(public router: Router, public articleService: ArticleService) { }

  ngOnInit() {
  }
}
