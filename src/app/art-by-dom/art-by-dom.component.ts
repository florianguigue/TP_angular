import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../models/article';

@Component({
  selector: 'app-art-by-dom',
  templateUrl: './art-by-dom.component.html',
  styleUrls: ['./art-by-dom.component.css']
})
export class ArtByDomComponent implements OnInit {

  public title: String;
  public domaine_id: number;
  public articles: Article[];
  @Input() public error: String;
  @Output() onChoose = new EventEmitter();
  constructor(public router: Router) { }

  ngOnInit() {
    this.title = 'Rechercher un article par Domaine';
  }

  domaineSelected(domaine_id: number): void {
    this.domaine_id = domaine_id;
    this.router.navigate(['/search/' + domaine_id]);
  }

  onChange( value: string) {
    this.domaine_id = +value;
    this.onChoose.emit(this.domaine_id);
  }

}
