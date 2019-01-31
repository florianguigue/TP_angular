import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleService} from '../services/article.service';
import {SharedService} from '../services/shared.service';

@Component({
  selector: 'app-art-by-dom',
  templateUrl: './art-by-dom.component.html',
  styleUrls: ['./art-by-dom.component.css']
})
export class ArtByDomComponent implements OnInit {

  public title: String;
  public domaine_id: number;
  public articles: any;
  @Input() public error: String;
  constructor(private router: Router,
              private articleService: ArticleService,
              private sharedService: SharedService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.title = 'Rechercher un article par Domaine';
    const domaine_id = +this.activatedRoute.snapshot.paramMap.get('idDomaine');
    if (domaine_id !== 0) {
      this.domaine_id = domaine_id;
      this.sharedService.setOriginalUrl('/search/' + this.domaine_id);
      this.getArticlesByDomaine(this.domaine_id);
    }
  }

  getArticlesByDomaine(id_domaine: number): void {
    this.title = 'Liste des articles d\'un Domaine';
    this.articleService.getArticleByDomaine(id_domaine).subscribe(
      (articles) => { this.articles = articles; },
      (error) => { this.error = error.message; }
    );
  }

  domaineSelected(domaine_id: number): void {
    this.getArticlesByDomaine(domaine_id);
    this.router.navigate(['/search/' + domaine_id]);
  }

}
