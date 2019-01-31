import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {
  @Input() public idDomaine: number;
  @Output() onChoose = new EventEmitter();
  public domaines: any;
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

  onChange( value: string) {
    this.idDomaine = +value;
    this.onChoose.emit(this.idDomaine);
  }
}
