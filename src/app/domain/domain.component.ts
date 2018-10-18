import { Component, OnInit, Input, Output } from '@angular/core';
import { Domaine } from '../models/domaine';
import { ArticleService } from '../services/article.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {
  @Input() public idDomaine: number;
  //@Output() onChoose = new EventEmitter();
  public domaines: Domaine[];
  public error: String;

  constructor( public articleService: ArticleService ) { }

  ngOnInit() {
    this.getDomains();
  }

  getDomains() {
    this.articleService.getDomaines().subscribe(
      (domaines) => { this.domaines = domaines; },
      (error) => { this.error = error.message; }
    );
  }

  /*onChange( value: string) {
    this.idDomain = +value;
    this.onChoose.emit(this.idDomain);
  }*/
}
