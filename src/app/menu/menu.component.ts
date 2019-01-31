import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import {Auteur} from '../models/auteur';
import {Client} from '../models/client';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(public sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.isConnected = false;
  }

  logout() {
    this.sharedService.isConnected = false;
    this.sharedService.setTypeCompte(undefined);
    this.sharedService.setAuteur(new Auteur());
    this.sharedService.setClient(new Client());
    this.sharedService.setArticleAcheter([]);
  }

}
