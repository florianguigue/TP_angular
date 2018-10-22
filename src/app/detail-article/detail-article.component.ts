import { Component, OnInit } from '@angular/core';
import {SharedService} from '../services/shared.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {

  constructor(private sharedService: SharedService,
              private router: Router) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate([this.sharedService.getOriginalUrl()]);
  }
}
