import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../services/article.service';
import {SharedService} from '../services/shared.service';
import {Achete} from '../models/achete';

@Component({
  selector: 'app-ventes',
  templateUrl: './ventes.component.html',
  styleUrls: ['./ventes.component.css']
})
export class VentesComponent implements OnInit {

  public sells: Array<Achete> = [];
  public montantTotal = 0;

  public title = 'Mes oeuvres vendus';
  public error: string;

  constructor(
    private articleService: ArticleService,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.articleService.getSoldArticlesByAuteur(this.sharedService.getAuteur().idAuteur).subscribe(
      (acheteList) => {
        this.sells = acheteList;
        this.calculateSum();
      },
      (error) => {
        this.error = error;
      }
    );
  }

  public calculateSum() {
    for (let i = 0; i < this.sells.length; i++) {
      this.montantTotal += this.sells[i].article.prix;
    }
  }

}
