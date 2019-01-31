import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../services/article.service';
import {FileUploader} from 'ng2-file-upload';
import {Article} from '../models/article';
import {Domaine} from '../models/domaine';
import {SharedService} from '../services/shared.service';
import {Router} from '@angular/router';

const URL = 'http://localhost:3000/api';

@Component({
  selector: 'app-ajout-oeuvre',
  templateUrl: './ajout-oeuvre.component.html',
  styleUrls: ['./ajout-oeuvre.component.css']
})
export class AjoutOeuvreComponent implements OnInit {

  public oeuvre: Article;
  public domaine: Domaine;
  public domaines: any;

  public uploader: FileUploader = new FileUploader({url: URL});

  public title = 'Ajouter une oeuvre';
  public error: string;

  constructor(
    private articleService: ArticleService,
    private sharedService: SharedService,
    private router: Router
  ) { }

  ngOnInit() {
    this.oeuvre = new Article();
    this.articleService.getDomaines().subscribe(
      (domaines) => { this.domaines = domaines; },
      (error) => { this.error = error.message; }
    );
  }

  public addOeuvre() {
    this.domaines.forEach(
      (domaine) => {
        if (domaine.idDomaine == this.domaine) {
          this.oeuvre.domaine = domaine;
        }
      });
    this.oeuvre.fichier = this.uploader.queue[0]._file.name;
    this.uploader.queue.forEach((file) => {
      file.upload();
      this.articleService.addArticle(this.oeuvre).subscribe(
        (article) => {
          this.articleService.addRedige(article.idArticle, this.sharedService.getAuteur().idAuteur).subscribe(
            () => { this.router.navigate(['/home']); },
            (error) => {  this.error = error.message; }
          );
        }, (error) => {
          this.error = error.message;
        }
      );
    });
  }

}
