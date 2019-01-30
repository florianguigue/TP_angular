import { Component, OnInit } from '@angular/core';
import {SharedService} from '../services/shared.service';
import {Router} from '@angular/router';
import {Article} from '../models/article';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {

  public title: string;
  public error: string;

  constructor(private sharedService: SharedService,
              private router: Router) { }

  ngOnInit() {
    this.title = 'Détail d\'un article';
  }
}
