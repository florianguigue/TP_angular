import { Component, OnInit } from '@angular/core';
import {Achete} from '../models/achete';
import {ArticleService} from '../services/article.service';
import {SharedService} from '../services/shared.service';

@Component({
  selector: 'app-achats',
  templateUrl: './achats.component.html',
  styleUrls: ['./achats.component.css']
})
export class AchatsComponent implements OnInit {

  public titre: string;

  public achats: Array<Achete> = [];

  public error: string;

  constructor(
    private articleService: ArticleService,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.titre = 'Liste de vos achats';
    this.articleService.getAcheteByClient(this.sharedService.getClient().idClient).subscribe(
      (achats) => {
        this.achats = achats;
      }, (error) => {
        this.error = error;
      }
    );
  }

}
