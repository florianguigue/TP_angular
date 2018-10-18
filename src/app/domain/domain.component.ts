import { Component, OnInit, Input, Output } from '@angular/core';
import { Domain } from '../models/domain';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {
  @Input() public idDomain: number;
  @Output() onChoose = new EventEmitter();
  public domaines: Domain[];
  public error: String;

  constructor( public articleService: ArticleService ) { }

  ngOnInit() {
    this.getDomains();
  }

  getDomains() {
    this.articleService.getDomains().subscribe(
      (domaines) => { this.domaines = domaines; },
      (error) => { this.error = error.message; }
    );
  }

  onChange( value: string) {
    this.idDomain = +value;
    this.onChoose.emit(this.idDomain);
  }
}
